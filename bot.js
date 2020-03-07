const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-"


client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity( prefix + "ignore [user]");

})

client.on("message", async (msg) => {
    
    if (msg.author.bot) return;

    if (msg.content.toLowerCase().startsWith(prefix + "ignore")) {

        let member = msg.mentions.members.first();
        await msg.channel.send("Shhh " + msg.author + ". You have been hushed for 30 seconds");
        let role = msg.guild.roles.find(r => r.name === "Muted");

        await msg.guild.members.get(member.id).addRole(role);
        setTimeout(async () => {
            await msg.guild.members.get(member.id).removeRole(role);
        }, 30000)

        console.log("Now ignoring: " + member.user)

    }

});


bot_secret_token = "NjU5OTcxODY0ODk0MTExNzU0.XmM8Ig.P4-6KJ1SSVmpT2guEHg8stNAY-c"

client.login(bot_secret_token)