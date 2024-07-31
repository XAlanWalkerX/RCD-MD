const { smd } = require("../lib");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

// Handle the 'xxdl' command to download a video and send it
smd(
  {
    pattern: "xxdl",
    category: "media",
    desc: "Downloads a video from a URL and sends it",
    filename: __filename,
    use: "xxdl [video_url]",
  },
  async (message, match) => {
    const videoUrl = match.trim();
    const filename = path.basename(new URL(videoUrl).pathname);

    try {
      // Fetch the video from the URL
      const response = await fetch(videoUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch video. Status: ${response.status}`);
      }

      // Create a file stream to save the video
      const fileStream = fs.createWriteStream(filename);
      response.body.pipe(fileStream);

      fileStream.on('finish', async () => {
        // Sending the video file (modify according to your bot's file sending method)
        await message.send({
          type: 'document',
          document: { url: `./${filename}`, caption: 'Here is your video' }
        });
        fs.unlinkSync(filename); // Optionally delete the file after sending
      });

      fileStream.on('error', async (error) => {
        console.error('Error writing file:', error);
        await message.send('*Failed to download video.*');
      });
    } catch (error) {
      console.error('Error fetching video:', error);
      await message.send('*Failed to download video.*');
    }
  }
);
