import { type Locale } from '@/i18n';

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface NavigationConfig {
  [key: string]: NavigationItem[];
}

// Navigation configuration with support for subcategories
export const navigationConfig: NavigationConfig = {
  en: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'News',
      href: '/news',
    },
    {
      label: 'About',
      href: '/about',
      children: [
        {
          label: 'Our Team',
          href: '/about/team',
        },
        {
          label: 'Our Story',
          href: '/about/story',
        },
      ],
    },
    {
      label: 'Contacts',
      href: '/contacts',
    },
  ],
  ru: [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Новости',
      href: '/news',
    },
    {
      label: 'О нас',
      href: '/about',
      children: [
        {
          label: 'Наша команда',
          href: '/about/team',
        },
        {
          label: 'Наша история',
          href: '/about/story',
        },
      ],
    },
    {
      label: 'Контакты',
      href: '/contacts',
    },
  ],
  kz: [
    {
      label: 'Басты бет',
      href: '/',
    },
    {
      label: 'Жаңалықтар',
      href: '/news',
    },
    {
      label: 'Біз туралы',
      href: '/about',
      children: [
        {
          label: 'Біздің команда',
          href: '/about/team',
        },
        {
          label: 'Біздің тарих',
          href: '/about/story',
        },
      ],
    },
    {
      label: 'Байланыс',
      href: '/contacts',
    },
  ],
};

export interface FooterSection {
  title: string;
  items: NavigationItem[];
}

export interface FooterConfig {
  [key: string]: FooterSection[];
}

// Footer configuration with sections
export const footerConfig: FooterConfig = {
  en: [
    {
      title: 'Company',
      items: [
        {
          label: 'About Us',
          href: '/about',
        },
        {
          label: 'Our Team',
          href: '/about/team',
        },
        {
          label: 'Contacts',
          href: '/contacts',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          label: 'News',
          href: '/news',
        },
        {
          label: 'Documentation',
          href: '/docs',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms of Service',
          href: '/terms',
        },
      ],
    },
  ],
  ru: [
    {
      title: 'Компания',
      items: [
        {
          label: 'О нас',
          href: '/about',
        },
        {
          label: 'Наша команда',
          href: '/about/team',
        },
        {
          label: 'Контакты',
          href: '/contacts',
        },
      ],
    },
    {
      title: 'Ресурсы',
      items: [
        {
          label: 'Новости',
          href: '/news',
        },
        {
          label: 'Документация',
          href: '/docs',
        },
      ],
    },
    {
      title: 'Правовая информация',
      items: [
        {
          label: 'Политика конфиденциальности',
          href: '/privacy',
        },
        {
          label: 'Условия использования',
          href: '/terms',
        },
      ],
    },
  ],
  kz: [
    {
      title: 'Компания',
      items: [
        {
          label: 'Біз туралы',
          href: '/about',
        },
        {
          label: 'Біздің команда',
          href: '/about/team',
        },
        {
          label: 'Байланыс',
          href: '/contacts',
        },
      ],
    },
    {
      title: 'Ресурстар',
      items: [
        {
          label: 'Жаңалықтар',
          href: '/news',
        },
        {
          label: 'Құжаттама',
          href: '/docs',
        },
      ],
    },
    {
      title: 'Заңды ақпарат',
      items: [
        {
          label: 'Құпиялылық саясаты',
          href: '/privacy',
        },
        {
          label: 'Пайдалану шарттары',
          href: '/terms',
        },
      ],
    },
  ],
};

export function getNavigationItems(locale: Locale): NavigationItem[] {
  return navigationConfig[locale] || navigationConfig['en'];
}

export function getFooterSections(locale: Locale): FooterSection[] {
  return footerConfig[locale] || footerConfig['en'];
}
