import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ReadingTheme = 'modern' | 'sepia' | 'dark' | 'mint' | 'nordic' | 'velvet';
export type FontSize = 'sm' | 'base' | 'lg' | 'xl';
export type FontStyle = 'sans' | 'serif' | 'mono';
export type HighlightColor = 'amber' | 'emerald' | 'sky' | 'violet' | 'underline';
export type LineHeightOption = 'compact' | 'comfortable' | 'spacious';
export type LayoutMode = 'split' | 'stacked' | 'zen';

interface ReaderSettings {
  readingTheme: ReadingTheme;
  fontSize: FontSize;
  fontStyle: FontStyle;
  highlightColor: HighlightColor;
  lineHeight: LineHeightOption;
  layoutMode: LayoutMode;
  speechSpeed: number;
  autoReadOnClick: boolean;
  isSettingsOpen: boolean;
}

interface ReaderSettingsContextType {
  settings: ReaderSettings;
  setReadingTheme: (theme: ReadingTheme) => void;
  setFontSize: (size: FontSize) => void;
  setFontStyle: (style: FontStyle) => void;
  setHighlightColor: (color: HighlightColor) => void;
  setLineHeight: (lineHeight: LineHeightOption) => void;
  setLayoutMode: (mode: LayoutMode) => void;
  setSpeechSpeed: (speed: number) => void;
  setAutoReadOnClick: (val: boolean) => void;
  toggleSettingsModal: () => void;
  setIsSettingsOpen: (open: boolean) => void;
  resetSettings: () => void;
  getPassageThemeClasses: () => { bg: string; text: string; border: string; cardBg: string };
  getHighlightClasses: (isSelected: boolean) => string;
  getTypographyClasses: () => string;
}

const defaultSettings: ReaderSettings = {
  readingTheme: 'modern',
  fontSize: 'base',
  fontStyle: 'sans',
  highlightColor: 'amber',
  lineHeight: 'comfortable',
  layoutMode: 'split',
  speechSpeed: 1.0,
  autoReadOnClick: false,
  isSettingsOpen: false,
};

const ReaderSettingsContext = createContext<ReaderSettingsContextType | undefined>(undefined);

export const ReaderSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<ReaderSettings>(() => {
    try {
      const saved = localStorage.getItem('reader_ui_settings');
      if (saved) {
        return { ...defaultSettings, ...JSON.parse(saved), isSettingsOpen: false };
      }
    } catch {
      // Fallback
    }
    return defaultSettings;
  });

  useEffect(() => {
    const { isSettingsOpen, ...persisted } = settings;
    localStorage.setItem('reader_ui_settings', JSON.stringify(persisted));
  }, [settings]);

  const setReadingTheme = (readingTheme: ReadingTheme) => setSettings(s => ({ ...s, readingTheme }));
  const setFontSize = (fontSize: FontSize) => setSettings(s => ({ ...s, fontSize }));
  const setFontStyle = (fontStyle: FontStyle) => setSettings(s => ({ ...s, fontStyle }));
  const setHighlightColor = (highlightColor: HighlightColor) => setSettings(s => ({ ...s, highlightColor }));
  const setLineHeight = (lineHeight: LineHeightOption) => setSettings(s => ({ ...s, lineHeight }));
  const setLayoutMode = (layoutMode: LayoutMode) => setSettings(s => ({ ...s, layoutMode }));
  const setSpeechSpeed = (speechSpeed: number) => setSettings(s => ({ ...s, speechSpeed }));
  const setAutoReadOnClick = (autoReadOnClick: boolean) => setSettings(s => ({ ...s, autoReadOnClick }));
  const toggleSettingsModal = () => setSettings(s => ({ ...s, isSettingsOpen: !s.isSettingsOpen }));
  const setIsSettingsOpen = (isSettingsOpen: boolean) => setSettings(s => ({ ...s, isSettingsOpen }));

  const resetSettings = () => setSettings(defaultSettings);

  const getPassageThemeClasses = () => {
    switch (settings.readingTheme) {
      case 'sepia':
        return {
          bg: 'bg-[#faf6ed]',
          cardBg: 'bg-[#f4eee0]',
          text: 'text-[#43382c]',
          border: 'border-[#e6dcbf]',
          accentBg: 'bg-[#e8dec0]',
        };
      case 'dark':
        return {
          bg: 'bg-slate-900',
          cardBg: 'bg-slate-800',
          text: 'text-slate-100',
          border: 'border-slate-700',
          accentBg: 'bg-slate-700/60',
        };
      case 'nordic':
        return {
          bg: 'bg-[#0f172a]',
          cardBg: 'bg-[#1e293b]',
          text: 'text-slate-100',
          border: 'border-slate-700/80',
          accentBg: 'bg-[#334155]',
        };
      case 'velvet':
        return {
          bg: 'bg-[#120826]',
          cardBg: 'bg-[#1e103d]',
          text: 'text-purple-100',
          border: 'border-[#392168]',
          accentBg: 'bg-[#2b1754]',
        };
      case 'mint':
        return {
          bg: 'bg-[#f0fdf4]',
          cardBg: 'bg-[#dcfce7]',
          text: 'text-emerald-950',
          border: 'border-emerald-200',
          accentBg: 'bg-emerald-100',
        };
      case 'modern':
      default:
        return {
          bg: 'bg-slate-50/70',
          cardBg: 'bg-white',
          text: 'text-slate-800',
          border: 'border-slate-200',
          accentBg: 'bg-slate-100',
        };
    }
  };

  const getTypographyClasses = () => {
    let fontClass = '';
    switch (settings.fontStyle) {
      case 'serif':
        fontClass = 'font-serif';
        break;
      case 'mono':
        fontClass = 'font-mono';
        break;
      case 'sans':
      default:
        fontClass = 'font-sans';
        break;
    }

    let sizeClass = '';
    switch (settings.fontSize) {
      case 'sm':
        sizeClass = 'text-sm';
        break;
      case 'lg':
        sizeClass = 'text-lg';
        break;
      case 'xl':
        sizeClass = 'text-xl';
        break;
      case 'base':
      default:
        sizeClass = 'text-base';
        break;
    }

    let lhClass = '';
    switch (settings.lineHeight) {
      case 'compact':
        lhClass = 'leading-normal';
        break;
      case 'spacious':
        lhClass = 'leading-loose';
        break;
      case 'comfortable':
      default:
        lhClass = 'leading-relaxed';
        break;
    }

    return `${fontClass} ${sizeClass} ${lhClass}`;
  };

  const getHighlightClasses = (isSelected: boolean) => {
    if (isSelected) {
      return 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-400 font-bold scale-105 inline-block';
    }

    switch (settings.highlightColor) {
      case 'emerald':
        return 'bg-emerald-200 text-emerald-900 hover:bg-emerald-300 font-semibold';
      case 'sky':
        return 'bg-sky-200 text-sky-900 hover:bg-sky-300 font-semibold';
      case 'violet':
        return 'bg-purple-200 text-purple-900 hover:bg-purple-300 font-semibold';
      case 'underline':
        return 'bg-transparent border-b-2 border-indigo-600 font-bold text-indigo-900 dark:text-indigo-200 hover:bg-indigo-50/50';
      case 'amber':
      default:
        return 'bg-amber-200 text-amber-900 hover:bg-amber-300 font-semibold';
    }
  };

  return (
    <ReaderSettingsContext.Provider
      value={{
        settings,
        setReadingTheme,
        setFontSize,
        setFontStyle,
        setHighlightColor,
        setLineHeight,
        setLayoutMode,
        setSpeechSpeed,
        setAutoReadOnClick,
        toggleSettingsModal,
        setIsSettingsOpen,
        resetSettings,
        getPassageThemeClasses,
        getHighlightClasses,
        getTypographyClasses,
      }}
    >
      {children}
    </ReaderSettingsContext.Provider>
  );
};

export const useReaderSettings = () => {
  const context = useContext(ReaderSettingsContext);
  if (!context) {
    throw new Error('useReaderSettings must be used within a ReaderSettingsProvider');
  }
  return context;
};
