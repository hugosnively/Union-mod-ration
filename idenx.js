const Discord = require("discord.js");

const Client = new Discord.Client; 

const prefix = "!"

Client.on("ready" , () => {
   console.log("bot opérationnel");
});    

Client.on("guildMemberAdd", member => {
   console.log("Un membre est arrivé");
});

Client.on("guildMemberRemove", member => {
   console.log("Un membre nous a quitté");
});

Client.on("message" , message => {
    if(message.author.bot) return;
    

if(message.member.hasPermission("ADMINISTRATOR")){
   if(message.content.startsWith(prefix + "ban")){
      const embed1 = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("**Une sanction vient d'être appliqué sur le discord d'Union**")
      .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
      .setDescription("https://uniondarkrp.mtxserv.com/forum/")
      .addField("Type de sanction", "Bannissement", false)
      .addField("\u200b", "\u200b", false)
      .addField("Un modérateur du discord d'Union à décidé de vous sanctionné suite à un comportement inaproprié.", "\u200b")
      message.channel.send(embed1)
      let mention = message.mentions.members.first();

      if(mention == undefined){
         message.reply("Membre non ou mal mentionné.");
      }
      else{
         if(mention.bannable){
             mention.ban();
            
         }
      else{
         message.reply("Impossible de bannir ce membre.");
          }  
         }
      } 
      else if (message.content.startsWith(prefix + "kick")){
         const embed2 = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("**Une sanction vient d'être appliqué sur le discord d'Union**")
      .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
      .setDescription("https://uniondarkrp.mtxserv.com/forum/")
      .addField("Type de sanction", "Kick", false)
      .addField("\u200b", "\u200b", false)
      .addField("Un modérateur du discord d'Union à décidé de vous sanctionné suite à un comportement inaproprié.", "\u200b")
      message.channel.send(embed2)
          let mention = message.mentions.members.first();

          if(mention == undefined){
             message.reply("Membre non ou mal mentionné.");
          }
      else {
           if(mention.kickable){
               mention.kick();
               message.channel.send(mention.displayName + "a été kick avec succès.");
      }
      else {
         message.reply("Impossible de kick ce membre");
            }
         }
      }
   
      else if (message.content.startsWith(prefix + "mute")){
         const embed4 = new Discord.MessageEmbed()
         .setColor("#FF0000")
         .setTitle("**Une sanction vient d'être appliqué sur le discord d'Union**")
         .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
         .setDescription("https://uniondarkrp.mtxserv.com/forum/")
         .addField("Type de sanction", "Mute", false)
         .addField("\u200b", "\u200b", false)
         .addField("Un modérateur du discord d'Union à décidé de vous sanctionné suite à un comportement inaproprié.", "\u200b")
         message.channel.send(embed4)
           let mention = message.mentions.members.first();
          
           if(mention == undefined){
              message.reply("Membre non ou mal mentionné.");
           }
      else {
         mention.roles.add("783725090201665538");
         message.reply(mention.displayName + "Mute avec succès.");
         }
      }
      else if (message.content.startsWith(prefix + "unmute")){
         const embed2 = new Discord.MessageEmbed()
         .setColor("#3AFF00")
         .setTitle("**Une sanction vient d'être levé sur le discord d'Union**")
         .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
         .setDescription("https://uniondarkrp.mtxserv.com/forum/")
         .addField("Type de sanction", "AUCUNE", false)
         .addField("\u200b", "\u200b", false)
         .addField("Un modérateur du discord d'Union à décidé de levé votre sanction vous pouvez de nouveau discutté.", "\u200b")
         message.channel.send(embed2)
         let mention = message.mentions.members.first();

         if(mention == undefined){
            message.reply("Membre non ou mal mentionné.");
         }
    else {
       mention.roles.remove("783725090201665538");
       message.reply(mention.displayName + "Unmute avec succès.");
       
         }
      }
   else if (message.content.startsWith(prefix + "tempmute")){
      const embed3 = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("**Une sanction vient d'être appliqué sur le discord d'Union**")
      .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
      .setDescription("https://uniondarkrp.mtxserv.com/forum/")
      .addField("Type de sanction", "Tempmute", false)
      .addField("\u200b", "\u200b", false)
      .addField("Un modérateur du discord d'Union à décidé de vous sanctionné suite à un comportement inaproprié.", "\u200b")
      message.channel.send(embed3)
      let mention = message.mentions.members.first();

      if(mention == undefined){
         message.reply("Membre non ou mal sanctionné.");
      }
      else {
         let args = message.content.split(" ");

         mention.roles.add("783725090201665538");
         setTimeout(function() {
            mention.roles.remove("783725090201665538");
            message.channel.send("<@" + mention.id + "> Vous pouvez désormais parler de nouveau !");
         }, args[2] * 1000);
      }
   }
   }
});

  var embed1 = new Discord.MessageEmbed() 
      .setColor("#FF0000")
      .setTitle("**Une sanction vient d'être appliqué sur le discord d'Union**")
      .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")

                   
      Client.on("message" , message => {
         if(message.author.bot) return;
         //!forum
         if(message.content == prefix + "forum"){
            const embed6 = new Discord.MessageEmbed()
      .setColor("#00E8FF")
      .setTitle("**Le forum d'Union roleplay**")
      .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
      .addField("\u200b", "\u200b", false)
      .addField("Voici le forum d'Union roleplay: https://uniondarkrp.mtxserv.com/forum/ Bon jeu !", "\u200b")
      message.channel.send(embed6)
            
         }
      });

      Client.on("message" , message => {
         if(message.author.bot) return;
         //!deban
         if(message.content == prefix + "deban"){
            const embed7 = new Discord.MessageEmbed()
            .setColor("#00E8FF")
            .setTitle("**Une demande de débanissement ?**")
            .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
            .addField("\u200b", "\u200b", false)
            .addField("Voici comment te faire deban de notre serveur: https://uniondarkrp.mtxserv.com/forum/thread-11.html Bonne chance !", "\u200b")
            message.channel.send(embed7)   
         }
      });

      Client.on("message" , message => {
         if(message.author.bot) return;
         //!plainte
         if(message.content == prefix + "plainte"){
            const embed7 = new Discord.MessageEmbed()
            .setColor("#00E8FF")
            .setTitle("**Une plainte contre un joueur ?**")
            .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
            .addField("\u200b", "\u200b", false)
            .addField("Voici comment rédiger une plainte contre un joueur: https://uniondarkrp.mtxserv.com/forum/forum-15.html Bon jeu !", "\u200b")
            message.channel.send(embed7)    
         }
      });

      Client.on("message" , message => {
         if(message.author.bot) return;
         //!sp
         if(message.content == prefix + "sp"){
            const embed8 = new Discord.MessageEmbed()
            .setColor("#00E8FF")
            .setTitle("**Le discord des sapeurs pompiers d'Union ?**")
            .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
            .addField("\u200b", "\u200b", false)
            .addField("Voici le discord des sapeurs pompiers d'Union: https://discord.gg/8d6cGXt8N7 Bon jeu !", "\u200b")
            message.channel.send(embed8)    
         }
      });

      Client.on("message" , message => {
         if(message.author.bot) return;
         //!samu
         if(message.content == prefix + "samu"){
            const embed8 = new Discord.MessageEmbed()
            .setColor("#00E8FF")
            .setTitle("**Le discord du SAMU d'Union ?**")
            .setThumbnail("https://image.noelshack.com/fichiers/2020/49/4/1607010957-download-removebg-preview-4.png")
            .addField("\u200b", "\u200b", false)
            .addField("Voici le discord du SAMU d'Union: https://discord.gg/xApd7JpVQB Bon jeu !", "\u200b")
            message.channel.send(embed8)    
         }
      });



Client.login("NzgyMTg2Mzg0MjczMzA5NzE4.X8Ih1g.j1zsMCAzPWBgCB7_ebnKdZz7Q_M")
