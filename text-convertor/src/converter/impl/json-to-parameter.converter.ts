import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import * as JSON5 from "../../js/json5";
import { Converter } from "../converter";

export class JsonToParameterConverter implements Converter {
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
