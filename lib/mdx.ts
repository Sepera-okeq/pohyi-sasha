import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { type Locale } from '@/i18n';

export interface NewsArticle {
  id: string;
  title: string;
  description?: string;
  date: string;
  locale: Locale;
  slug: string;
}

export interface PageContent {
  slug: string;
  locale: Locale;
}

const contentDirectory = path.join(process.cwd(), 'content');

export function getNewsArticles(locale: Locale): NewsArticle[] {
  const newsDir = path.join(contentDirectory, 'news');

  if (!fs.existsSync(newsDir)) {
    return [];
  }

  const articleDirs = fs.readdirSync(newsDir);
  const articles: NewsArticle[] = [];

  for (const dir of articleDirs) {
    const articlePath = path.join(newsDir, dir);
    const stat = fs.statSync(articlePath);

    if (stat.isDirectory()) {
      const fileName = `text.${locale}.mdx`;
      const filePath = path.join(articlePath, fileName);

      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        articles.push({
          id: dir,
          title: data.title || `Article ${dir}`,
          description: data.description,
          date: data.date || new Date().toISOString(),
          locale,
          slug: dir,
        });
      }
    }
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsArticle(id: string, locale: Locale) {
  const filePath = path.join(contentDirectory, 'news', id, `text.${locale}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id,
    title: data.title || `Article ${id}`,
    description: data.description,
    date: data.date || new Date().toISOString(),
    locale,
    slug: id,
    content,
  };
}

export function getMdxPages(locale: Locale): string[] {
  const pagesDir = path.join(contentDirectory, 'pages');

  if (!fs.existsSync(pagesDir)) {
    return [];
  }

  const files = fs.readdirSync(pagesDir);
  const pages: string[] = [];

  for (const file of files) {
    if (file.endsWith(`.${locale}.mdx`)) {
      const slug = file.replace(`.${locale}.mdx`, '');
      pages.push(slug);
    }
  }

  return pages;
}

export function getMdxPage(slug: string, locale: Locale) {
  const filePath = path.join(contentDirectory, 'pages', `${slug}.${locale}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    locale,
    title: data.title || slug,
    content,
    ...data,
  };
}
