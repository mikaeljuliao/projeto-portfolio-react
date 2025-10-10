import React from 'react'


export default function Introducao () {
  return (
    <section className='relative w-full min-h-screen flex flex-col text-white px-6 md:px-16 '>
        <div className=''>
            <video autoPlay loop muted playsInline src="./video/hero.4">
            
            </video>
        </div>

        <div className='w-auto gap-2 md:gap-5 sm:w-1/2 mt-12 lg-w-2/3 flex flex-col md:mt-0 md:pl-4'>
           
         
            <div className=' flex gap-1 px-1 py-2 text-xl border border-sky-800 
            rounded-3xl self-start w-fit
             text-sky-400 font-semibold'>
            {/* self-start: impede o flex de esticar o elemento e o alinha á esquerda
                w-fit: faz o elemento ocupar somente o espaço do conteúdo inteiro, sem 100% de largura */}  
               <i className='bx bxl-sketch m-auto'></i>
      Front-end Developer Portifolio
            </div>
         

            <h1 className='text-3xl md:text-6xl font-bold leading-tight mt-4'
            >Forncendo <span className=' bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 
  bg-clip-text text-transparent 
  animate-gradient-x  bg-[length:200%_200%]'
            >a melhor experiencia</span> de projeto</h1> 

             <p className='font-normal text-lg md:text-xl mt-7 text-gray-200'>
              Sou desenvolvedor front-end com experiência na criação de sites responsivos e interfaces modernas.
       Confira minhas habilidades..</p>

       <button className='flex items-end gap-1 text-xl border border-sky-800 px-2 py-3 mt-5
        rounded-2xl w-fit transition-all duration-300 hover:rounded-md hover:text-sky-400 
        hover:shadow-[0_0_10px_#38bdf8]'>
        <i className='bx bx-send m-auto'></i>Entre em contato comigo</button>
        </div>


    </section>
  )
}
