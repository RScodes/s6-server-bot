const moment = require('moment');
const Discord = require('discord.js');
const randomcolor = require('randomcolor');

exports.run = (bot, message) => {
    let member = message.guild.member(message.mentions.users.first());
    if (!member) {
      return message.channel.sendMessage("Please mention a user :)")
    }
		var embed = new Discord.RichEmbed();
		embed.addField("Username", `${member.user.username}#${member.user.discriminator}`, true)
			.addField("ID", `${member.user.id}`, true)
			.setColor(randomcolor())
			.setFooter(' ', ' ')
			.setThumbnail(`${member.user.avatarURL}`)
			.setTimestamp()
			.setURL(`${member.user.avatarURL}`)
			.addField('Currently', `${member.user.presence.status}`, true)
			.addField('Game', `${member.user.presence.game === null ? "No Game" : member.presence.game.name}`, true)
			.addField('Joined Discord', `${moment(member.user.createdAt).format('DD.MM.YY')}`, true)
			.addField('Joined Server', `${moment(member.user.joinedAt).format('DD.MM.YY')}`, true)
			.addField('Roles', `\`${member.roles.filter(r => r.name).size}\``, true)
			.addField('Is Bot', `${member.user.bot}`, true)
		message.channel.sendEmbed(
			embed, {
				disableEveryone: true
			}
		);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "userinfo",
  description: "sends a users information",
  usage: "userinfo {user (optional)}"
};
