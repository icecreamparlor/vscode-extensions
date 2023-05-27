import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class ToUpperCaseConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.ToUpperCase;
  }
  async convert(text: string): Promise<string> {
    return text.toUpperCase();
  }
}
