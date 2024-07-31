// lib/utils.js
function isUrl(str) {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}

module.exports = { isUrl };
