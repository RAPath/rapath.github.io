import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ─── Shared static directory (one source of truth for logo / favicon / images) ─
export const THEME_IMG_DIR = path.resolve(__dirname, '../img');

// ─── Algolia ──────────────────────────────────────────────────────────────────
const ALGOLIA_APP_ID = 'BUXYGQGD2T';
const ALGOLIA_SEARCH_KEY = 'c3d2c4479d6314caa0540b8261abfe7b';

// ─── Shared footer columns (identical across every site) ──────────────────────
const communityFooterColumn = {
  title: 'Community',
  items: [
    { label: 'Q&A Discussions', href: 'https://github.com/orgs/RAPath/discussions' },
    { label: 'Report an Error', href: 'https://github.com/orgs/RAPath/discussions/new?category=corrections' },
    { label: 'GitHub', href: 'https://github.com/RAPath' },
  ],
};

const rapathFooterColumn = {
  title: 'RAPath',
  items: [
    { label: 'All Jurisdictions', href: 'https://rapath.github.io/' },
    { label: 'Terms', href: 'https://rapath.github.io/terms' },
  ],
};

// ─── Disclaimer builder ───────────────────────────────────────────────────────
function buildCopyright(params: { title: string; disclaimerSourcesHtml: string }): string {
  const year = new Date().getFullYear();
  return (
    '<hr class="footer__disclaimer-separator" />' +
    '<strong>Disclaimer:</strong> Content on this site is written with AI assistance ' +
    'and is intended as a navigation aid only. Always verify against official ' +
    params.disclaimerSourcesHtml + ' sources before making regulatory decisions. ' +
    'Not affiliated with any regulatory authority. Not legal or regulatory advice.<br/><br/>' +
    'Copyright &copy; ' + year + ' ' + params.title + '. ' +
    'Built with <a href="https://docusaurus.io" target="_blank" rel="noopener">Docusaurus</a> ' +
    'and hosted on <a href="https://pages.github.com" target="_blank" rel="noopener">GitHub Pages</a>.'
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface FooterLink {
  label: string;
  href?: string;
  to?: string;
}

interface SiteParams {
  siteCode: string;
  title: string;
  tagline: string;
  sidebarId: string;
  whatsNewPath: string;
  githubDiscussions?: string;
  githubRepo?: string;
  sections: FooterLink[];
  officialSources: FooterLink[];
  regulatorName: string;
  disclaimerSourcesHtml: string;
  metaKeywords: string;
  metaDescription: string;
}

// ─── Main config builder ──────────────────────────────────────────────────────
export function buildSiteConfig(params: SiteParams): Config {
  return {
    title: params.title,
    tagline: params.tagline,
    favicon: 'favicon.ico',

    // future.v4 / faster flags are intentionally omitted to use stable webpack
    // defaults. Enabling them (especially fasterByDefault) pulls in rspack native
    // binaries that are not installed when the lockfile is generated on Windows
    // and npm ci runs on Linux CI — causing "Cannot find native binding" errors.

    url: 'https://rapath.github.io',
    baseUrl: '/' + params.siteCode + '/',
    organizationName: 'RAPath',
    projectName: params.siteCode,
    trailingSlash: true,

    onBrokenLinks: 'warn',
    markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },

    i18n: { defaultLocale: 'en', locales: ['en'] },

    staticDirectories: ['static', THEME_IMG_DIR],

    presets: [
      [
        'classic',
        {
          docs: {
            sidebarPath: './sidebars.ts',
            routeBasePath: '/',
            breadcrumbs: true,
            showLastUpdateTime: false,
          },
          blog: false,
          theme: {
            customCss: [
              path.resolve(__dirname, './css/custom.css'),
            ],
          },
        } satisfies Preset.Options,
      ],
    ],

    themeConfig: {
      image: 'img/rapath-' + params.siteCode + '-social.png',

      navbar: {
        title: params.title,
        logo: {
          alt: 'RAPath Logo',
          src: 'logo.svg',
          srcDark: 'logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: params.sidebarId,
            position: 'left',
            label: 'Docs',
          },
          {
            to: params.whatsNewPath,
            label: "What's New",
            position: 'left',
          },
          { type: 'search', position: 'right' },
          {
            href: params.githubDiscussions ?? 'https://github.com/orgs/RAPath/discussions',
            label: 'Q&A',
            position: 'right',
          },
          {
            href: params.githubRepo ?? 'https://github.com/RAPath',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Home',
            href: 'https://rapath.github.io/',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'light',
        links: [
          { title: 'Sections', items: params.sections },
          { title: 'Official Sources', items: params.officialSources },
          communityFooterColumn,
          rapathFooterColumn,
        ],
        copyright: buildCopyright({
          title: params.title,
          disclaimerSourcesHtml: params.disclaimerSourcesHtml,
        }),
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      algolia: {
        appId: 'BUXYGQGD2T',
        apiKey: 'c3d2c4479d6314caa0540b8261abfe7b',
        // Use the global index name you just set up in the crawler
        indexName: 'rapath-hub',

        // Set this to false for now to fix the "No Results" issue
        contextualSearch: false,

        searchParameters: {
          // This ensures it only searches within the current country site
          facetFilters: [`docusaurus_tag:${params.siteCode}`],
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },

      metadata: [
        { name: 'keywords', content: params.metaKeywords },
        { name: 'description', content: params.metaDescription },
      ],
    } satisfies Preset.ThemeConfig,
  };
}
