import { COMMAND } from "../../constant";
import { convertToKotlinDataClass } from "../../util";
import { Converter } from "../converter";
import JSON5 = require("../../js/json5");

export class Json5ToKotlinDataClassConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.Json5ToKotlinDataClass;
  }
  async convert(text: string): Promise<string> {
    const obj = JSON5.parse(text);
    return convertToKotlinDataClass(obj, "Root");
  }
}
