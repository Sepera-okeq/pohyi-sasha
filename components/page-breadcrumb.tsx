'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

export function PageBreadcrumb() {
  const pathname = usePathname();
  const locale = useLocale();

  // Remove locale prefix and split path
  const pathWithoutLocale = pathname.replace(`/${locale}`, '');
  const segments = pathWithoutLocale.split('/').filter(Boolean);

  // Don't show breadcrumb on homepage
  if (segments.length === 0) {
    return null;
  }

  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${locale}/${segments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    const isLast = index === segments.length - 1;

    return { href, label, isLast };
  });

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={`/${locale}`} className="flex items-center gap-1 transition-colors hover:text-gray-900 dark:hover:text-gray-100">
              <Home className="w-4 h-4" />
              Home
            </Link>
          </BreadcrumbItem>
          
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {item.isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-gray-900 dark:hover:text-gray-100">
                    {item.label}
                  </Link>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
