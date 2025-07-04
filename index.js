const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`✅ Bejelentkezve: ${client.user.tag}`);
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.systemChannel;
  if (channel) {
    channel.send(`❄️ Üdv a FrostNetwork világában, ${member}!  
Ne maradj le semmiről:
• 📜 Csekkold a Szabályzatot
• 🎭 Válassz stílust a Szerepfelvételben
• 🗞️ Kövesd a Friss infókat

🧊 Csevegj, játssz, nevess – vagy csak dobj be egy menő gifet. Ez nem csak egy szerver. Ez élmény. Üdv itthon!`);
  }
});

client.login("MTM1ODUzMjM0NDI2ODU4NzE4MQ.GjJBB8.jQpLjvh_wP29U2B87lJNtCi3yvzGIMGd32WRT4");
