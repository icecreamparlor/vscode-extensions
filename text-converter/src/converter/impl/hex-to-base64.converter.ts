import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class HexToBase64Converter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.HexToBase64;
  }
  convert(text: string): string {
    return Buffer.from(text, "hex").toString("base64");
  }
}
