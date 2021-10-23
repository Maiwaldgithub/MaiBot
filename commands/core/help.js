module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Hilfe' },
                    footer: { text: 'Dieser Bot wurde von Maiwald erstellt und zur Verfügung gestellt.' },
                    fields: [
                        { name: 'System', value: infos },
                        { name: 'Musik', value: music },
                        { name: 'Filter', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Um Filter zu benutzen, ${client.config.discord.prefix}filter (der Filter). Beispiel: ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Dieser Befehl wurde nicht gefunden!`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Hilfe' },
                    footer: { text: 'Dieser Bot wurde von Maiwald erstellt und zur Verfügung gestellt.' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Kategorie', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Verwendung', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};