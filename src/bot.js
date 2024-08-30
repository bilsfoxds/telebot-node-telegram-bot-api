const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
const newMemberHandler = require("./handlers/wellcomeHandler");
const startHandler = require("./handlers/startHandler");
const scheduler = require("./services/scheduler");

// Tambahkan Express server
const express = require("express");
const app = express();

// Endpoint root, bisa diakses di browser untuk melihat status bot
app.get("/", (req, res) => {
  res.send("Bot is running!");
});

// Jalankan server pada port yang disediakan oleh Glitch
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

const bot = new TelegramBot(config.token, { polling: true });

newMemberHandler(bot);
startHandler(bot);

scheduler.start(bot);

console.log("Bot is running...");
