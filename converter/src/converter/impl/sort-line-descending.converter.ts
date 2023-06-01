import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class SortLineDescendingConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.SortLineDescending;
  }
  async convert(text: string): Promise<string> {
    return text
      .split("\n")
      .filter((it) => Boolean(it.trim()))
      .sort()
      .reverse()
      .join("\n");
  }
}
