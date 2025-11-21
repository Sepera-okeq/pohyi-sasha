import type { Metadata } from 'next';
import { locales } from '@/i18n';

export const metadata: Metadata = {
  title: 'Pohyi Sasha',
  description: 'Next.js site with MDX, i18n, and theming',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
