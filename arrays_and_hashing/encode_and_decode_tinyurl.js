// Q:535 - https://leetcode.com/problems/encode-and-decode-tinyurl/

const urlMap = new Map();
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const shortUrl = longUrl;

    if (!urlMap.has(shortUrl)){
        urlMap.set(shortUrl, longUrl);
    }

    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urlMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */