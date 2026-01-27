import React from 'react'

export default function Introducao () {
  return (
    <section  id="introducao" className='relative w-full min-h-screen flex flex-col-reverse md:flex-row 
      items-center justify-between text-white px-6 md:px-16 
       bg-gradient-to-b from-[#020617] via-[#020617] to-[#020a1a] py-24
' >

        

      {/* --- TEXTO --- */}
      <div className='w-full md:w-1/2 flex flex-col gap-5 mt-12 y-6 md:mt-0 '>
        
        {/* --- BADGE DISPONÍVEL --- */}
        <div className="flex items-center gap-3 px-4 py-2 
          border border-sky-800 rounded-full 
          self-start w-fit text-sky-400 font-semibold">

          {/* CÍRCULO COM PULSO */}
          <div className="relative flex items-center justify-center">
            {/* pulso */}
            <span className="absolute inline-flex h-3 w-3 rounded-full 
              bg-sky-400 opacity-75 animate-ping"></span>

            {/* bolinha fixa */}
            <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-400"></span>
          </div>

          <span className="text-sm md:text-base">
            Disponível para novos projetos
          </span>
        </div>

        {/* --- TÍTULO --- */}
        <h1 className='text-3xl md:text-6xl font-bold leading-tight'>
          Desenvolvendo interfaces{' '}
          <span className='bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 
            bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]'>
            modernas e funcionais
          </span>{' '}
          com foco no usuário
        </h1>

        {/* --- DESCRIÇÃO --- */}
        <p className='font-normal text-lg md:text-xl text-gray-200'>
          Sou desenvolvedor front-end especializado em criar aplicações web responsivas,
          bem estruturadas e com excelente experiência do usuário utilizando React e
          tecnologias modernas.
        </p>

        {/* --- BOTÕES --- */}
        <div className='flex gap-4 flex-wrap'>
          <button className='flex items-center gap-1 text-xl border border-sky-800 px-4 py-3
            rounded-2xl w-fit transition-all duration-300 hover:rounded-md hover:text-sky-400 
            hover:shadow-[0_0_10px_#38bdf8]'>
            <i className='bx bx-code-alt'></i>
            <a href="#contato">
            Ver projetos
            </a>
          </button>

          <a
            href="/curriculo/Currículo-Mikael-Julião-Rocha.pdf"
            download
            className="flex items-center gap-1 text-xl border border-sky-800 px-4 py-3
              rounded-2xl w-fit transition-all duration-300 hover:rounded-md hover:text-sky-400 
              hover:shadow-[0_0_10px_#38bdf8]"
          >
            <i className="bx bx-download"></i>
            Baixar currículo
          </a>
        </div>
      </div>

      {/* --- FOTO --- */}
      <div className='w-full md:w-1/2 flex justify-center md:justify-center m-auto md:m-0 md:mb-8'>
        <img 
          src="/imagem/minha-image.png" 
          alt="Minha foto"
          className='w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl shadow-sky-700 
            border-2 border-sky-500'
        />
      </div>

    </section>
  )
}
