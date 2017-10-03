const phantom = require('phantom');
const cheerio = require('cheerio');

async function getNameTagInfo() {
    console.log('Initializing engine ...')
    const instance = await phantom.create();
    const page = await instance.createPage();
    console.log('Retrieving webpage ...')
    await page.on('onResourceRequested', function(requestData) {
        // console.info('Requesting', requestData.url);
    });

    const status = await page.open('https://steamcommunity.com/market/search?q=name+tag');
    const html = await page.evaluate(function(html) {
        return document.getElementsByTagName('html')[0].innerHTML;
    });
    const $ = cheerio.load(html, {
        normalizeWhitespace: true,
    });
    const result = $('#searchResultsRows').find('.market_listing_row_link').first().find('.market_listing_row');
    const page_link = $('#searchResultsRows').find('.market_listing_row_link').attr('href')
    const img = result.find('img').first().attr('src');
    const item_info = result.find('.market_listing_item_name_block').first()
    const item_name = item_info.find('.market_listing_item_name').text();
    const game_name = item_info.find('.market_listing_game_name').text();
    const price_info = result.find('.market_listing_their_price').first().find('.market_table_value');
    const normal_price = price_info.find('.normal_price').text();
    const sale_price = price_info.find('.sale_price').text()
    console.log('Closing engine ...')
    await page.close();
    await instance.exit();
    console.log('Done.');
    return {
        item_name: item_name,
        game_name: game_name,
        sale_price: sale_price,
        normal_price: normal_price,
        img: img,
        page_link: page_link
    }
}

module.exports = getNameTagInfo;
