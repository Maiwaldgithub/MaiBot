module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Hier sind deine Suchergebnisse für ${query}` },
            footer: { text: 'Dieser Bot wurde von Maiwald erstellt und zur Verfügung gestellt.' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};