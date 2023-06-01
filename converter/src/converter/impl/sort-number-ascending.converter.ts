import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class SortNumberAscendingConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.SortNumberAscending;
  }
  async convert(text: string): Promise<string> {
    return (
      text
        .match(/-?\d+(\.\d+)?/g)
        ?.sort((a, b) => Number(a) - Number(b))
        .filter((it) => Boolean(it))
        .join(",\n") ?? text
    );
  }
}
