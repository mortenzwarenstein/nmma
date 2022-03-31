const axios = require("axios")

async function getPosts () {
    const query = `query getAllPublishedPosts {
      posts(where: {status: PUBLISH}) {
        nodes {
          content
          date
          id
          slug
        }
      }
    }`
    const res =  await axios.post("http://localhost:8080/index.php?graphql", {
      query
  })
  return (res.data.data.posts.nodes.map(e => e))
}

  
module.exports = getPosts