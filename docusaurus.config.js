// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'richWorld',
  tagline: 'Come to do some reading?',
  favicon: 'img/richLogo.png',

  // Set the production url of your site here
  url: 'https://richworld.ninja',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'byoketh', // Usually your GitHub org/user name.
  projectName: 'byoketh.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
        title: 'richWorld',
        logo: {
          alt: 'richWorld logo',
          src: 'img/richLogo.png',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'richDocs',
                to: '/docs/welcome',
              },
              {
                label: 'd2Docs',
                to: '/docs/d2docs',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'X',
                href: 'https://x.com/byoketh',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/byoketh',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/N5ZHJ9qFbJ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/richiecordrey',
              },
              {
                label: 'Gmail',
                href: 'mailto:rdcordrey@gmail.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Source',
                href: 'https://github.com/byoketh/byoketh.github.io',
              },
            ],
          },
        ],
        logo: {
          alt: 'richWorld',
          src: 'img/richLogo.png',
          href: '/',
          width: 70,
          height: 70,
        },
        copyright: `<a href="/lessrichdocs">.</a><br/>Copyright © ${new Date().getFullYear()} richWorld. Built with 💙 and 🦕.`,
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json'],
      },
    }),
};

module.exports = config;
