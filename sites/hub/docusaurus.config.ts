import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { THEME_IMG_DIR } from '../../packages/theme/src/index';

const config: Config = {
  title: 'RAPath Global Hub',
  tagline: 'Global Medical Device Regulatory Reference',
  favicon: 'favicon.ico',

  // future.v4 / faster intentionally omitted — see packages/theme/src/index.ts

  url: 'https://rapath.github.io',
  baseUrl: '/',
  organizationName: 'RAPath',
  projectName: 'rapath.github.io',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  staticDirectories: ['static', THEME_IMG_DIR],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: [
            path.resolve(__dirname, '../../packages/theme/src/css/custom.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/rapath-social.png',
    navbar: {
      title: 'RAPath Global Hub',
      logo: {
        alt: 'RAPath Logo',
        src: 'logo.svg',
        srcDark: 'logo.svg',
      },
      items: [
        {
          label: 'Browse Jurisdictions',
          to: '#jurisdictions',
          position: 'left',
        },
        { href: 'https://github.com/orgs/RAPath/discussions', label: 'Q&A', position: 'left' },
        { href: 'https://github.com/RAPath', label: 'GitHub', position: 'left' },
        { type: 'search', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [],
      copyright:
        '<hr class="footer__disclaimer-separator" />' +
        '<div class="footer__disclaimer">' +
        '<strong>Disclaimer:</strong> Content across all RAPath sites is written with AI assistance ' +
        'and is intended as a navigation aid only. Always verify against official regulatory ' +
        'sources before making any regulatory decisions. Not affiliated with any regulatory authority. ' +
        'Not legal or regulatory advice.' +
        '</div>' +
        '<div class="footer__copyright">' +
        'Copyright &copy; ' + new Date().getFullYear() + ' RAPath Network. ' +
        'Built with <a href="https://docusaurus.io" target="_blank" rel="noopener">Docusaurus</a> ' +
        'and hosted on <a href="https://pages.github.com" target="_blank" rel="noopener">GitHub Pages</a>.' +
        '</div>',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    algolia: {
      appId: 'BUXYGQGD2T',
      apiKey: 'c3d2c4479d6314caa0540b8261abfe7b',
      indexName: 'rapath-hub',
      contextualSearch: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
