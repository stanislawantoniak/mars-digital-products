module.exports = {
  siteMetadata: {
    title: `Mars Digital World`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },  
  //proxy: {    
    //    prefix:'/graphql-salsify-pocdev',        
      //  url:'https://dev.api.effem.com',
      //},
  proxy: {
        prefix:'/api',      
        url:'https://app.salsify.com',
      }, 
    
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {        
        typeName: "Product",        
        fieldName: "productApi",
         url: "https://dev.api.effem.com/graphql-salsify-pocdev/graphql/",
         //url:"http://localhost:8092/api/graphql/",
         headers: {
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization":"Bearer 5959649b3b067a55a3c1ffad",
                  },
         fetchOptions: {
          mode:'no-cors',
          credentials: 'include',
          },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-graphql-loader`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
     {
       resolve: 'gatsby-plugin-apollo',
       options: {
        typeName: "Product",        
        fieldName: "myApi",        
        uri: 'https://mars-graphql-poc.herokuapp.com/' 
		//'https://dev.api.effem.com/graphql-salsify-pocdev/graphql/',

        //uri: '/api/graphql',
        //uri: "/graphql-salsify-pocdev/graphql/",
         
       },
     },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
