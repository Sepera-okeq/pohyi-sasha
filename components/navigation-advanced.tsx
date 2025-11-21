'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Home, Newspaper, Info, Mail, Code, Users, BookOpen, FileCode, Table } from 'lucide-react';
import { LanguageDropdown } from './language-dropdown';
import { getNavigationItems, type NavigationItem } from '@/config/navigation';

// Map icon names to Lucide components
const iconMap: Record<string, any> = {
  Home,
  Newspaper,
  Info,
  Mail,
  Code,
  Users,
  BookOpen,
  FileCode,
  Table,
};

function getIcon(iconName?: string) {
  if (!iconName) return null;
  return iconMap[iconName] || null;
}

export function NavigationAdvanced() {
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationItems = getNavigationItems(locale as any);

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  const isActive = (href: string) => {
    const localizedHref = getLocalizedPath(href);
    return pathname === localizedHref || pathname.startsWith(localizedHref + '/');
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={getLocalizedPath('/')}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Pohyi Sasha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {item.label}
                        <svg
                          className="inline-block w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                        <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 border border-gray-200 dark:border-gray-700">
                          {item.children.map((child) => {
                            const ChildIcon = getIcon(child.icon);
                            return (
                              <Link
                                key={child.label}
                                href={getLocalizedPath(child.href)}
                                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                                  isActive(child.href)
                                    ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-700'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                              >
                                {ChildIcon && <ChildIcon className="w-4 h-4" />}
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={getLocalizedPath(item.href)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              <LanguageDropdown />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`w-full flex items-center justify-between px-4 py-2 text-base font-medium rounded-md transition-colors ${
                            isActive(item.href)
                              ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {Icon && <Icon className="w-4 h-4" />}
                            {item.label}
                          </span>
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openDropdown === item.label && (
                          <div className="pl-4 space-y-1">
                            {item.children.map((child) => {
                              const ChildIcon = getIcon(child.icon);
                              return (
                                <Link
                                  key={child.label}
                                  href={getLocalizedPath(child.href)}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors ${
                                    isActive(child.href)
                                      ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800'
                                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                  }`}
                                >
                                  {ChildIcon && <ChildIcon className="w-4 h-4" />}
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={getLocalizedPath(item.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2 text-base font-medium rounded-md transition-colors ${
                          isActive(item.href)
                            ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {item.label}
                    </Link>
                  )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="px-4">
                <LanguageDropdown />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
