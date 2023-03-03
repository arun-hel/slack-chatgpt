const OpenAIcompletions = require("../lib");

function handleChaGPTCommand(data) {
  const { command, ack, say, respond } = data;
  ack().then(() => {
    const { text: prompt } = command;
    OpenAIcompletions(prompt).then((response) => {
      say({
        text: `<@${
          command.user_name
        }>: ${prompt.trim()}\nChat GPT: ${response}`,
      });
    });
  });
}

module.exports = {
  handleChaGPTCommand,
};
