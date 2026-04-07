import Header from "./layout/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Header />
      <div className="my-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/etapa/:id" element={<App />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
