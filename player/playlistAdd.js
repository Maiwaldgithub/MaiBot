module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} wurde zur Warteschlange hinzugefügt (**${playlist.tracks.length}** Lieder) !`);
};