import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormMain from "./pages/emploi";
import Main from "./pages/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/emploi" element={<FormMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
