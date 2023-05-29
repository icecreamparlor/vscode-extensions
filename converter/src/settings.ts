/* eslint-disable @typescript-eslint/naming-convention */
import { QuickPickItem } from "vscode";
import { Converter } from "./converter/converter";
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
import { FilePathToBase64Converter } from "./converter/impl/file-path-to-base64.converter";
import { FilePathToHexConverter } from "./converter/impl/file-path-to-hex.converter";
import { FilePathToPlainTextConverter } from "./converter/impl/file-path-to-plain-text.converter";
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
import { RemoveLineBreakAndSpaceConverter } from "./converter/impl/remove-line-break-and-space.converter";
import { RemoveLineBreakConverter } from "./converter/impl/remove-line-break.converter";
import { Sha256Converter } from "./converter/impl/sha-256.converter";
import { Sha512Converter } from "./converter/impl/sha-512.converter";
import { SnakeToCamelConverter } from "./converter/impl/snake-to-camel.converter";
import { ToLowerCaseConverter } from "./converter/impl/to-lowercase-converter";
import { ToUpperCaseConverter } from "./converter/impl/to-uppercase-converter";
import { UnescapeHtmlConverter } from "./converter/impl/unescape-html.converter";
import { XmlToJsonConverter } from "./converter/impl/xml-to-json.converter";
import { YamlToJsonConverter } from "./converter/impl/yaml-to-json.converter";

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
  FilePathToPlainText: "file-path-to-plain-text",
  FilePathToBase64: "file-path-to-base64",
  FilePathToHex: "file-path-to-hex",
  RemoveLineBreak: "remove-line",
  RemoveLineBreakAndSpace: "remove-space-and-line",
  UnescapeHtml: "unescape-html",
} as const;

export const COMMAND_HANDLERS: (QuickPickItem & {
  id: (typeof COMMAND)[keyof typeof COMMAND];
  converter: Converter;
})[] = [
  {
    id: COMMAND.EncodeBase64,
    label: "Text to Base64",
    converter: new EncodeBase64Converter(),
  },
  {
    id: COMMAND.DecodeBase64,
    label: "Base64 to Text",
    converter: new DecodeBase64Converter(),
  },
  {
    id: COMMAND.EncodeHex,
    label: "Text to Hex",
    converter: new EncodeHexConverter(),
  },
  {
    id: COMMAND.DecodeHex,
    label: "Hex to Text",
    converter: new DecodeHexConverter(),
  },
  {
    id: COMMAND.SHA256,
    label: "Text to SHA256",
    converter: new Sha256Converter(),
  },
  {
    id: COMMAND.SHA512,
    label: "Text to SHA512",
    converter: new Sha512Converter(),
  },
  {
    id: COMMAND.Base64ToHex,
    label: "Base64 to Hex",
    converter: new Base64ToHexConverter(),
  },
  {
    id: COMMAND.HexToBase64,
    label: "Hex to Base64",
    converter: new HexToBase64Converter(),
  },
  {
    id: COMMAND.ToUpperCase,
    label: "Text to Upper Case",
    converter: new ToUpperCaseConverter(),
  },
  {
    id: COMMAND.ToLowerCase,
    label: "Text to Lower Case",
    converter: new ToLowerCaseConverter(),
  },
  {
    id: COMMAND.MaskYyyyMMDd,
    label: "Mask yyyyMMdd",
    converter: new MaskYyyyMMDdConverter(),
  },
  {
    id: COMMAND.PrettyJson,
    label: "Text to Pretty Json",
    converter: new PrettyJsonConverter(),
  },
  {
    id: COMMAND.PrettyXml,
    label: "Text to Pretty XML",
    converter: new PrettyXmlConverter(),
  },
  {
    id: COMMAND.Json5ToParameter,
    label: "Json to form-url-encoded Parameter",
    converter: new Json5ToParameterConverter(),
  },
  {
    id: COMMAND.ParameterToJson,
    label: "Form-url-encoded Parameter To Json",
    converter: new ParameterToJsonConverter(),
  },
  {
    id: COMMAND.EncodeUriComponent,
    label: "Text To Encode Uri Component",
    converter: new EncodeUriComponentConverter(),
  },
  {
    id: COMMAND.DecodeUriComponent,
    label: "Encode Uri Component to Text",
    converter: new DecodeUriComponentConverter(),
  },
  {
    id: COMMAND.HTTPToCurl,
    label: "HTTP to Curl",
    converter: new HttpToCurlConverter(),
  },
  {
    id: COMMAND.CamelToSnake,
    label: "Camel To Snake",
    converter: new CamelToSnakeConverter(),
  },
  {
    id: COMMAND.SnakeToCamel,
    label: "Snake To Camel",
    converter: new SnakeToCamelConverter(),
  },
  {
    id: COMMAND.JSON5ToJson,
    label: "JSON5 To JSON",
    converter: new Json5ToJsonConverter(),
  },
  {
    id: COMMAND.JSON5ToTypescriptInterface,
    label: "JSON5 To Typescript Interface",
    converter: new Json5ToTypescriptInterfaceConverter(),
  },
  {
    id: COMMAND.JSON5ToXml,
    label: "JSON5 To XML",
    converter: new Json5ToXmlConverter(),
  },
  {
    id: COMMAND.XmlToJson,
    label: "XML To Json",
    converter: new XmlToJsonConverter(),
  },
  {
    id: COMMAND.EncryptAesCbc,
    label: "Encrypt AES-CBC",
    converter: new EncryptAesCbcConverter(),
  },
  {
    id: COMMAND.DecryptAesCbc,
    label: "Decrypt AES-CBC",
    converter: new DecryptAesCbcConverter(),
  },
  {
    id: COMMAND.EscapeToPlain,
    label: "Escape Character To Plain",
    converter: new EscapeToPlainConverter(),
  },
  {
    id: COMMAND.PlainToEscape,
    label: "Plain To Escape Character",
    converter: new PlainToEscapeConverter(),
  },
  {
    id: COMMAND.JsonStringifiedToPlain,
    label: "JSON Stringified To Plain",
    converter: new JsonStringifiedToPlainConverter(),
  },
  {
    id: COMMAND.Json5ToKotlinDataClass,
    label: "JSON5 To Kotlin Data Class",
    converter: new Json5ToKotlinDataClassConverter(),
  },
  {
    id: COMMAND.Json5ToMysqlDdl,
    label: "JSON5 To Mysql DDL",
    converter: new Json5ToMysqlDdlConverter(),
  },
  {
    id: COMMAND.Json5ToMongoose,
    label: "JSON5 To Mongoose Schema",
    converter: new Json5ToMongooseConverter(),
  },
  {
    id: COMMAND.Json5ToYaml,
    label: "JSON5 To YAML",
    converter: new Json5ToYamlConverter(),
  },
  {
    id: COMMAND.YamlToJson,
    label: "YAML To JSON",
    converter: new YamlToJsonConverter(),
  },
  {
    id: COMMAND.FilePathToPlainText,
    label: "File Path To Plain Text",
    converter: new FilePathToPlainTextConverter(),
  },
  {
    id: COMMAND.FilePathToBase64,
    label: "File Path To Base64",
    converter: new FilePathToBase64Converter(),
  },
  {
    id: COMMAND.FilePathToHex,
    label: "File Path To Hex",
    converter: new FilePathToHexConverter(),
  },
  {
    id: COMMAND.RemoveLineBreak,
    label: "Remove Line Break",
    converter: new RemoveLineBreakConverter(),
  },
  {
    id: COMMAND.RemoveLineBreakAndSpace,
    label: "Remove Line Break And Space",
    converter: new RemoveLineBreakAndSpaceConverter(),
  },
  {
    id: COMMAND.UnescapeHtml,
    label: "Unescape HTML",
    converter: new UnescapeHtmlConverter(),
  },
];
