import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class EncodeUriComponentConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.EncodeUriComponent;
  }
  async convert(text: string): Promise<string> {
    return encodeURIComponent(text);
  }
}
