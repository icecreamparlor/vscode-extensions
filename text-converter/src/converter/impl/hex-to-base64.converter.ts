import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class HexToBase64Converter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.HexToBase64;
  }
  convert(text: string): string {
    return Buffer.from(text, "hex").toString("base64");
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
