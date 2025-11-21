import { notFound } from 'next/navigation';
import { getNewsArticle, getNewsArticles } from '@/lib/mdx';
import { type Locale, locales } from '@/i18n';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const allParams: { locale: string; id: string }[] = [];

  for (const locale of locales) {
    const articles = getNewsArticles(locale);
    for (const article of articles) {
      allParams.push({
        locale,
        id: article.slug,
      });
    }
  }

  return allParams;
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const article = getNewsArticle(id, locale as Locale);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
            <time className="text-gray-600 dark:text-gray-400">
              {new Date(article.date).toLocaleDateString(locale)}
            </time>
          </header>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <MDXRemote source={article.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
