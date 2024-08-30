// callbacks/welcomeCallbacks.js

const { newMemberMainMenu, newMemberOption1, newMemberOption2, newMemberOption3, messageWelcome, msgNewMember } = require("../export");

const handleWelcomeMenu = async (bot, callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;
  const data = callbackQuery.data;
  const memberNew = callbackQuery.from;

  try {
    if (data === "back_welcome_main") {
      // Jika tombol 'Back' diklik, kembali ke menu utama
      await bot.editMessageCaption(
        `
${msgNewMember(memberNew)}
${messageWelcome}
Pilih salah satu opsi di bawah ini:
            `,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: newMemberMainMenu.reply_markup,
        }
      );
    } else if (data === "newMember-option1") {
      // Jika Opsi 1 dipilih, tampilkan menu baru untuk Opsi 1
      await bot.editMessageCaption(
        `
${msgNewMember(memberNew)}
${messageWelcome}
Menu Opsi 1 - Pilih salah satu sub-opsi di bawah ini:
            `,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: newMemberOption1.reply_markup,
        }
      );
    } else if (data === "newMember-option2") {
      // Jika Opsi 2 dipilih, tampilkan menu baru untuk Opsi 2
      await bot.editMessageCaption(
        `
${msgNewMember(memberNew)}
${messageWelcome}
Menu Opsi 2 - Pilih salah satu sub-opsi di bawah ini:
            `,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: newMemberOption2.reply_markup,
        }
      );
    } else if (data === "newMember-option3") {
      // Jika Opsi 2 dipilih, tampilkan menu baru untuk Opsi 3
      await bot.editMessageCaption(
        `
${msgNewMember(memberNew)}
${messageWelcome}
Menu Opsi 3 - Pilih salah satu sub-opsi di bawah ini:
            `,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: newMemberOption3.reply_markup,
        }
      );
    } else if (data.startsWith("sub_option_newmember")) {
      // Tangani sub-option jika diperlukan
      await bot.answerCallbackQuery(callbackQuery.id, { text: `Sub-option ${data} dipilih` });
      // Tindakan tambahan jika diperlukan
    }
  } catch (error) {
    console.error("Error handling callback query:", error);
  }
};

const handleBackToWelcome = async (bot, callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;

  if (callbackQuery.data === "back_to_welcome") {
    await bot.sendMessage(chatId, "Kembali ke menu selamat datang:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Menu 1", callback_data: "welcome_menu_1" },
            { text: "Menu 2", callback_data: "welcome_menu_2" },
          ],
          [{ text: "Menu 3", callback_data: "welcome_menu_3" }],
        ],
      },
    });
  }
};

module.exports = {
  handleWelcomeMenu,
  handleBackToWelcome,
};
