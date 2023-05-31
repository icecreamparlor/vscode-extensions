import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class SortDescendingConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.SortDescending;
  }
  async convert(text: string): Promise<string> {
    return text.split(/\s/).sort().reverse().join("\n");
  }
}
