import React from 'react'


export default function Introducao () {
  return (
    <section className='relative w-full min-h-screen flex flex-col text-white px-6 md:px-16'>
        <div className=''>
            <video autoPlay loop muted playsInline src="./video/hero.4">
            
            </video>
        </div>

        <div className='w-full gap-6 md-1/2 mt-8 flex flex-col md:mt-0 md:pl-12'>
            <div className='flex items-center  gap-2 text-xl text-sky-400 font-semibold'>
               <i class='bx bxl-sketch'></i>
      Front-end Developer Portifolio
            </div>

            <h1 className='text-3xl md:text-5xl font-bold leading-tight'
            >Forncendo <span className=' bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 
  bg-clip-text text-transparent 
  animate-gradient-x  bg-[length:200%_200%]'
            >a melhor experiencia</span> de projeto</h1> 

             <p>Sou desenvolvedor front-end com experiência na criação de sites responsivos e interfaces modernas.
       Confira minhas habilidades..</p>

       <button><i class='bx bx-send'></i>Entre em contato comigo</button>
        </div>


    </section>
  )
}
