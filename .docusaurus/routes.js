import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6aa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b5b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8e7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '281'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '667'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '524'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '92b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ef8'),
    exact: true
  },
  {
    path: '/blog/2019/09/20/fujisan-ni-nobotta',
    component: ComponentCreator('/blog/2019/09/20/fujisan-ni-nobotta', '6d2'),
    exact: true
  },
  {
    path: '/blog/2020/07/27/study-refactoring',
    component: ComponentCreator('/blog/2020/07/27/study-refactoring', 'cd5'),
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
