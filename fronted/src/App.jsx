import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  const [user, setUser] = useState({ id: 1, name: "Guest" }); // temporary user
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar user={user} setUser={setUser} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "quiz" && <Quiz user={user} setPage={setPage} />}
    </>
  );
}

export default App;
