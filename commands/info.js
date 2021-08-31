const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "info",
  description: i18n.__('info.description'),
  execute(message) {
    return message.reply(
        "I am the official Music bot of ` Anam Hong ` Dicord server. Which developed by ` Panda ` . If you need any help then join our Discord server  ` https://discord.gg/9qvEuTk4VG ` "
      )
      .catch(console.error);
  }
};