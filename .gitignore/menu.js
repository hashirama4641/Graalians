const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN)

var prefix = ("<");

client.on("message", (message) => {

    if(message.content === "bonjour") {
        message.channel.send("Salutation!")
    }

    if(message.content === prefix + "help"){
        message.channel.send("veux-tu de l'aide?")
    }


});
