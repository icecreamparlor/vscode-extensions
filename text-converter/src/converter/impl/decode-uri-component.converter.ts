import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class DecodeUriComponentConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.DecodeUriComponent;
  }
  convert(text: string): string {
    return decodeURIComponent(text);
  }
}
