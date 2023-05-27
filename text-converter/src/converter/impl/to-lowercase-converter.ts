import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class ToLowerCaseConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.ToLowerCase;
  }
  async convert(text: string): Promise<string> {
    return text.toLowerCase();
  }
}