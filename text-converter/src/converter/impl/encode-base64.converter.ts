import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class EncodeBase64Converter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.EncodeBase64;
  }
  convert(text: string): string {
    return Buffer.from(text).toString("base64");
  }
}
