import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class HtmlToMarkdownConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.HtmlToMarkdown;
  }
  async convert(text: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const TurndownService = require("turndown").default;
    const turndownService = new TurndownService();

    return turndownService.turndown(text);
  }
}
