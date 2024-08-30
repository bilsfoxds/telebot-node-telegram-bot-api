// handlers/startHandler.js

const { handleStartMenu, handleBackToStart } = require("../callbacks/startCallback");
const { startMenu, messageWelcome } = require("../export");
const path = require("path");

const startHandler = (bot) => {
  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    const imagePath = path.join(__dirname, "..", "assets", "images", "image-rajabet.png");

    try {
      // Mengirim gambar
      await bot.sendPhoto(chatId, imagePath, {
        caption: `
            ${messageWelcome}
            `,
        reply_markup: startMenu.reply_markup,
      });
    } catch (error) {
      console.error("Error handling /start command:", error);
    }
  });

  bot.on("callback_query", async (callbackQuery) => {
    await handleStartMenu(bot, callbackQuery);
  });
};

module.exports = startHandler;
