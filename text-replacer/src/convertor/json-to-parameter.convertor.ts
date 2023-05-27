import * as vscode from "vscode";
import { COMMAND } from "../constant";
import * as JSON5 from "../util/json5";
import { Convertor } from "./convertor";

export class JsonToParameterConvertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.JsonToParameter;
  }
  convert(jsonString: string): string {
    const json = JSON5.parse(jsonString);
    const params = new URLSearchParams();
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        params.append(key, json[key]);
      }
    }
    
    return params.toString();
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
