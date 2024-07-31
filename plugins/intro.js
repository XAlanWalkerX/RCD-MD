/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                       


*/















// Fork And Edit AS You Wish //

const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/DEXTER-BOT-1/RCD-MD' // Source URL
const number = '94789958225'
var name = ' 𝗥𝗖𝗗 𝗧𝗘𝗖𝗛'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/a789a7f2437c053ec829a.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝗥𝗖𝗗 𝗠𝗗 𝗜𝗡𝗧𝗥𝗢  」
│ Name      : 𝗥𝗖𝗗 
│ Place       : 𝗦𝗥𝗜𝗟𝗔𝗡𝗞𝗔, 𝗔𝗠𝗣𝗔𝗥𝗔
│ Gender    :  𝐌𝐀𝐋𝐄
│ Age          : 17
│ education : 𝗡𝗨𝗟𝗟
│ good vibes : 𝗡𝗨𝗟𝗟
│ Phone     : wa.me/94789958225
│ Youtube   : https://youtube.com/@dextertoola999?si=_KLYhXCdK8qxwOYP
│ GitHub    : https://github.com/DEXTER-BOT-1 

╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`





 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             alias: ["wasi","waso"],
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
