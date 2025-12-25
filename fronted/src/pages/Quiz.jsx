import { useEffect, useState } from "react";
import { API } from "../services/api";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";

function Quiz({ user, setPage }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    API.get("/quiz").then(res => setQuestions(res.data));
  }, []);

  const handleAnswer = (option) => {
    if(option === questions[current].correct_option) setScore(score+1);
    if(current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
  };

  const submitResult = () => {
    API.post("/quiz/submit", { user_id: user?.id || 0, score });
  };

  if(finished) {
    submitResult();
    return (
      <div className="result-page">
        <h2>Your Score: {score} / {questions.length}</h2>
        <button onClick={() => setPage("home")}>Go Home</button>
      </div>
    );
  }

  return questions.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <>
      <ProgressBar current={current + 1} total={questions.length} />
      <QuestionCard question={questions[current]} handleAnswer={handleAnswer} />
    </>
  );
}

export default Quiz;
