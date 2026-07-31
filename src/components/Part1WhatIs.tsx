import React, { useState } from 'react';
import { PART1_MODEL, PART1_FORMATS, PART1_TIPS } from '../data/chapter1Data';
import { CHAPTER2_MODEL, CHAPTER2_FORMATS, CHAPTER2_TIPS } from '../data/chapter2Data';
import { CheckCircle2, Lightbulb, ArrowRight, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ChapterNumber } from '../types';

interface Part1WhatIsProps {
  chapter?: ChapterNumber;
  onStartStrategy: () => void;
}

export const Part1WhatIs: React.FC<Part1WhatIsProps> = ({
  chapter = 1,
  onStartStrategy
}) => {
  const { language, getTranslation } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const isCh2 = chapter === 2;
  const model = isCh2 ? CHAPTER2_MODEL : PART1_MODEL;
  const formats = isCh2 ? CHAPTER2_FORMATS : PART1_FORMATS;
  const tips = isCh2 ? CHAPTER2_TIPS : PART1_TIPS;

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    setShowExplanation(true);
  };

  const handleSpeakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6 px-4">
      {/* Chapter Title Banner - Geometric Balance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'THỜI GIAN DỰ KIẾN: 15 PHÚT' : 'ESTIMATED TIME: 15 MINS'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">
              {language === 'vi' ? `Chương ${chapter}` : `Chapter ${chapter}`}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {isCh2 ? (
                language === 'vi' ? <>Câu Hỏi<br />Tìm Từ Thay Thế</> : <>Referent<br />Questions</>
              ) : (
                language === 'vi' ? <>Câu Hỏi<br />Từ Vựng</> : <>Vocabulary<br />Questions</>
              )}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {isCh2 ? (
                language === 'vi' 
                  ? 'Tập trung xác định từ hoặc cụm danh từ mà một đại từ (hoặc từ thay thế) đề cập tới trong các bài đọc B1/B2.'
                  : 'Focus on identifying the noun or noun phrase that a pronoun or term refers to in B1/B2 reading passages.'
              ) : (
                language === 'vi' 
                  ? 'Tập trung xác định nghĩa của từ vựng thông qua ngữ cảnh ngữ nghĩa và các nghĩa phụ thường gặp trong các bài đọc cấp độ B1/B2.'
                  : 'Focus on identifying word meaning through semantic context and secondary definitions commonly found in B1/B2 reading passages.'
              )}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Lưu ý học tập' : 'Study Note'}</div>
            <p className="text-xs leading-relaxed text-slate-300 italic">
              {isCh2 ? (
                language === 'vi'
                  ? '"Từ được thay thế phải có cùng số (ít/nhiều), giới tính, và có thể thay thế đại từ trong câu mà không làm thay đổi nghĩa."'
                  : '"A correct referent must match the pronoun in number and gender, and seamlessly replace it in the sentence."'
              ) : (
                language === 'vi'
                  ? '"Thành công ở dạng câu hỏi từ vựng phụ thuộc vào việc hiểu ngữ cảnh xung quanh từ đó, chứ không chỉ học thuộc lòng các định nghĩa đơn lẻ."'
                  : '"Success in vocabulary questions depends on understanding the context surrounding the word, not just memorizing isolated definitions."'
              )}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Kỹ năng cốt lõi' : 'Core Competency'}</div>
            <h4 className="text-base font-bold text-slate-900">
              {isCh2 ? (
                language === 'vi' ? 'Phần I: Câu Hỏi Tìm Từ Thay Thế Là Gì?' : 'Part I: What is a Referent Question?'
              ) : (
                getTranslation('part1Title')
              )}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isCh2 ? (
                language === 'vi' ? (
                  <>Câu hỏi referent yêu cầu bạn tìm từ hoặc cụm danh từ được đại từ đại diện. Từ đúng phải có thể <strong className="text-indigo-700 font-semibold underline decoration-indigo-300">thay thế chính xác</strong> vị trí của đại từ trong câu.</>
                ) : (
                  <>The referent question asks you to locate a referent (noun/noun phrase) that another word refers to. The correct referent must <strong className="text-indigo-700 font-semibold underline decoration-indigo-300">replace the pronoun</strong> smoothly.</>
                )
              ) : (
                language === 'vi' ? (
                  <>Câu hỏi từ vựng yêu cầu bạn xác định nghĩa của một từ hoặc cụm từ mục tiêu khi nó được dùng trong đoạn văn. Các từ xung quanh đóng vai trò là <strong className="text-indigo-700 font-semibold underline decoration-indigo-300">manh mối ngữ cảnh (context clues)</strong>.</>
                ) : (
                  <>The vocabulary question asks you to define a target word or phrase as it is used within a passage. Surrounding words serve as <strong className="text-indigo-700 font-semibold underline decoration-indigo-300">context clues</strong>.</>
                )
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-indigo-600">2-4</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Câu hỏi / Bài thi' : 'Questions / Exam'}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-emerald-600">B1 / B2</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Trình độ Khung Châu Âu' : 'CEFR Target Level'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section A: Vocabulary Question Model */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <span className="bg-indigo-600 text-white font-bold px-2.5 py-1 rounded-lg text-sm">A</span>
            <h3 className="text-lg font-bold text-slate-800">{getTranslation('part1ModelTitle')}</h3>
          </div>
          <button
            onClick={() => handleSpeakText(isCh2 ? CHAPTER2_MODEL.passage : PART1_MODEL.sentence)}
            className="flex items-center space-x-1 text-xs text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100 font-medium"
            title="Listen to pronunciation"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'Nghe đoạn văn' : 'Listen Passage'}</span>
          </button>
        </div>

        {/* Model Passage Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl">
          {isCh2 ? (
            <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
              California is known as the "Sunshine State." In many parts of the state, especially in the south, sunny weather occurs on most days of the year. <mark className="bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold">This</mark> is one of the reasons why people like to live in California.
            </p>
          ) : (
            <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
              The strong wind <mark className="bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold">{PART1_MODEL.targetWord}</mark> the table, causing it to fall over.
            </p>
          )}
        </div>

        {/* Model Question Form */}
        <div className="space-y-3">
          <p className="font-semibold text-slate-800 text-sm sm:text-base">
            {model.question}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {model.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === model.correctIndex;
              let btnStyle = "border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700";

              if (selectedOption !== null) {
                if (isCorrect) {
                  btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-400";
                } else if (isSelected) {
                  btnStyle = "border-rose-400 bg-rose-50 text-rose-900 font-medium";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all text-sm ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {selectedOption !== null && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {showExplanation && (
            <div className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-200 space-y-3 text-xs sm:text-sm border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{getTranslation('correctAnswer')}: {model.options[model.correctIndex]}</span>
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {language === 'vi' && model.explanationVi ? model.explanationVi : model.explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Section B: Vocabulary Question Formats */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <span className="bg-indigo-600 text-white font-bold px-2.5 py-1 rounded-lg text-sm">B</span>
          <h3 className="text-lg font-bold text-slate-800">
            {isCh2 ? (
              language === 'vi' ? '4 Dạng Mẫu Câu Hỏi Tìm Từ Thay Thế' : '4 Standard Referent Question Formats'
            ) : (
              getTranslation('part1FormatsTitle')
            )}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          {language === 'vi' 
            ? 'Trong các bài thi đọc B1/B2, câu hỏi dạng này thường xuất hiện dưới các mẫu chuẩn như sau:'
            : 'On B1/B2 reading exams, questions typically appear in these exact phrasing templates:'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {formats.map((fmt, idx) => {
            const isObj = typeof fmt === 'object' && fmt !== null;
            const enText = isObj ? fmt.en : fmt;
            const viText = isObj ? fmt.vi : null;

            return (
              <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900 font-mono">
                    {enText}
                  </p>
                  {language === 'vi' && viText && (
                    <p className="text-xs text-slate-500 font-sans italic">
                      Dịch: {viText}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section C: Tips */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <span className="bg-indigo-600 text-white font-bold px-2.5 py-1 rounded-lg text-sm">C</span>
          <h3 className="text-lg font-bold text-slate-800">
            {isCh2 ? (
              language === 'vi' ? '5 Quy Tắc Cốt Lõi Cần Nhớ' : '5 Core Referent Rules'
            ) : (
              getTranslation('part1TipsTitle')
            )}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, idx) => {
            const tipTitle = 'title' in tip ? (tip as any).title : `Rule #${(tip as any).num}`;
            const tipText = language === 'vi' ? ((tip as any).vi || (tip as any).textVi) : ((tip as any).en || (tip as any).text);
            return (
              <div key={idx} className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                <div className="flex items-center space-x-2 text-indigo-900 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{tipTitle}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tipText}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA to Part 2: Strategy */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onStartStrategy}
          className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
        >
          <span>{language === 'vi' ? 'Tiếp tục Phần II: Chiến Thuật Giải Bài' : 'Continue to Part II: Hacking Strategy'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};


