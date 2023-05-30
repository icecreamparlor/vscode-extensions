import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class FilePathToBase64Converter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.FilePathToBase64;
  }
  async convert(text: string): Promise<string> {
    if (text.startsWith(".")) {
      const filePath = path.resolve(__dirname, text);
      const buffer = fs.readFileSync(filePath);

      return buffer.toString("base64");
    }

    if (text.startsWith("~")) {
      const homeDir = os.homedir();
      const filePath = path.resolve(homeDir, text.replace("~", "."));
      const buffer = fs.readFileSync(filePath);

      return buffer.toString("base64");
    }

    const buffer = fs.readFileSync(text);

    return buffer.toString("base64");
  }
}
