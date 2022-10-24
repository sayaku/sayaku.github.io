import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a3e'),
    exact: true
  },
  {
    path: '/blog/2019/09/20/fujisan-ni-nobotta',
    component: ComponentCreator('/blog/2019/09/20/fujisan-ni-nobotta', '6d2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7cb'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '4bd'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '518'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '203'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f4b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
