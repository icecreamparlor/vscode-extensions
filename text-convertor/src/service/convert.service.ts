import { Convertor } from "../convertor/convertor";
import { Base64ToHexConvertor } from "../convertor/impl/base64-to-hex.convertor";
import { CamelToSnakeConvertor } from "../convertor/impl/camel-to-snake.convertor";
import { DecodeBase64Convertor } from "../convertor/impl/decode-base64.convertor";
import { DecodeHexConvertor } from "../convertor/impl/decode-hex.convertor";
import { DecodeUriComponentConvertor } from "../convertor/impl/decode-uri-component.convertor";
import { EncodeBase64Convertor } from "../convertor/impl/encode-base64.convertor";
import { EncodeHexConvertor } from "../convertor/impl/encode-hex.convertor";
import { EncodeUriComponentConvertor } from "../convertor/impl/encode-uri-component.convertor";
import { HexToBase64Convertor } from "../convertor/impl/hex-to-base64.convertor";
import { HttpToCurlConvertor } from "../convertor/impl/http-to-curl.convertor";
import { JsonToParameterConvertor } from "../convertor/impl/json-to-parameter.convertor";
import { Json5ToJsonConvertor } from "../convertor/impl/json5-to-json.convertor";
import { MaskYyyyMMDdConvertor } from "../convertor/impl/mask-yyyy-MM-dd.convertor";
import { ParameterToJsonConvertor } from "../convertor/impl/parameter-to-json.convertor";
import { PrettyJsonConvertor } from "../convertor/impl/pretty-json.convertor";
import { PrettyXmlConvertor } from "../convertor/impl/pretty-xml.convertor";
import { Sha256Convertor } from "../convertor/impl/sha-256.convertor";
import { Sha512Convertor } from "../convertor/impl/sha-512.convertor";
import { SnakeToCamelConvertor } from "../convertor/impl/snake-to-camel.convertor";
import { ToLowerCaseConvertor } from "../convertor/impl/to-lowercase-convertor";
import { ToUpperCaseConvertor } from "../convertor/impl/to-uppercase-convertor";
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
  /** Format */
  new PrettyJsonConvertor(),
  new PrettyXmlConvertor(),
  /** Util */
  new Base64ToHexConvertor(),
  new HexToBase64Convertor(),
  new ToUpperCaseConvertor(),
  new ToLowerCaseConvertor(),
  new MaskYyyyMMDdConvertor(),
  new JsonToParameterConvertor(),
  new ParameterToJsonConvertor(),
  new Json5ToJsonConvertor(),
]);