import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class ToLowerCaseConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.ToLowerCase;
  }
  convert(text: string): string {
    return text.toLowerCase();
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
