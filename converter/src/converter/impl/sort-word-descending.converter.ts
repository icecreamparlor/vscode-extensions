import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class SortWordDescendingConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.SortWordDescending;
  }
  async convert(text: string): Promise<string> {
    return text
      .replace(/[\.,\"\']/g, " ")
      .split(/\s/)
      .filter((it) => Boolean(it.trim()))
      .sort()
      .reverse()
      .join(",\n");
  }
}
