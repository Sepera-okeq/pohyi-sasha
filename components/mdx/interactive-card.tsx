'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function InteractiveCard() {
  const [count, setCount] = useState(0);
  const t = useTranslations();

  return (
    <div className="p-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl shadow-2xl my-8">
      <h2 className="text-3xl font-bold mb-4">🎯 Interactive Component</h2>
      <p className="text-lg mb-6">
        This is a real React component with state! Click the button to see it in action.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Click me!
        </button>
        <span className="text-2xl font-bold">Count: {count}</span>
      </div>
      <p className="mt-4 text-sm opacity-90">
        Localized text: {t('home.title')}
      </p>
    </div>
  );
}
