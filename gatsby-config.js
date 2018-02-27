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
  }
};

module.exports = {
  siteMetadata: {
    title: "new tab"
  },
  plugins: [plugins.reactHelmet, plugins.resolveSrc, plugins.favicon]
};
