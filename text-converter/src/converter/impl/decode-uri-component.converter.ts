import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class DecodeUriComponentConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.DecodeUriComponent;
  }
  async convert(text: string): Promise<string> {
    return decodeURIComponent(text);
  }
}
