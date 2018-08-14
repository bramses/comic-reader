const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');
const request = require('request');
const DOWNLOAD_DIR = '../src/assets/';

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build()
  try {
    await driver.get('https://readhunterxhunter.net/manga/hunter-x-hunter-chapter-1/');
    const pages = await driver.findElements(By.className('img_container'));
    let urls = await extractUrls(pages); // list of image urls
    await downloadImages(urls);
  } catch (error) {
    throw error
  } 
  
  finally {
    await driver.quit();
  }
})();

const extractUrls = async (elems) => {
    let urls = []
    for (let i = 0; i < elems.length; i++) {
        let page = elems[i]
        const img = await page.findElement(By.tagName('img')).getAttribute('src')
        urls.push(img)
    }
    return urls
}

const downloadImages = async (urls) => {
    for (let i = 0; i < urls.length; i++) {
        let url = urls[i]
        
        try {
            await downloadImage(DOWNLOAD_DIR, `hxh_page_${i}.jpg`, url)
        } catch (error) {
            throw error
        }
        
        
    }
}

const downloadImage = async (path, filename, uri) => {
    const fullPath = path + filename
    try {
        return request(uri).pipe(fs.createWriteStream(fullPath))
    } catch (error) {
        throw error
    } 
    
}