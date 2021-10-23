module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du befindest dich in keinem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht im gleichen Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zur Zeit wird keine Musik abgespielt!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Die Musik spielt schon!`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Lied ${client.player.getQueue(message).playing.title} fortgesetzt!`);
    },
};