function QuestionCard({ question, handleAnswer }) {
  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      <div className="options">
        {[1, 2, 3, 4].map(i => (
          <button key={i} onClick={() => handleAnswer(i)}>
            {question[`option${i}`]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
