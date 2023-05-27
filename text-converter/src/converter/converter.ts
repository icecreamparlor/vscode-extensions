export interface Converter {
  isSupport(command: string): boolean;
  convert(text: string): Promise<string>;
  onError?(error: Error): void;
}
