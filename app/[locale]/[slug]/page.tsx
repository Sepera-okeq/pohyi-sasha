import { notFound } from 'next/navigation';
import { getMdxPage, getMdxPages } from '@/lib/mdx';
import { type Locale, locales } from '@/i18n';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { InteractiveCard } from '@/components/mdx/interactive-card';
import { DataTableDemo } from '@/components/mdx/data-table-demo';
import { GradientBox } from '@/components/mdx/gradient-box';

const components = {
  InteractiveCard,
  DataTableDemo,
  GradientBox,
};

export async function generateStaticParams() {
  const allParams: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const pages = getMdxPages(locale);
    for (const slug of pages) {
      allParams.push({
        locale,
        slug,
      });
    }
  }

  return allParams;
}

export default async function MdxPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = getMdxPage(slug, locale as Locale);

  if (!page) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{page.title}</h1>
          </header>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <MDXRemote source={page.content} components={components} />
          </div>
        </article>
      </div>
    </div>
  );
}
