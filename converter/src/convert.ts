import * as vscode from "vscode";
import { convertService } from "./service/convert.service";
import { die, getRange, getSelectedRange, selectMenu, wrap } from "./util";

export const convert = wrap(async () => {
  // Current Active Editor
  const activeEditor =
    vscode.window.activeTextEditor ?? die(new Error("No Active Editor"));
  // Document Object
  const document = activeEditor.document;
  // Selected Text Or All Text
  const range = _getRange(activeEditor);
  const command = await selectMenu();

  if(!command) {
    return;
  }

  const originalText = document.getText(range);
  const convertedText = await convertService.convert(
    command.label,
    originalText
  );

  // Append the text to the document
  activeEditor.edit((editBuilder) => editBuilder.replace(range, convertedText));

  /**
   * Editor 에서 변환할 영역을 반환한다.
   *
   * @remarks
   * Editor 에서 선택된 영역이 있으면 선택된 영역을 반환하고,
   * Editor 에서 선택된 영역이 없으면 전체 영역을 반환한다.
   * @param editor - VSCode Editor
   *
   * @returns Range
   */
  function _getRange(editor: vscode.TextEditor): vscode.Range {
    const range = getSelectedRange(editor);
    if (!range.isEmpty) {
      return range;
    }

    return getRange(editor);
  }
});
