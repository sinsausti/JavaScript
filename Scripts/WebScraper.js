// Description:
// This script performs web scraping to extract product names and prices from a specified webpage. 
// It uses axios to fetch the page content and cheerio to parse and extract the desired information. 
// The extracted data is then logged to the console.

// Usage:
// node WebScraper.js

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com/products';

axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const products = [];

        $('div.product').each((index, element) => {
            const name = $(element).find('h2.product-name').text().trim();
            const price = $(element).find('span.product-price').text().trim();
            products.push({ name, price });
        });

        console.log(products);
    })
    .catch(error => {
        console.error('Error fetching the page:', error);
    });