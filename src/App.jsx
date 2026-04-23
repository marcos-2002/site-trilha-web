import Header from "./layout/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Stage from "./pages/Stage";
import VideoLeassons from "./pages/VideoLeassons";
import { IeeePathContext } from "./context/IeeePath";
import { useState, useEffect } from "react";
import Footer from "./layout/Footer";

function App() {

  const [ieeePath, setIeeePath] = useState([])
  
  useEffect(() => {
          
    fetch('/data/learning_path_data.json')
    .then((res) => res.json())
    .then((data) => setIeeePath(data.ieee_path))
    .catch((error) => console.error(error))

  }, [])

  if (ieeePath.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 my-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
            <IeeePathContext value={ieeePath}>
                <Routes>
                  <Route path="/site-trilha-web" element={<Home />} />
                  <Route path="/etapa/:id_etapa" element={<Stage />} />
                  <Route path="/etapa/:id_etapa/modulo/:id_modulo/aula/:id_aula" element={<VideoLeassons />} />
                </Routes>
            </IeeePathContext>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
