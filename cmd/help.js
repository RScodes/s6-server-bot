const config = require("../config.json")

exports.run = (bot, message, params) => {
    if (!params[0]) {
      message.channel.sendMessage("check your dms :rocket:").catch(console.error);
      let modRole = message.guild.roles.find("name", "Class Rep");
      let adminRole = message.guild.roles.find("name", "Admin");
      var cmds = ``;
      cmds += `**Warning this is the dev rep so not all commands are fully functional** \n\n **My Normal Commands are:** \n
                ${config.prefix}membercount \n
                ${config.prefix}ping \n
                ${config.prefix}help \n
                ${config.prefix}stats \n
                ${config.prefix}userinfo \n
                ${config.prefix}uptime \n
                `;

      if (message.member.roles.has(modRole.id) || config.creator.Jimmy.includes(message.author.id)) {
          cmds += `\n\n **My Staff commands are** \n
                ${config.prefix}addrole {user} [class name] [class name] \n
                ${config.prefix}announce [what you want to announce in #announcements] \n

                \n more details on how to use these commands coming soon`;
      }
      if (message.member.roles.has(adminRole.id) || config.creator.Jimmy.includes(message.author.id)) {
          cmds += `\n\n **My Owner/Creator Commands are:** \n
                ${config.prefix}setbotavatarurl \n
                ${config.prefix}setstatus  \n
                ${config.prefix}setgame  \n
                ${config.prefix}shutdown `;

      }
      message.author.sendMessage(" ", {
          embed: {
              color: 0x00b7c6,
          title: "Command List",
          description: cmds,
    }}).catch(console.error);
  } else {
    let command = params[0];
    if(bot.commands.has(command)) {
      command = bot.commands.get(command);
         message.channel.sendMessage(" ", {
          embed: {
              color: 0x00b7c6,
          title: `${command.help.name} = \n ${command.help.description}. \n \n usage: ${command.help.usage}`
    }}).catch(console.error);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "help",
  description: "Returns page details from root's awesome bot guide.",
  usage: "help [command]"
};
