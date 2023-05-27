import * as vscode from "vscode";
import { COMMAND } from "../../constant";
import { Convertor } from "../convertor";

export class MaskYyyyMMDdConvertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.MaskYyyyMMDd;
  }
  convert(text: string): string {
    const regexes = [
      /(19\d{2}|20[0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])/g,
      /(19\d{2}|20[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/g,
    ];

    return regexes.reduce(
      (ac, regex) =>
        ac.replace(regex, (match, yyyy, MM, dd) => match.replace(MM, "**")),
      text
    );
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
