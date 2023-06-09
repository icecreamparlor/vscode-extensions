/* eslint-disable @typescript-eslint/naming-convention */
import { QuickPickItem } from "vscode";
import { Converter } from "./converter/converter";
import { Base64ToHexConverter } from "./converter/impl/base64-to-hex.converter";
import { CamelToSnakeConverter } from "./converter/impl/camel-to-snake.converter";
import { DecodeBase64Converter } from "./converter/impl/decode-base64.converter";
import { DecodeHexConverter } from "./converter/impl/decode-hex.converter";
import { DecodeUriComponentWithEucKrConverter } from "./converter/impl/decode-uri-component-with-euc-kr.converter";
import { DecodeUriComponentConverter } from "./converter/impl/decode-uri-component.converter";
import { DecryptAesCbcConverter } from "./converter/impl/decrypt-aes-cvc.converter";
import { DecryptOpensslAesConverter } from "./converter/impl/decrypt-openssl-aes.converter";
import { EncodeBase64Converter } from "./converter/impl/encode-base64.converter";
import { EncodeHexConverter } from "./converter/impl/encode-hex.converter";
import { EncodeUriComponentConverter } from "./converter/impl/encode-uri-component.converter";
import { EncryptAesCbcConverter } from "./converter/impl/encrypt-aes-cvc.converter";
import { EncryptOpensslAesConverter } from "./converter/impl/encrypt-openssl-aes.converter";
import { EscapeSequenceToPlainTextConverter } from "./converter/impl/escape-sequence-to-plain-text.converter";
import { EscapeTextConverter } from "./converter/impl/escape-text.converter";
import { EvalJavascriptConverter } from "./converter/impl/eval-javascript.converter";
import { FilePathToBase64Converter } from "./converter/impl/file-path-to-base64.converter";
import { FilePathToHexConverter } from "./converter/impl/file-path-to-hex.converter";
import { FilePathToPlainTextConverter } from "./converter/impl/file-path-to-plain-text.converter";
import { HexToBase64Converter } from "./converter/impl/hex-to-base64.converter";
import { HtmlToMarkdownConverter } from "./converter/impl/html-to-markdown.converter";
import { HttpToCurlConverter } from "./converter/impl/http-to-curl.converter";
import { JsonStringifiedToPlainConverter } from "./converter/impl/json-stringified-to-plain.converter";
import { Json5ToParameterConverter } from "./converter/impl/json-to-parameter.converter";
import { Json5ToJsonConverter } from "./converter/impl/json5-to-json.converter";
import { Json5ToKotlinDataClassConverter } from "./converter/impl/json5-to-kotlin-data-class.converter";
import { Json5ToMongooseConverter } from "./converter/impl/json5-to-mongoose";
import { Json5ToMysqlDdlConverter } from "./converter/impl/json5-to-mysql-ddl.converter";
import { Json5ToTypeScriptClassConverter } from "./converter/impl/json5-to-typescript-class.converter";
import { Json5ToTypescriptInterfaceConverter } from "./converter/impl/json5-to-typescript-interface.converter";
import { Json5ToXmlConverter } from "./converter/impl/json5-to-xml.converter";
import { Json5ToYamlConverter } from "./converter/impl/json5-to-yaml.converter";
import { MarkdownToHtmlConverter } from "./converter/impl/markdown-to-html.converter";
import { MaskYyyyMMDdConverter } from "./converter/impl/mask-yyyy-MM-dd.converter";
import { ParameterToJsonConverter } from "./converter/impl/parameter-to-json.converter";
import { PrettyHtmlConverter } from "./converter/impl/pretty-html.converter";
import { PrettyJsonConverter } from "./converter/impl/pretty-json.converter";
import { PrettyXmlConverter } from "./converter/impl/pretty-xml.converter";
import { RemoveLineBreakAndSpaceConverter } from "./converter/impl/remove-line-break-and-space.converter";
import { RemoveLineBreakConverter } from "./converter/impl/remove-line-break.converter";
import { RemoveQuotationMarkConverter } from "./converter/impl/remove-quotation-mark.converter";
import { ReplaceWordConverter } from "./converter/impl/replace-word.converter";
import { Sha256Converter } from "./converter/impl/sha-256.converter";
import { Sha512Converter } from "./converter/impl/sha-512.converter";
import { SnakeToCamelConverter } from "./converter/impl/snake-to-camel.converter";
import { SortLineAscendingConverter } from "./converter/impl/sort-line-ascending.converter";
import { SortLineDescendingConverter } from "./converter/impl/sort-line-descending.converter";
import { SortNumberAscendingConverter } from "./converter/impl/sort-number-ascending.converter";
import { SortNumberDescendingConverter } from "./converter/impl/sort-number-descending.converter";
import { SortWordAscendingConverter } from "./converter/impl/sort-word-ascending.converter";
import { SortWordDescendingConverter } from "./converter/impl/sort-word-descending.converter";
import { ToLowerCaseConverter } from "./converter/impl/to-lowercase-converter";
import { ToUpperCaseConverter } from "./converter/impl/to-uppercase-converter";
import { UnescapeHtmlConverter } from "./converter/impl/unescape-html.converter";
import { UnescapeTextConverter } from "./converter/impl/unescape-text.converter";
import { XmlToJsonConverter } from "./converter/impl/xml-to-json.converter";
import { YamlToJsonConverter } from "./converter/impl/yaml-to-json.converter";

export const EXTENSION_NAME = "converter";
export const DEFAULT_ERROR_MESSAGE =
  "Failed to convert.\nPlease check the input value.";

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
  SHA256: "hash-sha-256",
  SHA512: "hash-sha-512",
  PrettyJson: "pretty-json",
  PrettyXml: "pretty-xml",
  PrettyHtml: "pretty-html",
  PrettyJavaScript: "pretty-javascript",
  PrettyTypeScript: "pretty-typescript",
  Json5ToParameter: "json5-to-parameter",
  ParameterToJson: "parameter-to-json",
  EncodeUriComponent: "encode-uri-component",
  DecodeUriComponent: "decode-uri-component",
  DecodeUriComponentWithEucKr: "decode-uri-component-with-euc-kr",
  HTTPToCurl: "http-to-curl",
  SnakeToCamel: "snake-to-camel",
  CamelToSnake: "camel-to-snake",
  JSON5ToJson: "json5-to-json",
  JSON5ToTypeScriptInterface: "json5-to-typescript-interface",
  JSON5ToTypeScriptClass: "json5-to-typescript-class",
  XmlToJson: "xml-to-json",
  JSON5ToXml: "json5-to-xml",
  EncryptAesCbc: "encrypt-aes-cbc",
  DecryptAesCbc: "decrypt-aes-cbc",
  EncryptOpensslAes: "encrypt-openssl-aes",
  DecryptOpensslAes: "decrypt-openssl-aes",
  UnescapeText: "escape-to-plain",
  EscapeText: "plain-to-escape",
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
  RemoveQuotationMark: "remove-quotation-mark",
  ReplaceWord: "replace-word",
  UnescapeHtml: "unescape-html",
  EvalJavascript: "eval-javascript",
  MarkdownToHtml: "markdown-to-html",
  HtmlToMarkdown: "html-to-markdown",
  SortWordAscending: "sort-word-ascending",
  SortWordDescending: "sort-word-descending",
  SortLineAscending: "sort-line-ascending",
  SortLineDescending: "sort-line-descending",
  SortNumberAscending: "sort-number-ascending",
  SortNumberDescending: "sort-number-descending",
  EscapeSequenceToPlainText: "escape-sequence-to-plain-text",
} as const;

export const COMMAND_HANDLERS: (QuickPickItem & {
  id: (typeof COMMAND)[keyof typeof COMMAND];
  converter: Converter;
})[] = [
  {
    id: COMMAND.EncodeBase64,
    label: "Encode Base64",
    converter: new EncodeBase64Converter(),
  },
  {
    id: COMMAND.DecodeBase64,
    label: "Decode Base64",
    converter: new DecodeBase64Converter(),
  },
  {
    id: COMMAND.EncodeHex,
    label: "Encode Hex",
    converter: new EncodeHexConverter(),
  },
  {
    id: COMMAND.DecodeHex,
    label: "Decode Hex",
    converter: new DecodeHexConverter(),
  },
  {
    id: COMMAND.SHA256,
    label: "Hash SHA256",
    converter: new Sha256Converter(),
  },
  {
    id: COMMAND.SHA512,
    label: "Hash SHA512",
    converter: new Sha512Converter(),
  },
  {
    id: COMMAND.Base64ToHex,
    label: "Convert Base64 to Hex",
    converter: new Base64ToHexConverter(),
  },
  {
    id: COMMAND.HexToBase64,
    label: "Convert Hex to Base64",
    converter: new HexToBase64Converter(),
  },
  {
    id: COMMAND.ToUpperCase,
    label: "Convert to UpperCase",
    converter: new ToUpperCaseConverter(),
  },
  {
    id: COMMAND.ToLowerCase,
    label: "Convert to LowerCase",
    converter: new ToLowerCaseConverter(),
  },
  {
    id: COMMAND.MaskYyyyMMDd,
    label: "Mask yyyyMMdd",
    converter: new MaskYyyyMMDdConverter(),
  },
  {
    id: COMMAND.PrettyJson,
    label: "Prettify / Beautify JSON",
    converter: new PrettyJsonConverter(),
  },
  {
    id: COMMAND.PrettyXml,
    label: "Prettify / Beautify XML",
    converter: new PrettyXmlConverter(),
  },
  {
    id: COMMAND.PrettyHtml,
    label: "Prettify / Beautify HTML",
    converter: new PrettyHtmlConverter(),
  },
  /*
  Prettier 를 사용하는 Converter 를 추가하면, 패키지 사이즈가 너무 커지고 빌드가 오래걸림
  {
    id: COMMAND.PrettyJavaScript,
    label: "Prettify / Beautify JavaScript",
    converter: new PrettyJavaScriptConverter(),
  },
  {
    id: COMMAND.PrettyTypeScript,
    label: "Prettify / Beautify TypeScript",
    converter: new PrettyTypeScriptConverter(),
  },
  */
  {
    id: COMMAND.Json5ToParameter,
    label: "Convert JSON to form-url-encoded",
    converter: new Json5ToParameterConverter(),
  },
  {
    id: COMMAND.ParameterToJson,
    label: "Convert form-url-encoded to JSON",
    converter: new ParameterToJsonConverter(),
  },
  {
    id: COMMAND.EncodeUriComponent,
    label: "Encode URI Component",
    converter: new EncodeUriComponentConverter(),
  },
  {
    id: COMMAND.DecodeUriComponent,
    label: "Decode URI Component",
    converter: new DecodeUriComponentConverter(),
  },
  {
    id: COMMAND.DecodeUriComponentWithEucKr,
    label: "Decode URI Component With EUC-KR Encoding",
    converter: new DecodeUriComponentWithEucKrConverter(),
  },
  {
    id: COMMAND.HTTPToCurl,
    label: "Convert HTTP to Curl",
    converter: new HttpToCurlConverter(),
  },
  {
    id: COMMAND.CamelToSnake,
    label: "Convert camelCase To snake_case",
    converter: new CamelToSnakeConverter(),
  },
  {
    id: COMMAND.SnakeToCamel,
    label: "Convert snake_case To camelCase",
    converter: new SnakeToCamelConverter(),
  },
  {
    id: COMMAND.JSON5ToJson,
    label: "Convert JSON5 To JSON",
    converter: new Json5ToJsonConverter(),
  },
  {
    id: COMMAND.JSON5ToTypeScriptInterface,
    label: "Convert JSON5 To TypeScript Interface",
    converter: new Json5ToTypescriptInterfaceConverter(),
  },
  {
    id: COMMAND.JSON5ToTypeScriptClass,
    label: "Convert JSON5 To TypeScript Class",
    converter: new Json5ToTypeScriptClassConverter(),
  },
  {
    id: COMMAND.JSON5ToXml,
    label: "Convert JSON5 To XML",
    converter: new Json5ToXmlConverter(),
  },
  {
    id: COMMAND.XmlToJson,
    label: "Convert XML To Json",
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
    id: COMMAND.EncryptOpensslAes,
    label: "Encrypt OpenSSL AES",
    converter: new EncryptOpensslAesConverter(),
  },
  {
    id: COMMAND.DecryptOpensslAes,
    label: "Decrypt OpenSSL AES",
    converter: new DecryptOpensslAesConverter(),
  },
  {
    id: COMMAND.UnescapeText,
    label: "Unescape Text",
    converter: new UnescapeTextConverter(),
  },
  {
    id: COMMAND.EscapeText,
    label: "Escape Text",
    converter: new EscapeTextConverter(),
  },
  {
    id: COMMAND.JsonStringifiedToPlain,
    label: "Convert JSON Stringified To Plain",
    converter: new JsonStringifiedToPlainConverter(),
  },
  {
    id: COMMAND.Json5ToKotlinDataClass,
    label: "Convert JSON5 To Kotlin Data Class",
    converter: new Json5ToKotlinDataClassConverter(),
  },
  {
    id: COMMAND.Json5ToMysqlDdl,
    label: "Convert JSON5 To Mysql DDL",
    converter: new Json5ToMysqlDdlConverter(),
  },
  {
    id: COMMAND.Json5ToMongoose,
    label: "Convert JSON5 To Mongoose Schema",
    converter: new Json5ToMongooseConverter(),
  },
  {
    id: COMMAND.Json5ToYaml,
    label: "Convert JSON5 To YAML",
    converter: new Json5ToYamlConverter(),
  },
  {
    id: COMMAND.YamlToJson,
    label: "Convert YAML To JSON",
    converter: new YamlToJsonConverter(),
  },
  {
    id: COMMAND.FilePathToPlainText,
    label: "Convert File Path To Plain Text",
    converter: new FilePathToPlainTextConverter(),
  },
  {
    id: COMMAND.FilePathToBase64,
    label: "Convert File Path To Base64",
    converter: new FilePathToBase64Converter(),
  },
  {
    id: COMMAND.FilePathToHex,
    label: "Convert File Path To Hex",
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
    id: COMMAND.RemoveQuotationMark,
    label: "Remove Quotation Marks",
    converter: new RemoveQuotationMarkConverter(),
  },
  {
    id: COMMAND.ReplaceWord,
    label: "Replace Word",
    converter: new ReplaceWordConverter(),
  },
  {
    id: COMMAND.UnescapeHtml,
    label: "Unescape HTML",
    converter: new UnescapeHtmlConverter(),
  },
  {
    id: COMMAND.EvalJavascript,
    label: "Eval Javascript",
    converter: new EvalJavascriptConverter(),
  },
  {
    id: COMMAND.MarkdownToHtml,
    label: "Convert Markdown To HTML",
    converter: new MarkdownToHtmlConverter(),
  },
  {
    id: COMMAND.HtmlToMarkdown,
    label: "Convert HTML To Markdown",
    converter: new HtmlToMarkdownConverter(),
  },
  {
    id: COMMAND.SortWordAscending,
    label: "Sort Word Ascending",
    converter: new SortWordAscendingConverter(),
  },
  {
    id: COMMAND.SortWordDescending,
    label: "Sort Word Descending",
    converter: new SortWordDescendingConverter(),
  },
  {
    id: COMMAND.SortLineAscending,
    label: "Sort Line Ascending",
    converter: new SortLineAscendingConverter(),
  },
  {
    id: COMMAND.SortLineDescending,
    label: "Sort Line Descending",
    converter: new SortLineDescendingConverter(),
  },
  {
    id: COMMAND.SortNumberAscending,
    label: "Sort Number Ascending",
    converter: new SortNumberAscendingConverter(),
  },
  {
    id: COMMAND.SortNumberDescending,
    label: "Sort Number Descending",
    converter: new SortNumberDescendingConverter(),
  },
  {
    id: COMMAND.EscapeSequenceToPlainText,
    label: "Convert Escape Sequence To Plain Text",
    converter: new EscapeSequenceToPlainTextConverter(),
  },
];
