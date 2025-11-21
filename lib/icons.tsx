import * as LucideIcons from 'lucide-react';

export function getIcon(iconName?: string) {
  if (!iconName) return null;
  
  // @ts-ignore - Dynamic icon lookup
  const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
  
  if (Icon && typeof Icon === 'function') {
    return Icon;
  }
  
  return null;
}
