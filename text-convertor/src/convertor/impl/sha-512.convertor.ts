import * as crypto from "crypto";
import * as vscode from "vscode";

import { COMMAND } from "../../constant";
import { Convertor } from "../convertor";

export class Sha512Convertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.SHA512;
  }
  convert(text: string): string {
    return crypto.createHash("sha512").update(text).digest("hex");
  }

  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}
