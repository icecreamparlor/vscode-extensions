import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class EscapeToPlainConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.EscapeToPlain;
  }
  async convert(text: string): Promise<string> {
    return text.replace(/\\(.)/g, "$1");
  }
}
