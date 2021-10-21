module.exports = {
  pathPrefix: "/sunny-github-acc/tesonet-gatsby-task",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "tesonet-gatsby-task",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
