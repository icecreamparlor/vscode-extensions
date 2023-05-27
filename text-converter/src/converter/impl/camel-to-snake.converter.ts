import { COMMAND } from "../../constant";
import { camelToSnake } from "../../util";
import { Converter } from "../converter";

export class CamelToSnakeConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.CamelToSnake;
  }
  convert(text: string): string {
    return camelToSnake(text);
  }
}
