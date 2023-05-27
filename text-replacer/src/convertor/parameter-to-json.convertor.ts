import * as vscode from "vscode";
import { COMMAND } from "../constant";
import { Convertor } from "./convertor";

export class ParameterToJsonConvertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.ParameterToJson;
  }
  convert(parameter: string): string {
    const params = new URLSearchParams(parameter);
    const json: Record<string, any> = {};

    for (const [key, value] of params.entries()) {
      json[key] = value;
    }

    return JSON.stringify(json, null, 2);
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
