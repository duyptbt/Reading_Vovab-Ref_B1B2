import { PracticePassage, PopQuizQuestion, WarmUpQuestion } from '../types';

export interface ReferentTip {
  num: number;
  en: string;
  vi: string;
}

export interface ReferentCategory {
  type: string;
  typeVi: string;
  items: string[];
  examples?: {
    pattern: string;
    description: string;
    descriptionVi: string;
  }[];
}

export const CHAPTER2_MODEL = {
  passage: "California is known as the \"Sunshine State.\" In many parts of the state, especially in the south, sunny weather occurs on most days of the year. This is one of the reasons why people like to live in California.",
  targetWord: "This",
  question: "The word \"This\" refers to",
  options: [
    "(A) California",
    "(B) the \"Sunshine State\"",
    "(C) the south",
    "(D) sunny weather"
  ],
  correctIndex: 3,
  explanation: "Choice (D) 'sunny weather' is correct. The demonstrative pronoun 'This' refers to the fact that sunny weather occurs on most days of the year. Replacing 'This' with 'Sunny weather' produces a grammatically and logically clear sentence.",
  explanationVi: "Đáp án (D) 'sunny weather' là chính xác. Đại từ chỉ định 'This' thay thế cho mệnh đề trước đó về việc thời tiết nắng đẹp diễn ra phần lớn các ngày trong năm. Thay 'Sunny weather' vào 'This' tạo thành câu hoàn toàn hợp lý về cả cú pháp và ngữ nghĩa."
};

export const CHAPTER2_FORMATS = [
  { en: "The word/phrase _____ refers to _____", vi: "Từ/cụm từ _____ chỉ/thay thế cho _____" },
  { en: "The word/phrase _____ in the passage refers to _____", vi: "Từ/cụm từ _____ trong đoạn văn chỉ đến _____" },
  { en: "What does the word/phrase _____ refer to?", vi: "Từ/cụm từ _____ đang đề cập đến điều gì?" },
  { en: "Which of the following does the word/phrase _____ refer to?", vi: "Từ nào dưới đây là từ được thay thế bởi _____?" }
];

export const CHAPTER2_TIPS: ReferentTip[] = [
  {
    num: 1,
    en: "A pronoun's referent normally appears BEFORE the pronoun, but occasionally the referent will appear AFTER the pronoun.",
    vi: "Từ được thay thế thường xuất hiện TRƯỚC đại từ, nhưng đôi khi có thể nằm SAU đại từ."
  },
  {
    num: 2,
    en: "The referent can show up within the SAME sentence of the pronoun or in a DIFFERENT sentence.",
    vi: "Từ được thay thế có thể ở trong CÙNG MỘT CÂU hoặc ở CÂU KHÁC."
  },
  {
    num: 3,
    en: "In some cases, you may have to locate the referent of a term or phrase instead of a pronoun.",
    vi: "Trong một số trường hợp, bạn phải tìm từ được thay thế của một thuật ngữ/cụm từ chứ không chỉ là đại từ."
  },
  {
    num: 4,
    en: "Understanding the meaning of the sentence and the role of the pronoun within the sentence can lead you to the referent.",
    vi: "Hiểu nghĩa của câu và vai trò ngữ pháp của đại từ trong câu sẽ giúp bạn xác định đúng từ được thay thế."
  },
  {
    num: 5,
    en: "Unless a specific gender is indicated, an animal is usually referred to as \"it\".",
    vi: "Trừ khi có giới tính cụ thể được nêu rõ, động vật thường được chỉ bằng đại từ \"it\"."
  }
];

export const CHAPTER2_STRATEGY_STEPS = [
  {
    stepNum: 1,
    title: "Recognize the Question Type",
    titleVi: "Nhận Diện Dạng Câu Hỏi",
    description: "Look for keywords like 'refers to'. This question asks you to locate a referent (noun/noun phrase) in the passage.",
    descriptionVi: "Tìm các từ khóa như 'refers to'. Dạng câu hỏi này yêu cầu tìm từ/cụm danh từ được đại từ đại diện trong đoạn văn."
  },
  {
    stepNum: 2,
    title: "Identify the Pronoun",
    titleVi: "Xác Định Đại Từ Được Hỏi",
    description: "Locate the highlighted pronoun in the passage. Note whether it is singular or plural (e.g., 'This' = singular, 'They' = plural).",
    descriptionVi: "Tìm đại từ được tô đậm trong đoạn văn. Chú ý đại từ ở dạng số ít hay số nhiều (VD: 'This' = số ít, 'They' = số nhiều)."
  },
  {
    stepNum: 3,
    title: "Identify Answer Choices in Passage",
    titleVi: "Định Vị Các Đáp Án Trong Đoạn Văn",
    description: "Find where each of the 4 answer choices appears relative to the pronoun in the passage.",
    descriptionVi: "Xác định vị trí xuất hiện của từng đáp án trong 4 lựa chọn so với đại từ trong đoạn văn."
  },
  {
    stepNum: 4,
    title: "Look Through Answer Choices",
    titleVi: "Xem Xét Lần Lượt Các Lựa Chọn",
    description: "Check the options for grammatical fit, number agreement, and logical meaning in context.",
    descriptionVi: "Kiểm tra sự phù hợp về ngữ pháp, sự hòa hợp số ít/nhiều và ý nghĩa logic theo ngữ cảnh."
  },
  {
    stepNum: 5,
    title: "Eliminate Incorrect Choices",
    titleVi: "Loại Bỏ Các Đáp Án Sai",
    description: "Eliminate options that make the sentence repetitive, grammatically incorrect, or logically absurd.",
    descriptionVi: "Loại bỏ những đáp án làm câu bị trùng lặp từ ngữ, sai ngữ pháp hoặc vô lý về mặt ngữ nghĩa."
  },
  {
    stepNum: 6,
    title: "Replace Pronoun with Answer Choice",
    titleVi: "Thay Đáp Án Vào Vị Trí Đại Từ",
    description: "Substitute your chosen answer directly into the sentence where the pronoun sits.",
    descriptionVi: "Thử thay trực tiếp đáp án được chọn vào vị trí đại từ trong câu để kiểm tra độ trôi chảy."
  },
  {
    stepNum: 7,
    title: "Confirm the Correct Answer",
    titleVi: "Xác Nhận Đáp Án Cuối Cùng",
    description: "Ensure the substitution makes complete logical sense and maintains the original meaning.",
    descriptionVi: "Đảm bảo việc thay thế đem lại ý nghĩa trọn vẹn, hợp lý và giữ nguyên thông điệp ban đầu."
  }
];

export const CHAPTER2_PRONOUN_CATEGORIES: ReferentCategory[] = [
  {
    type: "Subject Pronouns",
    typeVi: "Đại Từ Làm Chủ Ngữ",
    items: ["he", "she", "you", "it", "they", "we", "one"]
  },
  {
    type: "Object Pronouns",
    typeVi: "Đại Từ Làm Tân Ngữ",
    items: ["him", "her", "you", "it", "them", "us", "one"]
  },
  {
    type: "Possessive Pronouns & Adjectives",
    typeVi: "Đại Từ & Tính Từ Sở Hữu",
    items: ["his", "her", "your", "its", "their", "our", "one's"]
  },
  {
    type: "Demonstrative Pronouns",
    typeVi: "Đại Từ Chỉ Định",
    items: ["this", "these", "that", "those"]
  },
  {
    type: "Relative Pronouns",
    typeVi: "Đại Từ Quan Hệ",
    items: ["who", "whom", "which", "that", "whose"]
  },
  {
    type: "Indefinite & Quantifier Pronouns",
    typeVi: "Đại Từ Bất Định & Chỉ Số Lượng",
    items: [
      "some", "most", "many", "any", "one(s)", "another", "(a) few",
      "the other", "(the) others", "all", "both", "none", "several",
      "(a) little", "either", "neither", "each", "the first", "the last",
      "the former", "the latter"
    ],
    examples: [
      {
        pattern: "one ... the other",
        description: "Used when choosing between exactly 2 items.",
        descriptionVi: "Dùng khi đề cập đến 2 đối tượng cụ thể (cái này ... cái còn lại)."
      },
      {
        pattern: "one ... another ... the other",
        description: "Used when choosing among 3 distinct items.",
        descriptionVi: "Dùng khi đề cập đến 3 đối tượng cụ thể (cái này ... cái khác ... cái cuối cùng)."
      },
      {
        pattern: "one ... another ... the others",
        description: "Used when referring to one, another one, and all the remaining ones.",
        descriptionVi: "Dùng cho nhóm nhiều đối tượng (cái này ... cái khác ... những cái còn lại)."
      }
    ]
  }
];

export const CHAPTER2_WARMUP_QUESTIONS: WarmUpQuestion[] = [
  {
    id: 1,
    sentenceBefore: "Rachel liked Ross so much that she asked",
    options: ["him", "her"],
    correctOptionIndex: 0,
    sentenceAfter: "to go to the movies with her.",
    explanation: "'him' refers back to Ross (singular male).",
    explanationVi: "'him' chỉ Ross (nam số ít làm tân ngữ).",
    targetWord: "him"
  },
  {
    id: 2,
    sentenceBefore: "Some animals pretend that",
    options: ["these", "they"],
    correctOptionIndex: 1,
    sentenceAfter: "are dead when they are threatened.",
    explanation: "'they' is the subject pronoun referring to 'Some animals'.",
    explanationVi: "'they' là đại từ làm chủ ngữ thay thế cho 'Some animals'.",
    targetWord: "they"
  },
  {
    id: 3,
    sentenceBefore: "A peacock is valued for",
    options: ["her", "its"],
    correctOptionIndex: 1,
    sentenceAfter: "beautiful feathers.",
    explanation: "'its' is used for animals when gender is unspecified.",
    explanationVi: "'its' dùng cho động vật khi không nêu rõ giới tính.",
    targetWord: "its"
  },
  {
    id: 4,
    sentenceBefore: "The young girls were afraid that their cat would run away if they left",
    options: ["it", "them"],
    correctOptionIndex: 0,
    sentenceAfter: "alone.",
    explanation: "'it' refers to 'their cat' (singular object).",
    explanationVi: "'it' chỉ con mèo ('their cat', tân ngữ số ít).",
    targetWord: "it"
  },
  {
    id: 5,
    sentenceBefore: "Cinnamon is a spice used for",
    options: ["its", "their"],
    correctOptionIndex: 0,
    sentenceAfter: "fragrant qualities.",
    explanation: "'its' refers to 'Cinnamon' (uncountable singular noun).",
    explanationVi: "'its' sở hữu số ít chỉ 'Cinnamon' (danh từ không đếm được).",
    targetWord: "its"
  },
  {
    id: 6,
    sentenceBefore: "The boy would often stay awake at night so that",
    options: ["it", "he"],
    correctOptionIndex: 1,
    sentenceAfter: "could hear the wolves howling.",
    explanation: "'he' refers to 'The boy' (male subject pronoun).",
    explanationVi: "'he' là đại từ chủ ngữ nam thay thế cho 'The boy'.",
    targetWord: "he"
  },
  {
    id: 7,
    sentenceBefore: "The owl watched the rabbits closely, hoping that",
    options: ["they", "it"],
    correctOptionIndex: 0,
    sentenceAfter: "would soon be eating them.",
    explanation: "'they' refers to the owl and other birds or is the subject pronoun. Here 'they' [or owl/predators] would be eating them.",
    explanationVi: "'they' chỉ đàn chim săn mồi hoặc 'owl' trong ngữ cảnh.",
    targetWord: "they"
  },
  {
    id: 8,
    sentenceBefore: "Many scientists believe that a male giraffe uses",
    options: ["their", "his"],
    correctOptionIndex: 1,
    sentenceAfter: "long neck to win mating competitions.",
    explanation: "'his' refers specifically to 'a male giraffe'.",
    explanationVi: "'his' sở hữu nam chỉ 'a male giraffe' (hưu cao cổ đực).",
    targetWord: "his"
  },
  {
    id: 9,
    sentenceBefore: "The mother bird went to catch food for",
    options: ["their", "her"],
    correctOptionIndex: 1,
    sentenceAfter: "chicks.",
    explanation: "'her' refers to 'The mother bird' (female possessive).",
    explanationVi: "'her' tính từ sở hữu mái/mẹ chỉ 'The mother bird'.",
    targetWord: "her"
  },
  {
    id: 10,
    sentenceBefore: "The professor said that many cultures have different traditions that are based on",
    options: ["his", "their"],
    correctOptionIndex: 1,
    sentenceAfter: "unique histories.",
    explanation: "'their' refers to 'many cultures' (plural noun).",
    explanationVi: "'their' chỉ 'many cultures' (các nền văn hóa - số nhiều).",
    targetWord: "their"
  },
  {
    id: 11,
    sentenceBefore: "Once Daniel studied the book,",
    options: ["he", "it"],
    correctOptionIndex: 0,
    sentenceAfter: "always knew how to solve the questions.",
    explanation: "'he' refers to Daniel (male human subject).",
    explanationVi: "'he' thay thế cho Daniel (chủ ngữ người).",
    targetWord: "he"
  },
  {
    id: 12,
    sentenceBefore: "Bears sleep for a long time during the winter to save",
    options: ["its", "their"],
    correctOptionIndex: 1,
    sentenceAfter: "energy because there is not much food available.",
    explanation: "'their' refers to 'Bears' (plural noun).",
    explanationVi: "'their' tính từ sở hữu số nhiều chỉ 'Bears'.",
    targetWord: "their"
  },
  {
    id: 13,
    sentenceBefore: "In the animal kingdom, males are typically more beautiful than",
    options: ["their", "its"],
    correctOptionIndex: 0,
    sentenceAfter: "female counterparts.",
    explanation: "'their' refers to 'males' (plural).",
    explanationVi: "'their' chỉ 'males' (các con đực - số nhiều).",
    targetWord: "their"
  },
  {
    id: 14,
    sentenceBefore: "Jessica ate only",
    options: ["a few", "a little"],
    correctOptionIndex: 0,
    sentenceAfter: "pieces of chocolate so that she would still be hungry for dinner.",
    explanation: "'a few' modifies countable plural nouns like 'pieces'.",
    explanationVi: "'a few' đi với danh từ đếm được số nhiều 'pieces'.",
    targetWord: "a few"
  },
  {
    id: 15,
    sentenceBefore: "Some people do not like to eat dessert, but",
    options: ["one", "others"],
    correctOptionIndex: 1,
    sentenceAfter: "would say that dessert is delicious.",
    explanation: "Pairing 'Some people ... others' contrasts two groups of people.",
    explanationVi: "Cặp 'Some people ... others' thể hiện sự đối lập giữa các nhóm người.",
    targetWord: "others"
  },
  {
    id: 16,
    sentenceBefore: "Vegetarians do not include meat in",
    options: ["their", "his"],
    correctOptionIndex: 0,
    sentenceAfter: "diets.",
    explanation: "'their' agrees with plural noun 'Vegetarians'.",
    explanationVi: "'their' hòa hợp với danh từ số nhiều 'Vegetarians'.",
    targetWord: "their"
  },
  {
    id: 17,
    sentenceBefore: "Kayla knitted",
    options: ["this", "these"],
    correctOptionIndex: 1,
    sentenceAfter: "sweaters for her family members.",
    explanation: "'these' modifies plural noun 'sweaters'.",
    explanationVi: "'these' đi với danh từ số nhiều 'sweaters'.",
    targetWord: "these"
  },
  {
    id: 18,
    sentenceBefore: "Please remove",
    options: ["your", "one's"],
    correctOptionIndex: 0,
    sentenceAfter: "shoes when you enter the house.",
    explanation: "'your' matches the addressee 'you' in 'when you enter'.",
    explanationVi: "'your' hòa hợp với chủ ngữ 'you' ở vế sau 'when you enter'.",
    targetWord: "your"
  },
  {
    id: 19,
    sentenceBefore: "John decided to take a philosophy class because",
    options: ["he", "it"],
    correctOptionIndex: 0,
    sentenceAfter: "was quite interested in the subject.",
    explanation: "'he' refers to John (person who was interested).",
    explanationVi: "'he' chỉ John (người có hứng thú với môn học).",
    targetWord: "he"
  },
  {
    id: 20,
    sentenceBefore: "The secretary said that somebody called me, but she did not say",
    options: ["which", "who"],
    correctOptionIndex: 1,
    sentenceAfter: "it was.",
    explanation: "'who' is used for unidentified persons ('somebody').",
    explanationVi: "'who' dùng để chỉ đại từ xưng hô người ('somebody').",
    targetWord: "who"
  }
];

export const CHAPTER2_PRACTICE_PASSAGES: PracticePassage[] = [
  {
    id: 1,
    title: "Knossos Palace & The Cretan Labyrinth",
    passageText: "In 1900, the archaeologist Sir Arthur Evans uncovered a palace in the Cretan city of Knossos that contained many labyrinth-like chambers and passages. Evans suggested that **it** may have been the Cretan Labyrinth described in Greek mythology. He named the inhabitants of the civilization and the civilization itself Minoan after the ancient Greek King Minos, **who** supposedly had the labyrinth built to hide a mythical creature called a Minotaur.",
    targetWords: ["it", "who"],
    questions: [
      {
        id: 1,
        word: "it",
        questionText: "The word \"it\" refers to",
        options: [
          "(A) archaeologist",
          "(B) a palace",
          "(C) Cretan city",
          "(D) Knossos"
        ],
        correctIndex: 1,
        explanation: "Choice (B) 'a palace' is correct. 'it' refers to the palace uncovered by Sir Arthur Evans ('Evans suggested that it [the palace] may have been the Cretan Labyrinth').",
        explanationVi: "Đáp án (B) 'a palace' đúng. 'it' thay thế cho tòa lâu đài được Evans phát hiện."
      },
      {
        id: 2,
        word: "who",
        questionText: "The word \"who\" refers to",
        options: [
          "(A) Evans",
          "(B) Minoan",
          "(C) Minos",
          "(D) Minotaur"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'Minos' is correct. The relative pronoun 'who' immediately follows 'King Minos' to specify that King Minos had the labyrinth built.",
        explanationVi: "Đáp án (C) 'Minos' đúng. Đại từ quan hệ 'who' đứng ngay sau King Minos để giải thích cho Vua Minos."
      }
    ]
  },
  {
    id: 2,
    title: "Arnold Schoenberg & Atonal Music",
    passageText: "Arnold Schoenberg, known as one of the founders of the Second Viennese School, was an important composer in the 1900s. Schoenberg started his career writing in the German Romantic tradition and was known for adopting and further developing the controversial works of Brahms and Wagner. Turning away from German Romantic music in 1908, **he** began to write atonal music. This term indicates that **it** does not have any key.",
    targetWords: ["he", "it"],
    questions: [
      {
        id: 3,
        word: "he",
        questionText: "The word \"he\" refers to",
        options: [
          "(A) Schoenberg",
          "(B) German Romantic tradition",
          "(C) Brahms",
          "(D) Wagner"
        ],
        correctIndex: 0,
        explanation: "Choice (A) 'Schoenberg' is correct. 'he' refers to the composer Arnold Schoenberg who turned away from German Romantic music in 1908.",
        explanationVi: "Đáp án (A) 'Schoenberg' đúng. 'he' chỉ nhà soạn nhạc Arnold Schoenberg."
      },
      {
        id: 4,
        word: "it",
        questionText: "The word \"it\" refers to",
        options: [
          "(A) his career",
          "(B) German Romantic music",
          "(C) atonal music",
          "(D) any key"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'atonal music' is correct. 'it' refers to atonal music, defined as music that does not have a tonal key.",
        explanationVi: "Đáp án (C) 'atonal music' đúng. 'it' thay thế cho 'atonal music' (nhạc phi điệu tính)."
      }
    ]
  },
  {
    id: 3,
    title: "Celtic Tribes & Walled Forts",
    passageText: "Researchers suggest that tribes that had been living in the British Isles for more than 10,000 years began to adopt Celtic cultural practices in about 600 BCE. **They** may have been influenced by a few Celtic immigrants from Europe. Tribes began to build Celtic-style walled forts on hill tops. **These** may have been for permanent homes or for temporary shelter.",
    targetWords: ["They", "These"],
    questions: [
      {
        id: 5,
        word: "They",
        questionText: "The word \"They\" refers to",
        options: [
          "(A) researchers",
          "(B) tribes",
          "(C) British Isles",
          "(D) cultural practices"
        ],
        correctIndex: 1,
        explanation: "Choice (B) 'tribes' is correct. 'They' refers back to the tribes living in the British Isles who adopted Celtic practices.",
        explanationVi: "Đáp án (B) 'tribes' đúng. 'They' chỉ các bộ tộc sinh sống ở quần đảo Anh."
      },
      {
        id: 6,
        word: "These",
        questionText: "The word \"These\" refers to",
        options: [
          "(A) immigrants",
          "(B) tribes",
          "(C) walled forts",
          "(D) hill tops"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'walled forts' is correct. 'These' refers to the Celtic-style walled forts built on hill tops.",
        explanationVi: "Đáp án (C) 'walled forts' đúng. 'These' thay thế cho các pháo đài có tường bao quanh."
      }
    ]
  },
  {
    id: 4,
    title: "Public Aquariums & Marine Life",
    passageText: "The popularity of public aquariums has risen since the 1970s because **they** started exhibiting more varieties of sea creatures. Today, **they** promote special events, such as allowing people to touch the sea animals or hosting temporary exhibits displaying exotic creatures, in order to draw the public's attention. However, some animal rights groups do not favor such developments because the idea of keeping sea animals captive is disturbing to **them**.",
    targetWords: ["they", "them"],
    questions: [
      {
        id: 7,
        word: "they",
        questionText: "The word \"they\" in the passage refers to",
        options: [
          "(A) public aquariums",
          "(B) more varieties",
          "(C) sea creatures",
          "(D) special events"
        ],
        correctIndex: 0,
        explanation: "Choice (A) 'public aquariums' is correct. 'they' refers to public aquariums that exhibit sea creatures and promote events.",
        explanationVi: "Đáp án (A) 'public aquariums' đúng. 'they' chỉ các thủy cung công cộng."
      },
      {
        id: 8,
        word: "them",
        questionText: "The word \"them\" in the passage refers to",
        options: [
          "(A) people",
          "(B) sea animals",
          "(C) animal rights groups",
          "(D) developments"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'animal rights groups' is correct. 'them' refers to animal rights groups who find captivity disturbing.",
        explanationVi: "Đáp án (C) 'animal rights groups' đúng. 'them' chỉ các nhóm quyền động vật."
      }
    ]
  },
  {
    id: 5,
    title: "Reading Skills & Context Processing",
    passageText: "Successful reading requires readers to possess a few skills. It requires **them** to recognize and understand symbols such as letters and punctuation. Reading also demands that **they** relate to the written material by concentrating on **it** using memory, experience, and knowledge.",
    targetWords: ["they", "it"],
    questions: [
      {
        id: 9,
        word: "they",
        questionText: "The word \"they\" refers to",
        options: [
          "(A) a few skills",
          "(B) readers",
          "(C) symbols",
          "(D) letters"
        ],
        correctIndex: 1,
        explanation: "Choice (B) 'readers' is correct. 'they' refers to the human readers who relate to the written material.",
        explanationVi: "Đáp án (B) 'readers' đúng. 'they' thay thế cho những người đọc."
      },
      {
        id: 10,
        word: "it",
        questionText: "The word \"it\" refers to",
        options: [
          "(A) a reader",
          "(B) reading",
          "(C) written material",
          "(D) knowledge"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'written material' is correct. Readers concentrate on 'it' (the written material).",
        explanationVi: "Đáp án (C) 'written material' đúng. 'it' chỉ tài liệu/đoạn văn viết mà độc giả tập trung vào."
      }
    ]
  },
  {
    id: 6,
    title: "Wild Gerbils & Underground Networks",
    passageText: "Some species of wild gerbils live in the countries of China, Russia, and Mongolia. **They** are usually found in the deserts and sandy grasslands. Gerbils usually eat leaves, roots, and stems. Because there is little vegetation and little rainfall where **they** live, their survival depends on how well **they** dig. They form communities which live together in networks of holes. **These** are active day and night.",
    targetWords: ["they", "These"],
    questions: [
      {
        id: 11,
        word: "they",
        questionText: "The word \"they\" refers to",
        options: [
          "(A) wild gerbils",
          "(B) countries",
          "(C) deserts",
          "(D) sandy grasslands"
        ],
        correctIndex: 0,
        explanation: "Choice (A) 'wild gerbils' is correct. 'they' refers to wild gerbils living in Asian desert environments.",
        explanationVi: "Đáp án (A) 'wild gerbils' đúng. 'they' chỉ loài chuột giông hoang dã."
      },
      {
        id: 12,
        word: "These",
        questionText: "The word \"These\" refers to",
        options: [
          "(A) sandy grasslands",
          "(B) communities",
          "(C) holes",
          "(D) networks"
        ],
        correctIndex: 1,
        explanation: "Choice (B) 'communities' is correct. 'These' refers to gerbil communities that remain active day and night.",
        explanationVi: "Đáp án (B) 'communities' đúng. 'These' thay thế cho các cộng đồng chuột giông."
      }
    ]
  },
  {
    id: 7,
    title: "The City of Chicago & Its Nicknames",
    passageText: "As one of the biggest cities in the United States, the city of Chicago, which is located in the state of Illinois, has many nicknames. The American poet Carl Sandburg called **it** the \"City of the Big Shoulders.\" Other popular nicknames include \"City of Broad Shoulders,\" \"The Windy City,\" and \"City that Works.\" All of **these** are still being used to this day.",
    targetWords: ["it", "these"],
    questions: [
      {
        id: 13,
        word: "it",
        questionText: "The word \"it\" refers to",
        options: [
          "(A) the United States",
          "(B) the city of Chicago",
          "(C) Illinois",
          "(D) American poet"
        ],
        correctIndex: 1,
        explanation: "Choice (B) 'the city of Chicago' is correct. Carl Sandburg called Chicago 'City of the Big Shoulders'.",
        explanationVi: "Đáp án (B) 'the city of Chicago' đúng. 'it' chỉ thành phố Chicago."
      },
      {
        id: 14,
        word: "these",
        questionText: "The word \"these\" refers to",
        options: [
          "(A) the United States",
          "(B) the biggest cities",
          "(C) nicknames",
          "(D) Broad Shoulders"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'nicknames' is correct. 'these' refers to the various popular nicknames of Chicago.",
        explanationVi: "Đáp án (C) 'nicknames' đúng. 'these' thay thế cho các biệt danh của Chicago."
      }
    ]
  },
  {
    id: 8,
    title: "Colonial Powers in the Americas",
    passageText: "Among the European colonial powers, the English came late to the Americas. By the time England colonized the \"New World,\" settlers from Spain and Portugal had already arrived **there**. Additionally, **they** had already established colonies in the Americas.",
    targetWords: ["there", "They"],
    questions: [
      {
        id: 15,
        word: "there",
        questionText: "The word \"there\" refers to",
        options: [
          "(A) the Americas",
          "(B) England",
          "(C) Spain",
          "(D) Portugal"
        ],
        correctIndex: 0,
        explanation: "Choice (A) 'the Americas' is correct. 'there' points to the geographical region of the Americas / New World.",
        explanationVi: "Đáp án (A) 'the Americas' đúng. 'there' chỉ vùng đất Châu Mỹ / Thế giới mới."
      },
      {
        id: 16,
        word: "They",
        questionText: "The word \"They\" refers to",
        options: [
          "(A) European colonial powers",
          "(B) the English",
          "(C) the Americas",
          "(D) Spanish and Portuguese settlers"
        ],
        correctIndex: 3,
        explanation: "Choice (D) 'Spanish and Portuguese settlers' is correct. 'they' refers back to settlers from Spain and Portugal.",
        explanationVi: "Đáp án (D) 'Spanish and Portuguese settlers' đúng. 'they' chỉ những người định cư từ Tây Ban Nha và Bồ Đào Nha."
      }
    ]
  },
  {
    id: 9,
    title: "Resource Substitution & Rubber",
    passageText: "Human beings depend greatly on rubber. In fact, it would be impossible for modern-day people to survive without **it**. However, this is usually not the case with other materials. If people lack one resource, they can often substitute **it** with **another**. For example, plastic can replace glass if **it** is scarce.",
    targetWords: ["another", "it"],
    questions: [
      {
        id: 17,
        word: "another",
        questionText: "The word \"another\" refers to",
        options: [
          "(A) rubber",
          "(B) the case",
          "(C) resource",
          "(D) glass"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'resource' is correct. 'another' stands for 'another resource' in contrast to 'one resource'.",
        explanationVi: "Đáp án (C) 'resource' đúng. 'another' ngầm hiểu là 'another resource' (một nguồn tài nguyên khác)."
      },
      {
        id: 18,
        word: "it",
        questionText: "The word \"it\" refers to",
        options: [
          "(A) resource",
          "(B) another",
          "(C) plastic",
          "(D) glass"
        ],
        correctIndex: 3,
        explanation: "Choice (D) 'glass' is correct. Plastic can replace glass if glass ('it') is scarce.",
        explanationVi: "Đáp án (D) 'glass' đúng. Nhựa có thể thay thế thủy tinh nếu thủy tinh ('it') khan hiếm."
      }
    ]
  },
  {
    id: 10,
    title: "Origins of Geometry",
    passageText: "The exact time and place in which geometry originated is debatable. However, historical records show that **it** has been used at least since 2000 BCE by the Egyptians, followed by the Babylonians, and later by the Greeks. For example, ancient Egyptians used geometric shapes to build their temples. The squares and triangles that make up the pyramids are examples of **these**.",
    targetWords: ["it", "these"],
    questions: [
      {
        id: 19,
        word: "it",
        questionText: "The word \"it\" refers to",
        options: [
          "(A) time",
          "(B) place",
          "(C) geometry",
          "(D) history record"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'geometry' is correct. 'it' refers to the branch of mathematics known as geometry.",
        explanationVi: "Đáp án (C) 'geometry' đúng. 'it' thay thế cho môn hình học."
      },
      {
        id: 20,
        word: "these",
        questionText: "The word \"these\" refers to",
        options: [
          "(A) the Greeks",
          "(B) ancient Egyptians",
          "(C) geometric shapes",
          "(D) their temples"
        ],
        correctIndex: 2,
        explanation: "Choice (C) 'geometric shapes' is correct. Squares and triangles are examples of geometric shapes.",
        explanationVi: "Đáp án (C) 'geometric shapes' đúng. Hình vuông và hình tam giác là các ví dụ về hình dạng hình học."
      }
    ]
  }
];

export const CHAPTER2_POP_QUIZ_QUESTIONS: PopQuizQuestion[] = [
  {
    id: 1,
    word: "especially",
    options: [
      { letter: 'A', text: "particularly" },
      { letter: 'B', text: "typically" },
      { letter: 'C', text: "practically" },
      { letter: 'D', text: "modestly" }
    ],
    correctLetter: 'A',
    explanation: "especially = particularly (đặc biệt là)",
    explanationVi: "especially = particularly (đặc biệt là, nhất là)"
  },
  {
    id: 2,
    word: "refer to",
    options: [
      { letter: 'A', text: "choose to" },
      { letter: 'B', text: "like to" },
      { letter: 'C', text: "direct to" },
      { letter: 'D', text: "offer to" }
    ],
    correctLetter: 'C',
    explanation: "refer to = direct to / mention (chỉ đến, đề cập tới)",
    explanationVi: "refer to = direct to (quy về, trỏ tới, đề cập đến)"
  },
  {
    id: 3,
    word: "normally",
    options: [
      { letter: 'A', text: "rarely" },
      { letter: 'B', text: "overly" },
      { letter: 'C', text: "hardly" },
      { letter: 'D', text: "usually" }
    ],
    correctLetter: 'D',
    explanation: "normally = usually (thông thường, như thường lệ)",
    explanationVi: "normally = usually (thông thường, thường xuyên)"
  },
  {
    id: 4,
    word: "locate",
    options: [
      { letter: 'A', text: "find" },
      { letter: 'B', text: "define" },
      { letter: 'C', text: "ignore" },
      { letter: 'D', text: "lose" }
    ],
    correctLetter: 'A',
    explanation: "locate = find (xác định vị trí, tìm thấy)",
    explanationVi: "locate = find (tìm thấy, định vị)"
  },
  {
    id: 5,
    word: "pretend",
    options: [
      { letter: 'A', text: "prefer" },
      { letter: 'B', text: "fake" },
      { letter: 'C', text: "assume" },
      { letter: 'D', text: "believe" }
    ],
    correctLetter: 'B',
    explanation: "pretend = fake / simulate (giả vờ, làm giả)",
    explanationVi: "pretend = fake (giả vờ, giả bộ)"
  },
  {
    id: 6,
    word: "threatened",
    options: [
      { letter: 'A', text: "in existence" },
      { letter: 'B', text: "in safety" },
      { letter: 'C', text: "in danger" },
      { letter: 'D', text: "in harmony" }
    ],
    correctLetter: 'C',
    explanation: "threatened = in danger (bị đe dọa, lâm nguy)",
    explanationVi: "threatened = in danger (bị đe dọa, gặp nguy hiểm)"
  },
  {
    id: 7,
    word: "afraid",
    options: [
      { letter: 'A', text: "hopeful" },
      { letter: 'B', text: "fearful" },
      { letter: 'C', text: "angry" },
      { letter: 'D', text: "confused" }
    ],
    correctLetter: 'B',
    explanation: "afraid = fearful (lo sợ, sợ hãi)",
    explanationVi: "afraid = fearful (e sợ, hoảng sợ)"
  },
  {
    id: 8,
    word: "fragrant",
    options: [
      { letter: 'A', text: "aromatic" },
      { letter: 'B', text: "practical" },
      { letter: 'C', text: "important" },
      { letter: 'D', text: "bland" }
    ],
    correctLetter: 'A',
    explanation: "fragrant = aromatic (thơm, có mùi thơm ngát)",
    explanationVi: "fragrant = aromatic (thơm ngát, ngào ngạt hương)"
  },
  {
    id: 9,
    word: "competition",
    options: [
      { letter: 'A', text: "exploration" },
      { letter: 'B', text: "research" },
      { letter: 'C', text: "consideration" },
      { letter: 'D', text: "contest" }
    ],
    correctLetter: 'D',
    explanation: "competition = contest (cuộc thi, sự cạnh tranh)",
    explanationVi: "competition = contest (cuộc tranh tài, cuộc thi)"
  },
  {
    id: 10,
    word: "tradition",
    options: [
      { letter: 'A', text: "purpose" },
      { letter: 'B', text: "experience" },
      { letter: 'C', text: "custom" },
      { letter: 'D', text: "intention" }
    ],
    correctLetter: 'C',
    explanation: "tradition = custom (truyền thống, phong tục)",
    explanationVi: "tradition = custom (truyền thống, tập quán)"
  },
  {
    id: 11,
    word: "counterpart",
    options: [
      { letter: 'A', text: "piece" },
      { letter: 'B', text: "material" },
      { letter: 'C', text: "shape" },
      { letter: 'D', text: "mate" }
    ],
    correctLetter: 'D',
    explanation: "counterpart = mate / equivalent (bản đối chiếu, đối tác, nửa tương ứng)",
    explanationVi: "counterpart = mate (bên tương ứng, đối tác, đối trọng)"
  },
  {
    id: 12,
    word: "inhabitant",
    options: [
      { letter: 'A', text: "neighbor" },
      { letter: 'B', text: "resident" },
      { letter: 'C', text: "stranger" },
      { letter: 'D', text: "foreigner" }
    ],
    correctLetter: 'B',
    explanation: "inhabitant = resident (cư dân, người sinh sống)",
    explanationVi: "inhabitant = resident (cư dân, người ở)"
  },
  {
    id: 13,
    word: "adopt",
    options: [
      { letter: 'A', text: "accept" },
      { letter: 'B', text: "favor" },
      { letter: 'C', text: "affect" },
      { letter: 'D', text: "practice" }
    ],
    correctLetter: 'A',
    explanation: "adopt = accept / take up (tiếp nhận, áp dụng)",
    explanationVi: "adopt = accept (nhận làm, chấp nhận áp dụng)"
  },
  {
    id: 14,
    word: "controversial",
    options: [
      { letter: 'A', text: "conventional" },
      { letter: 'B', text: "unique" },
      { letter: 'C', text: "arguable" },
      { letter: 'D', text: "particular" }
    ],
    correctLetter: 'C',
    explanation: "controversial = arguable / debatable (gây tranh cãi)",
    explanationVi: "controversial = arguable (gây nhiều tranh cãi)"
  },
  {
    id: 15,
    word: "immigrant",
    options: [
      { letter: 'A', text: "resource" },
      { letter: 'B', text: "settler" },
      { letter: 'C', text: "influence" },
      { letter: 'D', text: "enemy" }
    ],
    correctLetter: 'B',
    explanation: "immigrant = settler (người nhập cư, người đến định cư)",
    explanationVi: "immigrant = settler (người nhập cư, dân định cư)"
  },
  {
    id: 16,
    word: "permanent",
    options: [
      { letter: 'A', text: "lasting" },
      { letter: 'B', text: "precise" },
      { letter: 'C', text: "changing" },
      { letter: 'D', text: "gone" }
    ],
    correctLetter: 'A',
    explanation: "permanent = lasting (vĩnh cửu, lâu dài)",
    explanationVi: "permanent = lasting (lâu dài, trường tồn)"
  },
  {
    id: 17,
    word: "exhibit",
    options: [
      { letter: 'A', text: "prevent" },
      { letter: 'B', text: "exercise" },
      { letter: 'C', text: "understand" },
      { letter: 'D', text: "display" }
    ],
    correctLetter: 'D',
    explanation: "exhibit = display (trưng bày, triển lãm)",
    explanationVi: "exhibit = display (trưng bày, phô bày)"
  },
  {
    id: 18,
    word: "variety",
    options: [
      { letter: 'A', text: "product" },
      { letter: 'B', text: "assortment" },
      { letter: 'C', text: "necessity" },
      { letter: 'D', text: "unity" }
    ],
    correctLetter: 'B',
    explanation: "variety = assortment / diversity (sự đa dạng, tập hợp nhiều loại)",
    explanationVi: "variety = assortment (sự đa dạng, chủng loại phong phú)"
  },
  {
    id: 19,
    word: "promote",
    options: [
      { letter: 'A', text: "describe" },
      { letter: 'B', text: "evaluate" },
      { letter: 'C', text: "attend" },
      { letter: 'D', text: "advertise" }
    ],
    correctLetter: 'D',
    explanation: "promote = advertise / encourage (quảng bá, thúc đẩy)",
    explanationVi: "promote = advertise (quảng bá, tuyên truyền)"
  },
  {
    id: 20,
    word: "captive",
    options: [
      { letter: 'A', text: "safe" },
      { letter: 'B', text: "competitive" },
      { letter: 'C', text: "confined" },
      { letter: 'D', text: "special" }
    ],
    correctLetter: 'C',
    explanation: "captive = confined / imprisoned (bị giam giữ, bị nhốt)",
    explanationVi: "captive = confined (bị giam cầm, giam giữ)"
  },
  {
    id: 21,
    word: "require",
    options: [
      { letter: 'A', text: "recommend" },
      { letter: 'B', text: "recognize" },
      { letter: 'C', text: "develop" },
      { letter: 'D', text: "need" }
    ],
    correctLetter: 'D',
    explanation: "require = need (yêu cầu, đòi hỏi)",
    explanationVi: "require = need (yêu cầu, cần đến)"
  },
  {
    id: 22,
    word: "depend on",
    options: [
      { letter: 'A', text: "move on" },
      { letter: 'B', text: "advise on" },
      { letter: 'C', text: "rely on" },
      { letter: 'D', text: "work on" }
    ],
    correctLetter: 'C',
    explanation: "depend on = rely on (phụ thuộc vào, dựa vào)",
    explanationVi: "depend on = rely on (phụ thuộc, trông cậy vào)"
  },
  {
    id: 23,
    word: "substitute",
    options: [
      { letter: 'A', text: "complete" },
      { letter: 'B', text: "illustrate" },
      { letter: 'C', text: "replace" },
      { letter: 'D', text: "achieve" }
    ],
    correctLetter: 'C',
    explanation: "substitute = replace (thay thế)",
    explanationVi: "substitute = replace (thay thế)"
  },
  {
    id: 24,
    word: "origin",
    options: [
      { letter: 'A', text: "knowledge" },
      { letter: 'B', text: "beginning" },
      { letter: 'C', text: "effect" },
      { letter: 'D', text: "outcome" }
    ],
    correctLetter: 'B',
    explanation: "origin = beginning / source (nguồn gốc, sự khởi đầu)",
    explanationVi: "origin = beginning (nguồn gốc, điểm khởi đầu)"
  },
  {
    id: 25,
    word: "debatable",
    options: [
      { letter: 'A', text: "questionable" },
      { letter: 'B', text: "definite" },
      { letter: 'C', text: "certain" },
      { letter: 'D', text: "extraordinary" }
    ],
    correctLetter: 'A',
    explanation: "debatable = questionable / disputed (còn bàn cãi, chưa chắc chắn)",
    explanationVi: "debatable = questionable (có thể gây bàn cãi, hoài nghi)"
  }
];
