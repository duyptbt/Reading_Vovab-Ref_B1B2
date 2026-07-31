import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppLanguage } from '../types';

interface LanguageContextType {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  getTranslation: (key: string) => string;
  getExplanation: (item: { explanation: string; explanationVi?: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<AppLanguage>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved === 'vi' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: AppLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const getExplanation = (item: { explanation: string; explanationVi?: string }): string => {
    if (language === 'vi' && item.explanationVi) {
      return item.explanationVi;
    }
    return item.explanation;
  };

  const getTranslation = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getTranslation, getExplanation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations: Record<AppLanguage, Record<string, string>> = {
  en: {
    // Navigation & Header
    appName: "VOCAB & REFERENTS",
    subName: "Pattern Reading",
    levelB1: "Level B1",
    levelB2: "Level B2",
    curriculum: "Curriculum",
    chapter1: "Chapter 1",
    syllabusProgress: "Syllabus Progress",
    modules: "MODULES:",
    part1Nav: "Part I: Concept",
    part2Nav: "Part II: Strategy",
    part3Nav: "Part III: Word Roots",
    part4Nav: "Part IV: Warm Up",
    part5PracticeNav: "Part V: Passages",
    part5QuizNav: "Pop Quiz",
    quizYourselfNav: "Quiz Yourself",
    vaultNav: "Word Vault",

    // Labels & Buttons
    correctAnswer: "Correct Answer",
    explanationLabel: "Explanation",
    reset: "Reset",
    resetAll: "Reset All",
    nextStep: "Next Step",
    prevStep: "Previous Step",
    filter: "Filter",
    allQuestions: "All Questions",
    unanswered: "Unanswered",
    incorrect: "Incorrect",
    bookmark: "Bookmark",
    bookmarked: "Bookmarked",
    saved: "Saved",
    words: "Words",
    audio: "Audio",

    // Language Toggle
    langEn: "English",
    langVi: "Tiếng Việt",
    explanationLangNotice: "Explanations & guidance in Vietnamese • Sentences & vocabulary in English",

    // Part 1
    part1Title: "Part I: What is a Vocabulary Question?",
    part1Sub: "Understanding how vocabulary questions are structured and tested in B1/B2 reading passages.",
    part1ModelTitle: "Model Example Question",
    part1FormatsTitle: "5 Standard Vocabulary Question Formats",
    part1TipsTitle: "3 Core Rules to Remember",

    // Part 2
    part2Title: "Part II: 7-Step Solving Strategy",
    part2Sub: "Master a systematic approach to crack context-based vocabulary items with 100% accuracy.",
    part2Step: "Step",

    // Part 3
    part3Title: "Part III: High-Frequency Affixes & Roots",
    part3Sub: "Master common Latin and Greek prefixes, roots, and suffixes to instantly deduce unfamiliar words.",
    part3SearchPlaceholder: "Search root, meaning, or word...",

    // Part 4
    part4Title: "Part IV: Warm-Up Practice",
    part4Sub: "20 Targeted Sentences for Contextual Vocabulary Practice.",

    // Part 5 Practice
    part5PracticeTitle: "Part V: 10 Practice Passages",
    part5PracticeSub: "Read authentic passages and solve 60 vocabulary context questions.",

    // Part 5 Pop Quiz
    part5QuizTitle: "Pop Quiz: 25 Synonyms",
    part5QuizSub: "Timed speed assessment covering key target vocabulary.",

    // Vault
    vaultTitle: "Personal Word Vault",
    vaultSub: "Review and manage your bookmarked vocabulary words."
  },
  vi: {
    // Navigation & Header
    appName: "TỪ VỰNG & TỪ THAY THẾ",
    subName: "Đọc Hiểu Theo Dạng Bài",
    levelB1: "Cấp Độ B1",
    levelB2: "Cấp Độ B2",
    curriculum: "Giáo Trình",
    chapter1: "Chương 1",
    syllabusProgress: "Tiến Độ Học Tập",
    modules: "CÁC PHẦN:",
    part1Nav: "Phần I: Khái Niệm",
    part2Nav: "Phần II: Chiến Thuật",
    part3Nav: "Phần III: Căn Tố Từ",
    part4Nav: "Phần IV: Khởi Động",
    part5PracticeNav: "Phần V: Đoạn Văn",
    part5QuizNav: "Kiểm Tra Nhanh",
    quizYourselfNav: "Quiz Yourself",
    vaultNav: "Kho Từ Vựng",

    // Labels & Buttons
    correctAnswer: "Đáp Án Đúng",
    explanationLabel: "Giải Thích",
    reset: "Làm Lại",
    resetAll: "Đặt Lại Tất Cả",
    nextStep: "Bước Tiếp Theo",
    prevStep: "Bước Trước",
    filter: "Lọc",
    allQuestions: "Tất Cả Câu Hỏi",
    unanswered: "Chưa Trả Lời",
    incorrect: "Trả Lời Sai",
    bookmark: "Lưu Từ Vựng",
    bookmarked: "Đã Lưu",
    saved: "Đã Lưu",
    words: "Từ Vựng",
    audio: "Phát Âm",

    // Language Toggle
    langEn: "English",
    langVi: "Tiếng Việt",
    explanationLangNotice: "Giải thích & Hướng dẫn bằng Tiếng Việt • Giữ nguyên Từ vựng & Câu ví dụ Tiếng Anh",

    // Part 1
    part1Title: "Phần I: Câu Hỏi Từ Vựng Là Gì?",
    part1Sub: "Hiểu rõ cấu trúc và cách kiểm tra câu hỏi từ vựng trong bài đọc B1/B2.",
    part1ModelTitle: "Ví Dụ Mẫu Dạng Bài",
    part1FormatsTitle: "5 Dạng Mẫu Câu Hỏi Từ Vựng Phổ Biến",
    part1TipsTitle: "3 Quy Tắc Cốt Lõi Cần Nhớ",

    // Part 2
    part2Title: "Phần II: Chiến Thuật 7 Bước Giải Bài",
    part2Sub: "Nắm vững quy trình hệ thống để suy luận nghĩa từ vựng theo ngữ cảnh chính xác 100%.",
    part2Step: "Bước",

    // Part 3
    part3Title: "Phần III: Tiền Tố & Căn Tố Tần Suất Cao",
    part3Sub: "Nắm vững các tiền tố, gốc từ và hậu tố Hy Lạp / La Tinh để đoán nghĩa từ mới nhanh chóng.",
    part3SearchPlaceholder: "Tìm theo căn tố, nghĩa hoặc từ...",

    // Part 4
    part4Title: "Phần IV: Bài Tập Khởi Động",
    part4Sub: "20 câu luyện tập ngữ cảnh từ vựng có mục tiêu.",

    // Part 5 Practice
    part5PracticeTitle: "Phần V: 10 Đoạn Văn Luyện Tập",
    part5PracticeSub: "Đọc các đoạn văn thực tế và giải 60 câu hỏi từ vựng theo ngữ cảnh.",

    // Part 5 Pop Quiz
    part5QuizTitle: "Kiểm Tra Nhanh: 25 Từ Đồng Nghĩa",
    part5QuizSub: "Bài đánh giá tốc độ có tính giờ bao quát từ vựng trọng tâm.",

    // Vault
    vaultTitle: "Kho Từ Vựng Cá Nhân",
    vaultSub: "Ôn tập và quản lý các từ vựng đã lưu."
  }
};
