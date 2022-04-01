const contentful = require("contentful");

async function getHomeData(){
    var client = contentful.createClient({
        space: 'agwitairrubm',
        accessToken: 'Va3-z6hRa1GDe-EWUZ9gPOvbbvU3vdQ-8VEu1a8L18Y',
    });

    let res = await client.getEntries({
        limit: 200,
        order: 'sys.updatedAt',
        content_type: 'homepage',
    })

    console.log(res.items[0].fields.jumbotronImage);
    return res.items[0].fields;
}

module.exports = getHomeData