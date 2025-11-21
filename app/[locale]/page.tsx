import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: '🚀',
      title: t('features.feature1.title'),
      description: t('features.feature1.description'),
    },
    {
      icon: '👥',
      title: t('features.feature2.title'),
      description: t('features.feature2.description'),
    },
    {
      icon: '🔒',
      title: t('features.feature5.title'),
      description: t('features.feature5.description'),
    },
    {
      icon: '⚡',
      title: t('features.feature6.title'),
      description: t('features.feature6.description'),
    },
    {
      icon: '📈',
      title: t('features.feature4.title'),
      description: t('features.feature4.description'),
    },
    {
      icon: '💬',
      title: t('features.feature3.title'),
      description: t('features.feature3.description'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            {t('hero.subtitle')}
          </p>
          <Link
            href="#features"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl animate-fade-in-up animation-delay-400"
          >
            {t('hero.cta')}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('nav.contacts')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('nav.news')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="./contacts"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              {t('nav.contacts')}
            </Link>
            <Link
              href="./news"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              {t('nav.news')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
