import * as vscode from "vscode";
import { COMMAND } from "../constant";
import { Convertor } from "./convertor";

export class ToLowerCaseConvertor implements Convertor {
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
