import React, { useState } from 'react';
import { QUIZ_YOURSELF_EXERCISES } from '../data/quizYourselfData';
import { Volume2, CheckCircle2, XCircle, Bookmark, BookmarkCheck, RotateCcw, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QuizYourselfProps {
  userAnswers: Record<number, number>; // qId (1..30) -> optionIndex (0..3)
  onAnswerQuestion: (qId: number, optionIndex: number) => void;
  onResetAnswers: () => void;
  bookmarkedWords: string[];
  onToggleBookmark: (word: string) => void;
}

export const QuizYourself: React.FC<QuizYourselfProps> = ({
  userAnswers,
  onAnswerQuestion,
  onResetAnswers,
  bookmarkedWords,
  onToggleBookmark
}) => {
  const { language, getExplanation } = useLanguage();
  const [selectedExerciseId, setSelectedExerciseId] = useState<number>(1);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const [filterMode, setFilterMode] = useState<'all' | 'unanswered' | 'incorrect'>('all');

  const activeExercise = QUIZ_YOURSELF_EXERCISES.find(e => e.id === selectedExerciseId) || QUIZ_YOURSELF_EXERCISES[0];

  const allQuestions = QUIZ_YOURSELF_EXERCISES.flatMap(e => e.questions);
  const totalQuestions = allQuestions.length; // 30
  const answeredCount = Object.keys(userAnswers).length;

  let correctCount = 0;
  allQuestions.forEach(q => {
    if (userAnswers[q.id] === q.correctIndex) {
      correctCount++;
    }
  });

  const overallPercentage = Math.round((correctCount / totalQuestions) * 100);

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  // Render passage text with interactive highlighted target words
  const renderInteractivePassage = () => {
    if (!activeExercise) return null;
    let text = activeExercise.passageText || '';
    const words = activeExercise.targetWords || [];

    if (!words.length) return text;

    const pattern = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part, i) => {
      const lowerPart = part.toLowerCase();
      const matchedWord = words.find(w => w.toLowerCase() === lowerPart);

      if (matchedWord) {
        const correspondingQ = activeExercise.questions.find(
          q => q.word.toLowerCase() === matchedWord.toLowerCase()
        );
        const isSelected = activeQuestionId === correspondingQ?.id;

        return (
          <mark
            key={i}
            onClick={() => {
              if (correspondingQ) {
                setActiveQuestionId(correspondingQ.id);
                const el = document.getElementById(`quiz-q-${correspondingQ.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className={`cursor-pointer px-1.5 py-0.5 mx-0.5 rounded font-bold transition-all ${
              isSelected
                ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400'
                : 'bg-amber-200 text-amber-900 hover:bg-amber-300'
            }`}
            title={`Click to view question for "${matchedWord}"`}
          >
            {part}
          </mark>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const filteredQuestions = activeExercise.questions.filter(q => {
    const userAns = userAnswers[q.id];
    if (filterMode === 'unanswered') return userAns === undefined;
    if (filterMode === 'incorrect') return userAns !== undefined && userAns !== q.correctIndex;
    return true;
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6 px-4">
      {/* Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 border border-indigo-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'BÀI TẬP TỔNG HỢP CHƯƠNG 1 & 2' : 'CHAPTERS 1-2 SYNTHESIS EXERCISES'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">
              {language === 'vi' ? 'Tự Luyện Tập' : 'Interactive Assessment'}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              Quiz Yourself
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {language === 'vi'
                ? 'Đọc 5 bài đọc tổng hợp Chương 1 & 2 và trả lời 30 câu hỏi về Từ Vựng (Vocabulary) và Từ Thay Thế (Referents).'
                : 'Read 5 synthesis passages from Chapters 1 & 2 and solve 30 Vocabulary and Referent context questions.'}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Tổng Điểm Bài Tập' : 'Score Summary'}</div>
            <div className="flex items-center justify-between text-xs pt-1">
              <span>{language === 'vi' ? 'Đã làm:' : 'Progress:'} <strong className="text-emerald-400">{answeredCount} / {totalQuestions}</strong></span>
              <span>{language === 'vi' ? 'Đúng:' : 'Correct:'} <strong className="text-amber-400">{correctCount} / {totalQuestions} ({overallPercentage}%)</strong></span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'HƯỚNG DẪN LÀM BÀI' : 'EXERCISE INSTRUCTIONS'}</div>
            <h4 className="text-base font-bold text-slate-900">
              {language === 'vi' ? '5 Bài Đọc & 30 Câu Hỏi Đọc Hiểu' : '5 Reading Passages & 30 Comprehension Items'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'vi'
                ? 'Mỗi bài đọc chứa các từ mục tiêu được tô đậm. Nhấn vào từ tô đậm để di chuyển nhanh tới câu hỏi tương ứng hoặc làm lần lượt các câu hỏi dưới mỗi bài đọc.'
                : 'Each passage contains highlighted target words. Click a highlighted word to jump directly to its question, or solve questions sequentially below.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-slate-500 font-medium">{language === 'vi' ? 'Lọc câu hỏi:' : 'Filter:'}</span>
              <div className="flex bg-white border border-slate-200 p-0.5 rounded-md">
                <button
                  onClick={() => setFilterMode('all')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${filterMode === 'all' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {language === 'vi' ? 'Tất cả' : 'All'}
                </button>
                <button
                  onClick={() => setFilterMode('unanswered')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${filterMode === 'unanswered' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {language === 'vi' ? 'Chưa làm' : 'Unanswered'}
                </button>
                <button
                  onClick={() => setFilterMode('incorrect')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${filterMode === 'incorrect' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {language === 'vi' ? 'Làm sai' : 'Incorrect'}
                </button>
              </div>
            </div>

            <button
              onClick={onResetAnswers}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-md font-medium transition-all shadow-2xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'Làm lại toàn bộ' : 'Reset All Answers'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Exercise Navigation Tabs */}
      <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex space-x-2 overflow-x-auto no-scrollbar">
        {QUIZ_YOURSELF_EXERCISES.map((e) => {
          const isSelected = selectedExerciseId === e.id;
          let eAnswered = 0;
          e.questions.forEach(q => {
            if (userAnswers[q.id] !== undefined) eAnswered++;
          });

          return (
            <button
              key={e.id}
              onClick={() => {
                setSelectedExerciseId(e.id);
                setActiveQuestionId(null);
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                isSelected
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{e.title}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isSelected
                    ? 'bg-indigo-700 text-indigo-100'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {eAnswered}/6
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Exercise Reading Passage Box */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block"></span>
            <span>{activeExercise.title}</span>
          </h3>
          <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            {language === 'vi' ? 'Câu ' + activeExercise.questions[0].id + ' – ' + activeExercise.questions[5].id : 'Questions ' + activeExercise.questions[0].id + ' – ' + activeExercise.questions[5].id}
          </span>
        </div>

        <div className="text-slate-800 text-base sm:text-lg leading-relaxed sm:leading-loose font-serif bg-slate-50/80 p-5 sm:p-6 rounded-xl border border-slate-200/80">
          {renderInteractivePassage()}
        </div>
      </div>

      {/* Questions Grid / List for Active Exercise */}
      <div className="space-y-4">
        <h4 className="text-base font-bold text-slate-800 px-1">
          {language === 'vi'
            ? `Câu hỏi cho ${activeExercise.title}`
            : `Questions for ${activeExercise.title}`}
        </h4>

        {filteredQuestions.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 space-y-2">
            <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="font-medium text-sm">
              {language === 'vi' ? 'Không có câu hỏi nào phù hợp với bộ lọc.' : 'No questions match the current filter.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredQuestions.map((q) => {
              const userAns = userAnswers[q.id];
              const isAnswered = userAns !== undefined;
              const isCorrect = userAns === q.correctIndex;
              const isFocused = activeQuestionId === q.id;
              const isBookmarked = bookmarkedWords.includes(q.word);

              return (
                <div
                  id={`quiz-q-${q.id}`}
                  key={q.id}
                  className={`bg-white rounded-2xl p-5 border transition-all space-y-4 flex flex-col justify-between ${
                    isFocused
                      ? 'border-indigo-600 ring-2 ring-indigo-200 shadow-md'
                      : isAnswered
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-red-300 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-900">
                        {language === 'vi' ? `Câu #${q.id}` : `Question #${q.id}`} • {language === 'vi' ? 'Từ mục tiêu:' : 'Target Word:'}{' '}
                        <mark className="bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold">{q.word}</mark>
                      </span>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleSpeak(q.word)}
                          className="p-1 hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded transition-all"
                          title="Listen pronunciation"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onToggleBookmark(q.word)}
                          className={`p-1 rounded transition-all ${
                            isBookmarked
                              ? 'text-amber-500 hover:bg-amber-50'
                              : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                          }`}
                          title={isBookmarked ? 'Remove bookmark' : 'Bookmark word'}
                        >
                          {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-400" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Question Prompt */}
                    <p className="text-sm font-semibold text-slate-900 leading-snug">
                      {q.questionText}
                    </p>

                    {/* Options */}
                    <div className="space-y-2 pt-1">
                      {q.options.map((optText, optIdx) => {
                        let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-indigo-50 hover:border-indigo-300';

                        if (isAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold shadow-xs';
                          } else if (optIdx === userAns) {
                            btnStyle = 'bg-red-100 border-red-400 text-red-950 font-medium';
                          } else {
                            btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => onAnswerQuestion(q.id, optIdx)}
                            className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{optText}</span>
                            {isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                            {isAnswered && optIdx === userAns && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-red-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Feedback Explanation */}
                  {isAnswered && (
                    <div
                      className={`p-3.5 rounded-xl text-xs space-y-1.5 mt-2 ${
                        isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-red-50 border border-red-200 text-red-900'
                      }`}
                    >
                      <div className="flex items-center space-x-1.5 font-bold uppercase tracking-wider text-[10px]">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">{language === 'vi' ? 'CHÍNH XÁC' : 'CORRECT ANSWER'}</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5 text-red-600" />
                            <span className="text-red-700">{language === 'vi' ? 'CHƯA CHÍNH XÁC' : 'INCORRECT'}</span>
                          </>
                        )}
                      </div>
                      <p className="leading-relaxed">
                        {getExplanation(q)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
