import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ─── Shared static directory (one source of truth for logo / favicon / images) ─
export const THEME_IMG_DIR = path.resolve(__dirname, '../img');

// ─── Shared footer columns (identical across every site) ──────────────────────
const communityFooterColumn = {
  title: 'Community',
  items: [
    { label: 'Q&A Discussions', href: 'https://github.com/orgs/RAPath/discussions' },
    { label: 'Report an Error', href: 'https://github.com/orgs/RAPath/discussions/new?category=corrections' },
    { label: 'GitHub', href: 'https://github.com/RAPath/rapath.github.io' },
  ],
};

const rapathFooterColumn = {
  title: 'RAPath',
  items: [
    { label: 'All Jurisdictions', href: 'https://rapath.org/#jurisdictions' },
    { label: 'Terms', href: 'https://rapath.org/terms' },
    { label: 'About', href: 'https://rapath.org/about' },
  ],
};

// ─── Disclaimer builder ───────────────────────────────────────────────────────
function buildCopyright(params: { title: string; disclaimerSourcesHtml: string }): string {
  const year = new Date().getFullYear();
  return (
    '<hr class="footer__disclaimer-separator" />' +
    '<strong>Disclaimer:</strong> Independent open-source project. ' +
    'Content across all RAPath sites is written with AI assistance ' +
    'and is intended as a navigation aid only — ' +
    'not legal or regulatory advice, and not affiliated with any regulatory authority. ' +
    'All content is derived from publicly available sources only. ' +
    'Always verify against official ' + params.disclaimerSourcesHtml + ' sources ' +
    'before making any regulatory decision.<br/><br/>' +
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
  whatsNewPath?: string; // deprecated — hub centralises all updates
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

    // future.v4 / faster flags intentionally omitted — see comment in hub config
    url: 'https://rapath.org',
    baseUrl: '/' + params.siteCode + '/',
    organizationName: 'RAPath',
    projectName: params.siteCode,
    trailingSlash: true,

    onBrokenLinks: 'warn',
    markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },

    themes: [
      [
        '@easyops-cn/docusaurus-search-local',
        {
          hashed: true,
          docsRouteBasePath: '/',
          indexBlog: false,
          searchBarPosition: 'right',
        },
      ],
    ],

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
          // Search removed — search is on the hub only (rapath.org)
          {
            href: 'https://rapath.org/tools/',
            label: '🔍 Regulatory Tools',
            position: 'right',
            target: '_self', 
          },
          {
            href: params.githubDiscussions ?? 'https://github.com/orgs/RAPath/discussions',
            label: 'Q&A',
            position: 'right',
          },
          {
            href: params.githubRepo ?? 'https://github.com/RAPath/rapath.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Home',
            href: 'https://rapath.org/',
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
