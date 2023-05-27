import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Convertor } from "../convertor";

export class ToUpperCaseConvertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.ToUpperCase;
  }
  convert(text: string): string {
    return text.toUpperCase();
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
