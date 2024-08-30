require("dotenv").config();

module.exports = {
  token: process.env.TELEGRAM_BOT_TOKEN,
  chatId: process.env.CHAT_ID, // ID grup atau chat pribadi
};
