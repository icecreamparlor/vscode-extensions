import { COMMAND } from "../../constant/settings";
import * as JSON5 from "../../js/json5";
import { Converter } from "../converter";

export class PrettyJsonConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.PrettyJson;
  }
  async convert(text: string): Promise<string> {
    const obj = JSON5.parse(text);
    return JSON.stringify(obj, null, 2);
  }
}
