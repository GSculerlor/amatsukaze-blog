module.exports = {
  siteMetadata: {
    title: "amatsukaze-blog",
    author: "Ganendra Afrasya",
    description: "blog",
    siteUrl: "https://blog.ganen.moe",
  },
  pathPrefix: "/amatsukaze-blog",
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `patchouli`,
        remote: `https://github.com/GSculerlor/Patchouli.git`,
        patterns: `posts/!(\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])\-(.*).md)`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin: 15px -30px !important',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
  ],
};
