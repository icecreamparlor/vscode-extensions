import * as vscode from "vscode";
import * as xmlParser from "xml-js";
import { COMMAND } from "../../constant";

import { Convertor } from "../convertor";

export class PrettyXmlConvertor implements Convertor {
  isSupport(command: string): boolean {
    return command === COMMAND.PrettyXml;
  }
  convert(text: string): string {
    // XML 파싱
    const options = {
      spaces: 2,
      ignoreComment: true,
      ignoreDoctype: true,
    };
    const parsedXml = xmlParser.xml2js(text, options);

    // 포맷팅된 XML 문자열 생성
    return xmlParser.js2xml(parsedXml, options);
  }
  onError(error: Error): void {
    vscode.window.showErrorMessage(error.message, error.stack ?? "");
  }
}