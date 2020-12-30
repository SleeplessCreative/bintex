module.exports = {
  siteMetadata: {
    title: `Bintex ID`,
    description: `A new delivery service that will take good control of your delivery process in order to make sure that your packages are delivered to you on time.`,
    author: `Bintang Express Indonesia`,
    url: `https://bintex.id`
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `blue`,
        showSpinner: false,
        trickle: false
      }
    },
    'babel-plugin-emotion'
  ]
};
