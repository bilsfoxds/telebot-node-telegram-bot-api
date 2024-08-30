// callbacks/startCallbacks.js

const { startMenu, option1Menu, option2Menu, option3Menu, messageWelcome } = require("../export");

const handleStartMenu = async (bot, callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;
  const data = callbackQuery.data;

  try {
    if (data === "back_main") {
      // Jika tombol 'Back' diklik, kembali ke menu utama
      await bot.editMessageCaption(
        `
${messageWelcome}
Pilih salah satu opsi di bawah ini:
            `,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: startMenu.reply_markup,
        }
      );
    } else if (data === "option1") {
      // Jika Opsi 1 dipilih, tampilkan menu baru untuk Opsi 1
      await bot.editMessageCaption(
        `
${messageWelcome}
Menu Opsi 1 - Pilih salah satu sub-opsi di bawah ini:
            `,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: option1Menu.reply_markup,
        }
      );
    } else if (data === "option2") {
      // Jika Opsi 2 dipilih, tampilkan menu baru untuk Opsi 2
      await bot.editMessageCaption(
        `
${messageWelcome}
Menu Opsi 2 - Pilih salah satu sub-opsi di bawah ini:
            `,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: option2Menu.reply_markup,
        }
      );
    } else if (data === "option3") {
      // Jika Opsi 2 dipilih, tampilkan menu baru untuk Opsi 3
      await bot.editMessageCaption(
        `
${messageWelcome}
Menu Opsi 3 - Pilih salah satu sub-opsi di bawah ini:
            `,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: option3Menu.reply_markup,
        }
      );
    } else if (data.startsWith("sub_option")) {
      // Tangani sub-option jika diperlukan
      await bot.answerCallbackQuery(callbackQuery.id, { text: `Sub-option ${data} dipilih` });
      // Tindakan tambahan jika diperlukan
    }
  } catch (error) {
    console.error("Error handling callback query:", error);
  }
};

const handleBackToStart = async (bot, callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;

  if (callbackQuery.data === "back_to_start") {
    await bot.sendMessage(chatId, "Kembali ke menu /start:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Start Menu 1", callback_data: "start_menu_1" },
            { text: "Start Menu 2", callback_data: "start_menu_2" },
          ],
          [{ text: "Start Menu 3", callback_data: "start_menu_3" }],
        ],
      },
    });
  }
};

module.exports = {
  handleStartMenu,
  handleBackToStart,
};
