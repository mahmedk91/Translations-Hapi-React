// import { MockBackend } from "./backend/mock";
import { YandexBackend } from "./backend/yandex";
import { MockBackend } from "./backend/mock";

export class TranslationService implements TranslationServiceType {
  private backend: TranslationServiceType;

  constructor() {
    // this.backend = new YandexBackend();
    this.backend = new MockBackend();
  }

  async translate(
    source: string,
    target: string,
    text: string
  ): Promise<string> {
    return this.backend.translate(source, target, text);
  }
}

export interface TranslationServiceType {
  translate(source: string, target: string, text: string): Promise<string>;
}
