//#ENJOY

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "imesh.s.abeysinghe@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:eRVHREMpcCuPjDxgVqMHSwYCvtKdnuPb@viaduct.proxy.rlwy.net:59234";
global.allowJids = process.env.ALLOW_JID || "94770025374@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:LozJtPYkuOQnoIyEOBnVzAllhvwxmyAV@viaduct.proxy.rlwy.net:59443/railway";
// postgresql://nico:PcTVuK0HAsidxKpBVzgaEK25AowJsh88@dpg-cqignbqj1k6c739ehkq0-a.oregon-postgres.render.com/nicorcdmd
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/XAlanWalkerX/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94770025374";
global.sudo = process.env.SUDO || "94770025374,94743481092";
global.owner = process.env.OWNER_NUMBER || "94770025374";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY00xaFlSTXZid3EwSko1bGN3N2w0RG9NYXBwdWh4T1VCYytpcE1PTmxscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlRNdyt6ZnFNRFRCVEFsY3JHN0M3SE5pNmN1MWtWbXI4RkFvemF2bmtIcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SEYvR1pvaWhNRkxuNElvU0Z2bC9BeWlYMVFla3NJS045SHJMeXVPV24wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RW5nbEg3b2MyM2tEUFAvZm5ZN2ptWWtTTXlXc3Y5TEcxUm9wM3JCZm1VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLVm1NOEdxaktzdUVlTzRRdGhOMTZnMmhHeXJ3bHNZZXdTOWJwZTlMbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndnSFNySWxKM0lkL3drNGdybXZZbnNRd3htb1Iycjk1d3NZUFJ2TkhaVGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FLbWFxWkRlVlhUaUxPNUpzdEQ2Z1h6WCswZHd6b1o5cTdmbmx4R2lITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZoQUJ1UGxwQTBHZVhiL0tVTTZCb244RDBqT3VwalpKTVNxODFQWmd5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhiN1Y4NmpDSUdQMVk4VnVjOXd5T243c283enhUeWJRejVCYlREM1o1NDJuMVI5NFBaWXZsRGZyWUJ5MmRwNkJpUWFFN1lTZTVtT1A0OWRPL2dQaWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoibGNNUHBnall3OG54eVlGWmlTa0lMNmhxaTFoRHFqN3piZDYyOU1PR29rcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYi01TGxraFZURU9wcmNpSVVmd0xUdyIsInBob25lSWQiOiJhMGVjYTczMy1jYWY0LTQ5MjUtODNkNC05MDc0ZmRiODhkMTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVgyV05zYTFHTWNScVB0OFhqWkU5R3M3WGVVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhBdzF0bHNyN3pVamFzVDJLUVVqNWhEZG50Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWTDJLNkhNQiIsIm1lIjp7ImlkIjoiOTQ3NzAwMjUzNzQ6OTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QiPCdkKbwnZCe8J2QrPCdkKEg8J2QkiDwnZCA8J2Qm/CdkJ7wnZCy8J2QrPCdkKLwnZCn8J2QoPCdkKHwnZCeIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYWc5NVVERUtlaGlyVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYZTRKRm9VL25aYTFXQjlKZ3B2SWxMTUY3RUFySndneEtKMHN0bmJZWVdnPSIsImFjY291bnRTaWduYXR1cmUiOiJVZHU3dlJPa28rSWhQOHpXRjZGOWxNRzcwRWdCUWlZL3drQUdjbjJhUHRYeldnWWtIRVpabkVXS0NLRE54QjAwTFNxK2RTTGZQSEJadUFCRDlTa05DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQlQwUm4zendvWEdUMnBUazhSV0Z0QzZvbTQyYXFUTEYzWjNPdEp1eUwxTmNpZDNTOTZFWWxSNHh6TTVXeTMzakRXbzRJMnVyNXNYcTNhemNEcVY5anc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MDAyNTM3NDo5NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWM3VDUmFGUDUyV3RWZ2ZTWUtieUpTekJleEFLeWNJTVNpZExMWjIyR0ZvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTI5OTA5fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.1 Beta (By NICO)",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "NICO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94770025374",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
