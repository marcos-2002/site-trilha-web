import LogoPrincipal from '../assets/LogoPrincipal.svg'

export default function Header() {
    return (
        <header className="bg-[#0D5FAA] flex gap-1 justify-center items-center py-4 w-full">
            <img src={LogoPrincipal} alt="Logo" className='w-20'/>
            <h1 className='text-white text-2xl'>Trilha de aprendizado</h1>
        </header>
    )
}