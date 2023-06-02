import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class EscapeSequenceToPlainTextConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.EscapeSequenceToPlainText;
  }
  async convert(text: string): Promise<string> {
    const escapeSequences: Record<string, string> = {
      "\\\\": "\\", // 백슬래시 (\)
      "\\'": "'", // 작은따옴표 (')
      '\\"': '"', // 큰따옴표 (")
      "\\n": "\n", // 줄바꿈
      "\\r": "\r", // 캐리지 리턴
      "\\t": "\t", // 탭
      "\\b": "\b", // 백스페이스
      "\\f": "\f", // 폼 피드
    };

    return text.replace(/\\./g, (match) => {
      return escapeSequences[match] || match;
    });
  }
}
