export default {
  widgets: [
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
                  buildHookId: '62de9ce4145c2d22964db6b0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-v9vdxhqz',
                  apiId: 'ad1bdba7-55d8-41e8-841e-d283b73e5316'
                },
                {
                  buildHookId: '62de9ce434f7492350361978',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-4mg8ggbm',
                  apiId: '3a17c06b-63ea-49e1-9db9-4c8f43eae731'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/freshyill/sanity-kitchen-sink-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-4mg8ggbm.netlify.app', category: 'apps'}
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
