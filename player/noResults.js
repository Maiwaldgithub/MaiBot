module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Keine Suchergebnisse auf Youtube für ${query} !`);
};