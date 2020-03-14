const lektioner = require("../lektioner.json");

exports.run = (bot, message, params)  => {
	let args = message.content.split(' ');
	let member = message.guild.member(message.mentions.users.first());
	if (!member) {
		message.channel.sendMessage(`please mention a user using @. For example, "!!ar @KDiaGaming#0463 ge2enc"`)
		return;

	} else if (member) {

		args.shift();
		args.shift();

		var i;
		for (i = 0; i < args.length; i++) {
			let lektionnamn = lektioner[args[i]];
			let role = message.guild.roles.find("name", lektionnamn);
			// Add the role!
			member.addRole(role.id).catch(console.error);
			message.channel.sendMessage("role " + args[i] + " has been added  👍");
		}

	return;

}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ar'],
  permLevel: 2
};

exports.help = {
  name : "addrole",
  description: "adds role to a user",
  usage: "addrole {user} [role]"
};
