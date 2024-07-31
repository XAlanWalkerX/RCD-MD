let {
   runtime,
   formatp,
   prefix,
   smd,
   smdBuffer,
 } = require("../lib");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const Config = require("../config");
const { MessageType } = require('@whiskeysockets/baileys'); // or the library you use for WhatsApp API

smd(
  {
    pattern: "download",
    desc: "Download a file from a link and upload to WhatsApp",
    react: "📥",
    category: "user",
    filename: __filename,
  },
  async (message, { args }) => {
    if (!args[0]) {
      return message.reply("Please provide a direct file link.");
    }

    const fileUrl = args[0];
    const fileName = path.basename(fileUrl);
    const filePath = path.join(__dirname, fileName);

    message.reply(`Downloading file from: ${fileUrl}`);
    console.log(`Saving file to: ${filePath}`);

    try {
      // Download the file
      const response = await axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'stream',
      });

      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      writer.on('finish', async () => {
        message.reply('File downloaded successfully.');

        // Upload the file to WhatsApp
        try {
          await message.client.sendMessage(
            message.from,
            fs.readFileSync(filePath),
            MessageType.document, // Use appropriate type based on file
            { caption: 'Here is the file you requested.' }
          );
          console.log('File uploaded successfully.');
        } catch (uploadError) {
          console.error('Error uploading file:', uploadError);
          message.reply('Failed to upload the file.');
        } finally {
          // Clean up the file after upload
          fs.unlink(filePath, (err) => {
            if (err) console.error('Error deleting file:', err);
            else console.log('File deleted successfully.');
          });
        }
      });

      writer.on('error', (error) => {
        console.error('Error downloading file:', error);
        message.reply('Failed to download the file.');
      });
    } catch (error) {
      console.error('Error:', error);
      message.reply('An error occurred.');
    }
  }
);
