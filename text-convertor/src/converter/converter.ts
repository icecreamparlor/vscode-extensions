export interface Converter {
  isSupport(command: string): boolean;
  convert(text: string): string;
  onError(error: Error): void;
}
