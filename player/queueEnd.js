module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Die Musik wurde beendet, da die Warteschlange zu Ende ist.`);
};