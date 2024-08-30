// Menu utama
const startMenu = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Promo 1", callback_data: "option1" },
        { text: "Promo 2", callback_data: "option2" },
      ],
      [{ text: "Link Active", callback_data: "option3" }],
    ],
  },
};

// Menu untuk Opsi 1
const option1Menu = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Gratis Spin", callback_data: "sub_option1_1" },
        { text: "Gratis WD", callback_data: "sub_option1_2" },
      ],
      [{ text: "Kembali ke Menu Utama", callback_data: "back_main" }],
    ],
  },
};

// Menu untuk Opsi 2
const option2Menu = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Anti Rungkad", callback_data: "sub_option2_1" },
        { text: "Paket Kilat", callback_data: "sub_option2_2" },
      ],
      [{ text: "Kembali ke Menu Utama", callback_data: "back_main" }],
    ],
  },
};

// Menu untuk Opsi 2
const option3Menu = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "RAJABET", url: "https://www.rajabet.com" },
        { text: "BIGTOTO", url: "https://www.bigtoto.com" },
      ],
      [{ text: "Kembali ke Menu Utama", callback_data: "back_main" }],
    ],
  },
};

const newMemberMainMenu = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "New Member Promo 1", callback_data: "newMember-option1" },
        { text: "New Member Promo 2", callback_data: "newMember-option2" },
      ],
      [{ text: "Link Active", callback_data: "newMember-option3" }],
    ],
  },
};

const newMemberOption1 = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "New Member Promo 1", callback_data: "sub_option_newmember_1" },
        { text: "New Member Promo 2", callback_data: "sub_option_newmember_2" },
      ],
      [{ text: "Kembali ke Menu Utama", callback_data: "back_welcome_main" }],
    ],
  },
};

const newMemberOption2 = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "New Member Promo 1", callback_data: "sub_option_newmember_1" },
        { text: "New Member Promo 2", callback_data: "sub_option_newmember_2" },
      ],
      [{ text: "Kembali ke Menu Utama", callback_data: "back_welcome_main" }],
    ],
  },
};
const newMemberOption3 = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "RAJABET", url: "https://www.rajabet.com" },
        { text: "BIGTOTO", url: "https://www.bigtoto.com" },
      ],
      [{ text: "Kembali ke Menu Utama", callback_data: "back_welcome_main" }],
    ],
  },
};

const messageWelcome = `
Promo & Bonus Spektakuler :
📌  Bonus New Member 50%
📌  Petir Merah Tukar Saldo
📌  Extra Freespin 20% PG & PP
📌  Maxwin Dibayar 2x Lipat
📌  Pulsa Tanpa Potongan
`;

const msgNewMember = (member) => {
  console.log("MEMBER: ", member);
  return `Selamat datang, ${member.first_name}! Semoga Anda betah di grup ini.`;
};

module.exports = {
  startMenu,
  option1Menu,
  option2Menu,
  option3Menu,
  messageWelcome,
  msgNewMember,
  newMemberMainMenu,
  newMemberOption1,
  newMemberOption2,
  newMemberOption3,
};
