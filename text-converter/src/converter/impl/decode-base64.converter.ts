import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class DecodeBase64Converter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.DecodeBase64;
  }
  convert(text: string): string {
    return Buffer.from(text, "base64").toString("utf-8");
  }
}
