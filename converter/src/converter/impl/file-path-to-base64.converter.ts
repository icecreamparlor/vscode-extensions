import * as fs from "fs";
import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class FilePathToBase64Converter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.FilePathToBase64;
  }
  async convert(text: string): Promise<string> {
    const buffer = fs.readFileSync(text);

    return buffer.toString("base64");
  }
}
