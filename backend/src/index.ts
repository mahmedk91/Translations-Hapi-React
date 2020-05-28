import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import {
  TranslationService,
  TranslationServiceType
} from "./translation_service/translation_service";

const host = "localhost";
const port = 3001;

/** App */
const server: Server = new Server({
  host,
  port,
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Accept", "Content-Type"],
      additionalHeaders: ["X-Requested-With"]
    }
  }
});

/** Routes */
server.route({
  method: "POST",
  path: "/translate",
  handler: async (request: Request, h: ResponseToolkit) => {
    const translation: TranslationServiceType = new TranslationService();
    const translated_text: string = await translation.translate(
      String(request.query.source),
      String(request.query.target),
      String(request.payload["text"])
    );
    return translated_text;
  }
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running @ ${server.info.uri}`);
}

start();
