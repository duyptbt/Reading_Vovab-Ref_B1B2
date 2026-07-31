import React, { useState, useEffect } from 'react';
import { ChapterPart, ChapterNumber } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Part1WhatIs } from './components/Part1WhatIs';
import { Part2Strategy } from './components/Part2Strategy';
import { Part3Roots } from './components/Part3Roots';
import { Part3Pronouns } from './components/Part3Pronouns';
import { Part4WarmUp } from './components/Part4WarmUp';
import { Part5Practice } from './components/Part5Practice';
import { Part5PopQuiz } from './components/Part5PopQuiz';
import { WordVault } from './components/WordVault';

function AppContent() {
  const [activeChapter, setActiveChapter] = useState<ChapterNumber>(1);
  const [activePart, setActivePart] = useState<ChapterPart>('part1');

  // Chapter 1 Answers
  const [ch1WarmUpAnswers, setCh1WarmUpAnswers] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem('vocab_ch1_warmUpAnswers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [ch1PracticeAnswers, setCh1PracticeAnswers] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem('vocab_ch1_practiceAnswers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [ch1QuizAnswers, setCh1QuizAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>(() => {
    try {
      const saved = localStorage.getItem('vocab_ch1_quizAnswers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Chapter 2 Answers
  const [ch2WarmUpAnswers, setCh2WarmUpAnswers] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem('vocab_ch2_warmUpAnswers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [ch2PracticeAnswers, setCh2PracticeAnswers] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem('vocab_ch2_practiceAnswers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [ch2QuizAnswers, setCh2QuizAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>(() => {
    try {
      const saved = localStorage.getItem('vocab_ch2_quizAnswers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedWords, setBookmarkedWords] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vocab_bookmarkedWords');
      return saved ? JSON.parse(saved) : ['struck', 'autonomous', 'transport', 'California', 'this'];
    } catch {
      return ['struck', 'autonomous', 'transport', 'California', 'this'];
    }
  });

  // Persist state changes
  useEffect(() => {
    localStorage.setItem('vocab_ch1_warmUpAnswers', JSON.stringify(ch1WarmUpAnswers));
  }, [ch1WarmUpAnswers]);

  useEffect(() => {
    localStorage.setItem('vocab_ch1_practiceAnswers', JSON.stringify(ch1PracticeAnswers));
  }, [ch1PracticeAnswers]);

  useEffect(() => {
    localStorage.setItem('vocab_ch1_quizAnswers', JSON.stringify(ch1QuizAnswers));
  }, [ch1QuizAnswers]);

  useEffect(() => {
    localStorage.setItem('vocab_ch2_warmUpAnswers', JSON.stringify(ch2WarmUpAnswers));
  }, [ch2WarmUpAnswers]);

  useEffect(() => {
    localStorage.setItem('vocab_ch2_practiceAnswers', JSON.stringify(ch2PracticeAnswers));
  }, [ch2PracticeAnswers]);

  useEffect(() => {
    localStorage.setItem('vocab_ch2_quizAnswers', JSON.stringify(ch2QuizAnswers));
  }, [ch2QuizAnswers]);

  useEffect(() => {
    localStorage.setItem('vocab_bookmarkedWords', JSON.stringify(bookmarkedWords));
  }, [bookmarkedWords]);

  const handleToggleBookmark = (word: string) => {
    setBookmarkedWords(prev =>
      prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
    );
  };

  // Active chapter state references
  const currentWarmUpAnswers = activeChapter === 1 ? ch1WarmUpAnswers : ch2WarmUpAnswers;
  const currentPracticeAnswers = activeChapter === 1 ? ch1PracticeAnswers : ch2PracticeAnswers;
  const currentQuizAnswers = activeChapter === 1 ? ch1QuizAnswers : ch2QuizAnswers;

  const setCurrentWarmUpAnswers = activeChapter === 1 ? setCh1WarmUpAnswers : setCh2WarmUpAnswers;
  const setCurrentPracticeAnswers = activeChapter === 1 ? setCh1PracticeAnswers : setCh2PracticeAnswers;
  const setCurrentQuizAnswers = activeChapter === 1 ? setCh1QuizAnswers : setCh2QuizAnswers;

  // Progress calculations
  const progressStats = {
    warmUpCompleted: Object.keys(currentWarmUpAnswers).length,
    warmUpTotal: 20,
    practiceCompleted: Object.keys(currentPracticeAnswers).length,
    practiceTotal: activeChapter === 1 ? 60 : 20,
    quizCompleted: Object.keys(currentQuizAnswers).length,
    quizTotal: 25,
    bookmarkedCount: bookmarkedWords.length
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar
          activeChapter={activeChapter}
          setActiveChapter={setActiveChapter}
          activePart={activePart}
          setActivePart={setActivePart}
          progressStats={progressStats}
        />

        <main className="pb-12">
          {activePart === 'part1' && (
            <Part1WhatIs
              chapter={activeChapter}
              onStartStrategy={() => setActivePart('part2')}
            />
          )}

          {activePart === 'part2' && (
            <Part2Strategy
              chapter={activeChapter}
              onStartRoots={() => setActivePart('part3')}
            />
          )}

          {activePart === 'part3' && (
            activeChapter === 1 ? (
              <Part3Roots
                onStartWarmUp={() => setActivePart('part4')}
                bookmarkedWords={bookmarkedWords}
                onToggleBookmark={handleToggleBookmark}
              />
            ) : (
              <Part3Pronouns
                onStartWarmUp={() => setActivePart('part4')}
              />
            )
          )}

          {activePart === 'part4' && (
            <Part4WarmUp
              chapter={activeChapter}
              userAnswers={currentWarmUpAnswers}
              onAnswerQuestion={(qId, optIdx) => {
                setCurrentWarmUpAnswers(prev => ({ ...prev, [qId]: optIdx }));
              }}
              onResetAnswers={() => setCurrentWarmUpAnswers({})}
              onStartPractice={() => setActivePart('part5_practice')}
              bookmarkedWords={bookmarkedWords}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activePart === 'part5_practice' && (
            <Part5Practice
              chapter={activeChapter}
              userAnswers={currentPracticeAnswers}
              onAnswerQuestion={(qId, optIdx) => {
                setCurrentPracticeAnswers(prev => ({ ...prev, [qId]: optIdx }));
              }}
              onResetAnswers={() => setCurrentPracticeAnswers({})}
              onStartQuiz={() => setActivePart('part5_quiz')}
              bookmarkedWords={bookmarkedWords}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activePart === 'part5_quiz' && (
            <Part5PopQuiz
              chapter={activeChapter}
              userAnswers={currentQuizAnswers}
              onAnswerQuestion={(qId, letter) => {
                setCurrentQuizAnswers(prev => ({ ...prev, [qId]: letter }));
              }}
              onResetQuiz={() => setCurrentQuizAnswers({})}
              bookmarkedWords={bookmarkedWords}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activePart === 'vault' && (
            <WordVault
              bookmarkedWords={bookmarkedWords}
              onToggleBookmark={handleToggleBookmark}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-6 px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© Pattern Reading • Levels B1 & B2 • Chapter 1: Vocabulary Questions</p>
          <div className="flex items-center space-x-3 text-slate-400">
            <button onClick={() => setActivePart('part1')} className="hover:text-white">Chapter 1 Overview</button>
            <span>•</span>
            <button onClick={() => setActivePart('vault')} className="hover:text-white">Word Vault ({bookmarkedWords.length})</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

