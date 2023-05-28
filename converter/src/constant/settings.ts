/* eslint-disable @typescript-eslint/naming-convention */
import { QuickPickItem } from "vscode";
import { Converter } from "../converter/converter";
import { Base64ToHexConverter } from "../converter/impl/base64-to-hex.converter";
import { CamelToSnakeConverter } from "../converter/impl/camel-to-snake.converter";
import { DecodeBase64Converter } from "../converter/impl/decode-base64.converter";
import { DecodeHexConverter } from "../converter/impl/decode-hex.converter";
import { DecodeUriComponentConverter } from "../converter/impl/decode-uri-component.converter";
import { DecryptAesCvcConverter } from "../converter/impl/decrypt-aes-cvc.converter";
import { EncodeBase64Converter } from "../converter/impl/encode-base64.converter";
import { EncodeHexConverter } from "../converter/impl/encode-hex.converter";
import { EncodeUriComponentConverter } from "../converter/impl/encode-uri-component.converter";
import { EncryptAesCvcConverter } from "../converter/impl/encrypt-aes-cvc.converter";
import { EscapeToPlainConverter } from "../converter/impl/escape-to-plain.converter";
import { HexToBase64Converter } from "../converter/impl/hex-to-base64.converter";
import { HttpToCurlConverter } from "../converter/impl/http-to-curl.converter";
import { JsonStringifiedToPlainConverter } from "../converter/impl/json-stringified-to-plain.converter";
import { Json5ToParameterConverter } from "../converter/impl/json-to-parameter.converter";
import { Json5ToTypescriptInterfaceConverter } from "../converter/impl/json-to-typescript-interface.converter";
import { Json5ToJsonConverter } from "../converter/impl/json5-to-json.converter";
import { Json5ToKotlinDataClassConverter } from "../converter/impl/json5-to-kotlin-data-class.converter";
import { Json5ToMysqlDdlConverter } from "../converter/impl/json5-to-mysql-ddl.converter";
import { Json5ToXmlConverter } from "../converter/impl/json5-to-xml.converter";
import { MaskYyyyMMDdConverter } from "../converter/impl/mask-yyyy-MM-dd.converter";
import { ParameterToJsonConverter } from "../converter/impl/parameter-to-json.converter";
import { PlainToEscapeConverter } from "../converter/impl/plain-to-escape.converter";
import { PrettyJsonConverter } from "../converter/impl/pretty-json.converter";
import { PrettyXmlConverter } from "../converter/impl/pretty-xml.converter";
import { Sha256Converter } from "../converter/impl/sha-256.converter";
import { Sha512Converter } from "../converter/impl/sha-512.converter";
import { SnakeToCamelConverter } from "../converter/impl/snake-to-camel.converter";
import { ToLowerCaseConverter } from "../converter/impl/to-lowercase-converter";
import { ToUpperCaseConverter } from "../converter/impl/to-uppercase-converter";
import { XmlToJsonConverter } from "../converter/impl/xml-to-json.converter";
import { Json5ToMongooseConverter } from "../converter/impl/json5-to-mongoose";

export const EXTENSION_NAME = "converter";

export const COMMAND = {
  EncodeBase64: "plain-to-base64",
  DecodeBase64: "base64-to-plain",
  EncodeHex: "plain-to-hex",
  DecodeHex: "hex-to-plain",
  HexToBase64: "hex-to-base64",
  Base64ToHex: "base64-to-hex",
  ToUpperCase: "to-upper-case",
  ToLowerCase: "to-lower-case",
  MaskYyyyMMDd: "mask-yyyy-MM-dd",
  SHA256: "hash-sha-256",
  SHA512: "hash-sha-512",
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
  EncryptAesCbc: "encrypt-aes-cbc",
  DecryptAesCbc: "decrypt-aes-cbc",
  EscapeToPlain: "escape-to-plain",
  PlainToEscape: "plain-to-escape",
  JsonStringifiedToPlain: "json-stringified-to-plain",
  Json5ToKotlinDataClass: "json5-to-kotlin-data-class",
  Json5ToMysqlDdl: "json5-to-mysql-ddl",
  Json5ToMongoose: "json5-to-mongoose",
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
  {
    label: COMMAND.EncryptAesCbc,
    description: "Encrypt AES-CBC",
  },
  {
    label: COMMAND.DecryptAesCbc,
    description: "Decrypt AES-CBC",
  },
  {
    label: COMMAND.EscapeToPlain,
    description: "Escape Character To Plain",
  },
  {
    label: COMMAND.PlainToEscape,
    description: "Plain To Escape Character",
  },
  {
    label: COMMAND.JsonStringifiedToPlain,
    description: "JSON Stringified To Plain",
  },
  {
    label: COMMAND.Json5ToKotlinDataClass,
    description: "JSON5 To Kotlin Data Class",
  },
  {
    label: COMMAND.Json5ToMysqlDdl,
    description: "JSON5 To Mysql DDL",
  },
  {
    label: COMMAND.Json5ToMongoose,
    description: "JSON5 To Mongoose Schema",
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
  /** Crypto */
  new EncryptAesCvcConverter(),
  new DecryptAesCvcConverter(),
  /** Escape */
  new EscapeToPlainConverter(),
  new PlainToEscapeConverter(),
  /** Database */
  new Json5ToMysqlDdlConverter(),
  /** TypeScript */
  new Json5ToTypescriptInterfaceConverter(),
  /** Util */
  new Base64ToHexConverter(),
  new HexToBase64Converter(),
  new ToUpperCaseConverter(),
  new ToLowerCaseConverter(),
  new MaskYyyyMMDdConverter(),
  new Json5ToParameterConverter(),
  new ParameterToJsonConverter(),
  new Json5ToJsonConverter(),
  new JsonStringifiedToPlainConverter(),
  new Json5ToKotlinDataClassConverter(),
  new Json5ToMongooseConverter(),
];
