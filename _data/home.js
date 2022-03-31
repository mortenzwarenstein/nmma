const Home = require("../utils/getHomeData.js");


module.exports =  async function() {
    return await new Home().getData();
}