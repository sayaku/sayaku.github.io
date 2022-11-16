import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '15e'),
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
    path: '/blog/2022/11/08/build-project-react-with-vite',
    component: ComponentCreator('/blog/2022/11/08/build-project-react-with-vite', '393'),
    exact: true
  },
  {
    path: '/blog/2022/11/10/mtb-hopper-ramp-lite',
    component: ComponentCreator('/blog/2022/11/10/mtb-hopper-ramp-lite', '50c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7cb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '7f1'),
    exact: true
  },
  {
    path: '/blog/tags/mtb',
    component: ComponentCreator('/blog/tags/mtb', '8eb'),
    exact: true
  },
  {
    path: '/blog/tags/mtb-hopper',
    component: ComponentCreator('/blog/tags/mtb-hopper', 'c07'),
    exact: true
  },
  {
    path: '/blog/tags/react',
    component: ComponentCreator('/blog/tags/react', '2c0'),
    exact: true
  },
  {
    path: '/blog/tags/vite',
    component: ComponentCreator('/blog/tags/vite', '1eb'),
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
