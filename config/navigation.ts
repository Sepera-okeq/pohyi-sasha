import { type Locale } from '@/i18n';
import type { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string; // Name of the Lucide icon
  children?: NavigationItem[];
}

export interface NavigationConfig {
  [key: string]: NavigationItem[];
}

// Navigation configuration with support for subcategories and icons
export const navigationConfig: NavigationConfig = {
  en: [
    {
      label: 'Home',
      href: '/',
      icon: 'Home',
    },
    {
      label: 'News',
      href: '/news',
      icon: 'Newspaper',
    },
    {
      label: 'About',
      href: '/about',
      icon: 'Info',
      children: [
        {
          label: 'Our Team',
          href: '/about/team',
          icon: 'Users',
        },
        {
          label: 'Our Story',
          href: '/about/story',
          icon: 'BookOpen',
        },
      ],
    },
    {
      label: 'Contacts',
      href: '/contacts',
      icon: 'Mail',
    },
    {
      label: 'Examples',
      href: '/example',
      icon: 'Code',
      children: [
        {
          label: 'TSX in MDX',
          href: '/example',
          icon: 'FileCode',
        },
        {
          label: 'Table Example',
          href: '/example-table',
          icon: 'Table',
        },
      ],
    },
  ],
  ru: [
    {
      label: 'Главная',
      href: '/',
      icon: 'Home',
    },
    {
      label: 'Новости',
      href: '/news',
      icon: 'Newspaper',
    },
    {
      label: 'О нас',
      href: '/about',
      icon: 'Info',
      children: [
        {
          label: 'Наша команда',
          href: '/about/team',
          icon: 'Users',
        },
        {
          label: 'Наша история',
          href: '/about/story',
          icon: 'BookOpen',
        },
      ],
    },
    {
      label: 'Контакты',
      href: '/contacts',
      icon: 'Mail',
    },
    {
      label: 'Примеры',
      href: '/example',
      icon: 'Code',
      children: [
        {
          label: 'TSX в MDX',
          href: '/example',
          icon: 'FileCode',
        },
        {
          label: 'Пример таблицы',
          href: '/example-table',
          icon: 'Table',
        },
      ],
    },
  ],
  kz: [
    {
      label: 'Басты бет',
      href: '/',
      icon: 'Home',
    },
    {
      label: 'Жаңалықтар',
      href: '/news',
      icon: 'Newspaper',
    },
    {
      label: 'Біз туралы',
      href: '/about',
      icon: 'Info',
      children: [
        {
          label: 'Біздің команда',
          href: '/about/team',
          icon: 'Users',
        },
        {
          label: 'Біздің тарих',
          href: '/about/story',
          icon: 'BookOpen',
        },
      ],
    },
    {
      label: 'Байланыс',
      href: '/contacts',
      icon: 'Mail',
    },
    {
      label: 'Мысалдар',
      href: '/example',
      icon: 'Code',
      children: [
        {
          label: 'MDX-тегі TSX',
          href: '/example',
          icon: 'FileCode',
        },
        {
          label: 'Кесте мысалы',
          href: '/example-table',
          icon: 'Table',
        },
      ],
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
