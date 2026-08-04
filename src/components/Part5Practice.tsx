import React, { useState } from 'react';
import { PRACTICE_PASSAGES } from '../data/chapter1Data';
import { CHAPTER2_PRACTICE_PASSAGES } from '../data/chapter2Data';
import { Volume2, CheckCircle2, XCircle, Bookmark, BookmarkCheck, ArrowRight, BookOpen, Sliders, Columns2, Rows2, Focus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useReaderSettings, LayoutMode } from '../context/ReaderSettingsContext';
import { ChapterNumber } from '../types';

interface Part5PracticeProps {
  chapter?: ChapterNumber;
  userAnswers: Record<number, number>; // qId -> optionIndex
  onAnswerQuestion: (qId: number, optionIndex: number) => void;
  onResetAnswers: () => void;
  onStartQuiz: () => void;
  bookmarkedWords: string[];
  onToggleBookmark: (word: string) => void;
}

export const Part5Practice: React.FC<Part5PracticeProps> = ({
  chapter = 1,
  userAnswers,
  onAnswerQuestion,
  onResetAnswers,
  onStartQuiz,
  bookmarkedWords,
  onToggleBookmark
}) => {
  const { language, getTranslation, getExplanation } = useLanguage();
  const {
    settings,
    getPassageThemeClasses,
    getHighlightClasses,
    getTypographyClasses,
    setLayoutMode,
    toggleSettingsModal
  } = useReaderSettings();
  const passages = chapter === 2 ? CHAPTER2_PRACTICE_PASSAGES : PRACTICE_PASSAGES;
  const isCh2 = chapter === 2;

  const [selectedPassageId, setSelectedPassageId] = useState<number>(passages[0]?.id || 1);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const activePassage = passages.find(p => p.id === selectedPassageId) || passages[0];

  // Total answers across practice questions
  const totalPracticeQuestions = passages.reduce((acc, p) => acc + p.questions.length, 0);
  const passageQIds = new Set(passages.flatMap(p => p.questions.map(q => q.id)));

  const answeredCount = Object.keys(userAnswers).filter(id => {
    return passageQIds.has(parseInt(id, 10));
  }).length;

  let correctCount = 0;
  passages.forEach(p => {
    p.questions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
  });

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/\*\*/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = settings.speechSpeed || 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Function to render passage text with interactive highlighted target words
  const renderInteractivePassage = () => {
    if (!activePassage) return null;
    const rawText = activePassage.passageText || '';
    const words = activePassage.targetWords || [];

    if (!words.length) return rawText;

    // If passage contains markdown bold markers `**word**`, parse those directly
    if (rawText.includes('**')) {
      const parts = rawText.split(/(\*\*.*?\*\*)/g);
      let boldMatchIndex = 0;

      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const cleanWord = part.slice(2, -2);
          
          // Match question by corresponding index or word
          const matchedQ = activePassage.questions[boldMatchIndex] || activePassage.questions.find(
            q => q.word.toLowerCase() === cleanWord.toLowerCase()
          );

          boldMatchIndex++;
          const isSelected = activeQuestionId === matchedQ?.id;

          return (
            <mark
              key={i}
              onClick={() => {
                if (matchedQ) {
                  setActiveQuestionId(matchedQ.id);
                  const el = document.getElementById(`practice-q-${matchedQ.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className={`cursor-pointer px-1.5 py-0.5 mx-0.5 rounded transition-all ${getHighlightClasses(isSelected)}`}
              title={`Click to navigate to question for "${cleanWord}"`}
            >
              {cleanWord}
            </mark>
          );
        }
        return <span key={i}>{part}</span>;
      });
    }

    // Fallback if no ** markers exist: match word boundaries
    const pattern = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');
    const parts = rawText.split(pattern);

    return parts.map((part, i) => {
      const lowerPart = part.toLowerCase();
      const matchedWord = words.find(w => w.toLowerCase() === lowerPart);

      if (matchedWord) {
        const correspondingQ = activePassage.questions.find(
          q => q.word.toLowerCase() === matchedWord.toLowerCase()
        );
        const isSelected = activeQuestionId === correspondingQ?.id;

        return (
          <mark
            key={i}
            onClick={() => {
              if (correspondingQ) {
                setActiveQuestionId(correspondingQ.id);
                const el = document.getElementById(`practice-q-${correspondingQ.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className={`cursor-pointer px-1.5 py-0.5 mx-0.5 rounded transition-all ${getHighlightClasses(isSelected)}`}
            title={`Click to navigate to question for "${matchedWord}"`}
          >
            {part}
          </mark>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="space-y-8 max-w-7xl xl:max-w-[1440px] mx-auto py-6 px-4 sm:px-6">
      {/* Banner - Geometric Balance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'THỜI GIAN DỰ KIẾN: 45 PHÚT' : 'ESTIMATED TIME: 45 MINS'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">
              {language === 'vi' ? `Chương ${chapter}` : `Chapter ${chapter}`}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {language === 'vi' ? <>Bài Đọc<br />Thực Hành</> : <>Practice<br />Passages</>}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {isCh2
                ? (language === 'vi'
                    ? 'Đọc 10 bài đọc B1/B2 chuẩn kèm 20 câu hỏi luyện tập xác định từ thay thế (referents).'
                    : 'Read 10 authentic B1/B2 passages with 20 referent practice questions.')
                : (language === 'vi'
                    ? 'Đọc 10 bài đọc B1/B2 chuẩn có tô đậm các từ vựng mục tiêu và 60 câu hỏi từ vựng thực hành.'
                    : 'Read 10 authentic B1/B2 reading passages with highlighted target vocabulary and 60 vocabulary practice questions.')}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Tiến Độ Bài Tập' : 'Syllabus Counter'}</div>
            <div className="flex items-center justify-between text-xs pt-1">
              <span>{language === 'vi' ? 'Đã làm:' : 'Progress:'} <strong className="text-emerald-400">{answeredCount} / {totalPracticeQuestions}</strong></span>
              <span>{language === 'vi' ? 'Đúng:' : 'Correct:'} <strong className="text-amber-400">{correctCount} / {totalPracticeQuestions}</strong></span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Bộ Bài Đọc' : 'Passage Suite'}</div>
            <h4 className="text-base font-bold text-slate-900">{getTranslation('part5PracticeTitle')}</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'vi'
                ? 'Mỗi bài đọc chứa 6 từ vựng được tô đậm trong ngữ cảnh đọc thực tế kèm phát âm thanh và giải thích chi tiết.'
                : 'Each passage contains 6 highlighted vocabulary items in real reading contexts with audio playback and full explanations.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-indigo-600">10 {language === 'vi' ? 'Bài Đọc' : 'Passages'}</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Đoạn Văn Đọc' : 'Reading Texts'}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-emerald-600">60 {language === 'vi' ? 'Câu Hỏi' : 'Questions'}</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Tổng Số Câu Hỏi' : 'Total Assessment'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Passage Selector Tabs */}
      <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex space-x-2 overflow-x-auto no-scrollbar">
        {passages.map((p) => {
          const isSelected = selectedPassageId === p.id;
          let pAnswered = 0;
          p.questions.forEach(q => {
            if (userAnswers[q.id] !== undefined) pAnswered++;
          });

          return (
            <button
              key={p.id}
              onClick={() => {
                setSelectedPassageId(p.id);
                setActiveQuestionId(null);
              }}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{language === 'vi' ? `Bài Đọc #${p.id}` : `Practice #${p.id}`}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                isSelected ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-200 text-slate-700'
              }`}>
                {pAnswered}/6
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Passage & Questions View Layout */}
      {(() => {
        const themeCls = getPassageThemeClasses();
        const typoCls = getTypographyClasses();

        const renderPassageCard = () => (
          <div className={`${themeCls.cardBg} rounded-2xl p-6 border ${themeCls.border} shadow-sm space-y-4 transition-all`}>
            <div className={`flex items-center justify-between border-b ${themeCls.border} pb-3 flex-wrap gap-2`}>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <h3 className={`text-lg font-bold ${themeCls.text}`}>{activePassage.title}</h3>
              </div>

              <div className="flex items-center space-x-2">
                {/* Quick Layout Toolbar */}
                <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
                  <button
                    onClick={() => setLayoutMode('split')}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
                      settings.layoutMode === 'split' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Side-by-Side Split View"
                  >
                    <Columns2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{language === 'vi' ? 'Song Song' : 'Split'}</span>
                  </button>

                  <button
                    onClick={() => setLayoutMode('stacked')}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
                      settings.layoutMode === 'stacked' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Stacked Vertical View"
                  >
                    <Rows2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{language === 'vi' ? 'Xếp Dọc' : 'Stacked'}</span>
                  </button>

                  <button
                    onClick={() => setLayoutMode('zen')}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
                      settings.layoutMode === 'zen' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Zen Focus View"
                  >
                    <Focus className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{language === 'vi' ? 'Tập Trung' : 'Zen'}</span>
                  </button>
                </div>

                <button
                  onClick={toggleSettingsModal}
                  className="p-1.5 text-slate-600 hover:text-slate-900 bg-slate-100/80 rounded-xl border border-slate-200 transition-colors"
                  title="Customize fonts, colors & theme"
                >
                  <Sliders className="w-4 h-4 text-indigo-600" />
                </button>

                <button
                  onClick={() => handleSpeak(activePassage.passageText)}
                  className="flex items-center space-x-1.5 text-xs text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 font-semibold"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{language === 'vi' ? `Nghe (${settings.speechSpeed}x)` : `Read (${settings.speechSpeed}x)`}</span>
                </button>
              </div>
            </div>

            <div className={`${themeCls.bg} p-5 sm:p-6 rounded-2xl border ${themeCls.border} ${themeCls.text} ${typoCls} space-y-2 transition-all`}>
              <p>{renderInteractivePassage()}</p>
              <p className="text-xs opacity-70 font-sans pt-2 border-t border-slate-200/40">
                {language === 'vi' ? '💡 Mẹo: Bấm vào bất kỳ từ tô đậm nào ở trên để nhảy tới câu hỏi tương ứng bên dưới.' : '💡 Tip: Click any highlighted word above to highlight its question below.'}
              </p>
            </div>
          </div>
        );

        const renderQuestionsList = (columns: number) => (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h4 className="text-base font-bold text-slate-800">
                {language === 'vi' 
                  ? `Câu hỏi cho bài ${activePassage?.title || ''} (Câu ${activePassage?.questions[0]?.id ?? ''}–${activePassage?.questions[activePassage?.questions.length - 1]?.id ?? ''})` 
                  : `Questions for ${activePassage?.title || ''} (Questions ${activePassage?.questions[0]?.id ?? ''}–${activePassage?.questions[activePassage?.questions.length - 1]?.id ?? ''})`}
              </h4>
              <span className="text-xs text-slate-400 font-medium capitalize">
                {settings.layoutMode === 'split' ? 'Side-by-Side Split View' : settings.layoutMode === 'stacked' ? 'Stacked Vertical View' : 'Zen Focus View'}
              </span>
            </div>

            <div className={`grid grid-cols-1 ${columns > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {activePassage.questions.map((q) => {
                const userAns = userAnswers[q.id];
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === q.correctIndex;
                const isBookmarked = bookmarkedWords.includes(q.word);
                const isFocused = activeQuestionId === q.id;

                return (
                  <div
                    id={`practice-q-${q.id}`}
                    key={q.id}
                    className={`bg-white rounded-2xl p-5 border transition-all shadow-sm flex flex-col justify-between space-y-4 ${
                      isFocused ? 'ring-2 ring-indigo-500 border-indigo-500 shadow-md' : ''
                    } ${
                      isAnswered
                        ? isCorrect
                          ? 'border-emerald-300 bg-emerald-50/10'
                          : 'border-rose-300 bg-rose-50/10'
                        : 'border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-extrabold text-slate-900 text-sm">
                          {language === 'vi' ? `Câu #${q.id}` : `Question #${q.id}`} • {language === 'vi' ? 'Từ mục tiêu:' : 'Target Word:'} <mark className="bg-amber-200 px-1 rounded">{q.word}</mark>
                        </span>
                        <button
                          onClick={() => onToggleBookmark(q.word)}
                          className={`p-1 transition-colors ${
                            isBookmarked ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'
                          }`}
                          title="Bookmark target word"
                        >
                          {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>

                      <p className="font-semibold text-slate-800 text-sm leading-relaxed">
                        {q.questionText}
                      </p>

                      {/* Options */}
                      <div className="grid grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAns === optIdx;
                          const isOptCorrect = optIdx === q.correctIndex;

                          let btnStyle = 'border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-300 text-slate-700';

                          if (isAnswered) {
                            if (isOptCorrect) {
                              btnStyle = 'border-emerald-500 bg-emerald-100 text-emerald-900 font-bold ring-1 ring-emerald-400';
                            } else if (isSelected) {
                              btnStyle = 'border-rose-400 bg-rose-100 text-rose-900 font-medium';
                            } else {
                              btnStyle = 'border-slate-200 bg-slate-50 opacity-60 text-slate-500';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => onAnswerQuestion(q.id, optIdx)}
                              className={`p-2.5 rounded-xl border text-xs sm:text-sm text-center font-medium transition-all ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {isAnswered && (
                        <div className="p-3 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-2 border border-slate-800">
                          <div className="flex items-center justify-between text-emerald-400 font-bold">
                            <span className="flex items-center space-x-1">
                              {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                              <span>{getTranslation('correctAnswer')}: {q.options[q.correctIndex]}</span>
                            </span>
                          </div>
                          <p className="text-slate-300 leading-relaxed">
                            {getExplanation(q, 'explanation')}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

        if (settings.layoutMode === 'split') {
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
                {renderPassageCard()}
              </div>
              <div className="lg:col-span-7 space-y-4">
                {renderQuestionsList(1)}
              </div>
            </div>
          );
        }

        if (settings.layoutMode === 'zen') {
          return (
            <div className="max-w-3xl mx-auto space-y-8">
              {renderPassageCard()}
              {renderQuestionsList(1)}
            </div>
          );
        }

        // Stacked view
        return (
          <div className="space-y-8">
            {renderPassageCard()}
            {renderQuestionsList(2)}
          </div>
        );
      })()}

      {/* Navigation CTA */}
      <div className="flex justify-between items-center pt-2">
        <button
          disabled={selectedPassageId === 1}
          onClick={() => setSelectedPassageId(prev => Math.max(1, prev - 1))}
          className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-100 disabled:opacity-40"
        >
          {language === 'vi' ? 'Bài Đọc Trước' : 'Previous Passage'}
        </button>

        {selectedPassageId < 10 ? (
          <button
            onClick={() => setSelectedPassageId(prev => Math.min(10, prev + 1))}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md text-xs"
          >
            <span>{language === 'vi' ? `Bài Đọc Tiếp (#${selectedPassageId + 1})` : `Next Passage (#${selectedPassageId + 1})`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onStartQuiz}
            className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 text-xs"
          >
            <span>{language === 'vi' ? 'Làm Bài Quiz Nhanh (25 Câu Từ Đồng Nghĩa)' : 'Take Pop Quiz (25 Synonym Questions)'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

