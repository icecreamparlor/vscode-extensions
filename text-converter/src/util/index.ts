import * as vscode from "vscode";
import { COMMAND_MENU } from "../constant";

/**
 * Editor 에서 사용되고 있는 Range 를 반환합니다
 *
 * @param editor - VSCode Editor
 * @returns Range
 */
export function getRange(editor: vscode.TextEditor): vscode.Range {
  const document = editor.document;
  const lastLine = document.lineAt(document.lineCount - 1);
  const range = new vscode.Range(new vscode.Position(0, 0), lastLine.range.end);

  return range;
}

/**
 * Editor 에서 선택된 영역의 Range 를 반환합니다
 *
 * @param editor - VSCode Editor
 * @returns Range
 */
export function getSelectedRange(editor: vscode.TextEditor): vscode.Range {
  const selection = editor.selection;
  const range = new vscode.Range(selection.start, selection.end);

  return range;
}

/**
 * Editor 에 적혀있는 Text 를 반환합니다
 *
 * @param editor - VSCode Editor
 * @returns Editor 에 적혀있는 Text
 */
export function getText(editor: vscode.TextEditor): string {
  const document = editor.document;
  const lastLine = document.lineAt(document.lineCount - 1);
  const range = new vscode.Range(lastLine.range.start, lastLine.range.end);
  const text = document.getText(range);

  return text;
}

/**
 * 선택된 Editor 의 Text 를 가져옵니다.
 *
 * @param editor - VSCode Editor
 * @returns Editor 에서 선택된 Text
 */
export function getSelectedText(editor: vscode.TextEditor): string {
  const selection = editor.selection;
  const text = editor.document.getText(selection);

  return text;
}

/**
 * Shows a pick list using window.showQuickPick().
 */
export async function selectMenu(): Promise<vscode.QuickPickItem | undefined> {
  const result = await vscode.window.showQuickPick(COMMAND_MENU, {
    placeHolder: "Select Converter",
    // onDidSelectItem: item => vscode.window.showInformationMessage(`Focus ${++i}: ${item}`)
  });

  return result;
}

export function die(error: Error): never {
  throw error;
}

export function wrap(fn: Function) {
  return async function () {
    try {
      return await fn();
    } catch (error) {
      vscode.window.showErrorMessage(
        (error as Error).message,
        (error as Error).stack ?? ""
      );
    }
  };
}

export function camelToSnake(camelCase: string) {
  return camelCase.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

export function snakeToCamel(snakeCase: string) {
  return snakeCase.replace(/(_\w)/g, (match) => match[1].toUpperCase());
}

export function isNotEmptyString(value: unknown): value is string {
  return !!value && typeof value === "string" && value !== "";
}
