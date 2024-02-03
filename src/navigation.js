import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Community',
      href: 'https://theprintcrew.com',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Toolbox',
      href: 'https://screenprintingtoolbox.com',
    },
  ],
  actions: [{ text: 'Book a Call', href: 'https://savvycal.com/jessepoteet/ssp-intro', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'More',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Patreon', href: 'https://patreon.com/startupscreenprinting' },
        { text: 'Community', href: 'https://theprintcrew.com' },
        { text: 'Toolbox', href: 'https://screenprintingtoolbox.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Community', href: 'https://theprintcrew.com' },
    { text: 'Toolbox', href: 'https://screenprintingtoolbox.com' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/startupscreenprinting' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@startupscreenprinting' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/startupscreenprinting' },
    { ariaLabel: 'Patreon', icon: 'tabler:brand-patreon', href: 'https://patreon.com/startupscreenprinting' },
  ],
  footNote: `
  &#169; 2024 Startup Screen Printing · All rights reserved · Built by <a href="https://backcaststudio.com">Backcast Studio</a>
  `,
};
