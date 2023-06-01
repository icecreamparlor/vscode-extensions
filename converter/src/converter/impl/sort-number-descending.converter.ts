import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class SortNumberDescendingConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.SortNumberDescending;
  }
  async convert(text: string): Promise<string> {
    return (
      text
        .match(/-?\d+(\.\d+)?/g)
        ?.sort((a, b) => Number(b) - Number(a))
        .filter((it) => Boolean(it))
        .join(",\n") ?? text
    );
  }
}
