function Header() {
  return (
    <header className="flex justify-between items-center text-white bg-[#22222300] px-5 py-2 fixed top-0 left-0 w-full z-10">
      <button className="cursor-pointer bg-transparent border-none p-0">
        <img
          src="../logoLega.png"
          alt="Logo Fantacalcio"
          className="w-[50px] md:w-30 h-auto transition-transform hover:scale-105"
        />
      </button>
    </header>
  )
}

export default Header
