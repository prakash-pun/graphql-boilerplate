import "dotenv/config";
import { SERVER } from "./constant/text.constant";
import createServer from "./server";
/**
 * Start Server
 */
const startServer = async () => {
  const app = createServer();

  const port: number = parseInt(<string>process.env.PORT) || 3000;

  (await app).listen(port, () => {
    console.log(`${SERVER}${port}`);
  });
};

startServer();
