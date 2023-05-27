import * as crypto from "crypto";

import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class Sha256Converter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.SHA256;
  }
  convert(text: string): string {
    return crypto.createHash("sha256").update(text).digest("hex");
  }
}
