import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class DecodeHexConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.DecodeHex;
  }
  convert(text: string): string {
    return Buffer.from(text, "hex").toString("utf-8");
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
