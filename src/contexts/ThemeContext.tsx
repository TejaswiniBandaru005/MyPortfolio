import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface ThemePalette {
  id: string;
  name: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  bg: string;
  bgAlt: string;
  surface: string;
  surfaceHover: string;
  border: string;
  text: string;
  textSecondary: string;
  textMuted: string;
}

export const themes: ThemePalette[] = [
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    primary: '#0891b2',
    primaryLight: '#06b6d4',
    primaryDark: '#0e7490',
    secondary: '#ec4899',
    secondaryLight: '#f472b6',
    accent: '#7eecff',
    bg: '#f0f9ff',
    bgAlt: '#e0f2fe',
    surface: '#ffffff',
    surfaceHover: '#f8fafc',
    border: '#e2e8f0',
    text: '#0f172a',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
  },
  {
    id: 'sunset',
    name: 'Sunset Glow',
    primary: '#ea580c',
    primaryLight: '#f97316',
    primaryDark: '#c2410c',
    secondary: '#f43f5e',
    secondaryLight: '#fb7185',
    accent: '#fdba74',
    bg: '#fff7ed',
    bgAlt: '#ffedd5',
    surface: '#ffffff',
    surfaceHover: '#fffbeb',
    border: '#fed7aa',
    text: '#431407',
    textSecondary: '#7c2d12',
    textMuted: '#c2410c',
  },
  {
    id: 'forest',
    name: 'Forest Fresh',
    primary: '#059669',
    primaryLight: '#10b981',
    primaryDark: '#047857',
    secondary: '#0d9488',
    secondaryLight: '#14b8a6',
    accent: '#6ee7b7',
    bg: '#f0fdf4',
    bgAlt: '#dcfce7',
    surface: '#ffffff',
    surfaceHover: '#f7fee7',
    border: '#d1fae5',
    text: '#052e16',
    textSecondary: '#166534',
    textMuted: '#16a34a',
  },
  {
    id: 'berry',
    name: 'Berry Bloom',
    primary: '#e11d48',
    primaryLight: '#f43f5e',
    primaryDark: '#be123c',
    secondary: '#8b5cf6',
    secondaryLight: '#a78bfa',
    accent: '#fda4af',
    bg: '#fff1f2',
    bgAlt: '#ffe4e6',
    surface: '#ffffff',
    surfaceHover: '#fff5f5',
    border: '#fecdd3',
    text: '#4c0519',
    textSecondary: '#9f1239',
    textMuted: '#e11d48',
  },
  {
    id: 'royal',
    name: 'Royal Indigo',
    primary: '#4f46e5',
    primaryLight: '#6366f1',
    primaryDark: '#4338ca',
    secondary: '#0ea5e9',
    secondaryLight: '#38bdf8',
    accent: '#a5b4fc',
    bg: '#eef2ff',
    bgAlt: '#e0e7ff',
    surface: '#ffffff',
    surfaceHover: '#f5f3ff',
    border: '#c7d2fe',
    text: '#1e1b4b',
    textSecondary: '#3730a3',
    textMuted: '#6366f1',
  },
  {
    id: 'lavender',
    name: 'Lavender Mist',
    primary: '#7c3aed',
    primaryLight: '#8b5cf6',
    primaryDark: '#6d28d9',
    secondary: '#db2777',
    secondaryLight: '#ec4899',
    accent: '#c4b5fd',
    bg: '#faf5ff',
    bgAlt: '#f3e8ff',
    surface: '#ffffff',
    surfaceHover: '#fdf4ff',
    border: '#e9d5ff',
    text: '#3b0764',
    textSecondary: '#6b21a8',
    textMuted: '#9333ea',
  },
];

interface ThemeContextType {
  theme: ThemePalette;
  setTheme: (id: string) => void;
  themes: ThemePalette[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState('ocean');

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored && themes.find((t) => t.id === stored)) {
      setThemeId(stored);
    }
  }, []);

  const theme = themes.find((t) => t.id === themeId) || themes[0];

  const setTheme = (id: string) => {
    setThemeId(id);
    localStorage.setItem('portfolio-theme', id);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-primary-light', theme.primaryLight);
    root.style.setProperty('--theme-primary-dark', theme.primaryDark);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-secondary-light', theme.secondaryLight);
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-bg', theme.bg);
    root.style.setProperty('--theme-bg-alt', theme.bgAlt);
    root.style.setProperty('--theme-surface', theme.surface);
    root.style.setProperty('--theme-surface-hover', theme.surfaceHover);
    root.style.setProperty('--theme-border', theme.border);
    root.style.setProperty('--theme-text', theme.text);
    root.style.setProperty('--theme-text-secondary', theme.textSecondary);
    root.style.setProperty('--theme-text-muted', theme.textMuted);
    root.style.setProperty('--theme-gradient', `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
