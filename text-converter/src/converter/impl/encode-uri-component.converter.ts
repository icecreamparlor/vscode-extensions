import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class EncodeUriComponentConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.EncodeUriComponent;
  }
  convert(text: string): string {
    return encodeURIComponent(text);
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
