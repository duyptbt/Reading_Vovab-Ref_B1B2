import React, { useState } from 'react';
import { Bookmark, Volume2, Trash2 } from 'lucide-react';
import { WORD_ROOTS } from '../data/chapter1Data';
import { useLanguage } from '../context/LanguageContext';

interface WordVaultProps {
  bookmarkedWords: string[];
  onToggleBookmark: (word: string) => void;
}

export const WordVault: React.FC<WordVaultProps> = ({
  bookmarkedWords,
  onToggleBookmark
}) => {
  const { language, getTranslation, getExplanation } = useLanguage();
  const [filterQuery, setFilterQuery] = useState('');

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const filtered = bookmarkedWords.filter(w =>
    w.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6 px-4">
      {/* Banner - Geometric Balance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'KHO TỪ VỰNG ĐÃ LƯU' : 'SAVED VOCABULARY VAULT'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">{language === 'vi' ? 'Kho Từ' : 'Word Vault'}</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {language === 'vi' ? <>Trung Tâm<br />Ôn Tập</> : <>Review<br />Hub</>}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {language === 'vi'
                ? 'Truy cập các từ vựng đã lưu để lặp lại ngắt quãng và ôn tập hiệu quả.'
                : 'Access bookmarked target vocabulary for spaced repetition and review.'}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Số Lượng Đã Lưu' : 'Saved Counter'}</div>
            <div className="text-xs pt-1">
              {language === 'vi' ? 'Đã lưu hiện tại:' : 'Currently Saved:'} <strong className="text-emerald-400">{bookmarkedWords.length} {language === 'vi' ? 'Từ' : 'Words'}</strong>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Lặp Lại Ngắt Quãng' : 'Spaced Repetition'}</div>
            <h4 className="text-base font-bold text-slate-900">{getTranslation('wordVaultTitle')}</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'vi'
                ? 'Các từ được đánh dấu trong lúc học sẽ tự động đồng bộ về đây kèm phân tích căn tố và phát âm audio.'
                : 'Words bookmarked during reading practice automatically sync here with affix breakdowns and audio pronunciation.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-indigo-600">{bookmarkedWords.length} {language === 'vi' ? 'Từ' : 'Words'}</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Tổng Số Đã Lưu' : 'Total Saved'}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-emerald-600">Audio</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Phát Âm & Định Nghĩa' : 'Pronunciation & Meaning'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {bookmarkedWords.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">{language === 'vi' ? 'Chưa Có Từ Nào Được Đánh Dấu' : 'No Bookmarked Words Yet'}</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            {language === 'vi'
              ? 'Bấm biểu tượng đánh dấu ở bất kỳ từ nào trong Căn Tố Từ, Bài Luyện Tập, hoặc Bài Đọc Thực Hành để lưu vào đây.'
              : 'Click the bookmark icon on any word in Word Roots, Warm Up, or Practice Passages to save it here for quick review.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder={language === 'vi' ? 'Tìm kiếm từ đã lưu...' : 'Search saved words...'}
              className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-xs text-slate-500">{language === 'vi' ? `Hiển thị ${filtered.length} / ${bookmarkedWords.length}` : `Showing ${filtered.length} of ${bookmarkedWords.length}`}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((word) => {
              // Find if word is in root data
              let rootInfo: any = null;
              WORD_ROOTS.forEach(r => {
                const ex = r.examples.find(e => e.word.toLowerCase() === word.toLowerCase());
                if (ex) {
                  rootInfo = { 
                    root: r.prefixOrRoot, 
                    meaning: getExplanation(r, 'meaning'), 
                    breakdown: ex.breakdown, 
                    definition: getExplanation(ex, 'definition')
                  };
                }
              });

              return (
                <div
                  key={word}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <h3 className="text-lg font-extrabold text-indigo-950 capitalize">
                        {word}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleSpeak(word)}
                          className="p-1 text-slate-400 hover:text-slate-700"
                          title="Pronounce"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onToggleBookmark(word)}
                          className="p-1 text-rose-400 hover:text-rose-600"
                          title="Remove from vault"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {rootInfo ? (
                      <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl">
                        <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 block w-max">
                          {rootInfo.root} ({rootInfo.meaning}) • {rootInfo.breakdown}
                        </span>
                        <p className="text-slate-800 font-medium">{rootInfo.definition}</p>
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500 italic">
                        {language === 'vi' ? 'Từ vựng từ bài thực hành đọc Chương 1.' : 'Vocabulary word from Chapter 1 Reading Practice.'}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

