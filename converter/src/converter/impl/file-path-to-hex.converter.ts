import * as fs from 'fs';
import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class FilePathToHexConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.FilePathToHex;
  }
  async convert(text: string): Promise<string> {
    const buffer = fs.readFileSync(text);
    
    return buffer.toString('hex');
  }
}
