import { COMMAND } from "../../constant";
import { snakeToCamel } from "../../util";
import { Converter } from "../converter";

export class SnakeToCamelConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.SnakeToCamel;
  }
  convert(text: string): string {
    return snakeToCamel(text);
  }
}
