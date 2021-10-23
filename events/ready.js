module.exports = async (client) => {
    console.log(`Eingeloggt als ${client.user.username}. Verfügbar auf ${client.guilds.cache.size} Servern, für insgesamt ${client.users.cache.size} Benutzer.`);

    client.user.setActivity(client.config.discord.activity);
};