// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vampire Wars',
  tagline: 'They are now awake',
  url: 'https://qri57i.github.io',
  baseUrl: '/docs.vampirewars.io/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'qri57i', // Usually your GitHub org/user name.
  projectName: 'docs.vampirewars.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'hhttps://github.com/qri57i/docs.vampirewars.io/tree/main',
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
      navbar: {
        title: 'Vampire Wars',
        //logo: {
        //  alt: 'Vampire Wars',
        //  src: 'img/logo.svg',
        //},
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Discover',
          },
          {
            href: 'https://vampirewars.io', 
            label: 'Main Site', 
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Discover',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: '#',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Twitter',
                href: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with &#9829; by VampireWars.io`,
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        color: '#F8F8F2',
      },
    }),
    
};


module.exports = config;
