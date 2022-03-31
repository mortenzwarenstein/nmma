const axios = require("axios")

class Home {
    constructor() {
        this.data = {
            message: "",
            jumbotron: {}
        }
    }

    async getData() {
        const query = `query getHomeData {
          messages(last: 1) {
            nodes {
              content(format: RENDERED)
            }
          }
          pageBy(pageId: 18) {
            title(format: RENDERED)
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }`;
        const res =  await axios.post("http://localhost:8080/index.php?graphql", {
            query
        });
        let wpData = res.data.data;
        console.log(wpData.pageBy.featuredImage)
        this.message = (wpData.messages?.nodes.map(e => e)[0]?.content);
        this.jumbotron = {
            title: wpData.pageBy?.title,
            img: wpData.pageBy?.featuredImage?.node
        };

        return {
            message: this.message,
            jumbotron: this.jumbotron
        }
    }
}



module.exports = Home