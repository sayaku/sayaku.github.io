// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const katex = require("rehype-katex");
const math = require("remark-math");
const path = require("path");

const unified = require("unified");
const remarkParse = require("remark-parse");
const stringify = require("rehype-stringify");
const remark2rehype = require("remark-rehype");

const remarkGridTables = require("remark-grid-tables");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

require("dotenv").config();

function unwrapCategory(items) {
  const newItems = [];

  items.forEach((item) => {
    const isDoc = item.type === "doc";
    const isCategory = item.type === "category";
    const hasOnlyOneDocItem = isCategory && item.items.length === 1 && item.items[0].type === "doc";
    if (isDoc) {
      newItems.push(item);
      return;
    }

    if (hasOnlyOneDocItem) {
      newItems.push(item.items[0]);
      return;
    }

    item.items = unwrapCategory(item.items);
    newItems.push(item);
  });

  return newItems;
}
const projectName = 'sayaku.github.io';
const MAIN_URL = `https://${projectName}`;
const editUrl = `https://github.com/sayaku/${projectName}/edit/main`

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "SAYAKU",
  tagline: "喜歡鐵道單車咖啡的前端碼農",
  url: MAIN_URL, //process.env.URL,
  baseUrl: "/", //process.env.BASE_URL,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  trailingSlash: false,
  organizationName: "sayaku", // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    ["docusaurus2-dotenv",
      {
        systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
      },
    ]
  ],
  themes: ['@saucelabs/theme-github-codeblock'],
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    metadata: [{
        name: 'robots',
        content: 'max-image-preview:large'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'fb:app_id',
        content: '173025689387886'
      }
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    algolia: {
      appId: 'IIW4FDIYXZ',
      apiKey: '4dd40488b1c8259b9828b02d578db323',
      indexName: 'dev_sayaku',
      contextualSearch: true,
    },
    zoom: {
      selector: '.markdown :not(em,a) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    prism: {
      additionalLanguages: ["powershell", "csharp", "cshtml", "java", "php", "aspnet", "toml"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    navbar: {
      title: "SAYAKU",
      logo: {
        alt: "Site Logo",
        src: "img/logo.png",
      },
      items: [{
          type: "doc",
          docId: "intro/intro",
          position: "left",
          label: "文件庫",
        },
        {
          to: "/blog",
          label: "部落格",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Sayaku Lin(林克融). Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: 'UA-20523508-2',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: editUrl,
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [
            [katex, {
              strict: false
            }]
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          /*
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return unwrapCategory(sidebarItems);
          },
          */
        },
        blog: {
          blogSidebarCount: 0,
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: editUrl,
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [
            [katex, {
              strict: false
            }]
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [{
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&display=swap",
    },
  ],
  scripts: [{
      src: "https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js",
      async: true,
    },
    {
      src: "/assets/enablePangu.js",
      async: true,
    },
  ],
};
