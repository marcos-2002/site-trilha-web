import { useContext } from "react"
import { IeeePathContext } from "../context/IeeePath"
import { useNavigate, useParams } from "react-router"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function VideoLeassons() {

    const ieeePath = useContext(IeeePathContext)

    const {id_etapa, id_modulo, id_aula} = useParams()

    const prev = ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].prev
    const next = ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].next

    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-xl sm:text-2xl mb-10 font-bold leading-relaxed text-center">
                    Aula {id_aula} - {ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].lesson_title}
                </h1>
                {ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].lesson_video_link !== null 
                    ? (
                        <>
                            <p className="mb-1">
                                O vídeo desta aula já está disponível para você assistir.
                            </p>
                            <p className="mb-10">
                                Se preferir, também é possível baixar o PDF completo do módulo com todas as aulas. Basta clicar no botão <span className="font-bold">“Baixar módulo”</span>.
                            </p>
                            
                            <a className="
                                mt-auto mb-10
                                bg-[#0D5FAA] text-white 
                                px-15 
                                py-4 rounded-md
                                font-semibold 
                                text-xs sm:text-sm xl:text-lg
                                hover:bg-[#083d6e]
                                cursor-pointer
                                "
                                href={ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].text_module_link}
                                download={`modulo_${id_modulo}.pdf`}
                            >
                                Baixar módulo
                            </a>
                            <div className="flex flex-col items-center gap-4">
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src={ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].lesson_video_link} 
                                    title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen>
                                </iframe>
                                
                                <div className="flex flex-wrap justify-between m-4">
                                    <button className={`
                                        mt-auto mb-10 
                                        px-15 
                                        font-semibold 
                                        text-xs sm:text-sm xl:text-base ${prev !== null ? 'text-[#0D5FAA] hover:text-[#083d6e]' : 'text-gray-400'}
                                        cursor-pointer
                                        flex items-center gap-2
                                        `}
                                        onClick={() => prev !== null ? navigate(`/etapa/${id_etapa}/modulo/${id_modulo}/aula/${prev}`) : ''}
                                    >
                                        <IoIosArrowBack /> Aula anterior
                                    </button>
                                    <button className="
                                        mt-auto mb-10 
                                        px-15 
                                        font-semibold 
                                        text-xs sm:text-sm xl:text-base text-[#0D5FAA] hover:text-[#083d6e]
                                        cursor-pointer
                                        flex items-center gap-2
                                        border-x
                                        "
                                        onClick={() => navigate(`/etapa/${id_etapa}`)}
                                    >
                                        Voltar para Módulos
                                    </button>
                                    <button className={`
                                        mt-auto mb-10 
                                        px-15 
                                        font-semibold 
                                        text-xs sm:text-sm xl:text-base ${next !== null ? 'text-[#0D5FAA] hover:text-[#083d6e]' : 'text-gray-400'}
                                        cursor-pointer
                                        flex items-center gap-2
                                        `}
                                        onClick={() => next !== null ? navigate(`/etapa/${id_etapa}/modulo/${id_modulo}/aula/${next}`) : ''}
                                    >
                                        Próxima aula <IoIosArrowForward />
                                    </button>
                                    
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="mb-1">
                                O vídeo desta aula ainda está sendo finalizado e será disponibilizado em breve.
                            </p>
                            <p className="mb-10">
                                Enquanto isso, você pode acessar todo o conteúdo baixando o PDF completo do módulo. Basta clicar no botão <span className="font-bold">“Baixar módulo”</span>.
                            </p>
                            <a className="
                                mt-auto mb-10
                                bg-[#0D5FAA] text-white 
                                px-15 
                                py-4 rounded-md
                                font-semibold 
                                text-xs sm:text-sm xl:text-lg
                                hover:bg-[#083d6e]
                                cursor-pointer
                                "
                                href={ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].text_module_link}
                                download={`modulo_${id_modulo}.pdf`}
                            >
                                Baixar módulo
                            </a>

                            <div className="flex flex-wrap justify-between m-4">
                                    <button className={`
                                        mt-auto mb-10 
                                        px-15 
                                        font-semibold 
                                        text-xs sm:text-sm xl:text-base ${prev !== null ? 'text-[#0D5FAA] hover:text-[#083d6e]' : 'text-gray-400'}
                                        cursor-pointer
                                        flex items-center gap-2
                                        `}
                                        onClick={() => prev !== null ? navigate(`/etapa/${id_etapa}/modulo/${id_modulo}/aula/${prev}`) : ''}
                                    >
                                        <IoIosArrowBack /> Aula anterior
                                    </button>
                                    <button className="
                                        mt-auto mb-10 
                                        px-15 
                                        font-semibold 
                                        text-xs sm:text-sm xl:text-base text-[#0D5FAA] hover:text-[#083d6e]
                                        cursor-pointer
                                        flex items-center gap-2
                                        border-x
                                        "
                                        onClick={() => navigate(`/etapa/${id_etapa}`)}
                                    >
                                        Voltar para Módulos
                                    </button>
                                    <button className={`
                                        mt-auto mb-10 
                                        px-15 
                                        font-semibold 
                                        text-xs sm:text-sm xl:text-base ${next !== null ? 'text-[#0D5FAA] hover:text-[#083d6e]' : 'text-gray-400'}
                                        cursor-pointer
                                        flex items-center gap-2
                                        `}
                                        onClick={() => next !== null ? navigate(`/etapa/${id_etapa}/modulo/${id_modulo}/aula/${next}`) : ''}
                                    >
                                        Próxima aula <IoIosArrowForward />
                                    </button>
                                    
                                </div>
                        </>
                )}
            </div>
        </>
    )
}