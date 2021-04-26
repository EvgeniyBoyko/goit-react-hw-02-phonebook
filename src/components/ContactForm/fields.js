export const fields = {
  userName: {
    type: "text",
    name: "userName",
    title: "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
    required: true,
  },
  userPhone: {
    type: "tel",
    name: "userPhone",
    title: "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
    required: true,
  }
};