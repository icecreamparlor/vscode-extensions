import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Convertor } from "../convertor";

export class EncodeBase64Convertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.EncodeBase64;
  }
  convert(text: string): string {
    return Buffer.from(text).toString("base64");
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
