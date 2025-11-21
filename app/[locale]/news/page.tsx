import Link from 'next/link';
import { getNewsArticles } from '@/lib/mdx';
import { type Locale } from '@/i18n';

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const articles = getNewsArticles(locale as Locale);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">News</h1>

      {articles.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No news articles available yet.</p>
      ) : (
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/${locale}/news/${article.slug}`}
              className="block p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              {article.description && (
                <p className="text-gray-600 dark:text-gray-400 mb-2">{article.description}</p>
              )}
              <time className="text-sm text-gray-500 dark:text-gray-500">
                {new Date(article.date).toLocaleDateString(locale)}
              </time>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
