import { COMMAND } from "../../constant";
import * as JSON5 from "../../js/json5";
import { Converter } from "../converter";

export class PrettyJsonConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.PrettyJson;
  }
  async convert(text: string): Promise<string> {
    const obj = JSON5.parse(text);
    return JSON.stringify(obj, null, 2);
  }
}