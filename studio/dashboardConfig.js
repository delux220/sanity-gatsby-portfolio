export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8b27b4590e58315bd5c069',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s4kj95yx',
                  apiId: '8ddd2f81-0e7f-41cd-a9fa-942fcab67246'
                },
                {
                  buildHookId: '5f8b27b410b6b207db0a4fab',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-khe81y9d',
                  apiId: 'e4fded99-f41b-47bf-8062-564fb461224e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/delux220/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-khe81y9d.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
