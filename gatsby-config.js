const feedOptions = {
  title: "DE or DIE: Talks",
  description: "description",
  feed_url: "https://talks.deordie.org/rss.xml",
  site_url: "https://talks.deordie.org",
  image_url: "https://user-images.githubusercontent.com/408149/113920628-af5bbb80-97ed-11eb-91df-523cf5d27254.png",
  managingEditor: "Pasha Finkelshteyn",
  webMaster: "Pasha Finkelshteyn",
  copyright: "2021 DE or DIE",
  language: "ru",
  categories: ["IT", "Data Enginerring"],
  pubDate: "May 20, 2019 04:00:00 GMT",
  ttl: "60",
  custom_namespaces: {
    itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
  },
  custom_elements: [
    { "itunes:subtitle": "Data enginerring from Data Engneers" },
    { "itunes:author": "DE or DIE" },
    {
      "itunes:summary":
        "Here we are discussing topics and news somehow related to the data engineering",
    },
    {
      "itunes:owner": [
        { "itunes:name": "Pasha Finkelshteyn" },
        { "itunes:email": "pavel.finkelshten@gmail.com" },
      ],
    },
    {
      "itunes:image": {
        _attr: {
          href: "https://user-images.githubusercontent.com/408149/113920628-af5bbb80-97ed-11eb-91df-523cf5d27254.png",
        },
      },
    },
    {
      "itunes:category": [
        {
          _attr: {
            text: "Technology",
          },
        },
        {
          "itunes:category": {
            _attr: {
              text: "Gadgets",
            },
          },
        },
      ],
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `DE or DIE: Talks`,
    author: {
      name: `DE or DIE`,
    },
    description: `Podcast by organizers of DE or DIE meetups`,
    social: {
      twitter: `_deordie`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    //{
    //resolve: `gatsby-plugin-feed`,
    //options: {
    //query: `
    //{
    //site {
    //siteMetadata {
    //title
    //description
    //siteUrl
    //site_url: siteUrl
    //}
    //}
    //}
    //`,
    //feeds: [
    //{
    //serialize: ({ query: { site, allMarkdownRemark } }) => {
    //return allMarkdownRemark.nodes.map(node => {
    //return Object.assign({}, node.frontmatter, {
    //description: node.excerpt,
    //date: node.frontmatter.date,
    //url: site.siteMetadata.siteUrl + node.fields.slug,
    //guid: site.siteMetadata.siteUrl + node.fields.slug,
    //custom_elements: [{ "content:encoded": node.html }],
    //})
    //})
    //},
    //query: `
    //{
    //allMarkdownRemark(
    //sort: { order: DESC, fields: [frontmatter___date] },
    //) {
    //nodes {
    //excerpt
    //html
    //fields {
    //slug
    //}
    //frontmatter {
    //title
    //date
    //}
    //}
    //}
    //}
    //`,
    //output: "/rss.xml",
    //},
    //],
    //},
    //},
    {
      resolve: `gatsby-plugin-podcast-feed`,
      options: {
        feedOptions,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/deordie-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
