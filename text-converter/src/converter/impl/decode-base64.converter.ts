import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class DecodeBase64Converter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.DecodeBase64;
  }
  convert(text: string): string {
    return Buffer.from(text, "base64").toString("utf-8");
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
