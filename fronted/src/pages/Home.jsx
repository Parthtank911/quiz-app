function Home({ setPage }) {
  return (
    <div className="home-page">
      <h1>Welcome to the Quiz App!</h1>
      <p>Test your knowledge by taking our fun quiz.</p>
      <button onClick={() => setPage("quiz")}>Start Quiz</button>
    </div>
  );
}

export default Home;
