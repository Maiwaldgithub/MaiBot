module.exports = {
    name: 'support',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}support',

    execute(client, message) {
        message.channel.send(`Einladungslink zum **Supportserver**:
https://discord.gg/UNztdaZ2ZA`);
    },
};