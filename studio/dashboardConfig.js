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
                  buildHookId: '5e61ad95661a2ae310e96b84',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5v2h2252',
                  apiId: 'f2ebc162-2da5-4c67-864f-0e1521113fee'
                },
                {
                  buildHookId: '5e61ad956f563ad1eabe5506',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vf1ohfzj',
                  apiId: '8d30805d-43f0-4d87-97a2-1ce8f934e0ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BlackFenix2/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vf1ohfzj.netlify.com',
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
