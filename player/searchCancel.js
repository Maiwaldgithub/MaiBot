module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Du hast keine richtige Antwort angegeben. Bitte sende den Befehl erneut!`);
};