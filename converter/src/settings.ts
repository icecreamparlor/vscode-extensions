/* eslint-disable @typescript-eslint/naming-convention */
import { QuickPickItem } from "vscode";
import { Converter } from "./converter/converter";
import { YamlToJsonConverter } from "./converter/impl/YamlToJsonConverter";
import { Base64ToHexConverter } from "./converter/impl/base64-to-hex.converter";
import { CamelToSnakeConverter } from "./converter/impl/camel-to-snake.converter";
import { DecodeBase64Converter } from "./converter/impl/decode-base64.converter";
import { DecodeHexConverter } from "./converter/impl/decode-hex.converter";
import { DecodeUriComponentConverter } from "./converter/impl/decode-uri-component.converter";
import { DecryptAesCbcConverter } from "./converter/impl/decrypt-aes-cvc.converter";
import { EncodeBase64Converter } from "./converter/impl/encode-base64.converter";
import { EncodeHexConverter } from "./converter/impl/encode-hex.converter";
import { EncodeUriComponentConverter } from "./converter/impl/encode-uri-component.converter";
import { EncryptAesCbcConverter } from "./converter/impl/encrypt-aes-cvc.converter";
import { EscapeToPlainConverter } from "./converter/impl/escape-to-plain.converter";
import { HexToBase64Converter } from "./converter/impl/hex-to-base64.converter";
import { HttpToCurlConverter } from "./converter/impl/http-to-curl.converter";
import { JsonStringifiedToPlainConverter } from "./converter/impl/json-stringified-to-plain.converter";
import { Json5ToParameterConverter } from "./converter/impl/json-to-parameter.converter";
import { Json5ToTypescriptInterfaceConverter } from "./converter/impl/json-to-typescript-interface.converter";
import { Json5ToJsonConverter } from "./converter/impl/json5-to-json.converter";
import { Json5ToKotlinDataClassConverter } from "./converter/impl/json5-to-kotlin-data-class.converter";
import { Json5ToMongooseConverter } from "./converter/impl/json5-to-mongoose";
import { Json5ToMysqlDdlConverter } from "./converter/impl/json5-to-mysql-ddl.converter";
import { Json5ToXmlConverter } from "./converter/impl/json5-to-xml.converter";
import { Json5ToYamlConverter } from "./converter/impl/json5-to-yaml.converter";
import { MaskYyyyMMDdConverter } from "./converter/impl/mask-yyyy-MM-dd.converter";
import { ParameterToJsonConverter } from "./converter/impl/parameter-to-json.converter";
import { PlainToEscapeConverter } from "./converter/impl/plain-to-escape.converter";
import { PrettyJsonConverter } from "./converter/impl/pretty-json.converter";
import { PrettyXmlConverter } from "./converter/impl/pretty-xml.converter";
import { Sha256Converter } from "./converter/impl/sha-256.converter";
import { Sha512Converter } from "./converter/impl/sha-512.converter";
import { SnakeToCamelConverter } from "./converter/impl/snake-to-camel.converter";
import { ToLowerCaseConverter } from "./converter/impl/to-lowercase-converter";
import { ToUpperCaseConverter } from "./converter/impl/to-uppercase-converter";
import { XmlToJsonConverter } from "./converter/impl/xml-to-json.converter";

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
  Json5ToYaml: "json5-to-yaml",
  YamlToJson: "yaml-to-json",
} as const;

export const COMMAND_HANDLERS: (QuickPickItem & { converter: Converter })[] = [
  {
    label: COMMAND.EncodeBase64,
    description: "Text to Base64",
    converter: new EncodeBase64Converter(),
  },
  {
    label: COMMAND.DecodeBase64,
    description: "Base64 to Text",
    converter: new DecodeBase64Converter(),
  },
  {
    label: COMMAND.EncodeHex,
    description: "Text to Hex",
    converter: new EncodeHexConverter(),
  },
  {
    label: COMMAND.DecodeHex,
    description: "Hex to Text",
    converter: new DecodeHexConverter(),
  },
  {
    label: COMMAND.SHA256,
    description: "Text to SHA256",
    converter: new Sha256Converter(),
  },
  {
    label: COMMAND.SHA512,
    description: "Text to SHA512",
    converter: new Sha512Converter(),
  },
  {
    label: COMMAND.Base64ToHex,
    description: "Base64 to Hex",
    converter: new Base64ToHexConverter(),
  },
  {
    label: COMMAND.HexToBase64,
    description: "Hex to Base64",
    converter: new HexToBase64Converter(),
  },
  {
    label: COMMAND.ToUpperCase,
    description: "Text to Upper Case",
    converter: new ToUpperCaseConverter(),
  },
  {
    label: COMMAND.ToLowerCase,
    description: "Text to Lower Case",
    converter: new ToLowerCaseConverter(),
  },
  {
    label: COMMAND.MaskYyyyMMDd,
    description: "Mask yyyyMMdd",
    converter: new MaskYyyyMMDdConverter(),
  },
  {
    label: COMMAND.PrettyJson,
    description: "Text to Pretty Json",
    converter: new PrettyJsonConverter(),
  },
  {
    label: COMMAND.PrettyXml,
    description: "Text to Pretty XML",
    converter: new PrettyXmlConverter(),
  },
  {
    label: COMMAND.Json5ToParameter,
    description: "Json to form-url-encoded Parameter",
    converter: new Json5ToParameterConverter(),
  },
  {
    label: COMMAND.ParameterToJson,
    description: "Form-url-encoded Parameter To Json",
    converter: new ParameterToJsonConverter(),
  },
  {
    label: COMMAND.EncodeUriComponent,
    description: "Text To Encode Uri Component",
    converter: new EncodeUriComponentConverter(),
  },
  {
    label: COMMAND.DecodeUriComponent,
    description: "Encode Uri Component to Text",
    converter: new DecodeUriComponentConverter(),
  },
  {
    label: COMMAND.HTTPToCurl,
    description: "HTTP to Curl",
    converter: new HttpToCurlConverter(),
  },
  {
    label: COMMAND.CamelToSnake,
    description: "Camel To Snake",
    converter: new CamelToSnakeConverter(),
  },
  {
    label: COMMAND.SnakeToCamel,
    description: "Snake To Camel",
    converter: new SnakeToCamelConverter(),
  },
  {
    label: COMMAND.JSON5ToJson,
    description: "JSON5 To JSON",
    converter: new Json5ToJsonConverter(),
  },
  {
    label: COMMAND.JSON5ToTypescriptInterface,
    description: "JSON5 To Typescript Interface",
    converter: new Json5ToTypescriptInterfaceConverter(),
  },
  {
    label: COMMAND.JSON5ToXml,
    description: "JSON5 To XML",
    converter: new Json5ToXmlConverter(),
  },
  {
    label: COMMAND.XmlToJson,
    description: "XML To Json",
    converter: new XmlToJsonConverter(),
  },
  {
    label: COMMAND.EncryptAesCbc,
    description: "Encrypt AES-CBC",
    converter: new EncryptAesCbcConverter(),
  },
  {
    label: COMMAND.DecryptAesCbc,
    description: "Decrypt AES-CBC",
    converter: new DecryptAesCbcConverter(),
  },
  {
    label: COMMAND.EscapeToPlain,
    description: "Escape Character To Plain",
    converter: new EscapeToPlainConverter(),
  },
  {
    label: COMMAND.PlainToEscape,
    description: "Plain To Escape Character",
    converter: new PlainToEscapeConverter(),
  },
  {
    label: COMMAND.JsonStringifiedToPlain,
    description: "JSON Stringified To Plain",
    converter: new JsonStringifiedToPlainConverter(),
  },
  {
    label: COMMAND.Json5ToKotlinDataClass,
    description: "JSON5 To Kotlin Data Class",
    converter: new Json5ToKotlinDataClassConverter(),
  },
  {
    label: COMMAND.Json5ToMysqlDdl,
    description: "JSON5 To Mysql DDL",
    converter: new Json5ToMysqlDdlConverter(),
  },
  {
    label: COMMAND.Json5ToMongoose,
    description: "JSON5 To Mongoose Schema",
    converter: new Json5ToMongooseConverter(),
  },
  {
    label: COMMAND.Json5ToYaml,
    description: "JSON5 To YAML",
    converter: new Json5ToYamlConverter(),
  },
  {
    label: COMMAND.YamlToJson,
    description: "YAML To JSON",
    converter: new YamlToJsonConverter(),
  },
];
