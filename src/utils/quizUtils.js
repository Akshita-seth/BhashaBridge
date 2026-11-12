
function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function generateQuiz(phrases, questionCount = 5) {
  if (phrases.length < 4) {
    return [];
  }

  const selectedPhrases = shuffleArray(phrases).slice(
    0,
    Math.min(questionCount, phrases.length)
  );

  return selectedPhrases.map((phrase) => {
    const distractors = shuffleArray(
      phrases.filter((item) => item.id !== phrase.id)
    ).slice(0, 3);

    const options = shuffleArray([phrase, ...distractors]);

    return {
      id: phrase.id,
      question: phrase.meaning,
      options,
      correctOptionId: phrase.id,
      explanation: `${phrase.transliteration} — ${phrase.meaning}`,
    };
  });
}
