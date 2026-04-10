export default function Footer() {
    return (
        <footer className="
            flex flex-col items-center text-center
            gap-1 sm:gap-2
            px-4 sm:px-6 lg:px-8
            py-6 sm:py-7
            bg-[#0D5FAA]
        ">
            <p className="font-semibold text-white text-lg sm:text-xl lg:text-2xl">
                Endereço
            </p>
            <p className="text-white text-sm sm:text-base max-w-md">
                Rua Gen. Canabarro, 485 – Maracanã, Rio de Janeiro – RJ
            </p>
        </footer>
    )
}