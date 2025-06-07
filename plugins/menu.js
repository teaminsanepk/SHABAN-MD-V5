const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
🔥 *${config.BOT_NAME}* 🔥
│👑 *Owner:* ${config.OWNER_NAME}
│🌀 *Baileys:* Multi Device
│💻 *Type:* NodeJs
│☁️ *Platform:* Heroku
│🌐 *Mode:* [${config.MODE}]
│⚡ *Prefix:* [${config.PREFIX}]
│🛠 *Version:* 3.0.0 Bᴇᴛᴀ
└───────────────

*🐣MENU LIST🐣*

➤ 🕌 *Quranmenu*
➤ 🕌 .surah1
➤ 🕌 .surah2
➤ 🕌 .surah3
➤ 🕌 .surah4
➤ 🕌 .surah5
➤ 🕌 .surah6
➤ 🕌 .surah7
➤ 🕌 .surah8
➤ 🕌 .surah9
➤ 🕌 .surah10
_________________________
➤ 🕋 *Prayertime*
➤ 🕋 .Prayertime
_________________________
➤ 🤖 *Aimenu*
➤ 🤖 .ai
➤ 🤖 .chatgpt2
➤ 🤖 .openai
➤ 🤖 .deepseek
➤ 🤖 .fluxai
➤ 🤖 .imagine2
➤ 🤖 .imagine3
➤ 🤖 .wallpaper
➤ 🤖 .image
_________________________
➤ 🖼️ *AnimeIMGE*
➤ 🖼️ .anime
➤ 🖼️ .anime1
➤ 🖼️ .anime2
➤ 🖼️ .anime3
➤ 🖼️ .anime4
➤ 🖼️ .anime5
➤ 🖼️ .garl
➤ 🖼️ .waifu
➤ 🖼️ .neko
➤ 🖼️ .maid
➤ 🖼️ .awoo
➤ 🖼️ .animegirl
➤ 🖼️ .animegirl1
➤ 🖼️ .animegirl2
➤ 🖼️ .animegirl3
➤ 🖼️ .animegirl4
➤ 🖼️ .animegirl5
➤ 🖼️ .dog
_________________________
➤ 💬 Reactions
➤ 😍 .cry
➤ 😍 .cuddle
➤ 😍 .bully
➤ 😍 .hug
➤ 😍 .awoo
➤ 😍 .lick
➤ 😍 .pat
➤ 😍 .smug
➤ 😍 .bonk
➤ 😍 .yeet
➤ 😍 .blush
➤ 😍 .handhold
➤ 😍 .highfive
➤ 😍 .nom
➤ 😍 .wave
➤ 😍 .smile
➤ 😍 .wink
➤ 😍 .happy
➤ 😍 .glomp
➤ 😍 .bite
➤ 😍 .poke
➤ 😍 .cringe
➤ 😍 .dance
➤ 😍 .kill
➤ 😍 .slap
➤ 😍 .kiss
_________________________
➤ 🔄 *Convertmenu*
➤ 🔄 .sticker
➤ 🔄 .topdf
➤ 🔄 .gif
➤ 🔄 .attp
➤ 🔄 .tts2
➤ 🔄 .tts3
➤ 🔄 .tts
➤ 🔄 .trt
➤ 🔄 .fancy
➤ 🔄 .gitclone
➤ 🔄 .url
➤ 🔄 .logo
➤ 🔄 .fetch
➤ 🔄 .emoji
➤ 🔄 .enhance
➤ 🔄 .remini
➤ 🔄 .removebg
➤ 🔄 .getimage
_________________________
➤ 🎉 *Funmenu*
➤ 🎉 .emix 😀,🤣
➤ 🎉 .joke
➤ 🎉 .hack
_________________________
➤ ⬇️ *Dlmenu*
➤ 🎬 .capcut
➤ 🎵 .ringtone
➤ 📲 .tiktok2
➤ 🔍 .tiktoksearch
➤ 📸 .Instagram
➤ 🌀 .fb2
➤ 👻 .snapchat
➤ 🐦 .twitter
➤ 📂 .mediafire
➤ 📂 .gdrive  
➤ 📥 .apk
➤ ⬇️ .gdrive
➤ 💡 .likee
➤ 📌 .pinterest
➤ 🔎 .spotifysearch
➤ 🔎 .yts
➤ 🎥 .mp4
➤ 🎼 .mp3
➤ 📹 .video
➤ 🎥 .video5
➤ 🎧 .play
➤ 🎶 .play3
➤ 📼 .play5
➤ 🖼️ .img
_________________________
➤ 👥 *Group_Command*
➤ 👥 .tagall
➤ 👥 .kickall
➤ 👥 .kickall2
➤ 👥 .kick
➤ 👥 .removeadmins
➤ 👥 .leave
➤ 👥 .join
➤ 👥 .invite
➤ 👥 .resetglink
➤ 👥 .jid
➤ 👥 .forward
➤ 👥 .removecountry 93/91/654/1
➤ 👥 .kickco 91/93/654/664
_________________________
➤ 🧩 *Othermenu*
➤ 🧩 .ytsearch
➤ 🧩 .githubstalk
➤ 🧩 .tiktokstalk
➤ 🧩 .wikipedia
➤ 🧩 .movie
➤ 🧩 .swb
➤ 🧩 .weather
_________________________
➤ 👑 *Ownermenu*
➤ 👑 .alive || Public Use
➤ 👑 .version || Public Use
➤ 👑 .antidelete || Bot User
➤ 👑 .fullpp || Bot User
➤ 👑 .vv6 || Bot User
➤ 👑 .vv || Bot User
➤ 👑 .save || Bot User
➤ 👑 .send || Public Use
➤ 👑 .sendme || Public Use
➤ 👑 .sand || Public Use
➤ 👑 .chatbot on/off || Public
➤ 👑 .env || Public Use
➤ 👑 .allvar || Public Use
➤ 👑 .repo || Public Use
➤ 👑 .sc || Public Use
➤ 👑 .script || Public Use
➤ 👑 .update || Bot User
➤ 👑 .menu || Public Use
➤ 👑 .owner || Public Use 
➤ 👑 .broadcast ×
➤ 👑 .siminfo || Bot User 
➤ 👑 .sim || Bot User
➤ 👑 .sim2 || Bot User 
➤ 👑 .ping || Public Use
➤ 👑 .speed || Public Use
➤ 👑 .fetch || Public Use
➤ 👑 .report || Public Use
➤ 👑 Anticall || Bot User 
➤ 👑 Antilink || Bot User
➤ 👑 Reacts || Bot User
➤ 👑 Heartreacts || Bot User
➤ 👑 Status View || Bot User 
➤ 👑 Status Reacts || Bot User 
➤ 👑 Status Reply || Bot User
➤ 👑 Status Saver || Bot User
➤ 👑 Status Sendr || Public Use
➤ 👑 Antiviewones || Bot User
➤ 👑 Antidelete || Bot User
➤ 👑 Group We'll Come Bye || Bot User 
➤ 👑 Group Promote Demote || Bot User

_________________________

*${config.DESCRIPTION}*`;

        await conn.sendMessage(from, { image: { url: config.MENU_IMAGE_URL }, caption: dec }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
