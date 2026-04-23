import { useNavigate } from 'react-router'
import LogoPrincipal from '../assets/LogoPrincipal.svg'

export default function Header() {

  const navigate = useNavigate()

  return (
    <header className="bg-[#0D5FAA] flex justify-center">
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center py-3 sm:py-4 w-fit cursor-pointer' onClick={() => navigate("/site-trilha-web")}>
        <img 
          src={LogoPrincipal} 
          alt="Logo" 
          className="w-14 sm:w-16 md:w-20"
        />

        <h1 className="
          text-white 
          text-lg sm:text-xl md:text-2xl 
          text-center
        ">
          Trilha de aprendizado
        </h1>
      </div>

    </header>
  )
}