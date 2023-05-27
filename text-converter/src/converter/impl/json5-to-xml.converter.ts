import * as xmljs from "xml-js";
import { COMMAND } from "../../constant";
import * as JSON5 from "../../js/json5";
import { Converter } from "../converter";

export class Json5ToXmlConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.JSON5ToXml;
  }
  async convert(text: string): Promise<string> {
    const obj = JSON5.parse(text);

    return xmljs.js2xml(obj, { compact: true, spaces: 2 });
  }
}
