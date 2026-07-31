import { RootWordItem, WarmUpQuestion, PracticePassage, PopQuizQuestion } from '../types';

export const PART1_MODEL = {
  sentence: "The strong wind struck the table, causing it to fall over.",
  targetWord: "struck",
  question: "1. The word \"struck\" is closest in meaning to",
  options: ["(A) held", "(B) touched", "(C) hit", "(D) tapped"],
  correctIndex: 2,
  explanation: "In this sentence, the wind hit the table with force, causing it to fall. 'Hit' is the closest in meaning to 'struck' in this physical impact context.",
  explanationVi: "Trong câu này, cơn gió đã tác động lực mạnh vào bàn ('struck'), làm nó ngã xuống. Từ 'hit' (đánh/va đập) có nghĩa gần nhất với 'struck' trong ngữ cảnh va chạm vật lý này."
};

export const PART1_FORMATS = [
  "The word/phrase _____ is closest in meaning to _____.",
  "The word/phrase _____ means _____.",
  "The word/phrase _____ probably means _____.",
  "What does the word/phrase _____ mean?",
  "In stating _____, the author means that _____."
];

export const PART1_TIPS = [
  {
    title: "1. Sentence & Grammatical Structure",
    text: "To identify the correct meaning of the word in context, take a close look at the sentence structure, grammatical function, usage of punctuation marks, and meanings of surrounding words.",
    textVi: "Để xác định đúng nghĩa của từ trong ngữ cảnh, hãy quan sát kỹ cấu trúc câu, chức năng ngữ pháp, dấu câu và nghĩa của các từ xung quanh."
  },
  {
    title: "2. Passage Main Idea",
    text: "In some cases, you can figure out the meaning of a target word simply based on your understanding of the passage's overall main idea and context.",
    textVi: "Trong một số trường hợp, bạn có thể suy luận nghĩa của từ dựa trên việc nắm bắt ý chính và ngữ cảnh chung của toàn bộ bài đọc."
  },
  {
    title: "3. Hyperlinked Definitions in Reading Tests",
    text: "In formal reading comprehension tests, unusual or technical terms have hyperlinked definitions provided. In reading practice, such terms are defined at the end of the passage and won't appear as questions.",
    textVi: "Trong các bài thi đọc hiểu chính thức, các thuật ngữ chuyên ngành khó sẽ có chú thích nghĩa. Trong bài luyện tập, các từ này được giải thích ở cuối bài và không dùng làm câu hỏi."
  }
];

export const STRATEGY_STEPS = [
  {
    step: 1,
    title: "Recognize the Question Type",
    description: "This question type asks you to define how a vocabulary word is used in a specific sentence.",
    descriptionVi: "Dạng câu hỏi này yêu cầu bạn xác định cách một từ vựng được sử dụng trong câu cụ thể.",
    exampleDetail: "Question asks: The word 'struck' is closest in meaning to...",
    exampleDetailVi: "Câu hỏi yêu cầu: Từ 'struck' có nghĩa gần nhất với..."
  },
  {
    step: 2,
    title: "Identify the Parts of Speech",
    description: "Categorize the vocabulary word as a noun, adjective, verb, or adverb.",
    descriptionVi: "Phân loại từ vựng thành danh từ (noun), tính từ (adjective), động từ (verb), hoặc trạng từ (adverb).",
    exampleDetail: "'Struck' is a verb describing the wind's physical action.",
    exampleDetailVi: "'Struck' là một động từ diễn tả hành động vật lý của cơn gió."
  },
  {
    step: 3,
    title: "Identify Other Words in the Sentence",
    description: "Examine how surrounding nouns, adjectives, verbs, or adverbs interact with the vocabulary word.",
    descriptionVi: "Xem xét các danh từ, tính từ, động từ hoặc trạng từ xung quanh tương tác với từ vựng như thế nào.",
    exampleDetail: "'Strong' describes the 'wind' (subject doing the action). 'Table' is the object being struck.",
    exampleDetailVi: "'Strong' bổ nghĩa cho 'wind' (chủ ngữ). 'Table' là tân ngữ chịu tác động của 'struck'."
  },
  {
    step: 4,
    title: "Look Through Answer Choices",
    description: "Review choices A, B, C, D to see which meanings fit grammatically and semantically.",
    descriptionVi: "Xem xét các phương án A, B, C, D để kiểm tra nghĩa nào phù hợp về mặt ngữ pháp và ngữ nghĩa.",
    exampleDetail: "(A) held, (B) touched, (C) hit, (D) tapped. The result was the table fell over.",
    exampleDetailVi: "(A) held, (B) touched, (C) hit, (D) tapped. Kết quả là chiếc bàn bị đổ."
  },
  {
    step: 5,
    title: "Eliminate Incorrect Choices",
    description: "Eliminate wrong choices that do not fit the context or grammatical structure.",
    descriptionVi: "Loại bỏ các phương án sai không phù hợp với ngữ cảnh hoặc cấu trúc ngữ pháp.",
    exampleDetail: "• Eliminate A (held = keeping in hand/grasping)\n• Eliminate B (touched = lightly coming into contact)\n• Eliminate D (tapped = striking something lightly)",
    exampleDetailVi: "• Loại A (held = cầm/giữ)\n• Loại B (touched = chạm nhẹ)\n• Loại D (tapped = gõ nhẹ)"
  },
  {
    step: 6,
    title: "Check the Answer Choice",
    description: "Replace the original word with your selection to see if the sentence makes logical sense.",
    descriptionVi: "Thay thế từ gốc bằng phương án bạn chọn để kiểm tra xem câu có hợp logic hay không.",
    exampleDetail: "Substitution: 'The strong wind hit the table, causing it to fall over.' Makes complete sense!",
    exampleDetailVi: "Thay thế: 'The strong wind hit the table, causing it to fall over.' Hoàn toàn hợp lý!"
  },
  {
    step: 7,
    title: "Confirm",
    description: "If the choice is a proper substitution for the original word, select it as your final answer.",
    descriptionVi: "Nếu phương án lựa chọn thay thế hoàn hảo cho từ gốc, chọn nó làm đáp án cuối cùng.",
    exampleDetail: "Select the correct answer: Choice C (hit).",
    exampleDetailVi: "Chọn đáp án đúng: Phương án C (hit)."
  }
];

export const WORD_ROOTS: RootWordItem[] = [
  {
    id: "ann",
    prefixOrRoot: "ann, anni, annu, enn",
    meaning: "yearly",
    examples: [
      { word: "anniversary", breakdown: "anni (yearly) + versary (to turn)", definition: "yearly celebration of a special date" },
      { word: "perennial", breakdown: "per (throughout) + enni (yearly) + al (additionally)", definition: "everlasting; enduring through years" }
    ]
  },
  {
    id: "anti",
    prefixOrRoot: "ant, anti",
    meaning: "against, opposite of",
    examples: [
      { word: "Antarctic", breakdown: "ant (against) + arctic (North)", definition: "South Pole region opposite the Arctic" },
      { word: "antisocial", breakdown: "anti (opposite of) + social", definition: "unsociable or opposing social norm" }
    ]
  },
  {
    id: "ation",
    prefixOrRoot: "ation",
    meaning: "action, resulting state (noun)",
    examples: [
      { word: "narration", breakdown: "narrate (to tell a story) + ation (an action)", definition: "storytelling" },
      { word: "alternation", breakdown: "alternate (to change) + ion (state)", definition: "successive change or rotation" }
    ]
  },
  {
    id: "auto",
    prefixOrRoot: "aut, auto",
    meaning: "self",
    examples: [
      { word: "automobile", breakdown: "auto (self) + mobile (moving)", definition: "self-moving vehicle" },
      { word: "autonomous", breakdown: "auto (self) + nomos (law)", definition: "self-governing; independent" }
    ]
  },
  {
    id: "bi",
    prefixOrRoot: "bi, bin",
    meaning: "two",
    examples: [
      { word: "binocular", breakdown: "bin (two) + ocul (eye)", definition: "an optical device using both eyes" },
      { word: "biweekly", breakdown: "bi (two) + weekly", definition: "occurring every two weeks" }
    ]
  },
  {
    id: "co",
    prefixOrRoot: "co, col",
    meaning: "with, together",
    examples: [
      { word: "colleague", breakdown: "col (with) + league (unity)", definition: "a fellow worker" },
      { word: "coeducation", breakdown: "co (with) + education (learning)", definition: "males and females learning together" }
    ]
  },
  {
    id: "de",
    prefixOrRoot: "de, dif",
    meaning: "do the opposite of, reverse, against",
    examples: [
      { word: "destroy", breakdown: "de (down) + stroy (to build)", definition: "to ruin completely" },
      { word: "decrease", breakdown: "de (against) + crease (to grow)", definition: "to lessen in amount" }
    ]
  },
  {
    id: "dis",
    prefixOrRoot: "di, dif, dis",
    meaning: "not, do the opposite of",
    examples: [
      { word: "disagree", breakdown: "dis (not) + agree", definition: "to oppose or differ in opinion" },
      { word: "disassemble", breakdown: "dis (not) + assemble", definition: "to undo something that is assembled" }
    ]
  },
  {
    id: "en",
    prefixOrRoot: "en",
    meaning: "make",
    examples: [
      { word: "engage", breakdown: "en (make) + gage (to promise)", definition: "to involve or occupy" },
      { word: "enforce", breakdown: "en (make) + force", definition: "to make sure that someone follows a course of action" }
    ]
  },
  {
    id: "ess",
    prefixOrRoot: "ess",
    meaning: "female",
    examples: [
      { word: "actress", breakdown: "act (to play) + ress (female)", definition: "a woman who acts" },
      { word: "goddess", breakdown: "god + ess (female)", definition: "a female god" }
    ]
  },
  {
    id: "ex",
    prefixOrRoot: "ex",
    meaning: "out, former",
    examples: [
      { word: "extract", breakdown: "ex (out) + tract (to draw)", definition: "to pull out or remove" },
      { word: "exhale", breakdown: "ex (out) + hale (to breathe)", definition: "to breathe out" }
    ]
  },
  {
    id: "fore",
    prefixOrRoot: "for, fore",
    meaning: "before",
    examples: [
      { word: "forecast", breakdown: "fore (before) + cast (to decide)", definition: "to estimate or predict in advance" },
      { word: "foresee", breakdown: "fore (before) + see", definition: "to predict or see ahead of time" }
    ]
  },
  {
    id: "form",
    prefixOrRoot: "form, formul",
    meaning: "shape",
    examples: [
      { word: "perform", breakdown: "per (thoroughly) + form (to shape)", definition: "to accomplish or carry out an action" },
      { word: "formulate", breakdown: "formul (to shape) + ate (state of)", definition: "to compose or create systematically" }
    ]
  },
  {
    id: "hood",
    prefixOrRoot: "hood",
    meaning: "state, condition",
    examples: [
      { word: "childhood", breakdown: "child + hood (state)", definition: "the state or time of being a child" },
      { word: "parenthood", breakdown: "parent + hood (state)", definition: "the state of being a parent" }
    ]
  },
  {
    id: "hyper",
    prefixOrRoot: "hyper",
    meaning: "over, above, too much",
    examples: [
      { word: "hyperactive", breakdown: "hyper (above) + active", definition: "overly or excessively active" },
      { word: "hypersensitive", breakdown: "hyper (above) + sensitive", definition: "excessively sensitive" }
    ]
  },
  {
    id: "in",
    prefixOrRoot: "il, im, in, ir",
    meaning: "not, without",
    examples: [
      { word: "illegible", breakdown: "il (not) + legible (easily read)", definition: "hard or impossible to read" },
      { word: "immortal", breakdown: "im (not) + mortal (dead)", definition: "never-dying; living forever" }
    ]
  },
  {
    id: "inter",
    prefixOrRoot: "inter",
    meaning: "among, between",
    examples: [
      { word: "interrupt", breakdown: "inter (among) + rupt (to break)", definition: "to stop something in progress" },
      { word: "international", breakdown: "inter (between) + national (countries)", definition: "involving two or more nations" }
    ]
  },
  {
    id: "ism",
    prefixOrRoot: "ism",
    meaning: "state, condition, action",
    examples: [
      { word: "heroism", breakdown: "hero + ism (state)", definition: "bravery; heroic conduct" },
      { word: "criticism", breakdown: "critic + ism (state)", definition: "judgment or expression of disapproval" }
    ]
  },
  {
    id: "micro",
    prefixOrRoot: "micro",
    meaning: "small, millionth",
    examples: [
      { word: "microscope", breakdown: "micro (small) + scope (viewing instrument)", definition: "optical instrument used to view tiny objects" },
      { word: "microbe", breakdown: "micro (small) + be (life)", definition: "an extremely small living organism" }
    ]
  },
  {
    id: "mis",
    prefixOrRoot: "mis",
    meaning: "wrong, bad",
    examples: [
      { word: "misconduct", breakdown: "mis (wrong) + conduct (behavior)", definition: "wrongdoing or improper behavior" },
      { word: "misinform", breakdown: "mis (wrong) + inform (to instruct)", definition: "to give inaccurate information" }
    ]
  },
  {
    id: "non",
    prefixOrRoot: "non",
    meaning: "not, without",
    examples: [
      { word: "nonsense", breakdown: "non (without) + sense (feeling)", definition: "absurdity or meaningless words" },
      { word: "nonfiction", breakdown: "non (not) + fiction (imaginary story)", definition: "prose writing based on real facts" }
    ]
  },
  {
    id: "over",
    prefixOrRoot: "over",
    meaning: "excessive, above",
    examples: [
      { word: "overwork", breakdown: "over (excessive) + work", definition: "to work too much" },
      { word: "overdose", breakdown: "over (above) + dose (quantity)", definition: "consuming an excessive amount" }
    ]
  },
  {
    id: "post",
    prefixOrRoot: "post",
    meaning: "after, later",
    examples: [
      { word: "postpone", breakdown: "post (after) + pon (to put)", definition: "to delay to a future time" },
      { word: "posthumous", breakdown: "post (after) + humous (burial)", definition: "occurring or published after death" }
    ]
  },
  {
    id: "pre",
    prefixOrRoot: "pre",
    meaning: "before",
    examples: [
      { word: "precede", breakdown: "pre (before) + cede (to go)", definition: "to go or come before" },
      { word: "preview", breakdown: "pre (before) + view (to look)", definition: "to view or inspect in advance" }
    ]
  },
  {
    id: "re",
    prefixOrRoot: "re",
    meaning: "again, back",
    examples: [
      { word: "revoke", breakdown: "re (again) + vok (to call)", definition: "to recall or cancel" },
      { word: "retract", breakdown: "re (back) + tract (to draw)", definition: "to draw back or withdraw" }
    ]
  },
  {
    id: "se",
    prefixOrRoot: "se",
    meaning: "without, apart",
    examples: [
      { word: "secure", breakdown: "se (without) + cure (to care)", definition: "to keep safe and free from danger" },
      { word: "seclude", breakdown: "se (apart) + clude (to shut)", definition: "to keep apart or isolate" }
    ]
  },
  {
    id: "semi",
    prefixOrRoot: "semi",
    meaning: "half, partial",
    examples: [
      { word: "semifinal", breakdown: "semi (half) + final", definition: "the round right before the final" },
      { word: "semiconscious", breakdown: "semi (partial) + conscious", definition: "partially aware or conscious" }
    ]
  },
  {
    id: "some",
    prefixOrRoot: "some",
    meaning: "to a considerable degree",
    examples: [
      { word: "quarrelsome", breakdown: "quarrel + some (degree)", definition: "argumentative or fond of fighting" },
      { word: "burdensome", breakdown: "burden + some (degree)", definition: "causing difficulty or heavy load" }
    ]
  },
  {
    id: "sov",
    prefixOrRoot: "sov, sove, sur",
    meaning: "over, above",
    examples: [
      { word: "sovereign", breakdown: "sove (over) + reign (to govern)", definition: "a supreme ruler or king/queen" },
      { word: "survive", breakdown: "sur (over) + vive (to live)", definition: "to continue to live beyond hardship" }
    ]
  },
  {
    id: "trans",
    prefixOrRoot: "trans",
    meaning: "across, beyond",
    examples: [
      { word: "transport", breakdown: "trans (across) + port (to carry)", definition: "to physically carry across locations" },
      { word: "transmit", breakdown: "trans (across) + mit (to send)", definition: "to send or forward across distance" }
    ]
  },
  {
    id: "tri",
    prefixOrRoot: "tri",
    meaning: "three",
    examples: [
      { word: "triangle", breakdown: "tri (three) + angle", definition: "a geometric figure with three sides and angles" },
      { word: "triathlon", breakdown: "tri (three) + athlon (event)", definition: "an athletic contest with three events" }
    ]
  },
  {
    id: "ultra",
    prefixOrRoot: "ultra",
    meaning: "beyond, extreme",
    examples: [
      { word: "ultramodern", breakdown: "ultra (beyond) + modern", definition: "extremely or excessively modern" },
      { word: "ultrasonic", breakdown: "ultra (beyond) + sonic (sound)", definition: "sound waves beyond human hearing" }
    ]
  },
  {
    id: "un",
    prefixOrRoot: "un",
    meaning: "not, opposite of",
    examples: [
      { word: "unalterable", breakdown: "un (not) + alter (change) + able", definition: "unable to be changed" },
      { word: "unfriendly", breakdown: "un (not) + friend + ly", definition: "not welcoming or hostile" }
    ]
  },
  {
    id: "uni",
    prefixOrRoot: "uni",
    meaning: "one, single",
    examples: [
      { word: "unity", breakdown: "uni (one) + ty (state of)", definition: "being united or combined into one" },
      { word: "unique", breakdown: "uni (one) + que (suffix)", definition: "being the only one of its kind" }
    ]
  }
];

export const WARM_UP_QUESTIONS: WarmUpQuestion[] = [
  {
    id: 1,
    sentenceBefore: "The boy rode to school on his (",
    options: ["bicycle", "binoculars"],
    correctOptionIndex: 0,
    sentenceAfter: ").",
    explanation: "A 'bicycle' (bi = two + cycle = wheel) is a two-wheeled vehicle you ride. 'Binoculars' (bin = two + ocul = eye) are used for viewing distant objects.",
    explanationVi: "Từ 'bicycle' (bi = two + cycle = wheel) chỉ xe đạp hai bánh dùng để đi. Trong khi 'binoculars' (bin = two + ocul = eye) chỉ kính nhòm/ống nhòm dùng để quan sát vật ở xa.",
    targetWord: "bicycle",
    rootRef: "bi, bin (two)"
  },
  {
    id: 2,
    sentenceBefore: "The truck driver had to (",
    options: ["translate", "transport"],
    correctOptionIndex: 1,
    sentenceAfter: ") the oranges in his truck across the country.",
    explanation: "'Transport' (trans = across + port = carry) means to physically carry cargo or people from one location to another. 'Translate' means changing words between languages.",
    explanationVi: "Từ 'transport' (trans = across + port = carry) có nghĩa là vận chuyển hàng hóa hoặc người từ nơi này sang nơi khác. Trong khi 'translate' nghĩa là chuyển đổi ngôn ngữ.",
    targetWord: "transport",
    rootRef: "trans (across, beyond)"
  },
  {
    id: 3,
    sentenceBefore: "Our legs were (",
    options: ["overlooked", "overworked"],
    correctOptionIndex: 1,
    sentenceAfter: ") so much during the basketball game that we needed a massage.",
    explanation: "'Overworked' (over = excessive + work) means worked to exhaustion or beyond limit. 'Overlooked' means failed to notice.",
    explanationVi: "Từ 'overworked' (over = excessive + work) có nghĩa là làm việc/hoạt động quá sức đến kiệt sức. Trong khi 'overlooked' nghĩa là bỏ qua, không chú ý tới.",
    targetWord: "overworked",
    rootRef: "over (excessive, above)"
  },
  {
    id: 4,
    sentenceBefore: "The professor's lecture was (",
    options: ["interrupted", "interacted"],
    correctOptionIndex: 0,
    sentenceAfter: ") by loud noises from outside the classroom.",
    explanation: "'Interrupted' (inter = between + rupt = break) means stopped or broken in progress by a distraction. 'Interacted' means acted upon each other.",
    explanationVi: "Từ 'interrupted' (inter = between + rupt = break) nghĩa là bị gián đoạn, ngắt lời bởi tiếng ồn. Trong khi 'interacted' nghĩa là tương tác với nhau.",
    targetWord: "interrupted",
    rootRef: "inter (among, between)"
  },
  {
    id: 5,
    sentenceBefore: "These photos are the only things that (",
    options: ["survived", "surveyed"],
    correctOptionIndex: 0,
    sentenceAfter: ") the storm.",
    explanation: "'Survived' (sur = over + vive = live) means continued to exist or live through a disaster/storm. 'Surveyed' means inspected or examined.",
    explanationVi: "Từ 'survived' (sur = over + vive = live) nghĩa là sống sót hoặc tồn tại qua một cơn bão/thảm họa. Trong khi 'surveyed' nghĩa là quan sát hoặc khảo sát.",
    targetWord: "survived",
    rootRef: "sov, sove, sur (over, above)"
  },
  {
    id: 6,
    sentenceBefore: "Because it wanted to make its own decisions, the state decided to become (",
    options: ["autonomous", "automated"],
    correctOptionIndex: 0,
    sentenceAfter: ").",
    explanation: "'Autonomous' (auto = self + nomos = law) means self-governing and independent. 'Automated' means operated by machines.",
    explanationVi: "Từ 'autonomous' (auto = self + nomos = law) nghĩa là tự trị, tự mình đưa ra quyết định. Trong khi 'automated' nghĩa là tự động hóa bằng máy móc.",
    targetWord: "autonomous",
    rootRef: "aut, auto (self)"
  },
  {
    id: 7,
    sentenceBefore: "Since her new shirt did not fit, Jessica (",
    options: ["retracted", "returned"],
    correctOptionIndex: 1,
    sentenceAfter: ") it to the store.",
    explanation: "'Returned' (re = back) means took back or gave back to the origin store. 'Retracted' means withdrew a statement or claim.",
    explanationVi: "Từ 'returned' (re = back) nghĩa là mang trả lại hàng cho cửa hàng vì không vừa. Trong khi 'retracted' nghĩa là rút lại lời nói hay tuyên bố.",
    targetWord: "returned",
    rootRef: "re (again, back)"
  },
  {
    id: 8,
    sentenceBefore: "Cindy's favorite type of story to read is (",
    options: ["nonsense", "nonfiction"],
    correctOptionIndex: 1,
    sentenceAfter: ").",
    explanation: "'Nonfiction' (non = not + fiction) refers to prose literature based on real facts and events. 'Nonsense' means foolish or absurd statements.",
    explanationVi: "Từ 'nonfiction' (non = not + fiction) chỉ thể loại sách phi hư cấu dựa trên sự thật và sự kiện thực tế. Trong khi 'nonsense' chỉ những lời vô lý, nhảm nhí.",
    targetWord: "nonfiction",
    rootRef: "non (not, without)"
  },
  {
    id: 9,
    sentenceBefore: "Please be sure that the load on the truck is (",
    options: ["secured", "selected"],
    correctOptionIndex: 0,
    sentenceAfter: ") so that it does not fall off.",
    explanation: "'Secured' (se = without + cure = care/danger) means fastened firmly so it won't fall or slip.",
    explanationVi: "Từ 'secured' (se = without + cure = care/danger) nghĩa là được buộc chặt, đảm bảo an toàn để không bị rơi. Trong khi 'selected' nghĩa là được lựa chọn.",
    targetWord: "secured",
    rootRef: "se (without, apart)"
  },
  {
    id: 10,
    sentenceBefore: "Because Ted was so (",
    options: ["engaged", "enforced"],
    correctOptionIndex: 0,
    sentenceAfter: ") in reading, he was late for his soccer practice.",
    explanation: "'Engaged' (en = make + gage = promise/pledge) means deeply involved or absorbed in an activity. 'Enforced' means compelled obedience.",
    explanationVi: "Từ 'engaged' (en = make + gage = promise/pledge) có nghĩa là say mê, tập trung cao độ vào việc đọc sách. Trong khi 'enforced' nghĩa là bắt buộc thi hành.",
    targetWord: "engaged",
    rootRef: "en (make)"
  },
  {
    id: 11,
    sentenceBefore: "The fire completely (",
    options: ["destroyed", "decreased"],
    correctOptionIndex: 0,
    sentenceAfter: ") all of the buildings on the street.",
    explanation: "'Destroyed' (de = down + stroy = build) means ruined completely. 'Decreased' means reduced in size or number.",
    explanationVi: "Từ 'destroyed' (de = down + stroy = build) nghĩa là tàn phá, phá hủy hoàn toàn. Trong khi 'decreased' nghĩa là giảm bớt về kích thước hay số lượng.",
    targetWord: "destroyed",
    rootRef: "de, dif (reverse, down)"
  },
  {
    id: 12,
    sentenceBefore: "Tina has been training very hard to compete in the (",
    options: ["triangle", "triathlon"],
    correctOptionIndex: 1,
    sentenceAfter: ") this year.",
    explanation: "A 'triathlon' (tri = three + athlon = event) is an athletic contest involving swimming, cycling, and running. A 'triangle' is a 3-sided shape.",
    explanationVi: "Từ 'triathlon' (tri = three + athlon = event) chỉ cuộc thi thể thao 3 môn phối hợp (bơi, đạp xe, chạy bộ). Trong khi 'triangle' chỉ hình tam giác.",
    targetWord: "triathlon",
    rootRef: "tri (three)"
  },
  {
    id: 13,
    sentenceBefore: "He was the only person in the entire party wearing a red sweater, so he looked (",
    options: ["unique", "unilateral"],
    correctOptionIndex: 0,
    sentenceAfter: ").",
    explanation: "'Unique' (uni = one + que) means being the single or only one of its kind. 'Unilateral' means one-sided decision.",
    explanationVi: "Từ 'unique' (uni = one + que) nghĩa là độc đáo, độc nhất (là người duy nhất mặc áo len đỏ). Trong khi 'unilateral' nghĩa là đơn phương.",
    targetWord: "unique",
    rootRef: "uni (one, single)"
  },
  {
    id: 14,
    sentenceBefore: "We would like to (",
    options: ["preview", "precede"],
    correctOptionIndex: 0,
    sentenceAfter: ") the course materials before we enroll in the class.",
    explanation: "'Preview' (pre = before + view = look) means to inspect or view something in advance. 'Precede' means to physically go before.",
    explanationVi: "Từ 'preview' (pre = before + view = look) nghĩa là xem trước tài liệu trước khi đăng ký học. Trong khi 'precede' nghĩa là đi trước hoặc diễn ra trước.",
    targetWord: "preview",
    rootRef: "pre (before)"
  },
  {
    id: 15,
    sentenceBefore: "The young boy's parents considered him to be (",
    options: ["hypersensitive", "hyperactive"],
    correctOptionIndex: 1,
    sentenceAfter: ") because he could never sit still.",
    explanation: "'Hyperactive' (hyper = over/excessive + active) means overly energetic or unable to stay still. 'Hypersensitive' means easily emotionally offended or physically sensitive.",
    explanationVi: "Từ 'hyperactive' (hyper = over + active) nghĩa là hiếu động quá mức, không thể ngồi yên. Trong khi 'hypersensitive' nghĩa là quá nhạy cảm.",
    targetWord: "hyperactive",
    rootRef: "hyper (over, above)"
  },
  {
    id: 16,
    sentenceBefore: "The official was fired from her position due to (",
    options: ["misconduct", "misinterpretation"],
    correctOptionIndex: 0,
    sentenceAfter: ").",
    explanation: "'Misconduct' (mis = wrong + conduct = behavior) refers to improper or unlawful behavior. 'Misinterpretation' means understanding something wrongly.",
    explanationVi: "Từ 'misconduct' (mis = wrong + conduct = behavior) chỉ hành vi sai trái, vi phạm quy định. Trong khi 'misinterpretation' chỉ việc hiểu sai ý.",
    targetWord: "misconduct",
    rootRef: "mis (wrong, bad)"
  },
  {
    id: 17,
    sentenceBefore: "Todd had a great deal of tooth pain, so he went to the dentist to get his tooth (",
    options: ["extracted", "exhaled"],
    correctOptionIndex: 0,
    sentenceAfter: ").",
    explanation: "'Extracted' (ex = out + tract = draw) means pulled or drawn out by force. 'Exhaled' means breathed air out.",
    explanationVi: "Từ 'extracted' (ex = out + tract = draw) nghĩa là nhổ ra, rút ra bằng lực (nhổ răng). Trong khi 'exhaled' nghĩa là thở ra.",
    targetWord: "extracted",
    rootRef: "ex (out, former)"
  },
  {
    id: 18,
    sentenceBefore: "The weather (",
    options: ["forefront", "forecast"],
    correctOptionIndex: 1,
    sentenceAfter: ") predicted that there will be snow tonight.",
    explanation: "'Forecast' (fore = before + cast = estimate) is a prediction of future weather. 'Forefront' means the leading or front position.",
    explanationVi: "Từ 'forecast' (fore = before + cast = estimate) chỉ dự báo thời tiết tương lai. Trong khi 'forefront' chỉ vị trí hàng đầu hay tuyến đầu.",
    targetWord: "forecast",
    rootRef: "for, fore (before)"
  },
  {
    id: 19,
    sentenceBefore: "The (",
    options: ["Antarctic", "antisocial"],
    correctOptionIndex: 0,
    sentenceAfter: ") region of the world is very cold.",
    explanation: "The 'Antarctic' (ant = opposite + arctic) is the polar southern region surrounding the South Pole. 'Antisocial' means avoiding or opposing social contact.",
    explanationVi: "Từ 'Antarctic' (ant = opposite + arctic) chỉ vùng Nam Cực rất lạnh. Trong khi 'antisocial' nghĩa là ngại giao tiếp, chống đối xã hội.",
    targetWord: "Antarctic",
    rootRef: "ant, anti (against, opposite)"
  },
  {
    id: 20,
    sentenceBefore: "The (",
    options: ["unity", "unicycle"],
    correctOptionIndex: 0,
    sentenceAfter: ") of the group allowed its members to make decisions together.",
    explanation: "'Unity' (uni = one + ty) means state of being joined or united as one. A 'unicycle' is a one-wheeled cycle.",
    explanationVi: "Từ 'unity' (uni = one + ty) nghĩa là sự đoàn kết, thống nhất thành một khối. Trong khi 'unicycle' chỉ xe đạp một bánh.",
    targetWord: "unity",
    rootRef: "uni (one, single)"
  }
];

export const PRACTICE_PASSAGES: PracticePassage[] = [
  {
    id: 1,
    title: "Practice #1: New York City",
    passageText: "New York City has no parallel in the United States. Many churches in the city were built in the Gothic tradition. There are also many gleaming, modern skyscrapers. Most American publishing houses are in New York City. Also, outstanding orchestras and dance companies perform at Lincoln Center.",
    targetWords: ["parallel", "tradition", "gleaming", "houses", "outstanding", "perform"],
    questions: [
      {
        id: 1,
        word: "parallel",
        questionText: "1) The word \"parallel\" means",
        options: ["(A) equal", "(B) type", "(C) location", "(D) line"],
        correctIndex: 0,
        explanation: "In this context, 'has no parallel' means New York City has no match or equal anywhere else in the United States.",
        explanationVi: "Trong ngữ cảnh này, 'has no parallel' có nghĩa là New York City không có đối thủ hay đối trọng tương đương ('match' hoặc 'equal') ở bất kỳ nơi nào khác tại Hoa Kỳ."
      },
      {
        id: 2,
        word: "tradition",
        questionText: "2) The word \"tradition\" means",
        options: ["(A) belief", "(B) style", "(C) culture", "(D) life"],
        correctIndex: 1,
        explanation: "Gothic tradition refers to the architectural style in which those churches were constructed.",
        explanationVi: "Cụm 'Gothic tradition' đề cập đến phong cách kiến trúc ('architectural style') mà các nhà thờ đó được xây dựng."
      },
      {
        id: 3,
        word: "gleaming",
        questionText: "3) The word \"gleaming\" probably means",
        options: ["(A) enormous", "(B) new", "(C) shiny", "(D) strange"],
        correctIndex: 2,
        explanation: "'Gleaming' describes modern skyscrapers reflecting light, meaning bright and shiny.",
        explanationVi: "Từ 'gleaming' mô tả các tòa nhà cao tầng hiện đại phản chiếu ánh sáng, có nghĩa là sáng bóng ('bright and shiny')."
      },
      {
        id: 4,
        word: "houses",
        questionText: "4) The word \"houses\" probably means",
        options: ["(A) empires", "(B) subjects", "(C) families", "(D) companies"],
        correctIndex: 3,
        explanation: "'Publishing houses' refers to publishing businesses or companies that print books.",
        explanationVi: "Cụm 'publishing houses' dùng để chỉ các doanh nghiệp hoặc công ty xuất bản ('publishing businesses or companies') in ấn sách."
      },
      {
        id: 5,
        word: "outstanding",
        questionText: "5) The word \"outstanding\" means",
        options: ["(A) talented", "(B) real", "(C) correct", "(D) loud"],
        correctIndex: 0,
        explanation: "'Outstanding orchestras' highlights exceptionally skilled, talented musical groups.",
        explanationVi: "Cụm 'outstanding orchestras' nhấn mạnh các dàn nhạc đặc biệt tài năng ('exceptionally skilled, talented')."
      },
      {
        id: 6,
        word: "perform",
        questionText: "6) The word \"perform\" probably means",
        options: ["(A) put on a show", "(B) stand out", "(C) play a part", "(D) run around"],
        correctIndex: 0,
        explanation: "Orchestras and dance companies 'perform' when they present or put on a musical/dance show.",
        explanationVi: "Các dàn nhạc và đoàn múa 'perform' khi họ biểu diễn hoặc tổ chức một chương trình ('put on a show')."
      }
    ]
  },
  {
    id: 2,
    title: "Practice #2: The Role of Dolls",
    passageText: "Dolls help children in many ways. For example, they serve as objects that children can love. They also provide an outlet for a child's emotions – how children play with dolls reveals their feelings. Children also rehearse adult roles, such as parent or doctor, by playing with dolls.",
    targetWords: ["help", "serve", "outlet", "reveals", "rehearse", "roles"],
    questions: [
      {
        id: 7,
        word: "help",
        questionText: "7) The word \"help\" means",
        options: ["(A) teach", "(B) assist", "(C) dislike", "(D) supervise"],
        correctIndex: 1,
        explanation: "'Help' means to aid or assist children in their emotional development.",
        explanationVi: "Từ 'help' có nghĩa là hỗ trợ hoặc giúp đỡ ('aid' hoặc 'assist') trẻ em trong quá trình phát triển cảm xúc."
      },
      {
        id: 8,
        word: "serve",
        questionText: "8) The word \"serve\" is closest in meaning to",
        options: ["(A) live", "(B) start", "(C) work", "(D) return"],
        correctIndex: 2,
        explanation: "'Serve as objects' means they act or work as objects of affection for children.",
        explanationVi: "Cụm 'serve as objects' có nghĩa là chúng đóng vai trò hoặc hoạt động ('work') như những vật thể thể hiện tình cảm của trẻ."
      },
      {
        id: 9,
        word: "outlet",
        questionText: "9) The word \"outlet\" means",
        options: ["(A) cause", "(B) method", "(C) memory", "(D) opening"],
        correctIndex: 3,
        explanation: "An emotional 'outlet' provides an opening or release channel for feelings.",
        explanationVi: "Một 'outlet' cảm xúc mang lại một lối thoát hoặc kênh giải tỏa ('opening' hoặc 'release channel') cho cảm xúc."
      },
      {
        id: 10,
        word: "reveals",
        questionText: "10) The word \"reveals\" means",
        options: ["(A) shows", "(B) forces", "(C) stops", "(D) raises"],
        correctIndex: 0,
        explanation: "'Reveals their feelings' means play demonstrates or shows how the child feels inside.",
        explanationVi: "Cụm 'reveals their feelings' có nghĩa là trò chơi bộc lộ hoặc hiển thị ('shows') cảm xúc bên trong của trẻ."
      },
      {
        id: 11,
        word: "rehearse",
        questionText: "11) The word \"rehearse\" is closest in meaning to",
        options: ["(A) forget", "(B) know", "(C) practice", "(D) find"],
        correctIndex: 2,
        explanation: "To 'rehearse adult roles' means to practice or try out adult behaviors before growing up.",
        explanationVi: "Cụm 'rehearse adult roles' có nghĩa là thực hành hoặc luyện tập ('practice') các hành vi của người lớn trước khi trưởng thành."
      },
      {
        id: 12,
        word: "roles",
        questionText: "12) The word \"roles\" means",
        options: ["(A) styles", "(B) characters", "(C) speeches", "(D) behaviors"],
        correctIndex: 3,
        explanation: "Adult 'roles' (parent, doctor) represent social behaviors or societal functions children imitate.",
        explanationVi: "Các 'roles' của người lớn (như cha mẹ, bác sĩ) đại diện cho các hành vi ứng xử ('behaviors') hoặc vai trò xã hội mà trẻ em bắt chước."
      }
    ]
  },
  {
    id: 3,
    title: "Practice #3: Origins of Jazz Music",
    passageText: "African-American musicians may have absorbed diverse sources as they developed jazz. For instance, music scholars have detected Arab Islamic influences that may have spread to Africa and been retained when enslaved Africans brought their rich music culture to North America. European harmonies and Afro-Latin rhythms from Cuba also became part of the distinctive sound of jazz.",
    targetWords: ["absorbed", "diverse", "detected", "influences", "retained", "distinctive"],
    questions: [
      {
        id: 13,
        word: "absorbed",
        questionText: "13) The word \"absorbed\" means",
        options: ["(A) taken in", "(B) looked at", "(C) worked with", "(D) referred to"],
        correctIndex: 0,
        explanation: "'Absorbed diverse sources' means musicians incorporated or took in various musical ideas.",
        explanationVi: "Cụm 'absorbed diverse sources' có nghĩa là các nhạc sĩ đã tiếp thu hoặc thu nhận ('took in') nhiều ý tưởng âm nhạc khác nhau."
      },
      {
        id: 14,
        word: "diverse",
        questionText: "14) The word \"diverse\" means",
        options: ["(A) appropriate", "(B) similar", "(C) descriptive", "(D) various"],
        correctIndex: 3,
        explanation: "'Diverse sources' means varied or different musical origins.",
        explanationVi: "Cụm 'diverse sources' có nghĩa là các nguồn gốc âm nhạc đa dạng hoặc khác nhau ('various')."
      },
      {
        id: 15,
        word: "detected",
        questionText: "15) The word \"detected\" means",
        options: ["(A) noticed", "(B) taken", "(C) invented", "(D) established"],
        correctIndex: 0,
        explanation: "'Detected influences' means scholars discovered or noticed historical patterns in the music.",
        explanationVi: "Cụm 'detected influences' có nghĩa là các nhà nghiên cứu đã phát hiện hoặc nhận ra ('noticed') các xu hướng/ảnh hưởng lịch sử trong âm nhạc."
      },
      {
        id: 16,
        word: "influences",
        questionText: "16) The word \"influences\" means",
        options: ["(A) inventions", "(B) effects", "(C) differences", "(D) activities"],
        correctIndex: 1,
        explanation: "'Influences' refers to musical elements that had an effect or impact on jazz development.",
        explanationVi: "Từ 'influences' đề cập đến các yếu tố âm nhạc có tác động hoặc ảnh hưởng ('effects') đến sự phát triển của nhạc jazz."
      },
      {
        id: 17,
        word: "retained",
        questionText: "17) The word \"retained\" means",
        options: ["(A) kept", "(B) stolen", "(C) lost", "(D) known"],
        correctIndex: 0,
        explanation: "To be 'retained' means kept or preserved across generations.",
        explanationVi: "Được 'retained' có nghĩa là được duy trì hoặc giữ lại ('kept') qua các thế hệ."
      },
      {
        id: 18,
        word: "distinctive",
        questionText: "18) The word \"distinctive\" probably means",
        options: ["(A) famous", "(B) perfect", "(C) official", "(D) unique"],
        correctIndex: 3,
        explanation: "'Distinctive sound' means a special, characteristic, or unique acoustic style.",
        explanationVi: "Cụm 'distinctive sound' chỉ một phong cách âm thanh đặc biệt, mang tính đặc trưng hoặc độc đáo ('unique')."
      }
    ]
  },
  {
    id: 4,
    title: "Practice #4: Water on Mars",
    passageText: "Scientists believe that water flowed on Mars billions of years ago. The evidence consists of pebbles and valleys that appear to have been smoothed out by streams. Furthermore, scientists have identified liquid water molecules in Martian soil, which may indicate that pools of water exist in pores below the surface. A space probe – a robotic spacecraft used for research – also has discovered vast amounts of frozen water at the planet's poles.",
    targetWords: ["flowed", "evidence", "consists of", "pores", "discovered", "vast"],
    questions: [
      {
        id: 19,
        word: "flowed",
        questionText: "19) The word \"flowed\" means",
        options: ["(A) flew", "(B) helped", "(C) moved", "(D) relied"],
        correctIndex: 2,
        explanation: "Water 'flowed' means liquid water moved continuously across the Martian surface.",
        explanationVi: "Nước 'flowed' có nghĩa là nước dạng lỏng đã di chuyển ('moved') liên tục trên bề mặt Sao Hỏa."
      },
      {
        id: 20,
        word: "evidence",
        questionText: "20) The word \"evidence\" means",
        options: ["(A) proof", "(B) work", "(C) appearance", "(D) time"],
        correctIndex: 0,
        explanation: "'Evidence' refers to physical proof supporting a scientific hypothesis.",
        explanationVi: "Từ 'evidence' đề cập đến bằng chứng thực tế ('proof') ủng hộ cho một giả thuyết khoa học."
      },
      {
        id: 21,
        word: "consists of",
        questionText: "21) The word \"consists of\" probably means",
        options: ["(A) insists", "(B) includes", "(C) highlights", "(D) realizes"],
        correctIndex: 1,
        explanation: "'Consists of pebbles' means the body of evidence includes or is made up of smooth rocks.",
        explanationVi: "Cụm 'consists of pebbles' có nghĩa là tập hợp bằng chứng bao gồm ('includes') hoặc được cấu thành từ những hòn sỏi nhẵn."
      },
      {
        id: 22,
        word: "pores",
        questionText: "22) The word \"pores\" is closest in meaning to",
        options: ["(A) drains", "(B) holes", "(C) rocks", "(D) packages"],
        correctIndex: 1,
        explanation: "'Pores below the surface' refers to tiny microscopic openings or holes inside soil and rocks.",
        explanationVi: "Cụm 'pores below the surface' chỉ các lỗ hổng hoặc khe hở vi mô ('holes') bên trong đất và đá."
      },
      {
        id: 23,
        word: "discovered",
        questionText: "23) The word \"discovered\" means",
        options: ["(A) used", "(B) explained", "(C) found", "(D) provided"],
        correctIndex: 2,
        explanation: "The space probe 'discovered' (found) frozen ice deposits at the polar ice caps.",
        explanationVi: "Tàu thăm dò vũ trụ đã 'discovered' (tìm thấy - 'found') các mỏ băng đóng băng tại các cực của hành tinh."
      },
      {
        id: 24,
        word: "vast",
        questionText: "24) The word \"vast\" is closest in meaning to",
        options: ["(A) thick", "(B) tiny", "(C) frozen", "(D) large"],
        correctIndex: 3,
        explanation: "'Vast amounts' means immense or extremely large quantities.",
        explanationVi: "Cụm 'vast amounts' có nghĩa là số lượng vô cùng lớn hoặc rộng lớn ('large')."
      }
    ]
  },
  {
    id: 5,
    title: "Practice #5: Public Libraries",
    passageText: "A library is a place where resources such as books and newspapers are free to the public. As a result, libraries play a vital part in the world's communication and education. Many resources in libraries help people complete their work, studies, and networking. Libraries rank among society's most necessary institutions.",
    targetWords: ["vital", "resources", "complete", "rank", "necessary", "institutions"],
    questions: [
      {
        id: 25,
        word: "vital",
        questionText: "25) The word \"vital\" means",
        options: ["(A) strange", "(B) lucky", "(C) open", "(D) important"],
        correctIndex: 3,
        explanation: "'Vital part' means an essential or crucially important role in public education.",
        explanationVi: "Cụm 'vital part' có nghĩa là một vai trò thiết yếu hoặc quan trọng ('important') trong giáo dục cộng đồng."
      },
      {
        id: 26,
        word: "resources",
        questionText: "26) The word \"resources\" means",
        options: ["(A) quiet places", "(B) new ideas", "(C) learning tools", "(D) helpful people"],
        correctIndex: 2,
        explanation: "Library 'resources' (books, journals, digital archives) act as educational learning tools.",
        explanationVi: "Các 'resources' thư viện (như sách, báo) đóng vai trò là công cụ học tập ('learning tools')."
      },
      {
        id: 27,
        word: "complete",
        questionText: "27) The word \"complete\" means",
        options: ["(A) do", "(B) create", "(C) develop", "(D) deliver"],
        correctIndex: 0,
        explanation: "To 'complete their work' means to finish or do their assigned tasks and research.",
        explanationVi: "Cụm 'complete their work' có nghĩa là hoàn thành hoặc thực hiện ('do') các công việc được giao."
      },
      {
        id: 28,
        word: "rank",
        questionText: "28) The word \"rank\" means",
        options: ["(A) start", "(B) place", "(C) remain", "(D) finish"],
        correctIndex: 1,
        explanation: "'Rank among' means hold a place or position alongside prominent societal institutions.",
        explanationVi: "Cụm 'rank among' có nghĩa là đứng thứ hạng hoặc có vị trí ('place') bên cạnh các tổ chức xã hội quan trọng."
      },
      {
        id: 29,
        word: "necessary",
        questionText: "29) The word \"necessary\" means",
        options: ["(A) needed", "(B) unique", "(C) clever", "(D) diverse"],
        correctIndex: 0,
        explanation: "'Necessary' means essential or needed for public welfare.",
        explanationVi: "Từ 'necessary' có nghĩa là thiết yếu hoặc cần thiết ('needed') cho cộng đồng."
      },
      {
        id: 30,
        word: "institutions",
        questionText: "30) The word \"institutions\" probably means",
        options: ["(A) malls", "(B) businesses", "(C) establishments", "(D) schools"],
        correctIndex: 2,
        explanation: "Societal 'institutions' refers to key public organizations and formal establishments.",
        explanationVi: "Các 'institutions' xã hội đề cập đến các tổ chức công cộng chính hoặc cơ sở/thể chế ('establishments')."
      }
    ]
  },
  {
    id: 6,
    title: "Practice #6: Sleep Deprivation",
    passageText: "People who are deprived of sleep cannot concentrate because their brains stop working properly. This is especially true when performing routine tasks. People may be able to carry out these tasks well for short periods, but they may become easily distracted. After a while, they become much more prone to make mistakes.",
    targetWords: ["deprived of", "concentrate", "especially", "routine", "distracted", "prone"],
    questions: [
      {
        id: 31,
        word: "deprived of",
        questionText: "31) The expression \"deprived of\" means",
        options: ["(A) desiring", "(B) enjoying", "(C) forcing", "(D) lacking"],
        correctIndex: 3,
        explanation: "'Deprived of sleep' means lacking or suffering from insufficient rest.",
        explanationVi: "Cụm 'deprived of sleep' có nghĩa là thiếu hụt ('lacking') hoặc không có đủ giấc ngủ."
      },
      {
        id: 32,
        word: "concentrate",
        questionText: "32) The word \"concentrate\" means",
        options: ["(A) see", "(B) focus", "(C) survive", "(D) concern"],
        correctIndex: 1,
        explanation: "'Concentrate' means direct one's attention or focus mental effort.",
        explanationVi: "Từ 'concentrate' có nghĩa là tập trung sự chú ý hoặc dồn trí lực ('focus')."
      },
      {
        id: 33,
        word: "especially",
        questionText: "33) The word \"especially\" probably means",
        options: ["(A) usually", "(B) frankly", "(C) particularly", "(D) slowly"],
        correctIndex: 2,
        explanation: "'Especially true' highlights a specific or particularly prominent case.",
        explanationVi: "Cụm 'especially true' nhấn mạnh một trường hợp cụ thể hoặc đặc biệt ('particularly')."
      },
      {
        id: 34,
        word: "routine",
        questionText: "34) The word \"routine\" means",
        options: ["(A) creative", "(B) various", "(C) regular", "(D) difficult"],
        correctIndex: 2,
        explanation: "'Routine tasks' refers to repetitive, regular daily actions.",
        explanationVi: "Cụm 'routine tasks' đề cập đến các công việc lặp đi lặp lại thường nhật ('regular')."
      },
      {
        id: 35,
        word: "distracted",
        questionText: "35) The word \"distracted\" means",
        options: ["(A) anxious", "(B) sidetracked", "(C) entertained", "(D) misunderstood"],
        correctIndex: 1,
        explanation: "'Distracted' means having one's focus diverted or sidetracked away from the main task.",
        explanationVi: "Từ 'distracted' có nghĩa là bị xao nhãng hoặc phân tâm ('sidetracked') khỏi công việc chính."
      },
      {
        id: 36,
        word: "prone",
        questionText: "36) The word \"prone\" probably means",
        options: ["(A) excited", "(B) sad", "(C) certain", "(D) likely"],
        correctIndex: 3,
        explanation: "'Prone to make mistakes' means inclined or likely to commit errors.",
        explanationVi: "Cụm 'prone to make mistakes' có nghĩa là có khuynh hướng hoặc dễ/có khả năng ('likely') mắc sai lầm."
      }
    ]
  },
  {
    id: 7,
    title: "Practice #7: William Shakespeare",
    passageText: "William Shakespeare delights readers for many reasons. The appeal is mostly due to his deep understanding of human nature. As a result, his characters are not conventional. They are remarkably individual human beings.",
    targetWords: ["appeal", "mostly", "deep", "nature", "conventional", "remarkably"],
    questions: [
      {
        id: 37,
        word: "appeal",
        questionText: "37) The word \"appeal\" means",
        options: ["(A) importance", "(B) attraction", "(C) life", "(D) rhythm"],
        correctIndex: 1,
        explanation: "'The appeal' refers to the strong charm, interest, or attraction his plays hold.",
        explanationVi: "Cụm 'the appeal' đề cập đến sức hút mạnh mẽ hoặc sức hấp dẫn ('attraction') từ các tác phẩm kịch của ông."
      },
      {
        id: 38,
        word: "mostly",
        questionText: "38) The word \"mostly\" means",
        options: ["(A) mainly", "(B) certainly", "(C) slowly", "(D) randomly"],
        correctIndex: 0,
        explanation: "'Mostly due to' means primarily or mainly caused by his understanding.",
        explanationVi: "Cụm 'mostly due to' có nghĩa là chủ yếu hoặc phần lớn ('mainly') do sự thấu hiểu của ông."
      },
      {
        id: 39,
        word: "deep",
        questionText: "39) The word \"deep\" probably means",
        options: ["(A) strong", "(B) false", "(C) shallow", "(D) general"],
        correctIndex: 0,
        explanation: "'Deep understanding' means profound, strong, and insightful comprehension.",
        explanationVi: "Cụm 'deep understanding' có nghĩa là sự thấu hiểu sâu sắc và mạnh mẽ ('strong')."
      },
      {
        id: 40,
        word: "nature",
        questionText: "40) The word \"nature\" is closest in meaning to",
        options: ["(A) predictions", "(B) services", "(C) characteristics", "(D) supplies"],
        correctIndex: 2,
        explanation: "'Human nature' refers to the intrinsic psychological traits and characteristics of people.",
        explanationVi: "Cụm 'human nature' đề cập đến các đặc tính tâm lý nội tại và đặc điểm ('characteristics') của con người."
      },
      {
        id: 41,
        word: "conventional",
        questionText: "41) The word \"conventional\" probably means",
        options: ["(A) polite", "(B) old", "(C) typical", "(D) emotional"],
        correctIndex: 2,
        explanation: "'Not conventional' means non-standard and distinct from predictable or typical formulas.",
        explanationVi: "Cụm 'not conventional' có nghĩa là không theo khuôn mẫu thông thường hoặc điển hình ('typical')."
      },
      {
        id: 42,
        word: "remarkably",
        questionText: "42) The word \"remarkably\" means",
        options: ["(A) differently", "(B) variously", "(C) ordinarily", "(D) considerably"],
        correctIndex: 3,
        explanation: "'Remarkably individual' means strikingly or considerably distinct.",
        explanationVi: "Cụm 'remarkably individual' có nghĩa là có tính cá nhân đáng kinh ngạc hoặc rất đáng kể ('considerably')."
      }
    ]
  },
  {
    id: 8,
    title: "Practice #8: Voting Machines",
    passageText: "Voting machines provide a fast and legitimate way to determine election results. However, these machines must have good safeguards to make it difficult for people to tamper with the votes. Also, good systems must hinder the likelihood of erroneous voting.",
    targetWords: ["legitimate", "safeguards", "tamper with", "hinder", "likelihood", "erroneous"],
    questions: [
      {
        id: 43,
        word: "legitimate",
        questionText: "43) The word \"legitimate\" means",
        options: ["(A) cheap", "(B) trustworthy", "(C) original", "(D) professional"],
        correctIndex: 1,
        explanation: "A 'legitimate way' means a valid, lawful, and trustworthy process.",
        explanationVi: "Cụm 'legitimate way' có nghĩa là một quy trình hợp pháp và đáng tin cậy ('trustworthy')."
      },
      {
        id: 44,
        word: "safeguards",
        questionText: "44) The word \"safeguards\" probably means",
        options: ["(A) controls", "(B) alarms", "(C) protections", "(D) parts"],
        correctIndex: 2,
        explanation: "'Safeguards' are protective measures or security protections against fraud.",
        explanationVi: "Các 'safeguards' là các biện pháp bảo vệ an ninh ('protections') chống gian lận."
      },
      {
        id: 45,
        word: "tamper with",
        questionText: "45) The expression \"tamper with\" means",
        options: ["(A) change", "(B) locate", "(C) understand", "(D) reject"],
        correctIndex: 0,
        explanation: "'Tamper with the votes' means illegally alter, change, or interfere with election data.",
        explanationVi: "Cụm 'tamper with the votes' có nghĩa là can thiệp trái phép, làm thay đổi ('change') kết quả phiếu bầu."
      },
      {
        id: 46,
        word: "hinder",
        questionText: "46) The word \"hinder\" probably means",
        options: ["(A) hide", "(B) prevent", "(C) increase", "(D) provide"],
        correctIndex: 1,
        explanation: "To 'hinder' means to impede, slow down, or prevent bad outcomes.",
        explanationVi: "Từ 'hinder' có nghĩa là cản trở, làm chậm lại hoặc ngăn chặn ('prevent') các kết quả xấu."
      },
      {
        id: 47,
        word: "likelihood",
        questionText: "47) The word \"likelihood\" means",
        options: ["(A) warning", "(B) check", "(C) type", "(D) possibility"],
        correctIndex: 3,
        explanation: "'Likelihood' refers to probability or possibility of an occurrence.",
        explanationVi: "Từ 'likelihood' đề cập đến xác suất hoặc khả năng xảy ra ('possibility')."
      },
      {
        id: 48,
        word: "erroneous",
        questionText: "48) The word \"erroneous\" means",
        options: ["(A) necessary", "(B) repeated", "(C) rushed", "(D) mistaken"],
        correctIndex: 3,
        explanation: "'Erroneous voting' means incorrect or mistaken ballot submission.",
        explanationVi: "Cụm 'erroneous voting' có nghĩa là việc bỏ phiếu sai sót hoặc nhầm lẫn ('mistaken')."
      }
    ]
  },
  {
    id: 9,
    title: "Practice #9: Shark Sensory Traits",
    passageText: "Sharks sense their surroundings in special ways. They have tiny internal ears which contain cells that are sensitive to vibrations from a great distance away. In addition, sharks are able to sense electrical currents. These traits help them maneuver through the sea.",
    targetWords: ["surroundings", "internal", "contain", "In addition", "traits", "maneuver"],
    questions: [
      {
        id: 49,
        word: "surroundings",
        questionText: "49) The word \"surroundings\" means",
        options: ["(A) environment", "(B) knowledge", "(C) experience", "(D) strength"],
        correctIndex: 0,
        explanation: "'Surroundings' refers to the marine environment encompassing the shark.",
        explanationVi: "Từ 'surroundings' đề cập đến môi trường xung quanh ('environment') bao quanh con cá mập."
      },
      {
        id: 50,
        word: "internal",
        questionText: "50) The word \"internal\" means",
        options: ["(A) thin", "(B) inner", "(C) powerful", "(D) broad"],
        correctIndex: 1,
        explanation: "'Internal ears' are inner hearing organs located inside the shark's skull.",
        explanationVi: "Cụm 'internal ears' là cơ quan thính giác bên trong ('inner') nằm trong hộp sọ của cá mập."
      },
      {
        id: 51,
        word: "contain",
        questionText: "51) The word \"contain\" probably means",
        options: ["(A) share", "(B) improve", "(C) have", "(D) use"],
        correctIndex: 2,
        explanation: "Their ears 'contain' (have or hold) sensory hair cells.",
        explanationVi: "Tai của chúng 'contain' (có hoặc chứa - 'have') các tế bào cảm giác."
      },
      {
        id: 52,
        word: "In addition",
        questionText: "52) The expression \"In addition\" means",
        options: ["(A) moreover", "(B) next", "(C) finally", "(D) however"],
        correctIndex: 0,
        explanation: "'In addition' adds an extra fact; synonymous with moreover or furthermore.",
        explanationVi: "Cụm 'In addition' dùng để bổ sung thêm thông tin; đồng nghĩa với 'moreover' hoặc 'furthermore'."
      },
      {
        id: 53,
        word: "traits",
        questionText: "53) The word \"traits\" means",
        options: ["(A) qualities", "(B) interests", "(C) reasons", "(D) quantities"],
        correctIndex: 0,
        explanation: "Sensory 'traits' are biological features or qualities.",
        explanationVi: "Các 'traits' cảm giác là các đặc điểm hoặc phẩm chất sinh học ('qualities')."
      },
      {
        id: 54,
        word: "maneuver",
        questionText: "54) The word \"maneuver\" means",
        options: ["(A) support", "(B) navigate", "(C) maintain", "(D) follow"],
        correctIndex: 1,
        explanation: "To 'maneuver through the sea' means to steer, swim skillfully, or navigate.",
        explanationVi: "Cụm 'maneuver through the sea' có nghĩa là điều khiển, bơi lội khéo léo hoặc điều hướng ('navigate')."
      }
    ]
  },
  {
    id: 10,
    title: "Practice #10: Opera Houses",
    passageText: "Opera houses are theaters that are specifically designed for opera performances. Most opera houses seat more people than do theaters reserved only for plays. An opera house also has equipment to support the elaborate sets required by many operas.",
    targetWords: ["specifically", "seat", "reserved", "equipment", "elaborate", "required"],
    questions: [
      {
        id: 55,
        word: "specifically",
        questionText: "55) The word \"specifically\" is closest in meaning to",
        options: ["(A) continually", "(B) beautifully", "(C) steadily", "(D) specially"],
        correctIndex: 3,
        explanation: "'Specifically designed' means engineered for a particular or special purpose.",
        explanationVi: "Cụm 'specifically designed' có nghĩa là được thiết kế cho một mục đích cụ thể hoặc đặc biệt ('specially')."
      },
      {
        id: 56,
        word: "seat",
        questionText: "56) The word \"seat\" is closest in meaning to",
        options: ["(A) hold", "(B) attract", "(C) make", "(D) enjoy"],
        correctIndex: 0,
        explanation: "'Seat more people' means accommodate or hold a capacity of audience members.",
        explanationVi: "Cụm 'seat more people' có nghĩa là có sức chứa ('hold') số lượng khán giả lớn hơn."
      },
      {
        id: 57,
        word: "reserved",
        questionText: "57) The word \"reserved\" means",
        options: ["(A) observed", "(B) dedicated", "(C) realized", "(D) reached"],
        correctIndex: 1,
        explanation: "Theaters 'reserved' only for plays are set aside or dedicated exclusively to drama.",
        explanationVi: "Các nhà hát được 'reserved' cho kịch nói là những nơi được dành riêng ('dedicated') cho kịch."
      },
      {
        id: 58,
        word: "equipment",
        questionText: "58) The word \"equipment\" is closest in meaning to",
        options: ["(A) devices", "(B) advantages", "(C) vehicles", "(D) effects"],
        correctIndex: 0,
        explanation: "'Equipment' refers to mechanical tools, rigging, and stage devices.",
        explanationVi: "Từ 'equipment' đề cập đến dụng cụ, thiết bị sân khấu ('devices')."
      },
      {
        id: 59,
        word: "elaborate",
        questionText: "59) The word \"elaborate\" is closest in meaning to",
        options: ["(A) complex", "(B) valuable", "(C) dangerous", "(D) old"],
        correctIndex: 0,
        explanation: "'Elaborate sets' are detailed, intricate, or complex stage decorations.",
        explanationVi: "Cụm 'elaborate sets' chỉ bối cảnh sân khấu tỉ mỉ, công phu hoặc phức tạp ('complex')."
      },
      {
        id: 60,
        word: "required",
        questionText: "60) The word \"required\" means",
        options: ["(A) produced", "(B) needed", "(C) destroyed", "(D) employed"],
        correctIndex: 1,
        explanation: "Stage sets 'required' by operas are those needed or necessary for the production.",
        explanationVi: "Các bối cảnh sân khấu 'required' bởi nhạc剧 opera là những gì cần thiết ('needed') cho buổi diễn."
      }
    ]
  }
];

export const POP_QUIZ_QUESTIONS: PopQuizQuestion[] = [
  {
    id: 1,
    word: "provide",
    options: [
      { letter: "A", text: "supply" },
      { letter: "B", text: "restrict" },
      { letter: "C", text: "reserve" },
      { letter: "D", text: "prove" }
    ],
    correctLetter: "A",
    explanation: "'Provide' and 'supply' both mean to make something available for use.",
    explanationVi: "'Provide' và 'supply' đều có nghĩa là cung cấp, làm cho thứ gì đó có sẵn để sử dụng."
  },
  {
    id: 2,
    word: "categorize",
    options: [
      { letter: "A", text: "classify" },
      { letter: "B", text: "decide" },
      { letter: "C", text: "concern" },
      { letter: "D", text: "involve" }
    ],
    correctLetter: "A",
    explanation: "'Categorize' means to place into groups or classify.",
    explanationVi: "'Categorize' và 'classify' đều có nghĩa là phân loại hoặc xếp vào các nhóm."
  },
  {
    id: 3,
    word: "make sense",
    options: [
      { letter: "A", text: "be reasonable" },
      { letter: "B", text: "be capable" },
      { letter: "C", text: "be available" },
      { letter: "D", text: "be possible" }
    ],
    correctLetter: "A",
    explanation: "'Make sense' means to be logical or reasonable.",
    explanationVi: "'Make sense' có nghĩa là hợp lý, có lý ('be reasonable') hoặc dễ hiểu."
  },
  {
    id: 4,
    word: "eliminate",
    options: [
      { letter: "A", text: "establish" },
      { letter: "B", text: "remove" },
      { letter: "C", text: "launch" },
      { letter: "D", text: "confirm" }
    ],
    correctLetter: "B",
    explanation: "'Eliminate' means to completely remove or get rid of.",
    explanationVi: "'Eliminate' có nghĩa là loại bỏ hoàn toàn ('remove' hoặc 'get rid of')."
  },
  {
    id: 5,
    word: "original",
    options: [
      { letter: "A", text: "final" },
      { letter: "B", text: "common" },
      { letter: "C", text: "obvious" },
      { letter: "D", text: "unique" }
    ],
    correctLetter: "D",
    explanation: "'Original' refers to initial or distinctively unique creations.",
    explanationVi: "'Original' chỉ tác phẩm/ý tưởng ban đầu hoặc độc đáo, riêng biệt ('unique')."
  },
  {
    id: 6,
    word: "proper",
    options: [
      { letter: "A", text: "illegal" },
      { letter: "B", text: "simple" },
      { letter: "C", text: "proud" },
      { letter: "D", text: "suitable" }
    ],
    correctLetter: "D",
    explanation: "'Proper' means appropriate, right, or suitable.",
    explanationVi: "'Proper' có nghĩa là thích hợp, phù hợp ('suitable') hoặc đúng đắn."
  },
  {
    id: 7,
    word: "decrease",
    options: [
      { letter: "A", text: "defend" },
      { letter: "B", text: "improve" },
      { letter: "C", text: "lessen" },
      { letter: "D", text: "return" }
    ],
    correctLetter: "C",
    explanation: "'Decrease' and 'lessen' both mean to make smaller in amount or degree.",
    explanationVi: "'Decrease' và 'lessen' đều có nghĩa là giảm bớt, làm nhỏ đi về số lượng hay mức độ."
  },
  {
    id: 8,
    word: "disagree",
    options: [
      { letter: "A", text: "grant" },
      { letter: "B", text: "disappear" },
      { letter: "C", text: "oppose" },
      { letter: "D", text: "approve" }
    ],
    correctLetter: "C",
    explanation: "'Disagree' means to differ in opinion or oppose.",
    explanationVi: "'Disagree' có nghĩa là bất đồng ý kiến hoặc phản đối ('oppose')."
  },
  {
    id: 9,
    word: "extract",
    options: [
      { letter: "A", text: "move in" },
      { letter: "B", text: "pull out" },
      { letter: "C", text: "make up" },
      { letter: "D", text: "start to" }
    ],
    correctLetter: "B",
    explanation: "'Extract' (ex = out + tract = draw) means to pull out.",
    explanationVi: "'Extract' (tiền tố ex = out + gốc tract = draw) có nghĩa là rút ra, trích xuất ('pull out')."
  },
  {
    id: 10,
    word: "forecast",
    options: [
      { letter: "A", text: "reflect" },
      { letter: "B", text: "judge" },
      { letter: "C", text: "think" },
      { letter: "D", text: "predict" }
    ],
    correctLetter: "D",
    explanation: "'Forecast' (fore = before + cast = estimate) means to predict.",
    explanationVi: "'Forecast' (tiền tố fore = before + cast = estimate) có nghĩa là dự đoán, tiên đoán ('predict')."
  },
  {
    id: 11,
    word: "interrupt",
    options: [
      { letter: "A", text: "enter" },
      { letter: "B", text: "reduce" },
      { letter: "C", text: "disturb" },
      { letter: "D", text: "extend" }
    ],
    correctLetter: "C",
    explanation: "'Interrupt' means to break into an ongoing action or disturb.",
    explanationVi: "'Interrupt' (tiền tố inter = between + gốc rupt = break) có nghĩa là ngắt lời, làm gián đoạn ('disturb')."
  },
  {
    id: 12,
    word: "postpone",
    options: [
      { letter: "A", text: "delay" },
      { letter: "B", text: "continue" },
      { letter: "C", text: "maintain" },
      { letter: "D", text: "resume" }
    ],
    correctLetter: "A",
    explanation: "'Postpone' (post = after + pon = put) means to delay.",
    explanationVi: "'Postpone' (tiền tố post = after + gốc pon = put) có nghĩa là hoãn lại, làm chậm trễ ('delay')."
  },
  {
    id: 13,
    word: "revoke",
    options: [
      { letter: "A", text: "remind" },
      { letter: "B", text: "cancel" },
      { letter: "C", text: "explore" },
      { letter: "D", text: "reveal" }
    ],
    correctLetter: "B",
    explanation: "'Revoke' (re = back + vok = call) means to officially cancel or annul.",
    explanationVi: "'Revoke' (tiền tố re = back + gốc vok = call) có nghĩa là thu hồi, hủy bỏ chính thức ('cancel')."
  },
  {
    id: 14,
    word: "quarrelsome",
    options: [
      { letter: "A", text: "agreeable" },
      { letter: "B", text: "friendly" },
      { letter: "C", text: "forceful" },
      { letter: "D", text: "argumentative" }
    ],
    correctLetter: "D",
    explanation: "'Quarrelsome' means quick to argue or argumentative.",
    explanationVi: "'Quarrelsome' có nghĩa là hay tranh cãi, hay gây gổ ('argumentative')."
  },
  {
    id: 15,
    word: "sovereign",
    options: [
      { letter: "A", text: "soft" },
      { letter: "B", text: "dominant" },
      { letter: "C", text: "dismissive" },
      { letter: "D", text: "sacred" }
    ],
    correctLetter: "B",
    explanation: "'Sovereign' refers to a supreme or dominant authority/ruler.",
    explanationVi: "'Sovereign' chỉ quyền lực tối cao hoặc người cai trị có ảnh hưởng áp đảo ('dominant')."
  },
  {
    id: 16,
    word: "unique",
    options: [
      { letter: "A", text: "distinctive" },
      { letter: "B", text: "common" },
      { letter: "C", text: "ordinary" },
      { letter: "D", text: "abnormal" }
    ],
    correctLetter: "A",
    explanation: "'Unique' means being one of a kind or distinctive.",
    explanationVi: "'Unique' có nghĩa là độc nhất, có đặc trưng riêng biệt ('distinctive')."
  },
  {
    id: 17,
    word: "overlooked",
    options: [
      { letter: "A", text: "understood" },
      { letter: "B", text: "damaged" },
      { letter: "C", text: "unnoticed" },
      { letter: "D", text: "handled" }
    ],
    correctLetter: "C",
    explanation: "'Overlooked' means passed over or left unnoticed.",
    explanationVi: "'Overlooked' có nghĩa là bị bỏ qua, không được chú ý tới ('unnoticed')."
  },
  {
    id: 18,
    word: "play a part",
    options: [
      { letter: "A", text: "play a fool" },
      { letter: "B", text: "play a scene" },
      { letter: "C", text: "play a segment" },
      { letter: "D", text: "play a role" }
    ],
    correctLetter: "D",
    explanation: "'Play a part' means to contribute to or play a role in something.",
    explanationVi: "'Play a part' có nghĩa là đóng một vai trò ('play a role') hoặc góp phần vào điều gì đó."
  },
  {
    id: 19,
    word: "raise",
    options: [
      { letter: "A", text: "locate" },
      { letter: "B", text: "elevate" },
      { letter: "C", text: "force" },
      { letter: "D", text: "race" }
    ],
    correctLetter: "B",
    explanation: "'Raise' and 'elevate' both mean to lift or move to a higher position.",
    explanationVi: "'Raise' và 'elevate' đều có nghĩa là nâng lên hoặc đưa lên vị trí cao hơn."
  },
  {
    id: 20,
    word: "appropriate",
    options: [
      { letter: "A", text: "amazing" },
      { letter: "B", text: "correct" },
      { letter: "C", text: "interesting" },
      { letter: "D", text: "various" }
    ],
    correctLetter: "B",
    explanation: "'Appropriate' means suitable, proper, or correct for the context.",
    explanationVi: "'Appropriate' có nghĩa là thích hợp, phù hợp, đúng đắn ('correct') trong ngữ cảnh."
  },
  {
    id: 21,
    word: "insist",
    options: [
      { letter: "A", text: "engage" },
      { letter: "B", text: "perform" },
      { letter: "C", text: "demand" },
      { letter: "D", text: "include" }
    ],
    correctLetter: "C",
    explanation: "'Insist' means to maintain firmly or demand forcefully.",
    explanationVi: "'Insist' có nghĩa là khăng khăng, đòi hỏi một cách kiên quyết ('demand')."
  },
  {
    id: 22,
    word: "frankly",
    options: [
      { letter: "A", text: "recently" },
      { letter: "B", text: "seriously" },
      { letter: "C", text: "honestly" },
      { letter: "D", text: "carefully" }
    ],
    correctLetter: "C",
    explanation: "'Frankly' means openly, directly, or honestly.",
    explanationVi: "'Frankly' có nghĩa là thẳng thắn, bộc bạch, thành thật ('honestly')."
  },
  {
    id: 23,
    word: "polite",
    options: [
      { letter: "A", text: "difficult" },
      { letter: "B", text: "gracious" },
      { letter: "C", text: "informal" },
      { letter: "D", text: "pretty" }
    ],
    correctLetter: "B",
    explanation: "'Polite' means showing courteous behavior, gracious.",
    explanationVi: "'Polite' có nghĩa là lịch sự, tao nhã, nhã nhặn ('gracious')."
  },
  {
    id: 24,
    word: "trustworthy",
    options: [
      { letter: "A", text: "reliable" },
      { letter: "B", text: "awful" },
      { letter: "C", text: "typical" },
      { letter: "D", text: "superior" }
    ],
    correctLetter: "A",
    explanation: "'Trustworthy' means dependable or reliable.",
    explanationVi: "'Trustworthy' có nghĩa là đáng tin cậy, có thể trông cậy ('reliable')."
  },
  {
    id: 25,
    word: "reject",
    options: [
      { letter: "A", text: "review" },
      { letter: "B", text: "decline" },
      { letter: "C", text: "determine" },
      { letter: "D", text: "attract" }
    ],
    correctLetter: "B",
    explanation: "'Reject' means to refuse to accept or decline.",
    explanationVi: "'Reject' có nghĩa là từ chối, bác bỏ ('decline')."
  }
];
