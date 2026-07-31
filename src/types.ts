export type ChapterPart = 'part1' | 'part2' | 'part3' | 'part4' | 'part5_practice' | 'part5_quiz' | 'quiz_yourself' | 'vault';
export type ChapterNumber = 1 | 2;
export type AppLanguage = 'en' | 'vi';

export interface RootWordItem {
  id: string;
  prefixOrRoot: string;
  meaning: string;
  meaningVi?: string;
  type?: 'prefix' | 'suffix' | 'root';
  examples: {
    word: string;
    breakdown: string;
    definition: string;
    definitionVi?: string;
  }[];
}

export interface WarmUpQuestion {
  id: number;
  sentenceBefore: string;
  options: [string, string];
  correctOptionIndex: number; // 0 or 1
  sentenceAfter: string;
  explanation: string;
  explanationVi?: string;
  targetWord: string;
  rootRef?: string;
}

export interface PassageQuestion {
  id: number;
  word: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  explanationVi?: string;
  partOfSpeech?: string;
}

export interface PracticePassage {
  id: number;
  title: string;
  passageText: string;
  targetWords: string[];
  questions: PassageQuestion[];
}

export interface PopQuizQuestion {
  id: number;
  word: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctLetter: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  explanationVi?: string;
  partOfSpeech?: string;
}

export interface UserProgress {
  warmUpAnswers: Record<number, number>; // qId -> optionIndex
  practiceAnswers: Record<number, number>; // qId -> optionIndex
  quizAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>; // qId -> choice letter
  bookmarkedWords: string[]; // list of words
}

