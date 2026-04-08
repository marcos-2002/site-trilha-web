import Header from "./layout/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Stage from "./pages/Stage";
import VideoLeassons from "./pages/VideoLeassons";
import { IeeePathContext } from "./context/IeeePath";
import { useState, useEffect } from "react";

function App() {

  const [ieeePath, setIeeePath] = useState([])
  
  useEffect(() => {
          
    fetch('/data/learning_path_data.json')
    .then((res) => res.json())
    .then((data) => setIeeePath(data.ieee_path))
    .catch((error) => console.error(error))

  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="my-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
          <IeeePathContext value={ieeePath}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/etapa/:id_etapa" element={<Stage />} />
                <Route path="/etapa/:id_etapa/modulo/:id_modulo/aula/:id_aula" element={<VideoLeassons />} />
              </Routes>
          </IeeePathContext>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
