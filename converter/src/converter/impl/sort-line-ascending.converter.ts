import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class SortLineAscendingConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.SortLineAscending;
  }
  async convert(text: string): Promise<string> {
    return text
      .split("\n")
      .filter((it) => Boolean(it.trim()))
      .sort()
      .join("\n");
  }
}
