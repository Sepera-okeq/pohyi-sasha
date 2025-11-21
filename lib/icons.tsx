import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export function getIcon(iconName?: string): LucideIcon | null {
  if (!iconName) return null;
  
  // @ts-ignore - Dynamic icon lookup
  const Icon = LucideIcons[iconName];
  
  if (Icon && typeof Icon === 'function') {
    return Icon as LucideIcon;
  }
  
  return null;
}
