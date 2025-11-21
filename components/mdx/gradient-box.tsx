'use client';

import { ReactNode } from 'react';

interface GradientBoxProps {
  children: ReactNode;
  title?: string;
}

export function GradientBox({ children, title }: GradientBoxProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-xl text-white shadow-lg my-6">
      {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
      <div className="text-lg">{children}</div>
    </div>
  );
}
