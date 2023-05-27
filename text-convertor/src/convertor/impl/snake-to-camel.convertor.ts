import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { snakeToCamel } from "../../util";
import { Convertor } from "../convertor";

export class SnakeToCamelConvertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.SnakeToCamel;
  }
  convert(text: string): string {
    return snakeToCamel(text);
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
