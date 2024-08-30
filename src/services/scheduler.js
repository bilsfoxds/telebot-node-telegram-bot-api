const schedule = require("node-schedule");
const path = require("path");
const config = require("../config");

module.exports.start = (bot) => {
  // Jadwalkan tugas setiap 1 menit
  schedule.scheduleJob("* * * * *", async () => {
    // Pastikan chatId sudah didefinisikan dengan benar
    const chatId = config.chatId;

    if (!chatId) {
      console.error("Chat ID belum didefinisikan di config");
      return;
    }

    // Path gambar
    // const imagePath = path.join(__dirname, "..", "assets", "images", "image-rajabet.png");
    const imagePath = path.join(__dirname, "..", "assets", "videos", "video-rajabet.mp4");

    try {
      // Kirim gambar
      await bot.sendVideo(chatId, imagePath, {
        caption: `
Promo & Bonus Spektakuler :
📌  Bonus New Member 50%
📌  Petir Merah Tukar Saldo
📌  Extra Freespin 20% PG & PP
📌  Maxwin Dibayar 2x Lipat
📌  Pulsa Tanpa Potongan

Daftar Slot Gacor KODE4D :
✅  https://bit.ly/4ciawuF 
✅  https://bit.ly/4ciawuF 
        `,
        reply_markup: {
          inline_keyboard: [[{ text: "Pilihan 1", callback_data: "option1" }], [{ text: "Pilihan 2", callback_data: "option2" }]],
        },
      });
    } catch (error) {
      console.error("Error sending photo or message:", error);
    }
  });
};
