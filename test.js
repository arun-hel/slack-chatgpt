const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY.trim(),
});

const openai = new OpenAIApi(configuration);

async function main() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "what is google?.",
    max_tokens: 2048,
  });

  console.log(response.data.choices[0].text);
}

main();
