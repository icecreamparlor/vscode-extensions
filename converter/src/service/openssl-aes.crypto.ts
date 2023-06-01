import * as forge from "node-forge";

export type KeySize = 128 | 192 | 256;
export type OpensslAesOption = {
  keySize: KeySize;
};

/**
 * Openssl 스펙으로 암/복호화를 수행
 *
 * @see https://github.com/digitalbazaar/forge#ciphers-1
 */
export class OpensslAesCrypto {
  private readonly keySize: number;
  // AES-CBC (AES256) 암호화
  private readonly algorithm = "AES-CBC";

  constructor(private readonly password: string, option: OpensslAesOption) {
    this.keySize = this.bitToByte(option.keySize);
    if (![16, 24, 32].includes(this.keySize)) {
      throw new Error(
        '"key size" must be one of the following: 16 (AES-128), 24 (AES-192), or 32 (AES-256)'
      );
    }
  }

  encrypt(raw: string): string {
    // 8바이트 길의의 salt 를 랜덤으로 생성해낸다
    const salt = forge.random.getBytesSync(this.saltSize);
    // key 를 암호화에 사용할 수 있는 형태로 key, iv 를 유도해낸다.
    const derivedBytes = (forge as any).pbe.opensslDeriveBytes(
      this.password,
      salt,
      this.keySize + this.ivSize
    );
    // buffer 타입으로 변경
    const buffer = forge.util.createBuffer(derivedBytes);
    // 첫 32 바이트는 key 가 된다
    const key = buffer.getBytes(this.keySize);
    // 이후의 16 바이트는 iv 가 된다
    const iv = buffer.getBytes(this.ivSize);

    // 암호화
    const cipher = forge.cipher.createCipher(this.algorithm, key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(raw));
    if (!cipher.finish()) {
      throw new Error("AES Encryption Failed");
    }

    const output = forge.util.createBuffer(
      `${this.saltPrefix}${salt}${cipher.output.data}`
    );

    return forge.util.encode64(output.data);
  }

  decrypt(base64: string): string {
    // "SALT_PREFIX" 의 base64 인코딩 값
    const saltPrefixSignature = "U2FsdGVkX1";
    if (!base64.startsWith(saltPrefixSignature)) {
      throw new Error(
        `The encrypted value is not in Salt format. (A Salt encrypted value should start with "${this.saltPrefix}")`
      );
    }
    const inputBuffer = forge.util.createBuffer(forge.util.decode64(base64));

    // 앞의 prefix ("Salted__") 부분은 제외한다
    inputBuffer.getBytes(this.saltPrefix.length);
    // "Salted__" 뒤의 8바이트가 실질적인 Salt 값이다
    const salt = inputBuffer.getBytes(this.saltSize);

    // salt 부분을 제외한, 암호화된 부분
    const input = forge.util
      .decode64(base64)
      .slice(this.saltPrefix.length + this.saltSize);
    // key 를 암호화에 사용할 수 있는 형태로 key, iv 를 유도해낸다.
    const derivedBytes = (forge.pki as any).pbe.opensslDeriveBytes(
      this.password,
      salt,
      this.keySize + this.ivSize
    );
    // buffer 타입으로 변경
    const buffer = forge.util.createBuffer(derivedBytes);
    // 첫 32 바이트는 key 가 된다
    const key = buffer.getBytes(this.keySize);
    // 뒤의 16바이트는 iv가 된다
    const iv = buffer.getBytes(this.ivSize);

    const decipher = forge.cipher.createDecipher(this.algorithm, key);
    decipher.start({ iv: iv });
    decipher.update(forge.util.createBuffer(input));
    if (!decipher.finish()) {
      throw new Error("AES Decrpytion Failed");
    }

    return decipher.output.data;
  }

  private bitToByte(bit: number): number {
    if (bit % 8 !== 0) {
      throw new Error("The bit count is not a multiple of 8");
    }
    return bit / 8;
  }

  get saltPrefix(): string {
    return "Salted__";
  }

  /** 8 바이트 고정값 */
  get saltSize(): number {
    return 8;
  }

  /** 16 바이트 고정값 */
  get ivSize(): number {
    return 16;
  }
}
