// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'richDocs',
  tagline: 'come to do some reading?',
  favicon: 'img/richLogo.png',

  // Set the production url of your site here
  url: 'https://ii-richie.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ii-richie', // Usually your GitHub org/user name.
  projectName: 'ii-richie.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // social card
      image: 'img/richLogo.png',
      navbar: {
        title: 'richDocs',
        logo: {
          alt: 'richDocs logo',
          src: 'img/richLogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            label: 'docs',
            position: 'left',
          },
          {
            to: '/blog', 
            label: 'blog', 
            position: 'left'
          },
          /*
          {
            href: 'https://github.com/ii-richie',
            label: 'github',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'docs',
            items: [
              {
                label: 'docs',
                to: '/docs/welcome',
              },
            ],
          },
          /*
          {
            title: 'community',
            items: [
              {
                label: 'discord',
                href: 'https://discordapp.com/invite/aGkfTjgNCE',
              },
            ],
          },
          */
          {
            title: 'more',
            items: [
              {
                label: 'blog',
                to: '/blog',
              },
              {
                label: 'github',
                href: 'https://github.com/ii-richie',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} richWorld. built with 💚 and 🦖.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
