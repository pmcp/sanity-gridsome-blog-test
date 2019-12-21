export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5dfe31cb99332ed630b5fe5c',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-test-studio',
                  apiId: '5272ed0f-397b-4c8d-af40-18e106bdfb27'
                },
                {
                  buildHookId: '5dfe31cb99332e21eeb5fe52',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-test',
                  apiId: '70e1ba5e-ee5c-493c-be79-b4e550616cb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pmcp/sanity-gridsome-blog-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-test.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
