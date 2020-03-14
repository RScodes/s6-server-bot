const moment = require('moment');
exports.run = (bot, message) => {
  let noto = message.content.split(" ").slice(1).join(" ");
	  bot.channels.get('687596222491787269').sendMessage("**:information_source: Announcement [" + moment().format("Do MMMM YYYY ") + "]**", {embed: {
			color: 0x00b7c6,
			title: noto,
			footer: {
				text: `${message.author.username}#${message.author.discriminator}`,
				icon_url: message.author.avatarURL
			}
		}}).catch(console.error);
    message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name : "announce",
  description: "announces your message in #announcements",
  usage: "announce [your message]"
};
