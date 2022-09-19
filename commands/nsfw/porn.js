const Color = "RANDOM";
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");



module.exports = {
  name: "porn",
  description: "Anime",

  run: async (client, message, args) => {

    message.channel.send(`<@${message.author.id}>`)

const embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(`https://th.bing.com/th/id/R.130d9d0f3a639cb71b12b7cd54b223d1?rik=WaQLojIo8M%2bVjw&riu=http%3a%2f%2fpm1.narvii.com%2f6231%2fe7c992073a051de7413e534fc9673571eed03f2d_00.jpg&ehk=DYV64OIwMvR0OAvEIX1xhWwhfO27%2fG2sdjSRPYtLpWE%3d&risl=&pid=ImgRaw&r=0`)

    // const Pussy = await Random.Pussy();
    //     return message.channel.send(Pussy);

    //    const embed = new Discord.MessageEmbed()
    // .setImage(fetch(`https://diwasatreya.tech/ass`))

        message.channel.send(embed)
    }
}

