/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        
        return result;
      })
    )
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    
	
	//create pages for three types that require static page
    const getAsociaciones = makeRequest(graphql, `
      {
		  allStrapiAsociacion {
			edges {
			  node {
				id
			  }
			}
		  }
		  allStrapiOrganofederado {
			edges {
			  node {
				id
			  }
			}
		  }
		  allStrapiConsejo {
			edges {
			  node {
				id
			  }
			}
		  }
		}
      `).then(result => {
      // Create pages for each asociation
      result.data.allStrapiAsociacion.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.id}`,
          component: path.resolve(`src/components/asociacion/asociacion.js`),
          context: {
            id: node.id,
          },
        })
      })
	});
	
	// Create pages for each organo federado
      result.data.allStrapiOrganofederado.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.id}`,
          component: path.resolve(`src/components/asociacion/asociacion.js`),
          context: {
            id: node.id,
          },
        })
      })
	});
	
	// Create pages for each consejo
      result.data.allStrapiAsociacion.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.id}`,
          component: path.resolve(`src/components/asociacion/asociacion.js`),
          context: {
            id: node.id,
          },
        })
      })
	});
    
    // Query for articles nodes to use in creating pages.
    return getAsociaciones;
  };