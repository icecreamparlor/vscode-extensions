import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class SortAscendingConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.SortAscending;
  }
  async convert(text: string): Promise<string> {
    return text.split(/\s/).sort().join("\n");
  }
}
