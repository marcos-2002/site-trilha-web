import { useNavigate } from "react-router"

export default function StageCards({stage_title, image, id_stage, phase}) {

  const navigate = useNavigate()

  return (
    <div className="
      w-40 h-60
      sm:w-52 sm:h-64
      md:w-60 md:h-72
      border border-[#00000021] rounded-xl shadow-md flex flex-col overflow-hidden 
    ">

      {/* cima */}
      <div className={`h-3/5 flex items-center justify-center 
        ${phase === 0 ? "bg-[#f5b1b1]" : 
            phase === 1 ? "bg-[#f5f396]" : 
              phase === 2 ? "bg-[#94f390]" : ''} `}
      >
        <img 
          src={image}
          className="w-12 sm:w-16 md:w-20" 
          alt="" 
        />
      </div>

      {/* baixo */}
      <div className="flex flex-col gap-2 items-center px-2 sm:px-3 md:px-4 py-3 flex-1">
        <p className="text-center text-xs sm:text-sm md:text-base">
          {stage_title}
        </p>

        <button className="
          mt-auto
          bg-[#0D5FAA] text-white 
          px-4 sm:px-6 md:px-10 
          py-1 rounded-md 
          text-xs sm:text-sm
          hover:bg-[#083d6e]
          cursor-pointer
        "
        onClick={() => navigate(`/stage/${id_stage}`)}>
          Ver módulos
        </button>
      </div>

    </div>
  )
}