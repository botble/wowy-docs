import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/wowy/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/wowy/releases' },
      { text: 'Upgrade Guide', link: '/wowy/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/wowy/installation' },
      { text: 'SSL', link: '/wowy/ssl' },
      { text: 'License', link: '/wowy/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage', link: '/wowy/usage-homepage' },
      { text: 'Menu', link: '/wowy/usage-menu' },
      { text: 'Theme options', link: '/wowy/usage-theme-options' },
      { text: 'Widgets', link: '/wowy/usage-widgets' },
      { text: 'Custom CSS/JS', link: '/wowy/usage-custom-css-js' },
      { text: 'Translation', link: '/wowy/usage-translation' },
      { text: 'Email', link: '/wowy/usage-email' },
      { text: 'Multi-language', link: '/wowy/usage-multi-language' },
      { text: 'Currencies', link: '/wowy/usage-currencies' },
      { text: 'Newsletter', link: '/wowy/usage-newsletter' },
      { text: 'Ads', link: '/wowy/usage-ads' },
      { text: 'Media - Setup Amazon S3', link: '/wowy/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/wowy/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/wowy/usage-media-wasabi' },
      { text: 'Setup social login', link: '/wowy/usage-social-login' },
      { text: 'Analytics', link: '/wowy/usage-analytics' },
      { text: 'Rename theme', link: '/wowy/theme-rename' },
      { text: 'Backup', link: '/wowy/usage-backup' },
      { text: 'Location', link: '/wowy/usage-location' },
      { text: 'Invoice template', link: '/wowy/invoice-template' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[]
