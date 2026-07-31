import React, { useState } from 'react';
import { STRATEGY_STEPS } from '../data/chapter1Data';
import { CHAPTER2_STRATEGY_STEPS } from '../data/chapter2Data';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ChapterNumber } from '../types';

interface Part2StrategyProps {
  chapter?: ChapterNumber;
  onStartRoots: () => void;
}

export const Part2Strategy: React.FC<Part2StrategyProps> = ({
  chapter = 1,
  onStartRoots
}) => {
  const { language, getTranslation } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const isCh2 = chapter === 2;
  const steps = isCh2 ? CHAPTER2_STRATEGY_STEPS : STRATEGY_STEPS;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6 px-4">
      {/* Banner - Geometric Balance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <span>{language === 'vi' ? 'THỜI GIAN DỰ KIẾN: 20 PHÚT' : 'ESTIMATED TIME: 20 MINS'}</span>
            </div>
            <h2 className="text-2xl font-light text-slate-400 leading-tight">
              {language === 'vi' ? `Chương ${chapter}` : `Chapter ${chapter}`}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {language === 'vi' ? <>Chiến Thuật<br />Giải Bài</> : <>Hacking<br />Strategy</>}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {isCh2 ? (
                language === 'vi'
                  ? 'Nắm vững quy trình hệ thống 7 bước để xác định chính xác từ/cụm từ được đại từ đại diện trong các bài đọc B1/B2.'
                  : 'Master the systematic 7-step process to find pronoun referents with speed and accuracy.'
              ) : (
                language === 'vi'
                  ? 'Nắm vững quy trình hệ thống 7 bước để giải các câu hỏi từ vựng B1/B2 nhanh chóng và chính xác tuyệt đối.'
                  : 'Master the systematic 7-step process to solve B1/B2 vocabulary questions with speed and precision.'
              )}
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-xl text-white space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Quy Tắc Vàng' : 'Strategy Key'}</div>
            <p className="text-xs leading-relaxed text-slate-300 italic">
              {isCh2 ? (
                language === 'vi'
                  ? '"Sau khi chọn phương án, luôn thay thử từ đó vào vị trí đại từ trong câu để kiểm tra xem câu có hợp lý về nghĩa và ngữ pháp hay không."'
                  : '"Always replace the pronoun with your choice in the sentence to verify that it fits grammatically and logically."'
              ) : (
                language === 'vi'
                  ? '"Không bao giờ chọn đáp án chỉ dựa vào nghĩa từ điển. Luôn thực hiện bước thay thế thử vào câu để kiểm tra ngữ cảnh."'
                  : '"Never choose an answer based on definition alone. Always perform substitution check inside the target sentence."'
              )}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language === 'vi' ? 'Tổng Quan Quy Trình' : 'Workflow Overview'}</div>
            <h4 className="text-base font-bold text-slate-900">
              {isCh2 ? (
                language === 'vi' ? 'Phần II: Chiến Thuật 7 Bước Giải Câu Hỏi Từ Thay Thế' : 'Part II: 7-Step Strategy for Referent Questions'
              ) : (
                getTranslation('part2Title')
              )}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isCh2 ? (
                language === 'vi'
                  ? 'Quy trình thử và loại trừ đảm bảo từ được chọn trùng khớp về số (ít/nhiều), giới tính, và giữ nguyên logic của đoạn văn.'
                  : 'The elimination workflow ensures the referent matches number, gender, and logical progression of the passage.'
              ) : (
                language === 'vi'
                  ? 'Phương pháp loại trừ hệ thống giúp tránh các bẫy thường gặp như chọn nghĩa đen khi câu sử dụng nghĩa ẩn dụ.'
                  : 'Systematic elimination prevents common distractor traps like choosing literal meanings when metaphorical context is used.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-indigo-600">7 {language === 'vi' ? 'Bước' : 'Steps'}</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Quy Trình Xử Lý' : 'Resolution Flow'}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
              <span className="block text-xl font-bold text-emerald-600">100%</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">{language === 'vi' ? 'Độ Chính Xác' : 'Accuracy Method'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator Flowchart */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center justify-between">
          <span>{language === 'vi' ? 'Sơ Đồ Chiến Thuật 7 Bước' : '7-Step Strategy Flowchart'}</span>
          <span className="text-xs text-slate-500 font-normal">{language === 'vi' ? 'Bấm vào từng bước để xem chi tiết' : 'Click any step to inspect details'}</span>
        </h3>

        {/* Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {steps.map((s: any, idx: number) => {
            const isActive = activeStep === idx;
            const stepNum = s.step || s.stepNum;
            const stepTitle = language === 'vi' && s.titleVi ? s.titleVi : s.title;

            return (
              <button
                key={stepNum}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all text-xs font-medium flex flex-col justify-between ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm ring-2 ring-indigo-300'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    isActive ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {getTranslation('part2Step')} {stepNum}
                  </span>
                  {isActive && <CheckCircle className="w-3.5 h-3.5 text-indigo-200" />}
                </div>
                <div className="font-semibold line-clamp-2 leading-snug">
                  {stepTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        {steps[activeStep] && (() => {
          const currentStep = steps[activeStep] as any;
          const stepNum = currentStep.step || currentStep.stepNum;
          const stepTitle = language === 'vi' && currentStep.titleVi ? currentStep.titleVi : currentStep.title;
          const stepDesc = language === 'vi' && currentStep.descriptionVi ? currentStep.descriptionVi : currentStep.description;
          const stepEx = language === 'vi' && currentStep.exampleDetailVi ? currentStep.exampleDetailVi : currentStep.exampleDetail;

          return (
            <div className="bg-slate-900 text-slate-100 rounded-xl p-5 sm:p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm">
                    {stepNum}
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {stepTitle}
                  </h4>
                </div>
                <div className="text-xs text-indigo-400 font-mono">
                  {language === 'vi' ? `Bước ${activeStep + 1} trên 7` : `Step ${activeStep + 1} of 7`}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {stepDesc}
              </p>

              {stepEx && (
                <div className="bg-slate-800/80 rounded-lg p-4 border border-slate-700/60 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                    <span>{language === 'vi' ? 'Ví dụ thực hành' : 'Example Walkthrough'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-mono whitespace-pre-line leading-relaxed">
                    {stepEx}
                  </p>
                </div>
              )}

              <div className="flex justify-between items-center pt-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40"
                >
                  {getTranslation('prevStep')}
                </button>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border border-indigo-500 bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40"
                >
                  {getTranslation('nextStep')}
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Complete Step-By-Step Example Walkthrough Table */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>{language === 'vi' ? 'Ví Dụ Minh Họa Đầy Đủ' : 'Full Interactive Example'}</span>
        </h3>

        {isCh2 ? (
          <div className="space-y-4">
            <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl text-sm text-slate-800">
              <strong className="text-amber-900 block mb-1">{language === 'vi' ? 'Đoạn văn gốc:' : 'Passage Context:'}</strong>
              "California is known as the 'Sunshine State.' In many parts of the state, especially in the south, sunny weather occurs on most days of the year. <mark className="bg-amber-300 font-bold px-1.5 py-0.5 rounded">This</mark> is one of the reasons why people like to live in California."
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-slate-900">{language === 'vi' ? '1. Nhận diện câu hỏi' : '1. Question Type'}</span>
                <span className="md:col-span-2 text-slate-700">
                  {language === 'vi' ? 'Hỏi đại từ "This" thay thế cho từ/cụm từ nào trong đoạn văn.' : 'Ask what referent the pronoun "This" replaces.'}
                </span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-slate-900">{language === 'vi' ? '2. Đại từ được hỏi' : '2. Target Pronoun'}</span>
                <span className="md:col-span-2 text-slate-700">
                  {language === 'vi' ? '"This" là đại từ chỉ định số ít (singular demonstrative pronoun).' : '"This" is a singular demonstrative pronoun.'}
                </span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-slate-900">{language === 'vi' ? '3. Định vị 4 phương án' : '3. Options Proximity'}</span>
                <span className="md:col-span-2 text-slate-700">
                  (A) California, (B) the "Sunshine State", (C) the south, (D) sunny weather
                </span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl">
                <span className="font-bold text-rose-700">{language === 'vi' ? '4 & 5. Xem xét & Loại trừ' : '4 & 5. Review & Elimination'}</span>
                <div className="md:col-span-2 space-y-1 text-slate-700">
                  <p>• <strong>(A) California:</strong> {language === 'vi' ? 'Loại vì "California is one of the reasons why people like to live in California" bị lặp từ và vô nghĩa.' : 'Eliminate: "California is one of the reasons why people like to live in California" is repetitive and redundant.'}</p>
                  <p>• <strong>(B) Sunshine State:</strong> {language === 'vi' ? 'Loại vì "The Sunshine State is one of the reasons..." cũng lặp nghĩa với California.' : 'Eliminate: "The Sunshine State is one of the reasons..." is also redundant.'}</p>
                  <p>• <strong>(C) the south:</strong> {language === 'vi' ? 'Loại vì "Phía nam" chỉ là một vùng địa lý, không phải là lý do người ta thích sống ở California.' : 'Eliminate: "The south" refers to part of the state, not a standalone reason to live there.'}</p>
                </div>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-emerald-700">{language === 'vi' ? '6. Kiểm tra thay thế' : '6. Substitution Check'}</span>
                <span className="md:col-span-2 text-slate-800 font-medium bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                  "<strong>Sunny weather</strong> is one of the reasons why people like to live in California." ({language === 'vi' ? 'Rất trôi chảy và hợp lý!' : 'Makes perfect sense both grammatically and logically!'})
                </span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2 font-bold text-indigo-900">
                <span>{language === 'vi' ? '7. Xác nhận đáp án' : '7. Final Confirmation'}</span>
                <span className="md:col-span-2 text-indigo-600 font-bold text-base">{language === 'vi' ? 'Chọn phương án (D) sunny weather' : 'Select Choice (D) sunny weather'}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl text-sm text-slate-800">
              <strong className="text-amber-900 block mb-1">{language === 'vi' ? 'Ngữ cảnh câu Tiếng Anh gốc:' : 'Sentence Context:'}</strong>
              "The strong wind <mark className="bg-amber-300 font-bold px-1 rounded">struck</mark> the table, causing it to fall over."
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-slate-900">{language === 'vi' ? '1. Dạng câu hỏi' : '1. Question Type'}</span>
                <span className="md:col-span-2 text-slate-700">
                  {language === 'vi' ? 'Xác định định nghĩa của "struck" trong ngữ cảnh câu.' : 'Identify definition of "struck" in sentence context.'}
                </span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-slate-900">{language === 'vi' ? '2. Từ loại' : '2. Part of Speech'}</span>
                <span className="md:col-span-2 text-slate-700">
                  {language === 'vi' ? '"Struck" là một động từ quá khứ mô tả hành động của cơn gió.' : '"Struck" is a past-tense verb describing the wind\'s action.'}
                </span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-slate-900">{language === 'vi' ? '3. Từ ngữ xung quanh' : '3. Context Words'}</span>
                <span className="md:col-span-2 text-slate-700">
                  {language === 'vi' ? '"Strong" bổ nghĩa cho "wind" (chủ ngữ gây tác động). "Table" là tân ngữ chịu tác động.' : '"Strong" modifies "wind" (subject doing striking). "Table" is object being struck.'}
                </span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-slate-900">{language === 'vi' ? '4. Xem xét phương án' : '4. Review Choices'}</span>
                <span className="md:col-span-2 text-slate-700">(A) held, (B) touched, (C) hit, (D) tapped</span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl">
                <span className="font-bold text-rose-700">{language === 'vi' ? '5. Loại trừ' : '5. Elimination'}</span>
                <div className="md:col-span-2 space-y-1 text-slate-700">
                  <p>• <strong>(A) held:</strong> {language === 'vi' ? 'cầm/giữ (không phù hợp với hành động của gió).' : 'keeping in hand/grasping (does not fit wind action).'}</p>
                  <p>• <strong>(B) touched:</strong> {language === 'vi' ? 'chạm nhẹ (không đủ lực làm đổ bàn).' : 'lightly coming into contact (would not cause table to fall over).'}</p>
                  <p>• <strong>(D) tapped:</strong> {language === 'vi' ? 'gõ nhẹ (quá nhẹ để làm đổ bàn).' : 'striking very lightly (too weak to cause table to fall over).'}</p>
                </div>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-bold text-emerald-700">{language === 'vi' ? '6. Kiểm tra thay thế' : '6. Substitution Check'}</span>
                <span className="md:col-span-2 text-slate-800 font-medium bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                  "The strong wind <strong>hit</strong> the table, causing it to fall over." ({language === 'vi' ? 'Hoàn toàn hợp lý về mặt ngữ nghĩa!' : 'Makes complete logical sense!'})
                </span>
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2 font-bold text-indigo-900">
                <span>{language === 'vi' ? '7. Xác nhận' : '7. Final Confirmation'}</span>
                <span className="md:col-span-2 text-indigo-600 font-bold text-base">{language === 'vi' ? 'Chọn phương án (C) hit' : 'Select Choice (C) hit'}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onStartRoots}
          className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
        >
          <span>
            {isCh2
              ? (language === 'vi' ? 'Tiếp tục Phần III: Đại Từ & Từ Thay Thế' : 'Continue to Part III: Pronouns & Referents')
              : (language === 'vi' ? 'Tiếp tục Phần III: Tiền Tố & Căn Tố' : 'Continue to Part III: Prefixes & Roots')}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
