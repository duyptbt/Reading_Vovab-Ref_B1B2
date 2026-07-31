import React, { useState } from 'react';
import { CHAPTER2_PRONOUN_CATEGORIES } from '../data/chapter2Data';
import { Search, Volume2, ArrowRight, RotateCw, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Part3PronounsProps {
  onStartWarmUp: () => void;
}

export const Part3Pronouns: React.FC<Part3PronounsProps> = ({ onStartWarmUp }) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFlashcardMode, setIsFlashcardMode] = useState<boolean>(false);
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  // Flatten items for search & flashcard
  const allItems = CHAPTER2_PRONOUN_CATEGORIES.flatMap(cat =>
    cat.items.map(item => ({
      item,
      categoryType: cat.type,
      categoryTypeVi: cat.typeVi,
      examples: cat.examples || []
    }))
  );

  const filteredCategories = CHAPTER2_PRONOUN_CATEGORIES.filter(cat => {
    if (selectedCategory !== 'all' && cat.type !== selectedCategory) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      cat.type.toLowerCase().includes(q) ||
      cat.typeVi.toLowerCase().includes(q) ||
      cat.items.some(it => it.toLowerCase().includes(q))
    );
  });

  const filteredItems = allItems.filter(entry => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      entry.item.toLowerCase().includes(q) ||
      entry.categoryType.toLowerCase().includes(q) ||
      entry.categoryTypeVi.toLowerCase().includes(q)
    );
  });

  const currentFlashcard = filteredItems[cardIndex % Math.max(1, filteredItems.length)];

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6 px-4">
      {/* Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'THỜI GIAN DỰ KIẾN: 20 PHÚT' : 'ESTIMATED TIME: 20 MINS'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">{language === 'vi' ? 'Chương 2' : 'Chapter 2'}</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {language === 'vi' ? <>Đại Từ & Từ Thay Thế<br />Thường Gặp</> : <>Common Pronouns<br />& Referents</>}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {language === 'vi'
                ? 'Xem nhanh tổng quan các loại đại từ chủ ngữ, tân ngữ, sở hữu, chỉ định, quan hệ và định lượng xuất hiện trong bài thi B1/B2.'
                : 'Quick reference guide for subject, object, possessive, demonstrative, relative, and quantifier pronouns in B1/B2 exams.'}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Mẹo Cốt Lõi' : 'Key Pronoun Tip'}</div>
            <p className="text-xs leading-relaxed text-slate-300 italic">
              {language === 'vi'
                ? '"Đặc biệt lưu ý cặp từ (former/latter, one/another/the other) và các đại từ chỉ định (this/that/these/those) vì đây là bẫy phổ biến nhất trong bài thi B1/B2."'
                : '"Pay close attention to word pairs (former/latter, one/another) and demonstratives (this/these), as they are frequent exam distractors."'}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Danh Mục Đại Từ' : 'Pronoun Categories'}</div>
            <h4 className="text-base font-bold text-slate-900">
              {language === 'vi' ? 'Phần III: Nhìn Nhanh Các Loại Đại Từ' : 'Part III: Quick Look - Pronouns Used in Referent Questions'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'vi'
                ? '6 nhóm đại từ quan trọng nhất mà bạn chắc chắn sẽ gặp trong các câu hỏi tìm từ thay thế.'
                : '6 key pronoun categories that frequently serve as the target word in referent questions.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-indigo-600">6 Nhóm</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Đại Từ Phổ Biến' : 'Pronoun Types'}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-emerald-600">Flashcard</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Chế Độ Luyện Tập' : 'Practice Mode'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'vi' ? "Tìm kiếm đại từ, ví dụ..." : "Search pronouns or examples..."}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filter Categories */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {language === 'vi' ? 'Tất cả (6)' : 'All (6)'}
          </button>
          {CHAPTER2_PRONOUN_CATEGORIES.map(cat => (
            <button
              key={cat.type}
              onClick={() => setSelectedCategory(cat.type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.type
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {language === 'vi' ? cat.typeVi : cat.type}
            </button>
          ))}
        </div>

        {/* Flashcard Toggle */}
        <button
          onClick={() => {
            setIsFlashcardMode(!isFlashcardMode);
            setShowAnswer(false);
          }}
          className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
            isFlashcardMode
              ? 'bg-amber-500 text-slate-950 shadow-sm'
              : 'bg-slate-800 text-slate-100 hover:bg-slate-700'
          }`}
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>{isFlashcardMode ? (language === 'vi' ? 'Xem Dạng Danh Sách' : 'Grid Mode') : (language === 'vi' ? 'Luyện Tập Flashcard' : 'Flashcard Mode')}</span>
        </button>
      </div>

      {/* FLASHCARD MODE */}
      {isFlashcardMode && currentFlashcard && (
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md text-center max-w-xl mx-auto space-y-6">
          <div className="text-xs text-indigo-400 font-mono tracking-wider uppercase">
            {language === 'vi'
              ? `Thẻ ${cardIndex + 1} trên ${filteredItems.length} - ${currentFlashcard.categoryTypeVi}`
              : `Flashcard ${cardIndex + 1} of ${filteredItems.length} - ${currentFlashcard.categoryType}`}
          </div>

          <div className="py-6 space-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono tracking-tight">
              {currentFlashcard.item}
            </h3>
            <p className="text-xs text-slate-400">Target Pronoun / Referent Term</p>
          </div>

          {showAnswer ? (
            <div className="space-y-4 bg-slate-800/80 p-5 rounded-xl border border-slate-700 text-left animate-fadeIn">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  {language === 'vi' ? 'Phân Loại & Cách Sử Dụng' : 'Type & Usage'}
                </span>
                <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                  {language === 'vi' ? currentFlashcard.categoryTypeVi : currentFlashcard.categoryType}
                </p>
              </div>

              {currentFlashcard.examples.length > 0 && (
                <div className="pt-2 border-t border-slate-700/60 text-xs space-y-2">
                  <span className="font-semibold text-amber-300 block">
                    {language === 'vi' ? 'Cấu trúc mẫu đặc biệt:' : 'Special Example Patterns:'}
                  </span>
                  {currentFlashcard.examples.map((ex, i) => (
                    <div key={i} className="bg-slate-900/60 p-2 rounded border border-slate-700/80">
                      <span className="font-mono text-indigo-300 font-bold block">{ex.pattern}</span>
                      <span className="text-slate-300 text-[11px] block">{language === 'vi' ? ex.descriptionVi : ex.description}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowAnswer(true)}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
            >
              {language === 'vi' ? 'Hiện Phân Loại & Ví Dụ' : 'Show Type & Examples'}
            </button>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                setCardIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
                setShowAnswer(false);
              }}
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium hover:bg-slate-700"
            >
              {language === 'vi' ? 'Thẻ Trước' : 'Previous'}
            </button>
            <button
              onClick={() => {
                setCardIndex(prev => prev + 1);
                setShowAnswer(false);
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-medium hover:bg-indigo-500"
            >
              {language === 'vi' ? 'Thẻ Tiếp' : 'Next Card'}
            </button>
          </div>
        </div>
      )}

      {/* GRID DICTIONARY MODE */}
      {!isFlashcardMode && (
        <div className="space-y-6">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold block">
                    {language === 'vi' ? `Nhóm ${idx + 1}` : `Group ${idx + 1}`}
                  </span>
                  <h3 className="text-lg font-bold text-amber-300">
                    {language === 'vi' ? cat.typeVi : cat.type}
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {cat.items.length} {language === 'vi' ? 'từ/đại từ' : 'pronoun terms'}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((it, itIdx) => (
                    <span
                      key={itIdx}
                      className="inline-flex items-center space-x-1.5 bg-indigo-50 text-indigo-900 border border-indigo-200 px-3 py-1.5 rounded-xl text-sm font-bold font-mono hover:bg-indigo-100 transition-colors"
                    >
                      <span>{it}</span>
                      <button
                        onClick={() => handleSpeak(it)}
                        className="text-indigo-400 hover:text-indigo-700"
                        title="Listen pronunciation"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>

                {cat.examples && cat.examples.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      {language === 'vi' ? 'Các Cặp / Cấu Trúc Đặc Biệt' : 'Special Pronoun Patterns'}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {cat.examples.map((ex, exIdx) => (
                        <div key={exIdx} className="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-1">
                          <span className="text-xs font-bold text-indigo-700 font-mono block flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline mr-1" />
                            {ex.pattern}
                          </span>
                          <p className="text-xs text-slate-600">
                            {language === 'vi' ? ex.descriptionVi : ex.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-amber-300">
            {language === 'vi' ? 'Sẵn sàng khởi động với 20 câu Warm-Up?' : 'Ready to start the 20 Warm-Up Questions?'}
          </h4>
          <p className="text-xs text-slate-300">
            {language === 'vi'
              ? 'Áp dụng lý thuyết đại từ để giải 20 câu hỏi nhanh trước khi chuyển sang bài đọc thực hành.'
              : 'Apply pronoun rules to solve 20 rapid questions before moving to practice passages.'}
          </p>
        </div>
        <button
          onClick={onStartWarmUp}
          className="px-5 py-3 bg-amber-400 text-slate-950 font-bold rounded-xl hover:bg-amber-300 transition-all flex items-center space-x-2 shrink-0 text-sm"
        >
          <span>{language === 'vi' ? 'Bắt Đầu Warm-Up' : 'Start Warm-Up'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
