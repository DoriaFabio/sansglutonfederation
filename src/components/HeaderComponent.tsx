import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex justify-between items-center text-white bg-[#22222300] px-5 py-2 fixed top-0 left-0 w-full z-10">
      <Link to={"./"} className="cursor-pointer bg-transparent border-none p-0">
        <img
          src="../logoLega.png"
          alt="Logo Fantacalcio"
          className="w-[50px] md:w-20 h-auto transition-transform hover:scale-105"
        />
      </Link>
      <Link
        to={"./meme"}
        className="text-amber-100 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-sm md:px-4 md:py-2 px-1 rounded-lg hover:bg-white/20"
      >
        <h2 className="text-base md:text-xl font-bold">Meme</h2>
      </Link>
    </header>
  )
}

export default Header
