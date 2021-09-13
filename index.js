const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell!")
})

app.listen(3000, () => {
 console.log("Whatever you want to put here")
 console.log("FARDS")
  console.log("FARDS")
   console.log("FARDS")
    console.log("FARDS")
     console.log("FARDS")
      console.log("FARDS")
       console.log("FARDS")
        console.log("FARDS")
         console.log("FARDS")
})


let Discord = require("discord.js");
let client = new Discord.Client();
const BBL = require("bbl-api");
const Canvacord = require("canvacord");
const db = require("quick.db");
const logchannel = '882071180478128169'
const mySecret = process.env['Token']
const dbs = require("discord-buttons");
dbs(client);
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
const canvas = require("discord-canvas");
const welcomeCanvas = new canvas.Welcome();

let { Say , Re, LOG, Lreply } = require('dishub')

const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'en' })
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
const Topgg = require('@top-gg/sdk')
const webhook = new Topgg.Webhook(process.env.webhookPW)


app.post('/vote', webhook.middleware(), (req, res) => {
  console.log(req.vote)
 
const votersthx = new Discord.MessageEmbed()
.setTitle("Thanks for voting! <a:checks:882080490910269440>")
.setDescription("Voter: <@" + req.vote.user + "> (" + req.vote.user + " ) ")
.setFooter("Thanks Again!")

  client.channels.cache.get('884235392134553602').send(votersthx)
})


client.on("guildCreate", (guild) => {
 let embed = new Discord.MessageEmbed()
 .setTitle("SB has just joined a server! <a:checks:882080490910269440>")
 .addField("Server Name:",`${guild.name}`)
 .addField("Server Owner:",`${guild.owner}`)
 .addField("Server ID",`${guild.id}`)
 .addField("Server Member Count:",`${guild.memberCount}`)
 .setFooter(`Currently In ${client.guilds.cache.size} Servers!`)
 .setThumbnail(guild.iconURL({ dynamic: true}))
 .setColor("GREEN")
 client.channels.cache.get(logchannel).send(embed)
})

client.on("guildDelete", (guild) => {
 let embed = new Discord.MessageEmbed()
 .setTitle("SB has just left a server <a:Deny_X_Box:882081444757921822>")
 .addField("Server Name:",`${guild.name}`)
 .addField("Server Owner:",`${guild.owner}`)
 .addField("Server ID",`${guild.id}`)
 .addField("Server Member Count:",`${guild.memberCount}`)
  .setFooter(`Currently In ${client.guilds.cache.size} Servers!`)
 .setThumbnail(guild.iconURL({ dynamic: true}))
 .setColor("RED")
 client.channels.cache.get(logchannel).send(embed)
})

client.on("message", async message => {
 if (message.content == "--helpdrop") {
        let option1 = new MessageMenuOption()
        .setLabel("Moderation")
        .setValue("Option 1")
        .setDescription("The Moderation commands!")
        .setDefault()
        .setEmoji("864285589627994133")
        
        let option2 = new MessageMenuOption()
            .setLabel("Image")
            .setValue("Option 2")
            .setDescription("The Image Manipulation commands!")
            .setDefault()
            .setEmoji("882762955475783751")
        let option3 = new MessageMenuOption()
            .setLabel("Extra Image Commands")
            .setValue("Option 3")
            .setDescription("Extra Image Commands")
            .setDefault()
            .setEmoji("🤩")
           let option4 = new MessageMenuOption()
            .setLabel("Setup")
            .setValue("Option 4")
            .setDescription("Setup Commands!")
            .setDefault()
            .setEmoji("🛡️")
        let option5 = new MessageMenuOption()
            .setLabel("Information")
            .setValue("Option 5")
            .setDescription("This will give you info about SB!")
            .setDefault()
            .setEmoji("863091441168941076")
         let option7 = new MessageMenuOption()
            .setLabel("Memey/Fun")
            .setValue("Option 6")
            .setDescription("Memey/Fun Commands!")
            .setDefault()
            .setEmoji("863090605814710312") 
                     let option6 = new MessageMenuOption()
            .setLabel("NEW COMMANDS!")
            .setValue("Option 7")
            .setDescription("NEW")
            .setDefault()
            .setEmoji("🆕")                                
        let selection = new MessageMenu()
            .setID("Selection")
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder("Click me and select a command section!")
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)
            .addOption(option4)
            .addOption(option5)
            .addOption(option6)
            .addOption(option7)
        let embed = new Discord.MessageEmbed()
.setTitle("**Help Menu!**")
.setDescription('__**My prefix is --**__')
.addField(`Image`, `     <a:bigfunny:882762955475783751>`, true)
.addField(`Moderation`, `<:Ban_Hammer:864285589627994133>`, true)
.addField(`Invite bot`,`[Click to invite!](https://dsc.gg/sbbot)`, true)
.addField(`Setup`, `🛡️`, true)
.addField("Info",`<:info:863091441168941076>`, true)
.addField(`Support server`,`[Click to join](https://bit.ly/sbthedevsupport)`, true )
.setColor("2F3136")
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
.setTimestamp();

let newstuff = new Discord.MessageEmbed()
.setTitle("NEW!")
 .addField(`**NEW:**`,`**Changelog** See why we changed the profile picture of sb!`)


let extraimg = new Discord.MessageEmbed()
.setTitle("Extra Image Commands")
.addField("Image","`Avatar`, `Coinflip`, `Meme2`, `Rate`, `Ascii`, `Choose`, `Hack`, `Randomnumber`, `Bed`, `Fuse`, `Kiss`, `Slap`, `Spank`, `Affect`, `Beautiful`, `Blur`, `Facepalm`, `Hitler`, `Invert`, `Joke`, `Rainbow`, `Rip`, `Sepia`, `Trash`, `Wanted`, `Changemymind`, `Clyde`, `Ohno`, `Rps`, `Tictactoe`, `Www`, `Lisa,`,`comment`")
let memeyxd = new Discord.MessageEmbed()
.setTitle("Memey/Fun Commands")
.addField("Memey/Fun","`hug`,`pat`,`zaglo`,`slap2`,`binary`,`calculate`,`meme`,`advice`")
        let modembed = new Discord.MessageEmbed()
        .setTitle("Moderation Commands")
        .addField("Moderation","`Ban`,`Kick`,`vcmove`,`smove`,`voicekick`,`lock`,`unlock`,`Unban`,`Mute`,`Purge`,`Hackban`,`role`,`roleadd`,`roledel`,`rolecreate`,`deleterole`,`createvc`,`createchat`,`delchannel`,`embed`,`announce`,`imageannounce`,`membercount`,`yt`,`steal`,`sourcebin`,`docs`,`weather`,`qr`,`github`,`applestore`,`linkshorten`,`playstore`,`country`,`ascii2`,`emojiid`,`vaportext`")
        let setup = new Discord.MessageEmbed()
        .setTitle("Setup")
        .addField("Setup Commands","`setmodlog`,`setmute`,`setnick`,`slowmode`")
        let info = new Discord.MessageEmbed()
        .setTitle("Information Commands")
        .addField("Info","`channelinfo,`,`roleinfo`, `whois`, `avatar`, `av2`, `uptime`, `stats`, `help`")
        let imagembed = new Discord.MessageEmbed()
        .setTitle("Image Manipulation Commands")
        .addField("Image","`triggered`,`delete`,`rip`,`jail`,`captcha`,`wideavatar`,`toilet`,`wa`,`pika`,`clyde`,`wasted`,`effect`,`tweets`,`minecraft`,`biden`,`trumptweet`,`blur`,`beautiful`,`catsay`,`pooh`,`cowsay`,`fliptext`,`minecraftgoal`,`gun`,`drake`,`captcha2`,`colorify`,`greyscale`,`amongusmeeting`,`calling`,`alert`,`weathercard`,`fax`,`amiajoke`,`russia`,`alwayshasbeen`,`dym`,`clown`,`spongebobtrans`,`panik`,`1bit`,`2bit`,`4bit`,`8bit`,`16bit`,`32bit`,`64bit`,`128bit`,`sharpen`,`punch`,`rickastley`,`supreme`,`xmashat`,`magik`,`tbc`,`scary`,`ps4`,`challenger`,`missionpassed`,`water`,`moustache`")
        let menumsg = await message.channel.send(embed, selection)

        function menuselection(menu) {
            switch(menu.values[0]) {
                case "Option 1": 
                    menu.reply.send(modembed, true)
                break;
                case "Option 2": 
                    menu.reply.send(imagembed, true)
                break;
                case "Option 3": 
                    menu.reply.send(extraimg, true)
                break;
                case "Option 4": 
                    menu.reply.send(setup, true)
                break;
                case "Option 5": 
                    menu.reply.send(info, true)
                break;
                case "Option 6": 
                    menu.reply.send(memeyxd, true)
                break;
                                case "Option 7": 
                    menu.reply.send(newstuff, true)
                break;
            }
        }

        client.on("clickMenu", (menu) => {
            if(menu.message.id == menumsg.id) {
                if(menu.clicker.user.id == message.author.id) menuselection(menu)
                else menu.reply.send(":x: you are not allowed to pick something", true)
            }
        })
    }
})
client.on("guildMemberAdd", async member => {
  let welcome = await welcomeCanvas
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setMemberCount(member.guild.memberCount)
    .setGuildName(`${member.guild.name}`)
    .setAvatar(member.user.displayAvatarURL({ format: "png" }))
    .setColor("border", "#8015EA")
    .setColor("username-box", "#8015EA")
    .setColor("discriminator-box", "#8015EA")
    .setColor("message-box", "#8015EA")
    .setColor("title", "#8015EA")
    .setColor("avatar", "#8015EA")
    .setBackground(
      "https://media.discordapp.net/attachments/743111735178952834/794106546660573184/pexels-photo-114979.png"
    ) 
    .toAttachment();
  let astra = new Discord.MessageAttachment(
    welcome.toBuffer(),
    "welcome.png"
  );
  member.guild.channels.cache.get("872927803341934602").send(astra);
})
client.on("message", message => {
if (message.content.toLowerCase().startsWith("--pika")) {
const text = message.content.split(" ").slice(1).join(" ")
if(!text) return message.reply("Please provide text!")
let image = `https://api.popcatdev.repl.co/pikachu?text=${encodeURIComponent(text)}`
let imgae = new Discord.MessageAttachment(image, "pika.png")
message.channel.send(imgae)
}

if (message.content.toLowerCase().startsWith("--changelog")) {
 let newembed = new Discord.MessageEmbed()
.setTitle("Changelog | SB | Updated 9/4/2021")
.addField("June - July","Created Bot and added help and test commands.")
.addField("July - August","ADDED Image, Fun, Moderation commands to the help commands.")
.addField("August - September","Added dropdown menu, changelog, custom status, and more.")
message.channel.send(newembed)
}
    if (message.content === 'yttogether') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    }
  if (message.content.startsWith('--tictactoe')) {
    game.handleMessage(message);
  }
if(db.has(message.author.id + '--afk')){
 message.channel.send(`Welcome back ${message.author}`)
 db.delete(message.author.id + '--afk')
 db.delete(message.author.id + '--messageafk')
 }
 if (message.content.startsWith('--afk')) {
 message.channel.send('I have made your AFK.')
 // then here you use the database :
 db.set(message.author.id + '--afk','true')
 db.set(message.author.id + '--messageafk', message.content.split(' ').slice(2))
 }
 if (message.content.includes('--afk off')) {
 db.delete(message.author.id + '--afk')
 db.delete(message.author.id + '--messageafk')
 }
 // If one of the mentions is the user
 message.mentions.users.forEach(user =>{
 if (message.author.bot) return false;

 if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
 if(db.has(user.id + '--afk')) 
 message.channel.send(`${message.author} the user you mentioned is afk.`)
 })
 
if (message.content.toLowerCase().startsWith("--pooh")) {
let args = message.content.split(" ").slice(1)
const text = args.join(" ").split("/")[0]
const tuxtext = args.join(" ").split("/")[1]
if(!text) return message.reply("Please provide text!")
if(!tuxtext) return message.reply("Please provide text!")
let image = `https://api.devs-hub.xyz/tuxedo-pooh?normal=${text}&tuxedo=${tuxtext}`
let imgae = new Discord.MessageAttachment(image, "tux.png")
message.channel.send(imgae)
}
///tuxedo-pooh?normal=text&tuxedo=text
//supreme
if (message.content.toLowerCase().startsWith("--supremetext")) {
const text = message.content.split(" ").slice(1).join(" ")
if(!text) return message.reply("Please provide text!")
let image = `https://api.alexflipnote.dev/supreme?text=${text}`
let imgae = new Discord.MessageAttachment(image, "super.png")
message.channel.send(imgae)
}
//https://api.alexflipnote.dev/supreme?text=${Text}
//[click here](http://google.com/ "THIS IS GOOGLE LOL")
if (message.content.toLowerCase().startsWith("--dushub")) {
  Say(message, 'Content of the message you wanted to send')
}
if(message.content.toLowerCase().startsWith("--iphone")) {
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.reply("What notification are you alerting?")
let imgae = `https://api.popcatdev.repl.co/alert?text=${args.join(" ")}`
let image = new Discord.MessageAttachment(imgae, "alert.png")
message.channel.send(image)
}
if (message.content.toLowerCase().startsWith("--minecraft")) {
let args = message.content.split(" ").slice(1)
const block = args.join(" ").split("/")[0]
const text1 = args.join(" ").split("/")[1]
const text2 = args.join(" ").split("/")[2]
const text3 = args.join(" ").split("/")[3]
if(!block) return message.reply("Please provide a block! Ex: barrier, and if its spaced put _!")
if(!text1) return message.reply("Please provide a achivement!")
if(!text2) return message.reply("Please provide text!")
if(!text3) return message.reply("Put a `.` if you want this to be blank!")
let image = `https://minecraft-api.com/api/achivements/${block}/${text1}/${text2}/${text3}/`
let imgae = new Discord.MessageAttachment(image, "mc.png")
message.channel.send(imgae)
}
if (message.content.toLowerCase().startsWith("--tweet3")) {
const text = message.content.split(" ").slice(1).join(" ")
if(!text) return message.reply("Please provide text!")
let image = `https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.tag}&text=${text}`
let imgae = new Discord.MessageAttachment(image, "twat.png")
message.channel.send(imgae)
}
if (message.content.toLowerCase().startsWith("--wc")) {
const weather = message.content.split(" ").slice(1).join(" ")
if(!weather) return message.reply("Please provide text!")
let image = `https://api.cool-img-api.ml/weather-card?location=${weather}&background=[url]`
let imgae = new Discord.MessageAttachment(image, "madebysbxD.png")
message.channel.send(imgae)
}
 // complete reports about errors like invalid api key or bot id
//https://api.cool-img-api.ml/weather-card?location=${weather}&background=[url]
if (message.content.toLowerCase().startsWith("--captcha2")) {
const captchatxt = message.content.split(" ").slice(1).join(" ")
if(!captchatxt) return message.reply("Please provide text!")
if (captchatxt > 20) return message.reply("Please type a text no bigger than 20 characters")
let image = `https://api.cool-img-api.ml/captcha?text=${captchatxt}`
let imgae = new Discord.MessageAttachment(image, "pika.png")
message.channel.send(imgae)
}
//https://api.cool-img-api.ml/captcha?text=${captchatxt}
//https://api.cool-img-api.ml/calling?text=${messagetom}
if (message.content.toLowerCase().startsWith("--calling")) {
const messagetom = message.content.split(" ").slice(1).join(" ")
if(!messagetom) return message.reply("Please provide text!")
let image = `https://api.cool-img-api.ml/calling?text=${messagetom}`
let imgae = new Discord.MessageAttachment(image, "pika.png")
message.channel.send(imgae)
}

if (message.content.toLowerCase().startsWith("--fax")) {
const fax = message.content.split(" ").slice(1).join(" ")
if(!fax) return message.reply("Please provide text!")
let image = `https://api.cool-img-api.ml/facts?text=${fax}`
let imgae = new Discord.MessageAttachment(image, "fax.png")
message.channel.send(imgae)
}
if (message.content.toLowerCase().startsWith("--amiajoke")) {
const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png", size: 2048 });
let image = `https://api.cool-img-api.ml/amiajoke?image=${avatar}`
let imgae = new Discord.MessageAttachment(image, "amia.png")
message.channel.send(imgae)
}
if (message.content.toLowerCase().startsWith("--vote")) {
  const votes = new Discord.MessageEmbed()
  .setTitle("Vote SB!")
  .addField("Discord Bot List", `Click [here](https://bit.ly/sbdbl) to upvote SB on [DBL](https://discordbotlist.com)!`)
    .addField("Top.gg", `Click [here](https://bit.ly/sbtopgg) to upvote SB on [top.gg](https://top.gg)!`)
    .setFooter("Please do these things!")
    message.channel.send(votes)
}
if (message.content.toLowerCase().startsWith("--russia")) {
const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png", size: 2048 });
let image = `https://api.cool-img-api.ml/communist?image=${avatar}`
let imgae = new Discord.MessageAttachment(image, "russia.png")
message.channel.send(imgae)
}
//https://api.cool-img-api.ml/amiajoke?image=${avatarjoke}
//https://api.cool-img-api.ml/facts?text=${fax}
if (message.content.toLowerCase().startsWith("--alwayshasbeen")) {
const head = message.content.split(" ").slice(1).join(" ")
const earth = message.content.split(" ").slice(1).join(" ")
if(!head) return message.reply("Please provide text!")
if(!earth) return message.reply("Please provide text!")
const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png", size: 2048 });
let image = `https://api.cool-img-api.ml/alwayshasbeen?text=${head}&earth=${earth}&image=${avatar}`
let imgae = new Discord.MessageAttachment(image, "pika.png")
message.channel.send(imgae)
}
if (message.content.toLowerCase().startsWith("--biden")) {
const sentence = message.content.split(" ").slice(1).join(" ")
    if (!sentence) return message.channel.send('Please specify a query.')
    let embed = new Discord.MessageEmbed()
      .setTitle('Joe Biden')
      .setImage(`https://api.popcatdev.repl.co/biden?text=${encodeURIComponent(sentence)}`)
      .setColor('ORANGE')
      .setFooter(' ');
    message.channel.send(embed)
}
if (message.content.toLowerCase().startsWith("--dym")) {
let args = message.content.split(" ").slice(1)
const toptext = args.join(" ").split(",")[0]
const bottomtext = args.join(" ").split(",")[1]
if(!toptext) return message.reply("Please provide text!")
if(!bottomtext) return message.reply("Please provide text!")
let image = `https://api.cool-img-api.ml/didyoumean?top=${toptext}&bottom=${bottomtext}`
let imgae = new Discord.MessageAttachment(image, "butitstruethoandwhyareusavingorcopyingthisimadeitsbdid.png")
message.channel.send(imgae)
}
if (message.content.toLowerCase().startsWith("--panik")) {
let args = message.content.split(" ").slice(1)
const text = args.join(" ").split("/")[0]
const text2 = args.join(" ").split("/")[1]
const text3 = args.join(" ").split("/")[2]
if(!text) return message.reply("Please provide text! | For Panik 1")
if(!text2) return message.reply("Please provide text! | For Kalm")
if(!text3) return message.reply("Please provide text! | For Panik 2")
let image = `https://api.devs-hub.xyz/panik?panik=${text}&kalm=${text2}&panik2=${text3}`
let imgae = new Discord.MessageAttachment(image, "panik.png")
message.channel.send(imgae)
}
if (message.content.toLowerCase().startsWith("--spongebobtrans")) {
const sp = message.content.split(" ").slice(1).join(" ")
if(!sp) return message.reply("Please provide text!")
let image = `https://api.devs-hub.xyz/spongebob-timecard?text=${sp}`
let imgae = new Discord.MessageAttachment(image, "sp.png")
message.channel.send(imgae)
}
//https://api.devs-hub.xyz/spongebob-timecard?text=${sp}
//https://api.devs-hub.xyz/panik?panik=${text}&kalm=${text2}&panik2=${text3}
//https://api.cool-img-api.ml/didyoumean?top=${toptext}&bottom=${bottomtext}
if (message.content.toLowerCase().startsWith
("--clown")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedclown = new Discord.MessageEmbed()
   .setTitle("A Clown")
   .setImage(`https://api.popcatdev.repl.co/clown?image=${avatar}`)
   message.channel.send(embedclown)
}
if (message.content.toLowerCase().startsWith
("--gun")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedgun = new Discord.MessageEmbed()
   .setTitle("FBI OPEN UP")
   .setImage(`https://api.cool-img-api.ml/gun?image=${avatar}`)
   message.channel.send(embedgun)
}
if (message.content.toLowerCase().startsWith
("--bad")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedbad = new Discord.MessageEmbed()
   .setTitle("BAD BAD BAD!")
   .setImage(`https://api.cool-img-api.ml/bad?image=${avatar}`)
   message.channel.send(embedbad)
}
//https://api.cool-img-api.ml/bad?image=https://cdn.discordapp.com/avatars/729844741667029073/a_b6b5760feeae9e40bf7b4627670e3416.gif
if (message.content.toLowerCase().startsWith
("--what")) {
const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
let embedwhat = new Discord.MessageEmbed()
   .setTitle("What?")
   .setImage(`https://api.cool-img-api.ml/what?image=${avatar}`)
   message.channel.send(embedwhat)
}

//https://api.cool-img-api.ml/gun?image=${message.author.displayAvatarURL({ format: "png" })}
if (message.content.toLowerCase().startsWith
("--greyscale")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedgrey = new Discord.MessageEmbed()
   .setTitle("*sad music playing*")
   .setImage(`https://api.popcatdev.repl.co/greyscale?image=${avatar}`)
   message.channel.send(embedgrey)
}
if (message.content.toLowerCase().startsWith
("--m&m")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedmnm = new Discord.MessageEmbed()
   .setTitle("im def an mnm")
   .setImage(`https://api.popcatdev.repl.co/mnm?image=${avatar}`)
   message.channel.send(embedmnm)
}
  if (message.content === "--sbtoken") 
  {
//
    const Fl = 20
    var Flc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var FLF = '';
    for ( var i = 0; i < Fl; i++ ) 
    {
      FLF += Flc.charAt(Math.floor(Math.random() * Flc.length));
    }
    //--
    const Ml = 6
    var Mlc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var MLF = '';
    for ( var i = 0; i < Ml; i++ ) 
    {
      MLF += Mlc.charAt(Math.floor(Math.random() * Mlc.length));
    }
    //--
    const Ll = 27
    var Llc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var LLF = '';
    for ( var i = 0; i < Ll; i++ ) 
    {
      LLF += Llc.charAt(Math.floor(Math.random() * Llc.length));
    }
//
    message.channel.send(`\`ODUy${FLF}.${MLF}.${LLF}\``);
  }
if (message.content.toLowerCase().startsWith
("--advert")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedad = new Discord.MessageEmbed()
   .setTitle("Wow Im a ad!")
   .setImage(`https://api.popcatdev.repl.co/ad?image=${avatar}`)
   message.channel.send(embedad)
}
if (message.content.toLowerCase().startsWith("--drake")) {
let args = message.content.split(" ").slice(1)
const text1 = args.join(" ").split("/")[0]
const text2 = args.join(" ").split("/")[1]

if (!text1) return message.channel.send("You need 2 sentences separated with \"/\" for this to work.")
if (!text2) return message.channel.send("You need 2 sentences separated with \"/\" for this to work.")

const image = `https://api.popcatdev.repl.co/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`

const att = new Discord.MessageAttachment(image, "Drake.png")

message.channel.send(att)
}
if (message.content.toLowerCase().startsWith
("--invert")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedver = new Discord.MessageEmbed()
   .setTitle("inverted...")
   .setImage(`https://api.popcatdev.repl.co/invert?image=${avatar}`)
   message.channel.send(embedver)
}
if (message.content.toLowerCase().startsWith
("--drip")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embeddrip = new Discord.MessageEmbed()
   .setTitle("Can i have your auto graph please?!!")
   .setImage(`https://api.popcatdev.repl.co/drip?image=${avatar}`)
   message.channel.send(embeddrip)
}
if (message.content.toLowerCase().startsWith
("--salty")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedsalt = new Discord.MessageEmbed()
   .setTitle("Salty")
   .setImage(`https://api.cool-img-api.ml/salty?image=${avatar}`)
   message.channel.send(embedsalt)
}
if (message.content.toLowerCase().startsWith
("--uncover")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  let embedwall = new Discord.MessageEmbed()
   .setTitle("TF why are u in a wall?")
   .setImage(`https://api.popcatdev.repl.co/uncover?image=${avatar}`)
   message.channel.send(embedwall)
}
//({ format: "png" })

if (message.content.toLowerCase().startsWith
("--colorify")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "png" });
  const sentence2 = message.content.split(" ").slice(1).join(" ")
    if (!sentence2) return message.channel.send('Please specify a color.')
  let embedcolor = new Discord.MessageEmbed()
   .setTitle("Color")
   .setImage(`https://api.popcatdev.repl.co/colorify?image=${avatar}&color=${encodeURIComponent(sentence2)}`)
   message.channel.send(embedcolor)
}
if (message.content.toLowerCase().startsWith
("--pet")) {
  const user = message.mentions.users.first() || message.author; 
const avatar = user.displayAvatarURL({ format: "gif", dynamic: true, size: 4096 });
  let embedpet = new Discord.MessageEmbed()
   .setTitle("What a cute little... USER!")
   .setImage(`https://api.popcatdev.repl.co/pet?image=${avatar}`)
   message.channel.send(embedpet)
}
if (message.content.toLowerCase().startsWith("--google")) 
 {
  let MSG = message.content.split(" ");
  let Query = MSG.slice(1).join("+");
  let QueryD = MSG.slice(1).join(" ");
  if (!Query) message.reply("Please specify a search query.")
  else
  {
    let GG = new Discord.MessageEmbed()
    .setTitle(`Your Search Query: ${QueryD}`)
    .setDescription(`**Search Result** - [Click Here](https://www.google.com/search?q=${Query})`)
    .setColor("GREEN")
    .setFooter("Made by sb")
    message.channel.send(GG)
  }
}
if(message.content === "dcgksdjsduifdsiufsduifs") {
 let embed = new Discord.MessageEmbed()
 .setTitle("this is Emded title")
 .setDescription("this is Embed description")
 .setColor("RANDOM")
 .setFooter("This is embed footer")
 message.channel.send(embed)
}
})

client.login(mySecret)
