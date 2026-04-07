import { useState, useEffect } from "react"
import StageCards from "../components/StageCards"

export default function Home() {

    const [ieeePath, setIeeePath] = useState("")

    useEffect(() => {
        
        fetch('/data/learning_path_data.json')
        .then((res) => res.json())
        .then((data) => setIeeePath(data.ieee_path))
    
    }, [])

    return(
        <>
            {ieeePath.length > 0 && (
                <>
                    <h1 className="text-xl sm:text-2xl mb-1 font-bold leading-relaxed text-center">
                        Bem-vindo à trilha de aprendizado da subárea 
                        <span className="text-blue-600">{ieeePath[0].subarea}</span> do 
                        <span className="font-extrabold">WolfByte</span>! 
                    </h1>

                    <p className="text-center mb-16 text-xs sm:text-sm">
                        Aqui você encontrará módulos cuidadosamente estruturados para guiá-lo passo a passo.
                        Siga cada aula codificando os exemplos mostrados, experimentando e construindo seus próprios projetos.  
                        Não tenha medo de se aventurar e testar novas ideias.  
                        Estamos animados para ver você crescer e conquistar novos conhecimentos enquanto coloca o aprendizado em ação!
                    </p>

                    <div className="mb-16 p-4 border border-[#00000021] rounded-lg bg-[#0000000e] shadow-md">
                        <h2 className="text-sm sm:text-lg font-semibold mb-2">Status dos Cards</h2>
                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-gray-700 sm:text-sm">
                            <li>Vermelho: parte escrita ainda em elaboração.</li>
                            <li>Amarelo: parte escrita concluída, vídeos em gravação.</li>
                            <li>Verde: parte escrita concluída e vídeo aulas gravadas.</li>
                        </ul>
                        <p className="mt-2 text-gray-600 text-xs sm:text-sm">
                            Acompanhe o progresso conforme os cards forem liberados.
                        </p>
                    </div>

                    <div className="flex justify-center gap-7 flex-wrap">
                        {ieeePath[0].stages.map((stage) => (
                            <StageCards key={stage.id} stage_title={stage.stage_title} id_stage={stage.id} image={stage.image} phase={stage.phase}/>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}