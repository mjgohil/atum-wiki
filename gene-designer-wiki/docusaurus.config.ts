import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Gene Designer Wiki',
  tagline: 'Simple and Effective Gene Designing Tool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://atum.bio',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/myatum/guides/genedesigner',

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
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    //https://gabrielcsapo.github.io/docusaurus-plugin-image-zoom/docs/getting-started/
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
          light: 'rgb(255, 255, 255)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  } satisfies Preset.ThemeConfig,

  //https://gabrielcsapo.github.io/docusaurus-plugin-image-zoom/docs/getting-started/
  plugins: [require.resolve('docusaurus-plugin-image-zoom')]
};

export default config;
