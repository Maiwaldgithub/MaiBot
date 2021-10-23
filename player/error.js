module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Es wird keine Musik abgespielt!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Du bist mit keinem Sprachkanal verbunden!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ich kann deinem Sprachkanal nicht beitreten, bitte überprüfe meine Berechtigungen.`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} ist in deinem Land nicht verfügbar, darum wird es übersprungen!`);
            break;
        case 'MusicStarting':
            message.channel.send(`Die Musik startet... Bitte warten und ggf. erneut versuchen!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Ein Fehler ist aufgetreten :/ Fehlercode ${error}`);
    };
};
