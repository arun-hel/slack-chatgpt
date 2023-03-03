const dotenv = require("dotenv");
dotenv.config();

const config = {
  API_KEY: process.env.OPENAI_API_KEY.trim(),
  MODEL: "text-davinci-003",
  MAX_TOKENS: 2048,
};

module.exports = config;
