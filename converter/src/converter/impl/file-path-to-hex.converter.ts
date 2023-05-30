import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class FilePathToHexConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.FilePathToHex;
  }
  async convert(text: string): Promise<string> {
    if (text.startsWith(".")) {
      const filePath = path.resolve(__dirname, text);
      const buffer = fs.readFileSync(filePath);

      return buffer.toString("hex");
    }

    if (text.startsWith("~")) {
      const homeDir = os.homedir();
      const filePath = path.resolve(homeDir, text.replace("~", "."));
      const buffer = fs.readFileSync(filePath);

      return buffer.toString("hex");
    }

    const buffer = fs.readFileSync(text);

    return buffer.toString("hex");
  }
}
