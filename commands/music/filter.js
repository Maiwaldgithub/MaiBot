module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du befindest dich in keinem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht im gleichen Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zur Zeit wird keine Musik abgespielt!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Bitte gib einen Filter an, den du anwenden oder entfernen möchtest!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Dieser Filter existiert nicht, versuche stattdessen zum Beispiel (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Filter wird **hinzugefügt!** Hinweis: je länger das Lied ist, desto länger dauert das Anwenden des Filters!`);
        else message.channel.send(`${client.emotes.music} - Filter wird **entfernt!** Hinweis: je länger das Lied ist, desto länger dauert das Entfernen des Filters!`);
    },
};