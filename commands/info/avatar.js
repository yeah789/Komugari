const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

//remember to return before every promise
module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: ['dp'],
            group: 'info',
            memberName: 'avatar',
            description: 'Shows the avatar of the specified user or yourself!',
            examples: ['~avatar <mention>'],
            args: [
				{
					key: 'user',
					prompt: 'Which user would you like to get the avatar of?',
					type: 'user',
					default: ''
				}
			]
        });
    }

    run(message, args) {
		const user = args.user || message.author;
		if (!user.avatar) return message.channel.send('This user does not have an avatar!');
		const avatar = user.avatarURL({
			format: user.avatar.startsWith('a_') ? 'gif' : 'png',
			size: 2048
		});
		return message.channel.send(avatar);
	}
}