const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")
const { tick } = require('../../JSON/emoji.json');


module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`AE Bot Ayuda`)
    .setDescription(`${tick} Hola **${message.author.username}**, \n *Elija una categoría a continuación para ver los comandos* \n\n :question: ¿Eres nuevo en AE Bot? si necesitas ayuda entra al servidor de soporte \n ${support} \n\n Para encontrar alias de comandos, ha visto el uso después del prefijo. Si no hay alias de ese comando, entonces habrá un comando predeterminado`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setFooter(`Requested by: ${message.author.tag}`)


    const anime = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Anime`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Aquí están todos los comandos de anime: \n\n \`hug\`: **Usage**: \`${prefix}\`hug @user \n\n \`kiss\`: **Usage**: \`${prefix}\`kidd @user \n\n  \`lick\`: **Usage**: \`${prefix}\`lick @user \n\n \`pat\`: **Usage**: \`${prefix}\`pat @user \n\n \`bite\`: **Usage**: \`${prefix}\`bite @user \n\n \`feed\`: **Usage**: \`${prefix}\`feed @user \n\n \`purpose\`: **Usage**: \`${prefix}\`purpose @user`)
    .setFooter(`Requested by: ${message.author.tag}`)

    const fun = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Fun`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Aquí están todos los comandos divertidos: \n\n \`snake\`: **Usage**: \`${prefix}\`snake \n\n \`fight\`: **Usage**: \`${prefix}\`${prefix}\`quickclick\`: **Usage**: \`${prefix}\`qc \n\n \`wouldyourather\`: **Usage**: \`${prefix}\`wyb \n\n \`willyoupressthebutton\`: **Usage**: \`${prefix}\`wyb \n\n \`trivia\`: **Usage**: \`${prefix}\`trivia`)
    .setFooter(`Requested by: ${message.author.tag}`)


    const info = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Info`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Aquí están todos los comandos de información: \n\n \`help\`: **Usage** \`${prefix}\`help \n\n \`invite\`: **Usage** \`${prefix}\`inv \n\n \`calculator\`: **Usage** \`${prefix}\`math`)
    .setFooter(`Requested by: ${message.author.tag}`)


    const mod = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Moderation`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Aquí están todos los comandos de moderación: \n\n \`ban\`: **Usage** \`${prefix}\`ban <@user> <reason> \n\n \`kick\`: **Usage** \`${prefix}\`kick <@user> <reason> \n\n \`deletechannel\`: **Usage** \`${prefix}\`dc <#channel> <reason> \n\n \`deleterole\`: **Usage** \`${prefix}\`dr <@&role> <reason>`)
    .setFooter(`Requested by: ${message.author.tag}`)

    const eco = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`NSFW`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(` **Usage** ${prefix}\`porn`)
    .setFooter(`Requested by: ${message.author.tag}`)

    let button1 = new MessageButton()
    .setLabel(`Anime`)
    .setID(`anime`)
    .setStyle("green");
    

    let button2 = new MessageButton()
    .setLabel(`Info`)
    .setID(`info`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`Mod`)
    .setID(`mod`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Nsfw`)
    .setID(`eco`)
    .setStyle("green");

    let button5 = new MessageButton()
    .setLabel(`Fun`)
    .setID(`fun`)
    .setStyle("green");


    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "anime") {

            MESSAGE.edit(anime, row);
            await b.reply.defer()
            
        }

         if(b.id == "fun") {

            MESSAGE.edit(fun, row);
            await b.reply.defer()
            
        }

        if(b.id == "info") {
            
            MESSAGE.edit(info, row);
            await b.reply.defer()

        }


        if(b.id == "mod") {
            
            MESSAGE.edit(mod, row);
            await b.reply.defer()

        }

        if(b.id == "eco") {
            
            MESSAGE.edit(eco, row);
            await b.reply.defer()

        }


    });


   
}};