import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class SortWordAscendingConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.SortWordAscending;
  }
  async convert(text: string): Promise<string> {
    return text
      .replace(/[\.,\"\']/g, " ")
      .split(/\s/)
      .filter((it) => Boolean(it.trim()))
      .sort()
      .join(",\n");
  }
}
