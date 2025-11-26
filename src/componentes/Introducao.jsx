import React from 'react'

export default function Introducao () {
  return (
    <section className='relative w-full min-h-screen flex flex-col-reverse md:flex-row 
      items-center justify-between text-white px-6 md:px-16'>

      {/* --- TEXTO --- */}
      <div className='w-full md:w-1/2 flex flex-col gap-5 mt-12 md:mt-0'>
        
        <div className='flex gap-1 px-3 py-2 text-xl border border-sky-800 
          rounded-3xl self-start w-fit text-sky-400 font-semibold'>
          <i className='bx bxl-sketch m-auto'></i>
          Front-end Developer Portifolio
        </div>

        <h1 className='text-3xl md:text-6xl font-bold leading-tight'>
          Fornecendo{' '}
          <span className='bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 
            bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]'>
            a melhor experiência
          </span>{' '}
          de projeto
        </h1>

        <p className='font-normal text-lg md:text-xl text-gray-200'>
          Sou desenvolvedor front-end com experiência na criação de sites responsivos 
          e interfaces modernas. Confira minhas habilidades.
        </p>

        <button className='flex items-center gap-1 text-xl border border-sky-800 px-4 py-3
          rounded-2xl w-fit transition-all duration-300 hover:rounded-md hover:text-sky-400 
          hover:shadow-[0_0_10px_#38bdf8]'>
          <i className='bx bx-send'></i>
          Entre em contato comigo
        </button>

      </div>

      {/* --- FOTO --- */}
      <div className='w-full md:w-1/2 flex justify-center md:justify-center  md:mb-8'>
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
