import React from 'react';
import { useReaderSettings, ReadingTheme, FontSize, FontStyle, HighlightColor, LineHeightOption, LayoutMode } from '../context/ReaderSettingsContext';
import { useLanguage } from '../context/LanguageContext';
import { Settings, X, RefreshCw, Type, Eye, Palette, Layout, Volume2, Sparkles, Check } from 'lucide-react';

export const ReaderSettingsModal: React.FC = () => {
  const {
    settings,
    setReadingTheme,
    setFontSize,
    setFontStyle,
    setHighlightColor,
    setLineHeight,
    setLayoutMode,
    setSpeechSpeed,
    setIsSettingsOpen,
    resetSettings,
  } = useReaderSettings();

  const { language } = useLanguage();

  if (!settings.isSettingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-scaleUp">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-700/60 rounded-xl">
              <Palette className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                {language === 'vi' ? 'Tùy Chỉnh Giao Diện & Đọc' : 'Reader & UI Customization'}
              </h2>
              <p className="text-xs text-indigo-200">
                {language === 'vi' ? 'Điều chỉnh phông chữ, màu sắc, chế độ đọc & kích thước' : 'Adjust fonts, colors, themes & reading layout'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="p-2 text-indigo-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 divide-y divide-slate-100">

          {/* 1. Theme Selection */}
          <div className="pt-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-indigo-500" />
              {language === 'vi' ? '1. Chế Độ Đọc & Phông Nền' : '1. Reading Theme & Paper Color'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'modern', name: language === 'vi' ? 'Hiện Đại' : 'Modern Clean', bg: 'bg-white', border: 'border-slate-300', text: 'text-slate-800' },
                { id: 'sepia', name: language === 'vi' ? 'Ấm Ấp (Sepia)' : 'Warm Sepia', bg: 'bg-[#f6f0e2]', border: 'border-[#e4d8be]', text: 'text-[#43382c]' },
                { id: 'mint', name: language === 'vi' ? 'Dịu Mắt (Mint)' : 'Fresh Mint', bg: 'bg-[#e8f8f0]', border: 'border-[#c6ecd7]', text: 'text-emerald-950' },
                { id: 'dark', name: language === 'vi' ? 'Tối (Night)' : 'Night Dark', bg: 'bg-slate-800', border: 'border-slate-700', text: 'text-slate-100' },
              ].map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setReadingTheme(theme.id as ReadingTheme)}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between h-20 ${theme.bg} ${theme.border} ${theme.text} ${
                    settings.readingTheme === theme.id
                      ? 'ring-2 ring-indigo-600 shadow-md scale-105'
                      : 'hover:opacity-90 opacity-80'
                  }`}
                >
                  <span className="text-xs font-bold">{theme.name}</span>
                  <div className="flex items-center gap-1 text-[11px] opacity-75">
                    {settings.readingTheme === theme.id && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                    <span>Aa Bb</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Font Size & Family */}
          <div className="pt-5 space-y-4">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Type className="w-4 h-4 text-indigo-500" />
              {language === 'vi' ? '2. Phông Chữ & Kích Thước' : '2. Typography & Text Size'}
            </label>

            {/* Font Size */}
            <div>
              <span className="text-xs font-medium text-slate-500 mb-2 block">
                {language === 'vi' ? 'Kích thước chữ:' : 'Font Size:'}
              </span>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'sm', label: 'S (14px)' },
                  { id: 'base', label: 'M (16px)' },
                  { id: 'lg', label: 'L (18px)' },
                  { id: 'xl', label: 'XL (20px)' },
                ].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setFontSize(size.id as FontSize)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      settings.fontSize === size.id
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Style */}
            <div>
              <span className="text-xs font-medium text-slate-500 mb-2 block">
                {language === 'vi' ? 'Kiểu phông chữ:' : 'Font Family:'}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'sans', label: 'Sans-Serif', cls: 'font-sans' },
                  { id: 'serif', label: 'Serif (Book)', cls: 'font-serif' },
                  { id: 'mono', label: 'Monospace', cls: 'font-mono' },
                ].map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setFontStyle(style.id as FontStyle)}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-all ${style.cls} ${
                      settings.fontStyle === style.id
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Target Word Highlight Color */}
          <div className="pt-5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              {language === 'vi' ? '3. Màu Nổi Bật Từ Cần Đoán' : '3. Target Word Highlight Style'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { id: 'amber', name: 'Warm Gold', sample: 'bg-amber-200 text-amber-900' },
                { id: 'emerald', name: 'Mint Green', sample: 'bg-emerald-200 text-emerald-900' },
                { id: 'sky', name: 'Sky Blue', sample: 'bg-sky-200 text-sky-900' },
                { id: 'violet', name: 'Soft Purple', sample: 'bg-purple-200 text-purple-900' },
                { id: 'underline', name: 'Underline', sample: 'border-b-2 border-indigo-600 font-bold text-indigo-900' },
              ].map((hl) => (
                <button
                  key={hl.id}
                  onClick={() => setHighlightColor(hl.id as HighlightColor)}
                  className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                    settings.highlightColor === hl.id
                      ? 'border-indigo-600 ring-2 ring-indigo-500 bg-indigo-50/30'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${hl.sample}`}>
                    target
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">{hl.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Line Spacing & Layout */}
          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Layout className="w-4 h-4 text-indigo-500" />
                {language === 'vi' ? '4. Khoảng Cách Dòng' : '4. Line Spacing'}
              </label>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                {[
                  { id: 'compact', label: language === 'vi' ? 'Gọn' : 'Compact' },
                  { id: 'comfortable', label: language === 'vi' ? 'Vừa' : 'Comfortable' },
                  { id: 'spacious', label: language === 'vi' ? 'Rộng' : 'Spacious' },
                ].map((lh) => (
                  <button
                    key={lh.id}
                    onClick={() => setLineHeight(lh.id as LineHeightOption)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      settings.lineHeight === lh.id
                        ? 'bg-white text-indigo-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lh.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Layout className="w-4 h-4 text-indigo-500" />
                {language === 'vi' ? 'Bố Cục Đoạn Văn' : 'Passage Layout'}
              </label>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                {[
                  { id: 'split', label: language === 'vi' ? 'Chia Cột (Split)' : 'Side-by-Side' },
                  { id: 'stacked', label: language === 'vi' ? 'Xếp Dọc (Stacked)' : 'Stacked' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setLayoutMode(mode.id as LayoutMode)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      settings.layoutMode === mode.id
                        ? 'bg-white text-indigo-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Speech Speed */}
          <div className="pt-5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-indigo-500" />
              {language === 'vi' ? '5. Tốc Độ Phát Âm (Audio Speech Speed)' : '5. Text-to-Speech Speed'}
            </label>
            <div className="flex bg-slate-100 p-1 rounded-xl max-w-md">
              {[0.8, 1.0, 1.25, 1.5].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setSpeechSpeed(speed)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    settings.speechSpeed === speed
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={resetSettings}
            className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'Khôi phục mặc định' : 'Reset Defaults'}</span>
          </button>

          <button
            onClick={() => setIsSettingsOpen(false)}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
          >
            {language === 'vi' ? 'Áp Dụng & Đóng' : 'Apply & Done'}
          </button>
        </div>

      </div>
    </div>
  );
};
