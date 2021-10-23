module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du befindest dich in keinem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht im gleichen Sprachkanal!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Bitte gib einen Liednamen an!`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};