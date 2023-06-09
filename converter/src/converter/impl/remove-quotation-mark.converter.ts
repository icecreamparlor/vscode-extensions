import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class RemoveQuotationMarkConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.RemoveQuotationMark;
  }
  async convert(text: string): Promise<string> {
    return text.replace(/[\"\'`]/g, "");
  }
}
