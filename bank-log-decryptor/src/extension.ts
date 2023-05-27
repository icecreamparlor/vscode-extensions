// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "bank-log-decryptor.decrypt-base64",
    () => {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor) {
        return;
      }
      const document = activeEditor.document;
      // Get the last line of the document
      const lastLine = document.lineAt(document.lineCount - 1);
      // Get the last line text range
      const range = new vscode.Range(lastLine.range.start, lastLine.range.end);
      const originalText = document.getText();

      // Append the text to the document
      activeEditor.edit((editBuilder) => {
        const decodedText = Buffer.from(originalText).toString("base64");

        editBuilder.insert(range.end, ["", "", decodedText].join("\n"));
      });
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
