import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class ToLowerCaseConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.ToLowerCase;
  }
  convert(text: string): string {
    return text.toLowerCase();
  }
}
