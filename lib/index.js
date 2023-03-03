const { Configuration, OpenAIApi } = require("openai");
const config = require("../config");

const configuration = new Configuration({
  apiKey: config.API_KEY,
});

const openai = new OpenAIApi(configuration);

async function OpenAIcompletions(prompt) {
  const response = await openai.createCompletion({
    model: config.MODEL,
    prompt,
    max_tokens: config.MAX_TOKENS,
  });
  if (response?.data?.choices) {
    return response.data.choices[0].text.trim();
  }
  return "Error: No response from OpenAI API";
}

module.exports = OpenAIcompletions;
