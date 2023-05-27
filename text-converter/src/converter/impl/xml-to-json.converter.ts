import * as xmljs from "xml-js";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class XmlToJsonConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.XmlToJson;
  }
  async convert(text: string): Promise<string> {
    return xmljs.xml2json(text, { compact: true, spaces: 2 });
  }
}