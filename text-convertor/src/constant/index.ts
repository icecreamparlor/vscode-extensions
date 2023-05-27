/* eslint-disable @typescript-eslint/naming-convention */
import { QuickPickItem } from "vscode";

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
  JsonToParameter: "json-to-parameter",
  ParameterToJson: "parameter-to-json",
  EncodeUriComponent: "encode-uri-component",
  DecodeUriComponent: "decode-uri-component",
  HTTPToCurl: "http-to-curl",
  SnakeToCamel: "snake-to-camel",
  CamelToSnake: "camel-to-snake",
  JSON5ToJson: "json5-to-json",
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
    label: COMMAND.JsonToParameter,
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
];

export const EXTENSION_NAME = "text-convertor";
