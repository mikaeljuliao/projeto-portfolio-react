import React, { useState } from "react"

export default function Navbar() {
  const [abrirMenu, setAbrirMenu] = useState(false) // estado para controlar o menu

  return (
    <nav className="fixed w-full flex items-center  justify-between px-6 py-4 bg-transparent
     text-white z-40 shadow-[0_0_3px_#38bdf8] 
 ">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <span className="text-sky-300">Mikael</span> da Rocha
      </h1>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-8 text-lg 
  bg-slate-900/40 backdrop-blur-md 
  border-b border-gray-200 rounded-2xl px-4 py-3
  shadow-[0_0_15px_#38bdf8] 
 ">
        <li><a href="#sobre" className="px-2 py-1 border-b border-transparent tranition-all
        duration-300 hover:border-sky-400  hover:text-sky-400
        ">Sobre</a></li>
        <li><a href="#projeto" className=" px-2 py-1 border-b border-transparent tranition-all
        duration-300 hover:border-sky-400  hover:text-sky-400"
        >Projetos</a></li>
        <li><a href="#skills" className="px-2 py-1 border-b border-transparent tranition-all
        duration-300 hover:border-sky-400  hover:text-sky-400"
      >Skills</a></li>
        <li><a href="#experiencias" className="px-2 py-1 border-b border-transparent tranition-all
        duration-300 hover:border-sky-400  hover:text-sky-400
        ">Experiência</a></li>
        <li><a href="#contato" className="ppx-2 py-1 border-b border-transparent tranition-all
        duration-300 hover:border-sky-400  hover:text-sky-400"
        >Contato</a></li>
      </ul>

 <div className="hidden md:flex pr-6">
  <a
    href="#contato"
    className="relative flex items-center gap-3 px-5 py-2
    border border-sky-500/30 rounded-2xl
    bg-sky-500/10 backdrop-blur-md
    text-sky-300 font-medium
    transition-all duration-300
    hover:bg-sky-500/20 hover:border-sky-400 hover:text-sky-200"
  >
    {/* Ícone com movimento */}
    <i className="bx bx-right-arrow-alt text-xl text-sky-400 animate-bounce"></i>

    <span>Fale comigo</span>
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
    bg-[#000000]  text-white flex flex-col p-6 z-50 shadow-[0_0_20px_#38bdf8]/30 
    border-l border-[#0a0f1c]
    ">
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
        duration-300 hover:border-sky-400  hover:text-sky-400"
         onClick={() => setAbrirMenu(false)}>Sobre</a></li>
            <li><a href="#projeto" className="px-2 py-1  border-b-[3px] border-sky-400 transition-all 
        duration-300 hover:border-sky-400  hover:text-sky-400 " 
        onClick={() => setAbrirMenu(false)}>Projetos</a></li>
            <li><a href="#skills" className="px-2 py-1  border-b-[3px] border-sky-400 transition-all 
        duration-300 hover:border-sky-400  hover:text-sky-400 "
         onClick={() => setAbrirMenu(false)}>Skills</a></li>
          <li><a href="#experiencias" className="px-2 py-1  border-b-[3px] border-sky-400 transition-all 
        duration-300 hover:border-sky-400  hover:text-sky-400
        ">Experiência</a></li>
            <li><a href="#contato" className="px-2 py-1 border-b-[3px] border-sky-400 transition-all 
        duration-300 hover:border-sky-400  hover:text-sky-400 "
         onClick={() => setAbrirMenu(false)}>Contato</a></li>
          </ul>

          {/* BOTÃO FALE COMIGO (substitui redes sociais) */}
          <div className="flex gap-4 mt-8 text-2xl">
    <a
      href="#contato"
      onClick={() => setAbrirMenu(false)}
      className="mt-10 flex items-center justify-center gap-2
      w-full px-4 py-3 rounded-xl
      border border-sky-400/40
     bg-[#020a13] text-sky-300 font-medium 
      transition-all duration-300
      hover:bg-sky-500/20 hover:text-sky-200 hover:shadow-[0_0_12px_#38bdf8]"
    >
      <i className="bx bx-right-arrow-alt text-xl"></i>
      Fale comigo
    </a>
          </div>
        </div>
      )}
    </nav>
  )
}
