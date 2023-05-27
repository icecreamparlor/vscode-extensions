import * as vscode from "vscode";
import { COMMAND } from "../constant";
import { Convertor } from "./convertor";

export class DecodeUriComponentConvertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.DecodeUriComponent;
  }
  convert(text: string): string {
    return decodeURIComponent(text);
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
