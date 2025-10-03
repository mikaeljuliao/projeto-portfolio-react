import React, { useState } from 'react'

export default function NavBar() {
    const [aberto, setAberto] = useState(false)
  return (
    <div className="container w-full h-screen">

      <header className='flex justify-between items-center p-4 bg-black/40 backdrop-blur-sm text-white'>
        <h1>
          <span className="text-sky-300">Mikael</span> D rocha
        </h1>

        <ul className='flex justify-between'>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projeto">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div>
          <a href="https://github.com/mikaeljuliao" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https:www.linkedin.com/in/mikael-juliao-dev" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>

        <div className="menu-icon">
          <i className="bx bx-menu"></i>
        </div>
      </header>
 {/* Sidebar mobile */}
      {aberto && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-black/90 text-white flex flex-col p-6 z-50">
          <button className="self-end text-3xl mb-6" onClick={() => setOpen(false)}>
            <i className="bx bx-x"></i>
          </button>

          <ul className="flex flex-col gap-6 text-lg">
            <li><a href="#sobre" onClick={() => setAberto(false)}>Sobre</a></li>
            <li><a href="#projeto" onClick={() => setAberto(false)}>Projetos</a></li>
            <li><a href="#skills" onClick={() => setAberto(false)}>Skills</a></li>
            <li><a href="#contato" onClick={() => setAberto(false)}>Contato</a></li>
          </ul>

          <div className="flex gap-4 mt-8 text-2xl">
            <a href="https://github.com/mikaeljuliao" target="_blank"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/mikael-juliao-dev" target="_blank"><i className="bx bxl-linkedin-square"></i></a>
          </div>
        </div>
      )}
    </div>
  )
}
