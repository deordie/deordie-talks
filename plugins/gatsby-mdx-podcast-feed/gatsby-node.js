const fs = require("fs-extra")
const path = require("path")
const RSS = require("rss")

const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onPostBuild = async ({ graphql }, pluginOptions) => {
  const result = await wrapper(
    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              body
              id
              frontmatter {
                title
                categories
                url
                number
                date
                size
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  )

  const { feedOptions } = pluginOptions || {}

  const episodes = result.data.allMdx.edges

  const feed = new RSS(feedOptions)

  episodes.forEach(edge => {
    const { html, excerpt, id } = edge.node
    const { title, number, date, url, categories, size } = edge.node.frontmatter
    const { slug } = edge.node.fields
    feed.item({
      guid: id,
      title,
      url: feedOptions.site_url + slug,
      description: excerpt,
      categories,
      author: feedOptions.managingEditor,
      date,
      custom_elements: [
        { "content:encoded": html },
        { pubDate: date },
        { "itunes:explicit": "no" },
        { "itunes:episodeType": "full" },
        { "itunes:title": title },
        { "itunes:episode": number },
        { "itunes:summary": excerpt },
        { "itunes:author": feedOptions.managingEditor },
        {
          "itunes:image": {
            _attr: {
              href: feedOptions.image_url,
            },
          },
        },
      ],
      enclosure: {
        url,
        size,
        type: "audio/mpeg",
      },
    })
  })

  const publicPath = `./public`
  const outputPath = path.join(publicPath, "/rss.xml")
  const outputDir = path.dirname(outputPath)
  if (!(await fs.exists(outputDir))) {
    await fs.mkdirp(outputDir)
  }
  await fs.writeFile(outputPath, feed.xml())
}
