import { useContext } from "react"
import StageCards from "../components/StageCards"
import { IeeePathContext } from "../context/IeeePath"

export default function Home() {

    const ieeePath = useContext(IeeePathContext)

    if (!ieeePath || ieeePath.length === 0) return <p>Carregando...</p>

    return(
        <>
            {ieeePath.length > 0 && (
                <>
                    <h1 className="text-xl sm:text-2xl mb-1 font-bold leading-relaxed text-center">
                        Bem-vindo à trilha de aprendizado da subárea
                        <span className="text-blue-600"> {ieeePath[0].subarea}</span> do
                        <span className="font-extrabold"> WolfByte</span>! 
                    </h1>

                    <p className="text-center mb-16 text-xs sm:text-base">
                        Aqui você encontrará módulos cuidadosamente estruturados para guiá-lo passo a passo.
                        Siga cada aula codificando os exemplos mostrados, experimentando e construindo seus próprios projetos.  
                        Não tenha medo de se aventurar e testar novas ideias.  
                        Estamos animados para ver você crescer e conquistar novos conhecimentos enquanto coloca o aprendizado em ação!
                    </p>

                    <div className="mb-16 px-4 sm:px-10 py-5 sm:py-7 border border-[#00000021] rounded-lg shadow w-full sm:w-2/3 lg:w-1/2 mx-auto">
                        <h2 className="text-base sm:text-xl font-semibold mb-2">Status dos Cards</h2>
                        <ul className="space-y-1 text-xs sm:text-gray-700 sm:text-base">
                            <li>
                                <span className="inline-block w-2 h-2 rounded-full bg-[#f5b1b1] mr-3"></span>
                                <span className="font-semibold">Vermelho</span>: parte escrita ainda em elaboração.
                            </li>
                            <li>
                                <span className="inline-block w-2 h-2 rounded-full bg-[#f5f396] mr-3"></span>
                                <span className="font-semibold">Amarelo</span>: parte escrita concluída, vídeos em gravação.
                            </li>
                            <li>
                                <span className="inline-block w-2 h-2 rounded-full bg-[#94f390] mr-3"></span>
                                <span className="font-semibold">Verde</span>: parte escrita concluída e vídeo aulas gravadas.
                            </li>
                        </ul>
                        <p className="mt-2 text-gray-400 text-xs sm:text-sm italic">
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