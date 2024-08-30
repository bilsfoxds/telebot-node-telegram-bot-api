// handlers/newMemberHandler.js

const { handleWelcomeMenu, handleBackToWelcome } = require("../callbacks/wellcomeCallback");
const { msgNewMember, messageWelcome, newMemberMainMenu } = require("../export");
const path = require("path");

const newMemberHandler = (bot) => {
  bot.on("new_chat_members", async (msg) => {
    const chatId = msg.chat.id;
    const newMembers = msg.new_chat_members;

    // await bot.sendMessage(chatId, welcomeMessage, welcomeMenu);
    newMembers.forEach(async (member) => {
      if (member.is_bot) {
        return; // Jangan menyapa bot
      }

      // Path gambar
      const imagePath = path.join(__dirname, "..", "assets", "images", "image-rajabet.png");

      try {
        // Mengirim gambar
        await bot.sendPhoto(chatId, imagePath, {
          caption: `
            ${msgNewMember(member)}
            ${messageWelcome}
          `,
          reply_markup: newMemberMainMenu.reply_markup,
        });
      } catch (error) {
        console.error("Error handling /start command:", error);
      }
    });
  });

  bot.on("callback_query", async (callbackQuery) => {
    await handleWelcomeMenu(bot, callbackQuery);
  });
};

module.exports = newMemberHandler;
