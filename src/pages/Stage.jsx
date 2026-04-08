import { useContext, useState } from "react"
import { IeeePathContext } from "../context/IeeePath"
import { useNavigate, useParams } from "react-router"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { IoIosArrowDropupCircle } from "react-icons/io";



export default function Stage() {

    const {id_etapa} = useParams()

    const ieeePath = useContext(IeeePathContext)

    const [openId, setOpenId] = useState(null)

    const navigate = useNavigate()

    return (
        <>
            <h1 className="text-xl sm:text-2xl mb-1 font-bold leading-relaxed text-center">{ieeePath[0].stages[id_etapa-1].stage_title}</h1>

            <p className="text-center mb-16 text-xs sm:text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quidem impedit quasi voluptatum voluptatem nihil temporibus voluptate omnis cum dolorem doloremque quas perferendis, officiis a distinctio voluptas maxime, explicabo iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus cum non eligendi fugit quod, tempore neque facilis, tempora quo fuga repellendus dolorum et iusto officiis ab nihil nam odit?
            </p>

            <div>
                <p className="text-center mb-16 text-xs sm:text-sm">
                    {ieeePath[0].stages[id_etapa-1].phase === 0 
                        ? (
                            <>
                                <span className='font-bold'>Status da etapa:</span> A parte escrita desta etapa ainda se está em elaboração
                            </>
                        ) 
                        : ieeePath[0].stages[id_etapa-1].phase === 1 
                            ? (
                                <>
                                    <span className='font-bold'>Status da etapa:</span> A parte escrita desta etapa está concluída e os vídeos estão em gravação
                                </>
                            ) 
                            : ''}
                </p>
            </div>

            <nav className="flex flex-col w-full max-w-3xl mx-auto border-2 border-[#00000023] rounded-lg overflow-hidden">
                {ieeePath[0].stages[id_etapa-1].modules.map((module) => (
                    <ul key={module.id}>
                        <li className="border-b-2 border-t border-[#00000023] group" onClick={() =>setOpenId(openId === module.id ? null : module.id)}>
                            <div className="flex justify-between items-center px-10 py-4 
                                    cursor-pointer">    
                                <div>    
                                    <button 
                                        className="
                                            text-left 
                                            w-full 
                                            group-hover:text-[#0D5FAA]" 
                                    >
                                        {`Módulo ${module.id}`}
                                    </button>
                                    <p className="pt-1 text-xs font-semibold text-gray-400">
                                        {module.video_lessons.length} Aulas
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    {openId === module.id ? <IoIosArrowDropupCircle color="#0D5FAA" /> : <IoIosArrowDropdownCircle color="#0D5FAA" />}
                                    <p className="text-sm text-[#0D5FAA]">{openId === module.id ? 'Fechar' : 'Ver aulas'}</p>
                                </div>
                            </div>
                            <div className={`duration-300 ease-in-out grid ${openId === module.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <ul className="overflow-hidden px-10">
                                    {module.video_lessons.map((video, index) => (
                                        <li 
                                            className={`
                                                py-3 
                                                cursor-pointer 
                                                hover:text-[#0D5FAA] 
                                                
                                                ${index !== module.video_lessons.length - 1 ? "border-b border-[#00000023]" : ""}
                                            `} 
                                            key={video.id}
                                        >
                                            Aula {video.id} - {video.lesson_title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                ))}
            </nav>
        </>
    )
}