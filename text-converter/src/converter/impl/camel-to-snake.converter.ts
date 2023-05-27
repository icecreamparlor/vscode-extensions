import { COMMAND } from "../../constant";
import { camelToSnake } from "../../util";
import { Converter } from "../converter";

export class CamelToSnakeConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.CamelToSnake;
  }
  async convert(text: string): Promise<string> {
    return camelToSnake(text);
  }
}
