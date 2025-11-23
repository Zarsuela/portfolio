import React, { useState } from "react";
import Home from "./Home";
import Prelim from "./Prelim";
import Midterm from "./Midterm";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="App">
      <header>
        <h1 onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          My Portfolio
        </h1>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("prelim")}>Prelim</button>
          <button onClick={() => setPage("midterm")}>Midterm</button>
        </nav>
      </header>
      <main>
        {page === "home" && <Home />}
        {page === "prelim" && <Prelim />}
        {page === "midterm" && <Midterm />}
      </main>
      <footer>
        <small>© 2025 John Daryl Zarsuela</small>
      </footer>
    </div>
  );
}

export default App;
