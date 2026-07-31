import React, { useState } from 'react';
import { WARM_UP_QUESTIONS } from '../data/chapter1Data';
import { CHAPTER2_WARMUP_QUESTIONS } from '../data/chapter2Data';
import { CheckCircle2, XCircle, Volume2, Bookmark, BookmarkCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useReaderSettings } from '../context/ReaderSettingsContext';
import { ChapterNumber } from '../types';

interface Part4WarmUpProps {
  chapter?: ChapterNumber;
  userAnswers: Record<number, number>; // qId -> optionIndex
  onAnswerQuestion: (qId: number, optionIndex: number) => void;
  onResetAnswers: () => void;
  onStartPractice: () => void;
  bookmarkedWords: string[];
  onToggleBookmark: (word: string) => void;
}

export const Part4WarmUp: React.FC<Part4WarmUpProps> = ({
  chapter = 1,
  userAnswers,
  onAnswerQuestion,
  onResetAnswers,
  onStartPractice,
  bookmarkedWords,
  onToggleBookmark
}) => {
  const { language, getTranslation, getExplanation } = useLanguage();
  const { settings } = useReaderSettings();
  const [filterMode, setFilterMode] = useState<'all' | 'unanswered' | 'incorrect'>('all');

  const questions = chapter === 2 ? CHAPTER2_WARMUP_QUESTIONS : WARM_UP_QUESTIONS;
  const isCh2 = chapter === 2;

  const answeredCount = Object.keys(userAnswers).length;
  let correctCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correctOptionIndex) {
      correctCount++;
    }
  });

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = settings.speechSpeed || 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredQuestions = questions.filter(q => {
    const userAns = userAnswers[q.id];
    if (filterMode === 'unanswered') return userAns === undefined;
    if (filterMode === 'incorrect') return userAns !== undefined && userAns !== q.correctOptionIndex;
    return true;
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6 px-4">
      {/* Banner - Geometric Balance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'THỜI GIAN DỰ KIẾN: 30 PHÚT' : 'ESTIMATED TIME: 30 MINS'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">
              {language === 'vi' ? `Chương ${chapter}` : `Chapter ${chapter}`}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {language === 'vi' ? <>Luyện Tập<br />Khởi Động</> : <>Warm Up<br />Exercise</>}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {isCh2
                ? (language === 'vi'
                    ? 'Áp dụng các quy tắc đại từ và phương pháp thay thử vào 20 câu khởi động tìm từ thay thế B1/B2.'
                    : 'Apply pronoun rules and substitution methods to 20 targeted B1/B2 referent items.')
                : (language === 'vi'
                    ? 'Áp dụng các căn tố, phụ tố và manh mối ngữ cảnh vào 20 câu hoàn thành câu từ vựng B1/B2.'
                    : 'Apply root affixes and context clues to 20 targeted B1/B2 sentence completion items.')}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Theo Dõi Tiến Độ' : 'Performance Tracker'}</div>
            <div className="flex items-center justify-between text-xs pt-1">
              <span>{language === 'vi' ? 'Đã làm:' : 'Completed:'} <strong className="text-emerald-400">{answeredCount} / {questions.length}</strong></span>
              <span>{language === 'vi' ? 'Điểm:' : 'Score:'} <strong className="text-amber-400">{correctCount} / {questions.length}</strong></span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Cấu Trúc Bài Tập' : 'Exercise Structure'}</div>
            <h4 className="text-base font-bold text-slate-900">{getTranslation('part4Title')}</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'vi'
                ? 'Mỗi câu hỏi kiểm tra khả năng chọn từ dựa trên nhận biết tiền tố/căn tố và phương pháp thay thế ngữ cảnh.'
                : 'Each question tests word choice using prefix/root recognition and contextual substitution in single-sentence contexts.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-indigo-600">20 {language === 'vi' ? 'Câu' : 'Items'}</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Câu Hoàn Thành' : 'Target Sentences'}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-emerald-600">{language === 'vi' ? 'Tức thì' : 'Instant'}</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Phản hồi & Giải thích' : 'Feedback & Explanations'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-xs">
        <button
          onClick={() => setFilterMode('all')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
            filterMode === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {language === 'vi' ? 'Tất cả câu hỏi (20)' : 'All Questions (20)'}
        </button>
        <button
          onClick={() => setFilterMode('unanswered')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
            filterMode === 'unanswered' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {language === 'vi' ? 'Chưa làm' : 'Unanswered'} ({WARM_UP_QUESTIONS.length - answeredCount})
        </button>
        <button
          onClick={() => setFilterMode('incorrect')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
            filterMode === 'incorrect' ? 'bg-rose-600 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {language === 'vi' ? 'Làm sai' : 'Incorrect'} ({answeredCount - correctCount})
        </button>
      </div>

      {/* Questions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredQuestions.map((q) => {
          const userAns = userAnswers[q.id];
          const isAnswered = userAns !== undefined;
          const isCorrect = userAns === q.correctOptionIndex;
          const isBookmarked = bookmarkedWords.includes(q.targetWord);

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl p-5 border transition-all shadow-sm flex flex-col justify-between space-y-4 ${
                isAnswered
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : 'border-slate-200 hover:border-indigo-300'
              }`}
            >
              <div className="space-y-3">
                {/* Question Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs">
                      {q.id}
                    </span>
                    {q.rootRef && (
                      <span className="text-[10px] bg-slate-100 font-mono text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                        Root: {q.rootRef}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleSpeak(`${q.sentenceBefore} ${q.targetWord} ${q.sentenceAfter}`)}
                      className="p-1 text-slate-400 hover:text-slate-700"
                      title="Pronounce sentence"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onToggleBookmark(q.targetWord)}
                      className={`p-1 transition-colors ${
                        isBookmarked ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'
                      }`}
                      title="Bookmark target word"
                    >
                      {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Sentence Display */}
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {q.sentenceBefore}
                  <span className="inline-block px-2 py-0.5 mx-1 font-bold bg-amber-100 text-amber-900 rounded border border-amber-300/80">
                    {isAnswered ? q.options[userAns] : '______'}
                  </span>
                  {q.sentenceAfter}
                </p>

                {/* Choices */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userAns === optIdx;
                    const isOptCorrect = optIdx === q.correctOptionIndex;

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
                        <span>{getTranslation('correctAnswer')}: {q.options[q.correctOptionIndex]}</span>
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

      {/* Navigation CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onStartPractice}
          className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
        >
          <span>{language === 'vi' ? 'Tiếp tục Phần V: 12 Bài Đọc Thực Hành (60 Câu Hỏi)' : 'Continue to Part V: Practice Passages (60 Questions)'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

