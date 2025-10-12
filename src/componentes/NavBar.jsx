import React, { useState } from "react"

export default function Navbar() {
  const [abrirMenu, setAbrirMenu] = useState(false) // estado para controlar o menu

  return (
    <nav className="fixed w-full flex items-center mix-blend-lighten justify-between px-6 py-4 bg-gray-800
     text-white z-40 shadow-[0_0_3px_#38bdf8] ">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <span className="text-sky-300">Mikael</span> da Rocha
      </h1>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-8 text-lg 
  bg-slate-900/40 backdrop-blur-md 
  border border-gray-200 rounded-2xl px-4 py-3
  shadow-[0_0_15px_#38bdf8] bg-gradient-to-r from-slate-900/40 via-sky-600/40 to-slate-900/40
 ">
        <li><a href="#sobre" className="px-2 py-1 border border-transparent transition-all 
        duration-300 hover:border-sky-400 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]
        ">Sobre</a></li>
        <li><a href="#projeto" className=" px-2 py-1 border border-transparent tranition-all
        duration-300 hover:border-sky-400 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]"
        >Projetos</a></li>
        <li><a href="#skills" className="px-2 py-1 border border-transparent transition-all 
      duration-300 hover:border-sky-400 hover:text-sky-500 hover:rounded-md	 hover:shadow-[0_0_10px_#38bdf8]"
      >Skills</a></li>
        <li><a href="#contato" className="px-2 py-1 border border-transparent transition-all
        duration-300 hover:border-sky-400 hover:text-sky-400 hover:rounded-md hover:shadow-[0_0_10px_#38bdf8]"
        >Contato</a></li>
      </ul>

       <div className="hidden md:flex gap-4 text-2xl">
            <a href="https://github.com/mikaeljuliao" target="_blank" rel="noreferrer" 
            className="hover:px-2 hover:py-1 border border-transparent transition-all 
        duration-300 hover:border-sky-400 hover:rounded-full hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mikael-juliao-dev" target="_blank" rel="noreferrer"
            className="hover:px-2 hover:py-1 transition-all border border-transparent
            duration-300 hover:border-sky-400 hover:text-sky-400 hover:rounded-full hover:shadow-[0_0_10px_#38bdf8">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>

      {/* Botão menu mobile */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setAbrirMenu(true)} // abre sidebar
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Sidebar mobile */}
      {abrirMenu && (
        <div className="fixed top-0 right-0 w-2/3 h-full 
bg-gradient-to-br from-[#0a192f] via-[#0f2342] to-[#0a192f]
text-white flex flex-col p-6 z-50 shadow-[0_0_20px_#38bdf8]/30 
border-l border-sky-500/20 backdrop-blur-md">
          {/* Botão fechar */}
          <button
            className="self-end text-3xl mb-6"
            onClick={() => setAbrirMenu(false)} // fecha sidebar
          > 
            <i className="bx bx-x"></i>
          </button>

          {/* Links mobile */}
          <ul className="flex flex-col gap-6 text-lg">
            <li><a href="#sobre" className="px-2 py-1  border-b-[3px] border-sky-400 transition-all 
        duration-300 hover:border-sky-400 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]"
         onClick={() => setAbrirMenu(false)}>Sobre</a></li>
            <li><a href="#projeto" className="px-2 py-1  border-b-[3px] border-sky-400 transition-all 
        duration-300 hover:border-sky-400 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]" 
        onClick={() => setAbrirMenu(false)}>Projetos</a></li>
            <li><a href="#skills" className="px-2 py-1  border-b-[3px] border-sky-400 transition-all 
        duration-300 hover:border-sky-400 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]"
         onClick={() => setAbrirMenu(false)}>Skills</a></li>
            <li><a href="#contato" className="px-2 py-1 border-b-[3px] border-sky-400 transition-all 
        duration-300 hover:border-sky-400 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]"
         onClick={() => setAbrirMenu(false)}>Contato</a></li>
          </ul>

          {/* Redes sociais */}
          <div className="flex gap-4 mt-8 text-2xl">
            <a href="https://github.com/mikaeljuliao" target="_blank" rel="noreferrer"
            className="hover:px-2 hover:py-1 border border-transparent transition-all
            duration-300 hover:border-sky-400 hover:text-sky-400 hover:rounded-full hover:shadow-[0_0_10px_#38bdf8]">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mikael-juliao-dev" target="_blank" rel="noreferrer"
            className="hover:px-2 hover:py-1 border border-transparent transition-all 
            duration-300 hover:border-sky-400 hover:text-sky-400 hover:rounded-full hover:shadow-[0_0_10px_#38bdf8]">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
