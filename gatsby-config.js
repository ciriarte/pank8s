const themeOptions = require('./source/theme-options');

module.exports = {
    pathPrefix: '/pank8s',
    plugins: [
      {
        resolve: 'gatsby-theme-apollo-docs',
        options: {
          ...themeOptions,
          root: __dirname,
          subtitle: 'Pank8s 🥞',
          description: 'Learning Kubernetes',
          githubRepo: 'ciriarte/pank8s',
          spectrumPath: '/',
          sidebarCategories: {
            null: [
              'index',
              'whats-new'
            ],
          },
          siteName: 'Yummy Pank8s'  
        }
      }
    ]
  };