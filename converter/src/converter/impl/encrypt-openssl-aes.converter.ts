import * as vscode from "vscode";

import { KeySize, OpensslAesCrypto } from "../../service/openssl-aes.crypto";
import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class EncryptOpensslAesConverter implements Converter {
  private readonly _keySizes = [16, 24, 32];

  shouldHandle(command: string) {
    return command === COMMAND.EncryptOpensslAes;
  }
  async convert(text: string): Promise<string> {
    const { keySize, password } = await this.getKeySizeAndPassword();

    const crypto = new OpensslAesCrypto(password, {
      keySize: (Number(keySize) * 8) as KeySize,
    });

    return crypto.encrypt(text);
  }

  private async getKeySizeAndPassword() {
    const keySize = await vscode.window.showInputBox({
      placeHolder: "Enter Key (16 / 24 / 32 bytes)",
      prompt: "Enter Key (16 / 24 / 32 bytes)",
    });
    if (!keySize) {
      throw new Error("Encrypt Key is required");
    }
    if (!this._keySizes.includes(Number(keySize))) {
      throw new Error("Key length must be 16, 24 or 32 bytes");
    }
    const password = await vscode.window.showInputBox({
      placeHolder: "Enter Pasword",
      prompt: "Enter Password",
    });
    if (!password) {
      throw new Error("Password is required");
    }

    return { keySize, password };
  }
}
