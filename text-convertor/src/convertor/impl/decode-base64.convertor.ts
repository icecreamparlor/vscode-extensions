import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Convertor } from "../convertor";

export class DecodeBase64Convertor implements Convertor {
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
