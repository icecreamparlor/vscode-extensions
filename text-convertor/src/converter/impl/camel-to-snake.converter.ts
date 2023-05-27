import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { camelToSnake } from "../../util";
import { Converter } from "../converter";

export class CamelToSnakeConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.CamelToSnake;
  }
  convert(text: string): string {
    return camelToSnake(text);
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
