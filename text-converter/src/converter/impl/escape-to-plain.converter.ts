import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class EscapeToPlainConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.EscapeToPlain;
  }
  async convert(text: string): Promise<string> {
    return text.replace(/\\(.)/g, "$1");
  }
}
