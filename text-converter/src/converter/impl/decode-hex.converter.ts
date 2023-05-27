import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class DecodeHexConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.DecodeHex;
  }
  convert(text: string): string {
    return Buffer.from(text, "hex").toString("utf-8");
  }
}
