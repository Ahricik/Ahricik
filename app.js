const Discord = require ('discord.js');
const setting = require ('./setting.json');
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log(`Ahricik Geldi ${bot.user.tag}!`);
  bot.user.setGame('Kodlar Özel olarak Yapılacaktır', 'https://www.twitch.tv/test')
});
bot.on('message', msg => {
  if (msg.content === 'Ahri') {
    msg.reply('Efendiiim ^_^');
  }
  if (msg.content === 'gulsahky') {
    msg.reply('https://www.twitch.tv/gulsahky');
  }
  if (msg.content === 'Beni ayartsana') {
    msg.reply('E ---> <3 ŞİMDİ SUS HIH');
  }
  if (msg.content === 'Ahriciğim Seni seviyorum') {
    msg.reply('Ben sadece Yaratıcıma Aşığım ^-^');
  }
  if (msg.content === 'Ahri Guide') {
    msg.reply('https://www.mobafire.com/league-of-legends/build/alpha-ahri-build-unless-enemy-makes-you-beta-537674');
  }
  if (msg.content === 'şırfıntı Ahri') {
    msg.reply(' Nededin nededin yönetici banla şunu hıh');
  }
  if (msg.content === 'NSFW') {
    msg.reply('Neyi Merak Ettin acaba  :D :D :D Neyse');
  }
  if (msg.content === 'slm') {
    msg.reply('Naber ^_^');
  }
    if (msg.content === 'merhaba') {
      msg.reply('Merabaaa ^_^');
    }
  if (msg.content === 'Ahri Sen Nesin') {
    msg.reply('Ben tatlişmi Tatliş Bi tilkiyim ^-^');
  }
  if (msg.content === 'Ahri Sahibin Kim') {
    msg.reply('@☙Star Guardian Ahri ☙#2959');
  }
  if (msg.content === 'Acun Medya Müzikleri') {
    msg.reply('https://www.youtube.com/watch?v=7zp1TbLFPp8');
  }
  if (msg.content === 'Love') {
    msg.reply('Sen kim Köpek ');
  }
  if (msg.content === 'Star Guardian Ahri') {
    msg.reply('https://i.pinimg.com/originals/a2/98/0d/a2980da9ec0fb58ef3fd64919aa2ec58.jpg');
  }
  if (msg.content === 'Ver Sona Sesi') {
    msg.reply('https://www.youtube.com/watch?v=hza7p1cC2_Q');
  }
  if (msg.content === 'gulsahky discord') {
    msg.reply('https://discord.gg/gulsahky');
  }
  if (msg.content === 'gulsahky oyunfor') {
    msg.reply('https://www.oyunfor.com/twitch-donate/gulsahky');
  }
  if (msg.content === 'gulsahky bynogame') {
    msg.reply('https://www.bynogame.com/gulsahkaya');
  }
  if (msg.content === 'twich prime') {
    msg.reply('https://help.twitch.tv/customer/tr/portal/articles/2574674-twitch-prime-abonelikleri-nasıl-kullanılır-');
  }
  if (msg.content === 'kimmiş bu ahri') {
    msg.reply('Aa benmişim');
  }
  if (msg.content === 'gulsahky kim') {
    msg.reply('En İyi Ve En Samimi Yayıncı ^-^');
  }
  if (msg.content === 'avatarım') {
    msg.reply(msg.author.avatarURL);
  }
  if (msg.content === 'trip') {
    msg.reply('https://cdn.discordapp.com/emojis/455892845794951169.png?v=1');
  }
    if (msg.content === 'Bot Davet') {
    msg.reply('https://discordapp.com/oauth2/authorize?client_id=510025142781345793&scope=bot&permissions=2146956799 ');
  }
});
bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'gelenler');
  if (!channel) return;
  channel.send(`Servere Hoş geldin ^-^, ${member}`);
});
bot.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!Ahri Kickle')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {

        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Okadarda Kötü değildi Ama Kötüydü Gerekeni Yaptım ^-^ ${user.tag}`);
        }).catch(err => {
         
          message.reply('kickleme İptal edildi');
          console.error(err);
        });
      } else {
        message.reply('Burda Değil O  Lütfen Burda Olan birini seç ^-^ !');
      }
   
    } else {
      message.reply('Hey onu Atamam  O Rütbesi Yüksek !');
    }
  }
});
bot.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!Ahri Banla')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'Kötülerdi',
        }).then(() => {
          message.reply(`Kötülerdi Gerekeni Yaptım ^-^ ${user.tag}`);
        }).catch(err => {
          message.reply('Ban İptal Edildi');
          console.error(err);
        });
      } else {
        message.reply('Burda Değil O  Lütfen Burda Olan birini seç ^-^ !');
      }
    } else {
      message.reply('Hey onu Banlayamam  Onun Rütbesi Yüksek !');
    }
  }
});

bot.login(process.env.ahrimos);
