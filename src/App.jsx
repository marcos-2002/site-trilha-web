import StageCards from "./components/StageCards"
import Header from "./layout/Header"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/etapa/:id" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
