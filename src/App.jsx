import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { MyLinks } from "./components/MyLinks";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/gerador-de-links" element={<HomePage />} />
        <Route path="/gerador-de-links/meus-links" element={<MyLinks />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
