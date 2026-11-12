
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Practice from "./pages/Practice";
import SavedPhrases from "./pages/SavedPhrases";
import Conversation from "./pages/Conversation";
import PhraseExplorer from "./pages/PhraseExplorer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/saved" element={<SavedPhrases />} />
          <Route path="/phrases" element={<PhraseExplorer />} />
          <Route path="/conversation/:scenarioId" element={<Conversation />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
