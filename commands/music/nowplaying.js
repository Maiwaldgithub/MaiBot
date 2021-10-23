module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du befindest dich in keinem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht im gleichen Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zur Zeit wird keine Musik abgespielt!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Dieser Bot wurde von Maiwald erstellt und zur Verfügung gestellt.' },
                fields: [
                    { name: 'Kanal', value: track.author, inline: true },
                    { name: 'Vorgeschlagen von', value: track.requestedBy.username, inline: true },
                    { name: 'Aus der Playlist', value: track.fromPlaylist ? 'Ja' : 'Nein', inline: true },

                    { name: 'Aufrufe', value: track.views, inline: true },
                    { name: 'Dauer', value: track.duration, inline: true },
                    { name: 'aktivierte Filter', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Lautstärke', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Wiederholmodus', value: client.player.getQueue(message).repeatMode ? 'Ja' : 'Nein', inline: true },
                    { name: 'Aktuell pausiert', value: client.player.getQueue(message).paused ? 'Ja' : 'Nein', inline: true },

                    { name: 'Fortschritt', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};