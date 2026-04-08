import { useContext, useState } from "react"
import { IeeePathContext } from "../context/IeeePath"
import { useParams } from "react-router"


export default function Stage() {

    const {id_etapa} = useParams()

    const ieeePath = useContext(IeeePathContext)

    const [openId, setOpenId] = useState(null)

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
                                <spam className='font-bold'>Status da etapa:</spam> A parte escrita desta etapa ainda se está em elaboração
                            </>
                        ) 
                        : ieeePath[0].stages[id_etapa-1].phase === 1 
                            ? (
                                <>
                                    <spam className='font-bold'>Status da etapa:</spam> A parte escrita desta etapa está concluída e os vídeos estão em gravação
                                </>
                            ) 
                            : ''}
                </p>
            </div>

            <nav className="flex flex-col items-center">
                {ieeePath[0].stages[id_etapa-1].modules.map((module) => (
                    <ul key={module.id}>
                        <li>
                            <button className="cursor-pointer bg-[#0E5FAB] hover:bg-[#205280] font-semibold border-b border-[#27649D] text-white w-3xl text-left p-1" onClick={() =>setOpenId(openId === module.id ? null : module.id)}>
                                {`Módulo ${module.id}`}
                            </button>
                            <div className={`duration-300 ease-in-out grid ${openId === module.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <ul className="overflow-hidden">
                                    {module.video_lessons.map((video) => (
                                        <li className="p-1 cursor-pointer hover:bg-[#5391CB] hover:text-white border-b border-blue-50">{video.lesson_title}</li>
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