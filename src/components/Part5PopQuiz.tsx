import React, { useState, useEffect } from 'react';
import { POP_QUIZ_QUESTIONS } from '../data/chapter1Data';
import { CHAPTER2_POP_QUIZ_QUESTIONS } from '../data/chapter2Data';
import { CheckCircle2, XCircle, Volume2, Bookmark, BookmarkCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ChapterNumber } from '../types';

interface Part5PopQuizProps {
  chapter?: ChapterNumber;
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  onAnswerQuestion: (qId: number, choiceLetter: 'A' | 'B' | 'C' | 'D') => void;
  onResetQuiz: () => void;
  bookmarkedWords: string[];
  onToggleBookmark: (word: string) => void;
}

export const Part5PopQuiz: React.FC<Part5PopQuizProps> = ({
  chapter = 1,
  userAnswers,
  onAnswerQuestion,
  onResetQuiz,
  bookmarkedWords,
  onToggleBookmark
}) => {
  const { language, getTranslation, getExplanation } = useLanguage();
  const [filterMode, setFilterMode] = useState<'all' | 'unanswered' | 'incorrect'>('all');
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(true);

  const questions = chapter === 2 ? CHAPTER2_POP_QUIZ_QUESTIONS : POP_QUIZ_QUESTIONS;
  const isCh2 = chapter === 2;

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;

  let correctCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correctLetter) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredQuestions = questions.filter(q => {
    const userAns = userAnswers[q.id];
    if (filterMode === 'unanswered') return userAns === undefined;
    if (filterMode === 'incorrect') return userAns !== undefined && userAns !== q.correctLetter;
    return true;
  });

  let gradeBadge = { label: language === 'vi' ? 'Cần Luyện Thêm' : 'Needs Practice', color: 'bg-amber-500' };
  if (percentage >= 90) gradeBadge = { label: language === 'vi' ? 'Thành Thạo (A+)' : 'Master (A+)', color: 'bg-emerald-600' };
  else if (percentage >= 75) gradeBadge = { label: language === 'vi' ? 'Khá Giỏi (B)' : 'Proficient (B)', color: 'bg-teal-600' };
  else if (percentage >= 50) gradeBadge = { label: language === 'vi' ? 'Trung Bình (C)' : 'Intermediate (C)', color: 'bg-indigo-600' };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6 px-4">
      {/* Banner - Geometric Balance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'BÀI QUIZ TÍNH THỜI GIAN' : 'SPEED POP QUIZ • TIMED'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">
              {language === 'vi' ? `Chương ${chapter}` : `Chapter ${chapter}`}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {isCh2
                ? (language === 'vi' ? <>Quiz Từ<br />Thay Thế</> : <>Referent<br />Pop Quiz</>)
                : (language === 'vi' ? <>Quiz Từ<br />Đồng Nghĩa</> : <>Synonym<br />Pop Quiz</>)}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {isCh2
                ? (language === 'vi'
                    ? 'Kiểm tra phản xạ nhanh qua 25 câu hỏi tìm từ thay thế (referent) B1/B2.'
                    : 'Test speed recall across 25 target B1/B2 referent questions.')
                : (language === 'vi'
                    ? 'Kiểm tra phản xạ nhanh qua 25 từ vựng B1/B2 và chọn từ đồng nghĩa chính xác nhất.'
                    : 'Test speed recall across 25 target B1/B2 vocabulary words and choose the closest synonym match.')}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Bảng Điểm Trực Tiếp' : 'Live Quiz Scoreboard'}</div>
            <div className="flex items-center justify-between text-xs pt-1">
              <span>{language === 'vi' ? 'Thời gian:' : 'Time:'} <strong className="text-amber-400">{formatTimer(timerSeconds)}</strong></span>
              <span>{language === 'vi' ? 'Điểm:' : 'Score:'} <strong className="text-emerald-400">{correctCount} / {totalQuestions} ({percentage}%)</strong></span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Tiêu Chí Đánh Giá' : 'Assessment Criteria'}</div>
            <h4 className="text-base font-bold text-slate-900">{getTranslation('part5QuizTitle')}</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'vi'
                ? 'Đánh giá khả năng ghi nhớ tức thì các nghĩa chính và phụ của các từ vựng cốt lõi trong Chương 1.'
                : 'Assesses instant recall of primary and secondary meanings for key vocabulary from Chapter 1.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-indigo-600">25 {language === 'vi' ? 'Câu' : 'Questions'}</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Từ Đồng Nghĩa' : 'Synonym Items'}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className={`block text-[11px] font-bold text-white px-2 py-0.5 rounded ${gradeBadge.color} mt-1`}>
                {gradeBadge.label}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Xếp Loại Thành Thạo' : 'Mastery Grade'}</span>
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
          {language === 'vi' ? 'Tất cả (25)' : 'All (25)'}
        </button>
        <button
          onClick={() => setFilterMode('unanswered')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
            filterMode === 'unanswered' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {language === 'vi' ? 'Chưa làm' : 'Unanswered'} ({totalQuestions - answeredCount})
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

      {/* 25 Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredQuestions.map((q) => {
          const userAns = userAnswers[q.id];
          const isAnswered = userAns !== undefined;
          const isCorrect = userAns === q.correctLetter;
          const isBookmarked = bookmarkedWords.includes(q.word);

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl p-5 border transition-all shadow-sm flex flex-col justify-between space-y-3 ${
                isAnswered
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : 'border-slate-200 hover:border-indigo-300'
              }`}
            >
              <div className="space-y-2.5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs">
                      {q.id}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {q.word}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleSpeak(q.word)}
                      className="p-1 text-slate-400 hover:text-slate-700"
                      title="Pronounce word"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onToggleBookmark(q.word)}
                      className={`p-1 transition-colors ${
                        isBookmarked ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'
                      }`}
                      title="Bookmark word"
                    >
                      {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Option Buttons */}
                <div className="space-y-1.5 pt-1">
                  {q.options.map((opt) => {
                    const isSelected = userAns === opt.letter;
                    const isOptCorrect = opt.letter === q.correctLetter;

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
                        key={opt.letter}
                        onClick={() => onAnswerQuestion(q.id, opt.letter)}
                        className={`w-full flex items-center space-x-2 p-2 rounded-xl border text-xs text-left font-medium transition-all ${btnStyle}`}
                      >
                        <span className="font-bold w-4">{opt.letter}.</span>
                        <span>{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {isAnswered && (
                  <div className="p-3 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-1.5 border border-slate-800">
                    <div className="flex items-center justify-between text-emerald-400 font-bold">
                      <span className="flex items-center space-x-1">
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5 text-rose-400" />}
                        <span>{getTranslation('correctAnswer')}: {q.correctLetter}</span>
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
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
};

