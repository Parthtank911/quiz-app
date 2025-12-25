function Result({ score, total, setPage }) {
  return (
    <div className="result-page">
      <h2>Your Score: {score} / {total}</h2>
      <button onClick={() => setPage("home")}>Go Home</button>
    </div>
  );
}

export default Result;
