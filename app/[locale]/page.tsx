import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('nav');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Pohyi Sasha</h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
        Welcome to our Next.js site with MDX support, internationalization (en/ru/kz), and theme switching (light/dark).
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="./news"
          className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2">{t('news')}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Read the latest news articles written in MDX format.
          </p>
        </Link>
        
        <Link
          href="./contacts"
          className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2">{t('contacts')}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get in touch with us through our contact page.
          </p>
        </Link>
      </div>
    </div>
  );
}
