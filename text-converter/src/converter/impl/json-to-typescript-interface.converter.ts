import * as JSON5 from "../../js/json5";

import JSONToTypescript from "json-to-ts";
import { COMMAND } from "../../constant";
import { Converter } from "../converter";

export class Json5ToTypescriptInterfaceConverter implements Converter {
  isSupport(command: string): boolean {
    return command === COMMAND.JSON5ToTypescriptInterface;
  }
  async convert(jsonString: string): Promise<string> {
    const obj = JSON5.parse(jsonString);

    return JSONToTypescript(obj).reduce(
      (code, typescriptInterface) => `${code}\n\n${typescriptInterface}`,
      ""
    );
  }
}
