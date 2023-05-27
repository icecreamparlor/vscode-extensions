import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class EncodeUriComponentConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.EncodeUriComponent;
  }
  convert(text: string): string {
    return encodeURIComponent(text);
  }
}
