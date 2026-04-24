import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";

export default function LessonNavigation({prev, next, id_etapa, id_modulo}) {

    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-around w-full max-w-3xl mt-4">

                <button className={`
                        w-full sm:w-auto
                        px-4 sm:px-8
                        font-semibold 
                        text-sm sm:text-base 
                        ${prev !== null ? 'text-[#0D5FAA] hover:text-[#083d6e]' : 'text-gray-400'}
                        flex items-center justify-center gap-2
                        cursor-pointer
                    `}
                    onClick={() => prev !== null ? navigate(`/site-trilha-web/etapa/${id_etapa}/modulo/${id_modulo}/aula/${prev}`) : ''}
                >
                    <IoIosArrowBack /> Aula anterior
                </button>

                <button className="
                        w-full sm:w-auto
                        px-4 sm:px-8
                        py-2
                        font-semibold 
                        text-sm sm:text-base 
                        text-[#0D5FAA] hover:text-[#083d6e]
                        flex items-center justify-center gap-2
                        border-y sm:border-y-0 sm:border-x border-[#00000021]
                        cursor-pointer
                    "
                    onClick={() => navigate(`/site-trilha-web/etapa/${id_etapa}`)}
                >
                    Voltar para Módulos
                </button>

                <button className={`
                        w-full sm:w-auto
                        px-4 sm:px-8
                        font-semibold 
                        text-sm sm:text-base 
                        ${next !== null ? 'text-[#0D5FAA] hover:text-[#083d6e]' : 'text-gray-400'}
                        flex items-center justify-center gap-2
                        cursor-pointer
                    `}
                    onClick={() => next !== null ? navigate(`/site-trilha-web/etapa/${id_etapa}/modulo/${id_modulo}/aula/${next}`) : ''}
                >
                    Próxima aula <IoIosArrowForward />
                </button>

            </div>
        </>
    )
}