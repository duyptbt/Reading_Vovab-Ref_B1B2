import React, { useState } from 'react';
import { ChapterPart, ChapterNumber } from '../types';
import { BookOpen, Sparkles, Zap, Layers, Bookmark, Flame, Award, ChevronRight, Globe, Layers3, CheckSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeChapter: ChapterNumber;
  setActiveChapter: (ch: ChapterNumber) => void;
  activePart: ChapterPart;
  setActivePart: (part: ChapterPart) => void;
  progressStats: {
    warmUpCompleted: number;
    warmUpTotal: number;
    practiceCompleted: number;
    practiceTotal: number;
    quizCompleted: number;
    quizTotal: number;
    quizYourselfCompleted?: number;
    quizYourselfTotal?: number;
    bookmarkedCount: number;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  activeChapter,
  setActiveChapter,
  activePart,
  setActivePart,
  progressStats
}) => {
  const { language, setLanguage, getTranslation } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<'B1' | 'B2'>('B1');
  const totalCompleted = progressStats.warmUpCompleted + progressStats.practiceCompleted + progressStats.quizCompleted + (progressStats.quizYourselfCompleted || 0);
  const totalQuestions = progressStats.warmUpTotal + progressStats.practiceTotal + progressStats.quizTotal + (progressStats.quizYourselfTotal || 0);
  const overallPercentage = totalQuestions > 0 ? Math.round((totalCompleted / totalQuestions) * 100) : 0;

  const navItems = activeChapter === 1 && activePart !== 'quiz_yourself' ? [
    { id: 'part1' as ChapterPart, num: '01', label: getTranslation('part1Nav'), icon: BookOpen },
    { id: 'part2' as ChapterPart, num: '02', label: getTranslation('part2Nav'), icon: Zap },
    { id: 'part3' as ChapterPart, num: '03', label: getTranslation('part3Nav'), icon: Layers },
    { id: 'part4' as ChapterPart, num: '04', label: getTranslation('part4Nav'), icon: Flame },
    { id: 'part5_practice' as ChapterPart, num: '05', label: getTranslation('part5PracticeNav'), icon: Sparkles },
    { id: 'part5_quiz' as ChapterPart, num: '06', label: getTranslation('part5QuizNav'), icon: Award },
    { id: 'vault' as ChapterPart, num: '07', label: getTranslation('vaultNav'), icon: Bookmark },
  ] : [
    { id: 'part1' as ChapterPart, num: '01', label: getTranslation('part1Nav'), icon: BookOpen },
    { id: 'part2' as ChapterPart, num: '02', label: getTranslation('part2Nav'), icon: Zap },
    { id: 'part3' as ChapterPart, num: '03', label: language === 'vi' ? 'Phần III: Đại Từ' : 'Part III: Pronouns', icon: Layers },
    { id: 'part4' as ChapterPart, num: '04', label: getTranslation('part4Nav'), icon: Flame },
    { id: 'part5_practice' as ChapterPart, num: '05', label: getTranslation('part5PracticeNav'), icon: Sparkles },
    { id: 'part5_quiz' as ChapterPart, num: '06', label: getTranslation('part5QuizNav'), icon: Award },
    { id: 'quiz_yourself' as ChapterPart, num: '07', label: getTranslation('quizYourselfNav'), icon: CheckSquare },
    { id: 'vault' as ChapterPart, num: '08', label: getTranslation('vaultNav'), icon: Bookmark },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 text-slate-800 shadow-sm">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 border-b border-slate-100 gap-3">
          
          {/* Logo & Level Selector */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-wrap gap-y-2">
            <div 
              className="flex items-center space-x-2.5 cursor-pointer" 
              onClick={() => setActivePart('part1')}
            >
              <div className="w-8 h-8 bg-indigo-600 flex items-center justify-center rounded-sm text-white font-bold text-xs italic shadow-sm">
                VR
              </div>
              <div>
                <h1 className="font-bold text-sm tracking-tight text-slate-900 uppercase">
                  {getTranslation('appName')}
                </h1>
                <p className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">{getTranslation('subName')}</p>
              </div>
            </div>

            {/* Level Selector Toggle */}
            <div className="flex bg-slate-100 p-0.5 rounded-md text-xs">
              <button
                onClick={() => setSelectedLevel('B1')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-sm transition-all ${
                  selectedLevel === 'B1'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {getTranslation('levelB1')}
              </button>
              <button
                onClick={() => setSelectedLevel('B2')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-sm transition-all ${
                  selectedLevel === 'B2'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {getTranslation('levelB2')}
              </button>
            </div>

            {/* Chapter Selector Toggle */}
            <div className="flex bg-indigo-50 border border-indigo-200/80 p-0.5 rounded-lg text-xs">
              <button
                onClick={() => {
                  setActiveChapter(1);
                  if (activePart === 'quiz_yourself') setActivePart('part1');
                }}
                className={`px-2.5 py-1 font-bold rounded-md transition-all ${
                  activeChapter === 1 && activePart !== 'quiz_yourself'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'vi' ? 'Chương 1' : 'Chapter 1'}
              </button>
              <button
                onClick={() => {
                  setActiveChapter(2);
                  if (activePart === 'quiz_yourself') setActivePart('part1');
                }}
                className={`px-2.5 py-1 font-bold rounded-md transition-all ${
                  activeChapter === 2 && activePart !== 'quiz_yourself'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'vi' ? 'Chương 2' : 'Chapter 2'}
              </button>
              <button
                onClick={() => {
                  setActiveChapter(2);
                  setActivePart('quiz_yourself');
                }}
                className={`px-2.5 py-1 font-bold rounded-md transition-all ${
                  activePart === 'quiz_yourself'
                    ? 'bg-amber-500 text-indigo-950 shadow-xs'
                    : 'text-amber-800 hover:text-amber-950 font-extrabold'
                }`}
              >
                {language === 'vi' ? 'Quiz Yourself (C1-2)' : 'Quiz Yourself (Ch 1-2)'}
              </button>
            </div>

            {/* Language Switcher (EN / VI) */}
            <div className="flex items-center space-x-1.5 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md text-xs">
              <Globe className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">Explanations:</span>
              <div className="flex bg-amber-100/80 p-0.5 rounded text-[11px] font-medium">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    language === 'en'
                      ? 'bg-white text-indigo-900 font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="English explanations"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('vi')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    language === 'vi'
                      ? 'bg-indigo-600 text-white font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Giải thích Tiếng Việt (Giữ nguyên từ & câu Tiếng Anh)"
                >
                  VIE 🇻🇳
                </button>
              </div>
            </div>
          </div>

          {/* Breadcrumb & Progress bar */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-2 text-xs text-slate-400 font-medium">
              <span>{getTranslation('curriculum')}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">{selectedLevel} Reading</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-bold">
                {activePart === 'quiz_yourself'
                  ? (language === 'vi' ? 'Tổng Hợp Chương 1 & 2' : 'Chapters 1-2 Synthesis')
                  : activeChapter === 1
                  ? getTranslation('chapter1')
                  : (language === 'vi' ? 'Chương 2: Từ Thay Thế' : 'Chapter 2: Referent Questions')}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-lg">
              <div className="text-right">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{getTranslation('syllabusProgress')}</div>
                <div className="text-xs font-bold text-indigo-950">{totalCompleted} / {totalQuestions} ({overallPercentage}%)</div>
              </div>
              <div className="w-20 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${overallPercentage}%` }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Tab Navigation Horizontal Bar */}
        <nav className="flex space-x-2 overflow-x-auto py-2.5 no-scrollbar items-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pr-2 shrink-0 hidden sm:inline">
            {getTranslation('modules')}
          </span>
          {navItems.map((item) => {
            const isActive = activePart === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePart(item.id)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs transition-all shrink-0 ${
                  isActive
                    ? 'bg-indigo-50 border-l-2 border-indigo-600 text-indigo-900 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                }`}
              >
                <span className={`text-[10px] font-mono italic ${isActive ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}>
                  {item.num}
                </span>
                <span>{item.label}</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-indigo-600 ml-0.5" />}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

