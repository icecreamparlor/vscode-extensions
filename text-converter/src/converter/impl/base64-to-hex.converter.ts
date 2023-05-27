import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class Base64ToHexConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.Base64ToHex;
  }
  convert(text: string): string {
    return Buffer.from(text, "base64").toString("hex");
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
