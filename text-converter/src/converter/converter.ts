export interface Converter {
  shouldHandle(command: string): boolean;
  convert(text: string): Promise<string>;
  onError?(error: Error): void;
}
