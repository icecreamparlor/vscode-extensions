import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class ToUpperCaseConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.ToUpperCase;
  }
  convert(text: string): string {
    return text.toUpperCase();
  }
}
