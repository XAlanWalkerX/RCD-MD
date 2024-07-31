const axios = require('axios');
const cheerio = require('cheerio');

async function mediafire(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const fileData = [];

        // Extract file info (You may need to adjust this based on Mediafire page structure)
        $('.box-content').each((i, el) => {
            const fileName = $(el).find('.file-name').text().trim();
            const fileSize = $(el).find('.file-size').text().trim();
            const fileMime = $(el).find('.file-mime').text().trim();
            const fileLink = $(el).find('.download-link').attr('href');

            fileData.push({
                nama: fileName,
                size: fileSize,
                mime: fileMime,
                link: fileLink
            });
        });

        return fileData;
    } catch (error) {
        throw new Error(`Failed to fetch file info: ${error.message}`);
    }
}

module.exports = { mediafire };
