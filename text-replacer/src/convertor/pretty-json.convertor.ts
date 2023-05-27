import * as vscode from "vscode";
import * as JSON5 from '../util/json5';
import { COMMAND } from "../constant";
import { Convertor } from "./convertor";

export class PrettyJsonConvertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.PrettyJson;
  }
  convert(text: string): string {
    const obj = JSON5.parse(text);
    return JSON.stringify(obj, null, 2);
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}

