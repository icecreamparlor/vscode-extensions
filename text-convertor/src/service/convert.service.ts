import { DEFAULT_CONVERTERS } from "../constant";
import { Converter } from "../converter/converter";
import { die } from "../util";

export class ConvertService {
  constructor(private readonly _convertors: Converter[]) {}

  convert(convertType: string, text: string) {
    const converter =
      this._convertors.find((it) => it.isSupport(convertType)) ??
      die(new Error("Converter not found"));

    try {
      return converter.convert(text);
    } catch (e) {
      converter.onError(e as Error);

      throw e;
    }
  }
}

export const convertService = new ConvertService(DEFAULT_CONVERTERS);
