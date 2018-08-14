require('dotenv').config({ path: '../.env'})
const algoliasearch = require('algoliasearch');
const { docs } = require('./text')

var client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
var index = client.initIndex('dev_comic_reader');

index.addObjects(docs, (err, content) => {
    if (err) throw new Error(err)
    return content
});