import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aloong Planet Documentation',
  tagline: 'Documentation for Aloong Planet Services',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aloong-planet.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/aloong-docs/',

  // GitHub pages deployment config.
  organizationName: 'aloong-planet',
  projectName: 'aloong-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/aloong-planet/aloong-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/aloong-planet/aloong-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Aloong Planet',
      logo: {
        alt: 'Aloong Planet Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'dropdown',
          label: 'APIs',
          position: 'left',
          items: [
            {
              label: 'FastAPI Backend',
              to: '/api-docs/fastapi',
            },
            {
              label: 'LLM Streaming Service',
              to: '/api-docs/llm',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'github-actions',
          position: 'left',
          label: 'Actions',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/aloong-planet',
          label: 'GitHub',
          position: 'right',
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
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'API Documentation',
              to: '/api-docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/aloong-planet',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Aloong Planet. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
} satisfies Config;

export default config;
