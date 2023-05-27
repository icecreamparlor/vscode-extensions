import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class EncodeHexConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.EncodeHex;
  }
  convert(text: string): string {
    return Buffer.from(text).toString("hex");
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
