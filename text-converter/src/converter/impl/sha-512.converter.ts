import * as crypto from "crypto";

import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class Sha512Converter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.SHA512;
  }
  convert(text: string): string {
    return crypto.createHash("sha512").update(text).digest("hex");
  }
}
