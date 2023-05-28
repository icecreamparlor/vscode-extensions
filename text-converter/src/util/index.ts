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

export function convertToKotlinDataClass(
  obj: Record<string, any>,
  className: string
): string {
  let code = "";
  const targets: {
    className: string;
    target: Record<string, any>;
  }[] = [
    {
      className,
      target: obj,
    },
  ];

  while (targets.length > 0) {
    let current = targets.shift()!;
    let properties = "";

    for (let key in current.target) {
      const value = current.target[key];
      const valueType = typeof value;
      const isPrimitiveType = !!convertToKotlinPrimitiveType(value);
      let kotlinType = "";

      if (isPrimitiveType) {
        kotlinType = convertToKotlinPrimitiveType(value)!;
      } else if (
        valueType === "object" &&
        Array.isArray(value) &&
        value.length === 0
      ) {
        kotlinType = `List<Any>`;
      } else if (
        valueType === "object" &&
        Array.isArray(value) &&
        value.length > 0
      ) {
        const className = capitalizeFirstLetter(key);
        kotlinType = `List<${className}>`;
        const isPrimitiveType = value.some((v) =>
          convertToKotlinPrimitiveType(v)
        );
        if (isPrimitiveType) {
          const primitiveTypes: Set<string> = value.reduce(
            (ac: Set<string>, v) => {
              const type = convertToKotlinPrimitiveType(v);
              if (type) {
                ac.add(type);
              }
              return ac;
            },
            new Set()
          );

          if (primitiveTypes.size === 1) {
            kotlinType = `List<${convertToKotlinPrimitiveType(value[0])}>`;
          } else {
            kotlinType = 'List<String>';
          }
          // Mixed Array 인 경우 List<String> 으로 고정
          // BigDecimal
        } else {
          targets.push({
            className,
            target: value[0],
          });
        }
      } else if (valueType === "object" && value !== null) {
        const className = capitalizeFirstLetter(key);
        kotlinType = className;
        targets.push({
          className,
          target: value,
        });
      } else {
        kotlinType = "Any";
      }

      properties += `  val ${key}: ${kotlinType},\n`;
    }
    const kotlinClass = `data class ${current.className}(\n${properties})`;
    code += kotlinClass + "\n\n";
  }
  return code;
}

export function convertToKotlinPrimitiveType(
  value: string
): string | undefined {
  const valueType = typeof value;
  if (valueType === "string") {
    return "String";
  } else if (valueType === "number") {
    return "BigDecimal";
    // return Number.isInteger(value) ? "Int" : "Double";
  } else if (valueType === "boolean") {
    return "Boolean";
  }

  return undefined;
}

export function capitalizeFirstLetter(str: string) {
  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
