import { QuickPickItem } from "vscode";

export const COMMAND = {
  EncodeBase64: "encode-base64",
  DecodeBase64: "decode-base64",
  EncodeHex: "encode-hex",
  DecodeHex: "decode-hex",
} as const;

export const COMMAND_MENU: QuickPickItem[] = [
  {
    label: COMMAND.EncodeBase64,
    description: "Encode text to Base64",
  },
  {
    label: COMMAND.DecodeBase64,
    description: "Decode text to Base64",
  },
  {
    label: COMMAND.EncodeHex,
    description: "Encode text to Hex",
  },
  {
    label: COMMAND.DecodeHex,
    description: "Decode text to Hex",
  },
];

export const EXTENSION_NAME = "text-replacer";
