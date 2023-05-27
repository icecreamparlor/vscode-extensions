import { Convertor } from "../convertor/convertor";
import { DecodeBase64Convertor } from "../convertor/decode-base64.convertor";
import { DecodeHexConvertor } from "../convertor/decode-hex.convertor";
import { EncodeBase64Convertor } from "../convertor/encode-base64.convertor";
import { EncodeHexConvertor } from "../convertor/encode-hex.convertor";
import { die } from "../util";

export class ConvertService {
  constructor(private readonly _convertors: Convertor[]) {}

  convert(convertType: string, text: string) {
    const convertor =
      this._convertors.find((it) => it.isSupport(convertType)) ??
      die(new Error("Convertor not found"));

    try {
      return convertor.convert(text);
    } catch (e) {
      convertor.onError(e as Error);

      throw e;
    }
  }
}

export const convertService = new ConvertService([
  /** Base64 */
  new EncodeBase64Convertor(),
  new DecodeBase64Convertor(),
  /** Hex */
  new EncodeHexConvertor(),
  new DecodeHexConvertor(),
]);
