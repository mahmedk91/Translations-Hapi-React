import axios from "axios";
import BACKEND_BASE_API_PATH from "./config";

class TranslationService {
  static async translate(
    source: string,
    target: string,
    text: string
  ): Promise<string> {
    let response: any = Object;
    try {
      const url =
        BACKEND_BASE_API_PATH +
        "/translate?source=" +
        source +
        "&target=" +
        target;
      response = await axios.post(url, { text: text });
    } catch (error) {
      // On error log the error
      console.log(error.message);
    }
    if (response.data) {
      return String(response.data);
    }
    return "";
  }
}

export default TranslationService;
