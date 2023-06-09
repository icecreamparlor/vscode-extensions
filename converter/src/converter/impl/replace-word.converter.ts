import * as vscode from "vscode";

import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class ReplaceWordConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.ReplaceWord;
  }
  async convert(text: string): Promise<string> {
    const from = await vscode.window.showInputBox({
      placeHolder: "Enter Word to Replace",
      prompt: "Enter Word to Replace",
    });

    if (!from) {
      throw new Error("Word to Replace is required");
    }

    const to = await vscode.window.showInputBox({
      placeHolder: "Enter Word to Replace With",
      prompt: "Enter Word to Replace With",
    });

    if (!to) {
      throw new Error("Word to Replace With is required");
    }

    return text.replace(new RegExp(from, "g"), to);
  }
}
