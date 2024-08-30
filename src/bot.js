// // src/bot.js
// const TelegramBot = require("node-telegram-bot-api");
// const config = require("./config");

// const newMemberHandler = require("./handlers/wellcomeHandler");
// const startHandler = require("./handlers/startHandler");

// const bot = new TelegramBot(config.token, { polling: true });

// newMemberHandler(bot);
// startHandler(bot);

// scheduler.start(bot);

// console.log("Bot is running...");

const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
const newMemberHandler = require("./handlers/wellcomeHandler");
const startHandler = require("./handlers/startHandler");
const scheduler = require("./scheduler"); // Pastikan scheduler diimport dengan benar

const bot = new TelegramBot(config.token, { polling: true });

bot.on("polling_error", (error) => {
  console.error("Polling error:", error);
});

bot.on("webhook_error", (error) => {
  console.error("Webhook error:", error);
});

newMemberHandler(bot);
startHandler(bot);

scheduler.start(bot);

console.log("Bot is running...");
