import { useContext } from "react"
import { IeeePathContext } from "../context/IeeePath"
import { useParams } from "react-router"
import LessonNavigation from "../components/LessonNavigation";

export default function VideoLeassons() {

    const ieeePath = useContext(IeeePathContext)

    const {id_etapa, id_modulo, id_aula} = useParams()

    const prev = ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].prev
    const next = ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].next

    return (
        <>
            <div className="flex flex-col items-center px-2 sm:px-0">
                <h1 className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 font-bold text-center max-w-2xl">
                    Aula {id_aula} - {ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].lesson_title}
                </h1>

                {ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].lesson_video_link !== null 
                    ? (
                        <>
                            <p className="mb-1 text-center max-w-xl">
                                O vídeo desta aula já está disponível para você assistir.
                            </p>

                            <p className="mb-8 sm:mb-10 text-center max-w-xl">
                                Se preferir, também é possível baixar o PDF completo do módulo com todas as aulas.
                            </p>
                            
                            <a className="
                                mb-8 sm:mb-10
                                bg-[#0D5FAA] text-white 
                                px-4 sm:px-8 lg:px-12
                                py-3 rounded-md
                                font-semibold 
                                text-sm sm:text-base
                                hover:bg-[#083d6e]
                                w-full sm:w-auto text-center
                                "
                                href={ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].text_module_link}
                                download={`modulo_${id_modulo}.pdf`}
                            >
                                Baixar módulo
                            </a>

                            <div className="flex flex-col items-center gap-4 w-full">
                                
                                {/* VIDEO RESPONSIVO */}
                                <div className="w-full max-w-3xl aspect-video">
                                    <iframe 
                                        className="w-full h-full rounded-md"
                                        src={ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].video_lessons[id_aula-1].lesson_video_link} 
                                        title="YouTube video player" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                                
                                <LessonNavigation prev={prev} next={next} id_etapa={id_etapa} id_modulo={id_modulo} />
                                
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="mb-1 text-center max-w-xl">
                                O vídeo desta aula ainda está sendo finalizado e será disponibilizado em breve.
                            </p>

                            <p className="mb-8 sm:mb-10 text-center max-w-xl">
                                Enquanto isso, você pode acessar todo o conteúdo baixando o PDF completo do módulo.
                            </p>

                            <a className="
                                mb-8 sm:mb-10
                                bg-[#0D5FAA] text-white 
                                px-4 sm:px-8 lg:px-12
                                py-3 rounded-md
                                font-semibold 
                                text-sm sm:text-base
                                hover:bg-[#083d6e]
                                w-full sm:w-auto text-center
                                "
                                href={ieeePath[0].stages[id_etapa-1].modules[id_modulo-1].text_module_link}
                                download={`modulo_${id_modulo}.pdf`}
                            >
                                Baixar módulo
                            </a>

                            <LessonNavigation prev={prev} next={next} id_etapa={id_etapa} id_modulo={id_modulo} />
                        </>
                )}
            </div>
        </>
    )
}