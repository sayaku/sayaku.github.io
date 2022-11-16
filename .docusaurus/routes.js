import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '916'),
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
    path: '/blog/2022/11/16/vite-react-extension',
    component: ComponentCreator('/blog/2022/11/16/vite-react-extension', 'f8a'),
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
    path: '/blog/tags/axios-observable',
    component: ComponentCreator('/blog/tags/axios-observable', 'c3f'),
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
    path: '/blog/tags/observable-hooks',
    component: ComponentCreator('/blog/tags/observable-hooks', '578'),
    exact: true
  },
  {
    path: '/blog/tags/react',
    component: ComponentCreator('/blog/tags/react', '6c2'),
    exact: true
  },
  {
    path: '/blog/tags/redux',
    component: ComponentCreator('/blog/tags/redux', 'ede'),
    exact: true
  },
  {
    path: '/blog/tags/redux-observable',
    component: ComponentCreator('/blog/tags/redux-observable', '044'),
    exact: true
  },
  {
    path: '/blog/tags/rxjs',
    component: ComponentCreator('/blog/tags/rxjs', 'c09'),
    exact: true
  },
  {
    path: '/blog/tags/tailwindcss',
    component: ComponentCreator('/blog/tags/tailwindcss', 'ff8'),
    exact: true
  },
  {
    path: '/blog/tags/vite',
    component: ComponentCreator('/blog/tags/vite', '633'),
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
