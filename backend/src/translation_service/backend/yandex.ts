import axios from "axios";
import { TranslationServiceType } from "../translation_service";
import { stringify } from "querystring";

const yandexAPIPath: string =
  "https://translate.yandex.net/api/v1.5/tr.json/translate";
const yandexAPIKey: string = process.env.YANDEX_API_KEY;

export class YandexBackend implements TranslationServiceType {
  async translate(
    source: string,
    target: string,
    text: string
  ): Promise<string> {
    let response: any = Object;
    try {
      const sourceToTarget = source + "-" + target;

      const url =
        yandexAPIPath + "?lang=" + sourceToTarget + "&key=" + yandexAPIKey;

      const data = stringify({
        text: text
      });

      const headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      };

      response = await axios.post(url, data, {
        headers
      });
    } catch (error) {
      console.log(error.message);
    }
    if (response.data) {
      return String(response.data.text[0]);
    }
    return "";
  }
}
