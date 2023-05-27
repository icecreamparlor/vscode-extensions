import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class EncodeHexConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.EncodeHex;
  }
  async convert(text: string): Promise<string> {
    return Buffer.from(text).toString("hex");
  }
}
