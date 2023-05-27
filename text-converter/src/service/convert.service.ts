import * as vscode from "vscode";
import { DEFAULT_CONVERTERS } from "../constant";
import { Converter } from "../converter/converter";
import { die } from "../util";

export class ConvertService {
  constructor(private readonly _convertors: Converter[]) {}

  convert(convertType: string, text: string) {
    const converter =
      this._convertors.find((it) => it.isSupport(convertType)) ??
      die(new Error("Converter not found"));

    try {
      return converter.convert(text);
    } catch (e) {
      const onError = converter.onError ?? this.defaultOnError;
      onError(e as Error);

      return text;
    }
  }

  /**
   * Default error handler
   *
   * @remarks This method is used when the converter does not have an error handler
   * @param error - Error
   */
  private defaultOnError(error: Error) {
    vscode.window.showErrorMessage("Text Convert Failed", {
      modal: true,
      detail: `${error.message}\n\n\n${error.stack}`,
    });
  }
}

export const convertService = new ConvertService(DEFAULT_CONVERTERS);