

import React from 'react'

export default function Sobre() {
  return (
    <section className='container min-h-screen relative flex flex-col w-full items-center justify-center
     px-6 md:px-16 text-white'>

      <h1 className='text-3xl md:text-4xl flex font-semibold mt-10'>Olá👋</h1>

      <div className='grid w-full grid-cols-1 md:grid-cols-3 mt-16 gap-5'>
        
        {/* Primeiro card */}
        <div className="relative flex flex-col items-start border h-[43vh] p-4 
        hover:shadow-lg hover:shadow-gray-500 overflow-hidden rounded-lg">
          
          <img 
            src="images/eu-editado-portifolio3.png" 
            alt="card-image"
            className='w-full h-1/2 object-cover rounded-md mb-4'
          />
          <h2 className='text-xl font-semibold mb-2'>Olá, eu sou Mikael</h2>
          <p className='text-sm leading-relaxed'>
            Com 8 meses de experiência, aprimorei minhas habilidades em
            desenvolvimento front-end, criando sites dinâmicos e responsivos.
          </p>
        </div>

        {/* Segundo card */}
        <div className="relative flex flex-col items-start border h-[43vh] p-4 
        hover:shadow-lg hover:shadow-gray-500 overflow-hidden rounded-lg">
          <h2 className='text-xl font-semibold mb-2'>Pilha de tecnologia</h2>
          <p className='text-sm leading-relaxed mb-4'>
            Sou especialista em diversas linguagens, frameworks e ferramentas
            que me permitem construir aplicativos robustos e escaláveis.
          </p>
          <img 
            src="images/grid2.png" 
            alt="card-image" 
            className='w-full h-1/2 object-cover rounded-md mt-auto'
          />
        </div>

        {/* Terceiro card */}
        <div className="relative flex flex-col items-start border h-[83vh] p-4 
        hover:shadow-lg hover:shadow-gray-500 overflow-hidden rounded-lg col-span-1">
          <h2 className='text-xl font-semibold mb-2'>
            Flexível quanto ao formato de trabalho, pronto para novos projetos.
          </h2>
          <p className='text-sm leading-relaxed mb-4'>
            Estou baseado no Brasil, em Fortaleza (bairro Granja Lisboa), e procuro principalmente
            oportunidades presenciais. No entanto, também estou aberto a propostas de trabalho remoto.
          </p>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            src="videos/glob.mp4" 
            type="video/mp4"
            className='w-full h-1/2 object-cover rounded-md mb-4'
          />
          <button className='mt-auto border border-sky-400 px-3 py-1 rounded hover:bg-sky-600 transition'>
            <i className='bx bx-link-external mr-2'></i>
            <a href="#contato">Entre em contato comigo</a>
          </button>
        </div>

        {/* Quarto card */}
        <div className="relative flex flex-col items-start border h-[43vh] p-4 
        hover:shadow-lg hover:shadow-gray-500 overflow-hidden rounded-lg col-span-2">
          <h2 className='text-xl font-semibold mb-2'>Minha paixão por código</h2>
          <p className='text-sm leading-relaxed mb-4'>
            Adoro resolver problemas e construir coisas por meio de código.
            Programar não é apenas minha profissão, é minha paixão. Gosto
            de explorar novas tecnologias e aprimorar minhas habilidades.
          </p>
          <img 
            src="images/grid4.png" 
            alt="card-image" 
            className='w-full h-1/2 object-cover rounded-md mt-auto'
          />
        </div>

      </div>
    </section>
    
  )
}
