const OpenAIcompletions = require("../lib");

async function handleChaGPTCommand(data) {
  let respond;
  try {
    const { command, ack, say } = data;
    respond = data.respond;
    const { text: prompt } = command;
    await ack();
    if (!prompt) return respond({ text: "Please provide a prompt" });
    const response = await OpenAIcompletions(prompt);
    say({
      text: `<@${command.user_name}>: ${prompt.trim()}\nChat GPT: ${response}`,
    });
  } catch (error) {
    console.error(error);
    respond({ text: `Sorry, an error occurred\nError: ${error.message}` });
  }
}

module.exports = {
  handleChaGPTCommand,
};
