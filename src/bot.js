const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
const newMemberHandler = require("./handlers/wellcomeHandler");
const startHandler = require("./handlers/startHandler");
const scheduler = require("./services/scheduler");

const bot = new TelegramBot(config.token, { polling: true });

newMemberHandler(bot);
startHandler(bot);

scheduler.start(bot);

console.log("Bot is running...");
