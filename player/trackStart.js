module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Jetzt wird ${track.title} in ${message.member.voice.channel.name} abgespielt!`);
};