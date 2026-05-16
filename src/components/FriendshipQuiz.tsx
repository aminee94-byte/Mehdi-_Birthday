import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Lock, PartyPopper, RotateCcw, Trophy } from 'lucide-react';
import { finalMessage, quizQuestions } from '../data/museumContent';
import { SectionHeader } from './SectionHeader';

type FriendshipQuizProps = {
  onComplete: () => void;
};

export function FriendshipQuiz({ onComplete }: FriendshipQuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const score = useMemo(
    () => quizQuestions.reduce((total, question, index) => total + (answers[index] === question.correctAnswer ? 1 : 0), 0),
    [answers],
  );
  const isComplete = answeredCount === quizQuestions.length;

  function chooseAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;
    setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }));
  }

  function submitQuiz() {
    if (!isComplete) return;
    setSubmitted(true);
    onComplete();
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  const resultMessage =
    score === quizQuestions.length
      ? 'Perfect score. Friendship license renewed with honors.'
      : score >= 3
        ? 'Excellent work. The museum board is impressed and only mildly concerned.'
        : 'A bold performance. Retake the tour, collect more lore, and try again.';

  return (
    <section className="px-5 py-20 sm:px-8" id="quiz">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Friendship quiz"
          title="Pass the quiz to unlock the secret exhibit"
          description="Five editable multiple-choice questions. Serious academic value? Zero. Friendship value? Immense."
          icon={Trophy}
        />
        <div className="space-y-5">
          {quizQuestions.map((question, questionIndex) => (
            <motion.article
              key={question.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: questionIndex * 0.04 }}
              className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-xl shadow-rose-100/50 backdrop-blur sm:p-6"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 font-black text-rose-700">
                  {questionIndex + 1}
                </div>
                <h3 className="pt-2 text-xl font-black text-stone-950">{question.question}</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[questionIndex] === optionIndex;
                  const showCorrect = submitted && question.correctAnswer === optionIndex;
                  const showWrong = submitted && selected && !showCorrect;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => chooseAnswer(questionIndex, optionIndex)}
                      className={`rounded-2xl border p-4 text-left font-semibold transition ${
                        showCorrect
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : showWrong
                            ? 'border-rose-300 bg-rose-50 text-rose-800'
                            : selected
                              ? 'border-rose-300 bg-rose-100 text-rose-900'
                              : 'border-stone-200 bg-white text-stone-700 hover:border-rose-200 hover:bg-rose-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {showCorrect && <CheckCircle2 className="h-5 w-5" />}
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-7 rounded-[2rem] border border-white/80 bg-white/80 p-5 text-center shadow-xl shadow-amber-100/60 backdrop-blur sm:p-7">
          <p className="font-bold text-stone-600">
            Answered {answeredCount} of {quizQuestions.length}
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={submitQuiz}
              disabled={!isComplete || submitted}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:hover:translate-y-0"
            >
              {submitted ? <PartyPopper className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
              {submitted ? 'Secret exhibit unlocked' : 'Submit quiz'}
            </button>
            <button
              type="button"
              onClick={resetQuiz}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-4 font-black text-stone-800 transition hover:-translate-y-0.5 hover:border-rose-200 hover:text-rose-700"
            >
              <RotateCcw className="h-5 w-5" />
              Reset
            </button>
          </div>
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="mx-auto mt-6 max-w-2xl rounded-3xl bg-rose-50 p-5"
              >
                <p className="text-3xl font-black text-stone-950">
                  Score: {score}/{quizQuestions.length}
                </p>
                <p className="mt-2 text-stone-600">{resultMessage}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-rose-600">{finalMessage.title} is now open below.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
