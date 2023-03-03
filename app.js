const { App } = require("@slack/bolt");
const dotenv = require("dotenv");
dotenv.config();

const { handleChaGPTCommand } = require("./utils");

const app = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.BOT_TOKEN,
});

app.command("/chatgpt", handleChaGPTCommand);

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
