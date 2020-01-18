module.exports = {
  siteMetadata: {
    title: `Разработка приложений на нейросетевых вычислениях`,
    description: `ООО «СМАРТ системс инжиниринг» ⏤ производственно-инжиниринговая компания, реализующая потенциал и квалификацию опытных системных инженеров в разработке собственных продуктов и под заказ.`,
    author: `@smartse`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-videos`,
            options: {
              pipelines: [
                {
                  name: "vp9",
                  transcode: chain =>
                    chain
                      .videoCodec("libvpx-vp9")
                      .noAudio()
                      .outputOptions(["-crf 20", "-b:v 0"]),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: "webm",
                },
                {
                  name: "h264",
                  transcode: chain =>
                    chain
                      .videoCodec("libx264")
                      .noAudio()
                      .addOption("-profile:v", "main")
                      .addOption("-pix_fmt", "yuv420p")
                      .outputOptions(["-movflags faststart"])
                      .videoBitrate("1000k"),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: "mp4",
                },
              ],
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0099E5`,
        theme_color: `#0099E5`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
