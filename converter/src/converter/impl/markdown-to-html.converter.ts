import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class MarkdownToHtmlConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.MarkdownToHtml;
  }
  async convert(text: string): Promise<string> {
    const { markdown } = require("markdown");

    return markdown.toHTML(text);
  }
}
