import * as vscode from "vscode";
import { convertText } from "./command/convert-text";
import { EXTENSION_NAME } from "./constant";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    `${EXTENSION_NAME}.convert`,
    convertText
  );

  context.subscriptions.push(disposable);
  vscode.window.showInformationMessage(`${EXTENSION_NAME} is activated}`);
}

export function deactivate() {
  vscode.window.showInformationMessage(`${EXTENSION_NAME} is deactivated}`);
}
