const Discord = require('discord.js')
const client = new Discord.Client()
ignored = " ";
const prefix = "-"


client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity( prefix + "ignore [user]");

})

client.on("message", async (msg) => {
    
    if (msg.author.bot) return;

    if (msg.author.username == ignored) {

        (async () => {
            await msg.channel.send("Shhh " + msg.author + ". You have been hushed for 30 seconds");
            let role = msg.guild.roles.find(r => r.name === "Muted");
            await msg.guild.members.get(msg.author.id).addRole(role);
            wait(30000);
            await msg.guild.members.get(msg.author.id).removeRole(role);
        })();
    }
    else if (msg.content.toLowerCase().startsWith(prefix + "ignore")) {

        (async () => {
            let member = msg.mentions.members.first();
            await msg.channel.send("User: " + member.user + " is now hushed");
            ignored = member.user.username;
            console.log("Not ignoring: " + ignored)
        })();

    }

});

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

bot_secret_token = "NjU5OTcxODY0ODk0MTExNzU0.XmMMtw.qmjlAMMZsOIZhNz7U1j6VmuWnpI"

client.login(bot_secret_token)