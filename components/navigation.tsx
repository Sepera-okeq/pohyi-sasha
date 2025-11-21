'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

export function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedPath = (path: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    return `/${locale}${path}`;
  };

  return (
    <nav className="border-b border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link
            href={getLocalizedPath('/')}
            className="text-lg font-semibold hover:text-blue-600 transition-colors"
          >
            {t('home')}
          </Link>
          <Link
            href={getLocalizedPath('/news')}
            className="hover:text-blue-600 transition-colors"
          >
            {t('news')}
          </Link>
          <Link
            href={getLocalizedPath('/contacts')}
            className="hover:text-blue-600 transition-colors"
          >
            {t('contacts')}
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
