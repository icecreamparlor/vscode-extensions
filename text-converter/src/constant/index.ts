/* eslint-disable @typescript-eslint/naming-convention */
import { QuickPickItem } from "vscode";
import { Converter } from "../converter/converter";
import { Base64ToHexConverter } from "../converter/impl/base64-to-hex.converter";
import { CamelToSnakeConverter } from "../converter/impl/camel-to-snake.converter";
import { DecodeBase64Converter } from "../converter/impl/decode-base64.converter";
import { DecodeHexConverter } from "../converter/impl/decode-hex.converter";
import { DecodeUriComponentConverter } from "../converter/impl/decode-uri-component.converter";
import { EncodeBase64Converter } from "../converter/impl/encode-base64.converter";
import { EncodeHexConverter } from "../converter/impl/encode-hex.converter";
import { EncodeUriComponentConverter } from "../converter/impl/encode-uri-component.converter";
import { HexToBase64Converter } from "../converter/impl/hex-to-base64.converter";
import { HttpToCurlConverter } from "../converter/impl/http-to-curl.converter";
import { Json5ToParameterConverter } from "../converter/impl/json-to-parameter.converter";
import { Json5ToTypescriptInterfaceConverter } from "../converter/impl/json-to-typescript-interface.converter";
import { Json5ToJsonConverter } from "../converter/impl/json5-to-json.converter";
import { Json5ToXmlConverter } from "../converter/impl/json5-to-xml.converter";
import { MaskYyyyMMDdConverter } from "../converter/impl/mask-yyyy-MM-dd.converter";
import { ParameterToJsonConverter } from "../converter/impl/parameter-to-json.converter";
import { PrettyJsonConverter } from "../converter/impl/pretty-json.converter";
import { PrettyXmlConverter } from "../converter/impl/pretty-xml.converter";
import { Sha256Converter } from "../converter/impl/sha-256.converter";
import { Sha512Converter } from "../converter/impl/sha-512.converter";
import { SnakeToCamelConverter } from "../converter/impl/snake-to-camel.converter";
import { ToLowerCaseConverter } from "../converter/impl/to-lowercase-converter";
import { ToUpperCaseConverter } from "../converter/impl/to-uppercase-converter";
import { XmlToJsonConverter } from "../converter/impl/xml-to-json.converter";

export const EXTENSION_NAME = "text-converter";

export const COMMAND = {
  EncodeBase64: "encode-base64",
  DecodeBase64: "decode-base64",
  EncodeHex: "encode-hex",
  DecodeHex: "decode-hex",
  HexToBase64: "hex-to-base64",
  Base64ToHex: "base64-to-hex",
  ToUpperCase: "to-upper-case",
  ToLowerCase: "to-lower-case",
  MaskYyyyMMDd: "mask-yyyy-MM-dd",
  SHA256: "sha-256",
  SHA512: "sha-512",
  PrettyJson: "pretty-json",
  PrettyXml: "pretty-xml",
  Json5ToParameter: "json5-to-parameter",
  ParameterToJson: "parameter-to-json",
  EncodeUriComponent: "encode-uri-component",
  DecodeUriComponent: "decode-uri-component",
  HTTPToCurl: "http-to-curl",
  SnakeToCamel: "snake-to-camel",
  CamelToSnake: "camel-to-snake",
  JSON5ToJson: "json5-to-json",
  JSON5ToTypescriptInterface: "json5-to-typescript-interface",
  XmlToJson: "xml-to-json",
  JSON5ToXml: "json5-to-xml",
} as const;

export const COMMAND_MENU: QuickPickItem[] = [
  {
    label: COMMAND.EncodeBase64,
    description: "Text to Base64",
  },
  {
    label: COMMAND.DecodeBase64,
    description: "Base64 to Text",
  },
  {
    label: COMMAND.EncodeHex,
    description: "Text to Hex",
  },
  {
    label: COMMAND.DecodeHex,
    description: "Hex to Text",
  },
  {
    label: COMMAND.SHA256,
    description: "Text to SHA256",
  },
  {
    label: COMMAND.SHA512,
    description: "Text to SHA512",
  },
  {
    label: COMMAND.Base64ToHex,
    description: "Base64 to Hex",
  },
  {
    label: COMMAND.HexToBase64,
    description: "Hex to Base64",
  },
  {
    label: COMMAND.ToUpperCase,
    description: "Text to Upper Case",
  },
  {
    label: COMMAND.ToLowerCase,
    description: "Text to Lower Case",
  },
  {
    label: COMMAND.MaskYyyyMMDd,
    description: "Mask yyyyMMdd",
  },
  {
    label: COMMAND.PrettyJson,
    description: "Text to Pretty Json",
  },
  {
    label: COMMAND.PrettyXml,
    description: "Text to Pretty XML",
  },
  {
    label: COMMAND.Json5ToParameter,
    description: "Json to form-url-encoded Parameter",
  },
  {
    label: COMMAND.ParameterToJson,
    description: "Form-url-encoded Parameter To Json",
  },
  {
    label: COMMAND.EncodeUriComponent,
    description: "Text To Encode Uri Component",
  },
  {
    label: COMMAND.DecodeUriComponent,
    description: "Encode Uri Component to Text",
  },
  {
    label: COMMAND.HTTPToCurl,
    description: "HTTP to Curl",
  },
  {
    label: COMMAND.CamelToSnake,
    description: "Camel To Snake",
  },
  {
    label: COMMAND.SnakeToCamel,
    description: "Snake To Camel",
  },
  {
    label: COMMAND.JSON5ToJson,
    description: "JSON5 To JSON",
  },
  {
    label: COMMAND.JSON5ToTypescriptInterface,
    description: "JSON5 To Typescript Interface",
  },
  {
    label: COMMAND.JSON5ToXml,
    description: "JSON5 To XML",
  },
  {
    label: COMMAND.XmlToJson,
    description: "XML To Json",
  },
];

export const DEFAULT_CONVERTERS: Converter[] = [
  /** Base64 */
  new EncodeBase64Converter(),
  new DecodeBase64Converter(),
  /** Hex */
  new EncodeHexConverter(),
  new DecodeHexConverter(),
  /** Hash */
  new Sha256Converter(),
  new Sha512Converter(),
  /** URI Component */
  new EncodeUriComponentConverter(),
  new DecodeUriComponentConverter(),
  /** HTTP */
  new HttpToCurlConverter(),
  /** Convention */
  new CamelToSnakeConverter(),
  new SnakeToCamelConverter(),
  /** Format */
  new PrettyJsonConverter(),
  new PrettyXmlConverter(),
  /** XML */
  new Json5ToXmlConverter(),
  new XmlToJsonConverter(),
  /** Util */
  new Base64ToHexConverter(),
  new HexToBase64Converter(),
  new ToUpperCaseConverter(),
  new ToLowerCaseConverter(),
  new MaskYyyyMMDdConverter(),
  new Json5ToParameterConverter(),
  new ParameterToJsonConverter(),
  new Json5ToJsonConverter(),
  new Json5ToTypescriptInterfaceConverter(),
];
