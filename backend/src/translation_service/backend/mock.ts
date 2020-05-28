import { TranslationServiceType } from "../translation_service";

export class MockBackend implements TranslationServiceType {
  async translate(
    source: string,
    target: string,
    text: string
  ): Promise<string> {
    return "foo";
  }
}
