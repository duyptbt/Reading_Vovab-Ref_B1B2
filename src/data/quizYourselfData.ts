import { PracticePassage } from '../types';

export const QUIZ_YOURSELF_EXERCISES: PracticePassage[] = [
  {
    id: 1,
    title: "Exercise #1: Prehistoric Trading",
    passageText: "Some researchers have discovered that humans have been trading goods and services since at least 150,000 years ago. By doing so, prehistoric people most likely were able to develop special skills and divide up labor among their communities. For example, a hunter might have caught extra animals and traded them for pottery from a neighbor who had made extra pottery. Gradually, each person would get better at a chosen task and be able to sharpen the required skill set. Then, it would be handed down to the next generation.",
    targetWords: ["goods", "them", "who", "Gradually", "it", "handed down"],
    questions: [
      {
        id: 1,
        word: "goods",
        questionText: "1) The word \"goods\" is closest in meaning to",
        options: ["(A) secrets", "(B) skills", "(C) items", "(D) ideas"],
        correctIndex: 2,
        explanation: "'Goods' refers to tangible items or merchandise traded between individuals or communities.",
        explanationVi: "Từ 'goods' chỉ các hàng hóa, vật phẩm ('tangible items or merchandise') được mua bán, trao đổi giữa mọi người."
      },
      {
        id: 2,
        word: "them",
        questionText: "2) The word \"them\" refers to",
        options: ["(A) goods and services", "(B) people", "(C) special skills", "(D) animals"],
        correctIndex: 3,
        explanation: "'Them' refers back to 'extra animals' that the hunter caught and traded.",
        explanationVi: "Đại từ 'them' thay thế cho danh từ 'extra animals' mà người thợ săn đã bắt được."
      },
      {
        id: 3,
        word: "who",
        questionText: "3) The word \"who\" refers to",
        options: ["(A) labor", "(B) a hunter", "(C) pottery", "(D) a neighbor"],
        correctIndex: 3,
        explanation: "The relative pronoun 'who' refers to the immediately preceding person, 'a neighbor'.",
        explanationVi: "Đại từ quan hệ 'who' bổ nghĩa cho danh từ chỉ người ngay trước nó là 'a neighbor'."
      },
      {
        id: 4,
        word: "Gradually",
        questionText: "4) The word \"Gradually\" means",
        options: ["(A) interestingly", "(B) slowly", "(C) particularly", "(D) especially"],
        correctIndex: 1,
        explanation: "'Gradually' means slowly or step by step over a period of time.",
        explanationVi: "Từ 'Gradually' có nghĩa là dần dần, từ từ ('slowly or step by step')."
      },
      {
        id: 5,
        word: "it",
        questionText: "5) The word \"it\" refers to",
        options: ["(A) the neighbor", "(B) extra pottery", "(C) each", "(D) skill set"],
        correctIndex: 3,
        explanation: "'It' refers back to 'the required skill set' that each person sharpens.",
        explanationVi: "Đại từ 'it' thay thế cho 'the required skill set' (tập hợp kỹ năng cần thiết)."
      },
      {
        id: 6,
        word: "handed down",
        questionText: "6) The expression \"handed down\" means",
        options: ["(A) taught", "(B) sold", "(C) sent", "(D) led"],
        correctIndex: 0,
        explanation: "'Handed down' means passed or taught to future generations.",
        explanationVi: "Cụm từ 'handed down' nghĩa là truyền lại hoặc giảng dạy ('taught') cho thế hệ sau."
      }
    ]
  },
  {
    id: 2,
    title: "Exercise #2: Knowledge Sharing & Written Symbols",
    passageText: "In pre-literate societies, there were limitations to how much knowledge people could share or pass on. Elders were the main sources of stored knowledge. As a result, when they became sick or died, oral traditions could easily be forgotten. However, knowledge became more accessible when people began to develop minimal units of written expression, such as picture symbols. These allowed people to share knowledge across time and distance, as long as they could interpret the symbols.",
    targetWords: ["Elders", "they", "accessible", "minimal", "These", "interpret"],
    questions: [
      {
        id: 7,
        word: "Elders",
        questionText: "7) The word \"Elders\" means",
        options: ["(A) close friends", "(B) younger generations", "(C) family members", "(D) older people"],
        correctIndex: 3,
        explanation: "'Elders' refers to senior or older people in a community.",
        explanationVi: "Từ 'Elders' chỉ những người lớn tuổi, cao niên ('older people') trong cộng đồng."
      },
      {
        id: 8,
        word: "they",
        questionText: "8) The word \"they\" refers to",
        options: ["(A) societies", "(B) limitations", "(C) people", "(D) elders"],
        correctIndex: 3,
        explanation: "'They' refers to 'Elders', who were the main sources of stored knowledge.",
        explanationVi: "Đại từ 'they' thay thế cho 'Elders' (các bậc cao niên) ở câu trước."
      },
      {
        id: 9,
        word: "accessible",
        questionText: "9) The word \"accessible\" means",
        options: ["(A) available", "(B) different", "(C) challenging", "(D) accurate"],
        correctIndex: 0,
        explanation: "'Accessible' means easy to reach, obtain, or available to use.",
        explanationVi: "Từ 'accessible' có nghĩa là có thể tiếp cận, có sẵn ('available')."
      },
      {
        id: 10,
        word: "minimal",
        questionText: "10) The word \"minimal\" means",
        options: ["(A) complex", "(B) vast", "(C) basic", "(D) average"],
        correctIndex: 2,
        explanation: "'Minimal' means the smallest, simplest, or most basic units.",
        explanationVi: "Từ 'minimal' chỉ các đơn vị nhỏ nhất, đơn giản hoặc cơ bản nhất ('basic')."
      },
      {
        id: 11,
        word: "These",
        questionText: "11) The word \"These\" refers to",
        options: ["(A) sources of stored knowledge", "(B) oral traditions", "(C) units of written expression", "(D) time and distance"],
        correctIndex: 2,
        explanation: "'These' refers back to 'minimal units of written expression, such as picture symbols'.",
        explanationVi: "Từ chỉ định 'These' thay thế cho 'minimal units of written expression' (các đơn vị biểu đạt bằng văn viết)."
      },
      {
        id: 12,
        word: "interpret",
        questionText: "12) The word \"interpret\" means",
        options: ["(A) engage", "(B) help", "(C) translate", "(D) write"],
        correctIndex: 2,
        explanation: "To 'interpret' symbols means to decipher, understand, or translate their meaning.",
        explanationVi: "Từ 'interpret' có nghĩa là giải mã, hiểu hoặc dịch ('translate') ý nghĩa của các ký hiệu."
      }
    ]
  },
  {
    id: 3,
    title: "Exercise #3: African Sculptures",
    passageText: "The peoples of Africa have traditionally created an immense variety of sculptures. The materials and meanings of these depend upon the peoples' ways of life. Settled agricultural peoples have long traditions of creating sculptures from different types of wood, metal, and stone. However, nomadic ones who live by hunting and gathering have created very few large sculptures.",
    targetWords: ["immense", "these", "depend upon", "agricultural", "nomadic", "ones"],
    questions: [
      {
        id: 13,
        word: "immense",
        questionText: "13) The word \"immense\" means",
        options: ["(A) large", "(B) new", "(C) mysterious", "(D) clear"],
        correctIndex: 0,
        explanation: "'Immense' means extremely large, vast, or huge in scale.",
        explanationVi: "Từ 'immense' có nghĩa là vô cùng lớn hoặc đa dạng ('large, vast')."
      },
      {
        id: 14,
        word: "these",
        questionText: "14) The word \"these\" refers to",
        options: ["(A) peoples", "(B) sculptures", "(C) materials", "(D) meanings"],
        correctIndex: 1,
        explanation: "'These' refers back to the 'sculptures' created by the peoples of Africa.",
        explanationVi: "Từ đại từ chỉ định 'these' thay thế cho 'sculptures' (các tác phẩm điêu khắc)."
      },
      {
        id: 15,
        word: "depend upon",
        questionText: "15) The phrase \"depend upon\" means",
        options: ["(A) fight with", "(B) rely on", "(C) steal from", "(D) take in"],
        correctIndex: 1,
        explanation: "'Depend upon' means to be contingent on or rely on factors.",
        explanationVi: "Cụm từ 'depend upon' nghĩa là phụ thuộc vào hoặc dựa vào ('rely on')."
      },
      {
        id: 16,
        word: "agricultural",
        questionText: "16) The word \"agricultural\" means",
        options: ["(A) hunting", "(B) educated", "(C) aggressive", "(D) farming"],
        correctIndex: 3,
        explanation: "'Agricultural' relates to farming and cultivating the soil.",
        explanationVi: "Từ 'agricultural' thuộc về nông nghiệp, trồng trọt ('farming')."
      },
      {
        id: 17,
        word: "nomadic",
        questionText: "17) The word \"nomadic\" probably means",
        options: ["(A) strong", "(B) hostile", "(C) traveling", "(D) primitive"],
        correctIndex: 2,
        explanation: "'Nomadic' describes people who move from place to place without a fixed home.",
        explanationVi: "Từ 'nomadic' chỉ lối sống du mục, di chuyển liên tục ('traveling')."
      },
      {
        id: 18,
        word: "ones",
        questionText: "18) The word \"ones\" refers to",
        options: ["(A) peoples", "(B) traditions", "(C) sculptures", "(D) different types"],
        correctIndex: 0,
        explanation: "'Nomadic ones' refers to nomadic 'peoples' (groups/tribes).",
        explanationVi: "Đại từ 'ones' thay thế cho danh từ 'peoples' (các dân tộc/bộ tộc du mục)."
      }
    ]
  },
  {
    id: 4,
    title: "Exercise #4: Careers in Music",
    passageText: "Many people who study music want to become professional performers or composers. However, competition is keen among musicians. In fact, relatively few earn a living solely by performing or composing because careers in popular music are difficult to come by and offer little security. A rock group that suddenly becomes popular may become unpopular just as quickly.",
    targetWords: ["competition", "keen", "few", "solely", "difficult to come by", "suddenly"],
    questions: [
      {
        id: 19,
        word: "competition",
        questionText: "19) The word \"competition\" means",
        options: ["(A) peace", "(B) rivalry", "(C) comfort", "(D) cooperation"],
        correctIndex: 1,
        explanation: "'Competition' means rivalry or contest between individuals striving for the same goal.",
        explanationVi: "Từ 'competition' có nghĩa là sự cạnh tranh, ganh đua ('rivalry')."
      },
      {
        id: 20,
        word: "keen",
        questionText: "20) The word \"keen\" is closest in meaning to",
        options: ["(A) pleasant", "(B) intense", "(C) smart", "(D) possible"],
        correctIndex: 1,
        explanation: "'Keen competition' means sharp, fierce, or intense competition.",
        explanationVi: "Cụm 'keen competition' nghĩa là sự cạnh tranh vô cùng gay gắt, khốc liệt ('intense')."
      },
      {
        id: 21,
        word: "few",
        questionText: "21) The word \"few\" refers to",
        options: ["(A) people", "(B) performers", "(C) composers", "(D) musicians"],
        correctIndex: 3,
        explanation: "'Few' refers back to 'musicians' mentioned in the previous sentence.",
        explanationVi: "Đại từ 'few' thay thế cho danh từ 'musicians' (các nhạc sĩ) ở câu trước."
      },
      {
        id: 22,
        word: "solely",
        questionText: "22) The word \"solely\" is closest in meaning to",
        options: ["(A) only", "(B) really", "(C) rarely", "(D) mostly"],
        correctIndex: 0,
        explanation: "'Solely' means exclusively or only.",
        explanationVi: "Từ 'solely' có nghĩa là duy nhất, chỉ ('only')."
      },
      {
        id: 23,
        word: "difficult to come by",
        questionText: "23) The phrase \"difficult to come by\" means",
        options: ["(A) difficult to discuss", "(B) difficult to play", "(C) difficult to achieve", "(D) difficult to like"],
        correctIndex: 2,
        explanation: "'Difficult to come by' means hard to obtain, find, or achieve.",
        explanationVi: "Cụm từ 'difficult to come by' nghĩa là khó tìm kiếm hoặc khó đạt được ('difficult to achieve')."
      },
      {
        id: 24,
        word: "suddenly",
        questionText: "24) The word \"suddenly\" probably means",
        options: ["(A) nearly", "(B) clearly", "(C) certainly", "(D) quickly"],
        correctIndex: 3,
        explanation: "'Suddenly' means happening quickly and unexpectedly.",
        explanationVi: "Từ 'suddenly' có nghĩa là đột ngột, nhanh chóng ('quickly')."
      }
    ]
  },
  {
    id: 5,
    title: "Exercise #5: Strategy Board Games",
    passageText: "Strategy board games have been played by countless societies for many ages. Most need more than one player. One strategy game called \"Go\" is very difficult, though it has simple rules. Go is played on a board with horizontal and vertical lines. The object of the game is to capture territory by surrounding it with pieces called \"stones.\" Go originated in China where it is called weiqi. Today, professional Go players earn large salaries, as the game is very popular in many Asian countries such as Japan and South Korea.",
    targetWords: ["Most", "object", "capture", "territory", "it", "originated"],
    questions: [
      {
        id: 25,
        word: "Most",
        questionText: "25) The word \"Most\" refers to",
        options: ["(A) strategy board games", "(B) countless societies", "(C) many ages", "(D) simple rules"],
        correctIndex: 0,
        explanation: "'Most' refers to most 'strategy board games' mentioned in the first sentence.",
        explanationVi: "Đại từ 'Most' thay thế cho 'strategy board games' (hầu hết các trò chơi cờ chiến thuật)."
      },
      {
        id: 26,
        word: "object",
        questionText: "26) The word \"object\" means",
        options: ["(A) time", "(B) winner", "(C) goal", "(D) topic"],
        correctIndex: 2,
        explanation: "The 'object' of a game means its goal, aim, or main objective.",
        explanationVi: "Từ 'object' trong ngữ cảnh trò chơi có nghĩa là mục tiêu ('goal')."
      },
      {
        id: 27,
        word: "capture",
        questionText: "27) The word \"capture\" means",
        options: ["(A) grant", "(B) use", "(C) wish", "(D) take"],
        correctIndex: 3,
        explanation: "To 'capture' territory means to seize, gain control of, or take land.",
        explanationVi: "Từ 'capture' trong trò chơi có nghĩa là chiếm lấy, đánh chiếm ('take')."
      },
      {
        id: 28,
        word: "territory",
        questionText: "28) The word \"territory\" means",
        options: ["(A) detail", "(B) area", "(C) knowledge", "(D) style"],
        correctIndex: 1,
        explanation: "'Territory' refers to land, space, or a designated area.",
        explanationVi: "Từ 'territory' chỉ lãnh thổ, vùng đất hoặc khu vực ('area')."
      },
      {
        id: 29,
        word: "it",
        questionText: "29) The word \"it\" refers to",
        options: ["(A) board", "(B) object", "(C) game", "(D) territory"],
        correctIndex: 3,
        explanation: "'It' refers back to 'territory' in 'capture territory by surrounding it'.",
        explanationVi: "Đại từ 'it' thay thế cho 'territory' (vùng lãnh thổ mà người chơi vây quanh)."
      },
      {
        id: 30,
        word: "originated",
        questionText: "30) The word \"originated\" means",
        options: ["(A) was invented", "(B) was found", "(C) was enjoyed", "(D) was seen"],
        correctIndex: 0,
        explanation: "'Originated in China' means it began, started, or was invented in China.",
        explanationVi: "Từ 'originated' có nghĩa là bắt nguồn, khởi đầu hoặc được sáng tạo ra ('was invented')."
      }
    ]
  }
];
