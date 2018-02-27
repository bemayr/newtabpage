const plugins = {
  reactHelmet: "gatsby-plugin-react-helmet",
  resolveSrc: "gatsby-plugin-resolve-src",
  favicon: {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/assets/favicon.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
  backgroundImages: {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/background-images/`
    }
  }
};

module.exports = {
  siteMetadata: {
    title: "new tab"
  },
  pathPrefix: "code/bemayr/newtabpage/public",
  plugins: [
    plugins.reactHelmet,
    plugins.resolveSrc,
    plugins.favicon,
    plugins.backgroundImages
  ]
};
