import { Base64ToHexConvertor } from "../convertor/base64-to-hex.convertor";
import { CamelToSnakeConvertor } from "../convertor/camel-to-snake.convertor";
import { Convertor } from "../convertor/convertor";
import { DecodeBase64Convertor } from "../convertor/decode-base64.convertor";
import { DecodeHexConvertor } from "../convertor/decode-hex.convertor";
import { DecodeUriComponentConvertor } from "../convertor/decode-uri-component.convertor";
import { EncodeBase64Convertor } from "../convertor/encode-base64.convertor";
import { EncodeHexConvertor } from "../convertor/encode-hex.convertor";
import { EncodeUriComponentConvertor } from "../convertor/encode-uri-component.convertor";
import { HexToBase64Convertor } from "../convertor/hex-to-base64.convertor";
import { HttpToCurlConvertor } from "../convertor/http-to-curl.convertor";
import { JsonToParameterConvertor } from "../convertor/json-to-parameter.convertor";
import { MaskYyyyMMDdConvertor } from "../convertor/mask-yyyy-MM-dd.convertor";
import { ParameterToJsonConvertor } from "../convertor/parameter-to-json.convertor";
import { PrettyJsonConvertor } from "../convertor/pretty-json.convertor";
import { Sha256Convertor } from "../convertor/sha-256.convertor";
import { Sha512Convertor } from "../convertor/sha-512.convertor";
import { SnakeToCamelConvertor } from "../convertor/snake-to-camel.convertor";
import { ToLowerCaseConvertor } from "../convertor/to-lowercase-convertor";
import { ToUpperCaseConvertor } from "../convertor/to-uppercase-convertor";
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
  /** Hash */
  new Sha256Convertor(),
  new Sha512Convertor(),
  /** URI Component */
  new EncodeUriComponentConvertor(),
  new DecodeUriComponentConvertor(),
  /** HTTP */
  new HttpToCurlConvertor(),
  /** Convention */
  new CamelToSnakeConvertor(),
  new SnakeToCamelConvertor(),
  /** Util */
  new Base64ToHexConvertor(),
  new HexToBase64Convertor(),
  new ToUpperCaseConvertor(),
  new ToLowerCaseConvertor(),
  new MaskYyyyMMDdConvertor(),
  new PrettyJsonConvertor(),
  new JsonToParameterConvertor(),
  new ParameterToJsonConvertor(),
]);
