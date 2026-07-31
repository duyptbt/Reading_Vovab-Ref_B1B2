import React, { useState } from 'react';
import { WORD_ROOTS } from '../data/chapter1Data';
import { Search, Volume2, Bookmark, BookmarkCheck, ArrowRight, RotateCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Part3RootsProps {
  onStartWarmUp: () => void;
  bookmarkedWords: string[];
  onToggleBookmark: (word: string) => void;
}

export const Part3Roots: React.FC<Part3RootsProps> = ({
  onStartWarmUp,
  bookmarkedWords,
  onToggleBookmark
}) => {
  const { language, getTranslation, getExplanation } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'prefix' | 'suffix' | 'root'>('all');
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  // Filter root items
  const filteredRoots = WORD_ROOTS.filter(r => {
    const matchesSearch =
      r.prefixOrRoot.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.examples.some(e => e.word.toLowerCase().includes(searchQuery.toLowerCase()) || e.definition.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterType === 'prefix') {
      return ['anti', 'auto', 'bi', 'co', 'de', 'dis', 'en', 'ex', 'fore', 'hyper', 'in', 'inter', 'micro', 'mis', 'non', 'over', 'post', 'pre', 're', 'se', 'semi', 'sov', 'trans', 'tri', 'ultra', 'un', 'uni'].includes(r.id);
    }
    if (filterType === 'suffix') {
      return ['ation', 'ess', 'hood', 'ism', 'some'].includes(r.id);
    }
    if (filterType === 'root') {
      return ['ann', 'form'].includes(r.id);
    }

    return true;
  });

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const currentFlashcard = filteredRoots[cardIndex % Math.max(1, filteredRoots.length)];

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6 px-4">
      {/* Banner - Geometric Balance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'THỜI GIAN DỰ KIẾN: 25 PHÚT' : 'ESTIMATED TIME: 25 MINS'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">{language === 'vi' ? 'Chương 1' : 'Chapter 1'}</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {language === 'vi' ? <>Tiền Tố, Căn Tố<br />& Hậu Tố</> : <>Prefixes,<br />Roots & Suffixes</>}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {language === 'vi'
                ? 'Giải mã hàng trăm từ vựng học thuật B1/B2 bằng cách phân tích các tiền tố, hậu tố và căn tố gốc Hy Lạp & La Tinh.'
                : 'Unlock hundreds of academic B1/B2 words by dissecting Greek and Latin affixes and roots.'}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Ghi Chú Hình Thái Học' : 'Morphology Note'}</div>
            <p className="text-xs leading-relaxed text-slate-300 italic">
              {language === 'vi'
                ? '"Hơn 60% từ vựng Tiếng Anh học thuật chứa các phụ tố La Tinh hoặc Hy Lạp giúp làm rõ trực tiếp ý nghĩa của từ."'
                : '"Over 60% of academic English vocabulary contains Latin or Greek affixes that explicitly reveal meaning."'}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Thư Viện Phụ Tố' : 'Affix Library'}</div>
            <h4 className="text-base font-bold text-slate-900">{getTranslation('part3Title')}</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'vi'
                ? 'Khám phá 34 tiền tố, hậu tố và căn tố B1/B2 cốt lõi kèm phát âm và ví dụ phân tích từ.'
                : 'Explore 34 essential B1/B2 prefixes, suffixes, and root bases with audio pronunciation and analysis.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-indigo-600">34 Gốc</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Phụ Tố & Căn Tố' : 'Affixes & Roots'}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-emerald-600">2 Chế Độ</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Danh Sách & Flashcard' : 'Grid & Flashcards'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'vi' ? "Tìm kiếm tiền tố, căn tố hoặc từ ví dụ..." : "Search prefix, root, or word example..."}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filter Type Pills */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {[
            { id: 'all', label: language === 'vi' ? 'Tất cả (34)' : 'All (34)' },
            { id: 'prefix', label: language === 'vi' ? 'Tiền Tố' : 'Prefixes' },
            { id: 'suffix', label: language === 'vi' ? 'Hậu Tố' : 'Suffixes' },
            { id: 'root', label: language === 'vi' ? 'Căn Tố' : 'Roots' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                filterType === f.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Flashcard Mode Toggle */}
        <button
          onClick={() => {
            setIsFlashcardMode(!isFlashcardMode);
            setShowMeaning(false);
          }}
          className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
            isFlashcardMode
              ? 'bg-amber-500 text-slate-950 shadow-sm'
              : 'bg-slate-800 text-slate-100 hover:bg-slate-700'
          }`}
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>{isFlashcardMode ? (language === 'vi' ? 'Chuyển Sang Dạng Danh Sách' : 'Grid Dictionary Mode') : (language === 'vi' ? 'Luyện Tập Flashcard' : 'Flashcard Practice')}</span>
        </button>
      </div>

      {/* FLASHCARD MODE VIEW */}
      {isFlashcardMode && currentFlashcard && (
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md text-center max-w-xl mx-auto space-y-6">
          <div className="text-xs text-indigo-400 font-mono tracking-wider uppercase">
            {language === 'vi' ? `Thẻ ${cardIndex + 1} trên ${filteredRoots.length}` : `Flashcard ${cardIndex + 1} of ${filteredRoots.length}`}
          </div>

          <div className="py-6 space-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono tracking-tight">
              {currentFlashcard.prefixOrRoot}
            </h3>
            <p className="text-xs text-slate-400">Prefix / Root / Suffix</p>
          </div>

          {showMeaning ? (
            <div className="space-y-4 bg-slate-800/80 p-5 rounded-xl border border-slate-700 text-left animate-fadeIn">
              <div className="text-center">
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">{language === 'vi' ? 'Ý Nghĩa' : 'Meaning'}</span>
                <p className="text-lg font-bold text-white mt-0.5">{getExplanation(currentFlashcard, 'meaning')}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-700/60">
                <p className="text-xs font-semibold text-slate-400">{language === 'vi' ? 'Ví dụ:' : 'Examples:'}</p>
                {currentFlashcard.examples.map((ex, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-2.5 rounded-lg text-xs space-y-1">
                    <div className="flex items-center justify-between text-indigo-300 font-bold">
                      <span>{ex.word}</span>
                      <button onClick={() => handleSpeak(ex.word)} className="text-slate-400 hover:text-white">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-slate-400 font-mono text-[11px]">{ex.breakdown}</p>
                    <p className="text-slate-300">{getExplanation(ex, 'definition')}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowMeaning(true)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-sm"
            >
              {language === 'vi' ? 'Bấm để lật xem Ý Nghĩa & Ví Dụ' : 'Click to Reveal Meaning & Examples'}
            </button>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                setCardIndex(prev => (prev > 0 ? prev - 1 : filteredRoots.length - 1));
                setShowMeaning(false);
              }}
              className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800"
            >
              {language === 'vi' ? 'Thẻ Trước' : 'Previous Card'}
            </button>

            <button
              onClick={() => {
                setCardIndex(prev => prev + 1);
                setShowMeaning(false);
              }}
              className="text-xs font-semibold text-white px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500"
            >
              {language === 'vi' ? 'Thẻ Tiếp' : 'Next Card'}
            </button>
          </div>
        </div>
      )}

      {/* GRID DICTIONARY VIEW */}
      {!isFlashcardMode && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRoots.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
                  <div>
                    <h3 className="text-lg font-extrabold text-indigo-900 font-mono">
                      {item.prefixOrRoot}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {language === 'vi' ? 'Nghĩa: ' : 'Meaning: '}<strong className="text-slate-800">{getExplanation(item, 'meaning')}</strong>
                    </p>
                  </div>
                  <button
                    onClick={() => handleSpeak(item.prefixOrRoot.split(',')[0])}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Pronounce"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2.5 pt-1">
                  {item.examples.map((ex, idx) => {
                    const isBookmarked = bookmarkedWords.includes(ex.word);
                    return (
                      <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">
                            {ex.word}
                          </span>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => handleSpeak(ex.word)}
                              className="text-slate-400 hover:text-slate-700 p-0.5"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => onToggleBookmark(ex.word)}
                              className={`p-0.5 transition-colors ${
                                isBookmarked ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'
                              }`}
                              title={isBookmarked ? 'Remove bookmark' : 'Bookmark word'}
                            >
                              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        <p className="text-[11px] font-mono text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded border border-indigo-100/60 inline-block">
                          {ex.breakdown}
                        </p>
                        <p className="text-xs text-slate-600">
                          {getExplanation(ex, 'definition')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Navigation CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onStartWarmUp}
          className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
        >
          <span>{language === 'vi' ? 'Tiếp tục Phần IV: Luyện Tập Khởi Động' : 'Continue to Part IV: Warm Up Practice'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

