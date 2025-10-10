import React from 'react'

export default function Contato() {
  return (
    <section
      className='flex flex-col items-center justify-center w-full min-h-screen py-20'
    >
      <h1 className='text-center text-white font-bold text-4xl py-28'>
        Fale comigo
      </h1>
      
      <div className='grid grid-cols-2 w-full h-full'>
        
        <div className='flex flex-col w-full h-full items-center justify-center gap-3 text-white'>
          <a href="https://www.linkedin.com/in/mikael-juliao-dev">
            <i class="bx bxl-linkedin-square"></i>
            https://www.linkedin.com/in/mikael-juliao-dev
          </a>

          <a href="https://github.com/mikaeljuliao">
            <i class='bx bxl-github'></i>
            https://github.com/mikaeljuliao
          </a>

          <a href="#">
            <i class="bx bxs-phone-call"></i>
            859 86066467
          </a>
        </div>

        <div className='flex flex-col text-white gap-6'>
          <div>
            <p className='text-lg font-semibold text-wrap w-1/2 py-5 tracking-normal'>
              Precisa de um <span class="gradient">desenvolvedor front-end</span> para seu projeto? 
              Entre em contato comigo.
            </p>

            <div className="flex flex-col w-1/2 my-4">
              <label
                htmlFor="nome"
                className="mb-1 text-sky-400 text-lg font-semibold tracking-wide"
              >
                Nome completo:
              </label>

              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                className='
                  border-2 border-sky-400 rounded-tr-lg rounded-br-lg text-gray-800
                  py-2 placeholder-gray-600 placeholder-italic placeholder:text-lg pl-3
                  focus:outline-none focus:ring-1 focus:ring-blue-800 focus:ring-offset-1 ring-offset-gray-400
                  transition-all duration-300 ease-in-out hover:shadow-[0_0_5px_#38bdf8]
                '
              />
            </div>

            <div className='flex flex-col w-1/2 my-4'>
              <label
                htmlFor="email"
                className="mb-1 text-sky-400 text-lg font-semibold tracking-wide"
              >
                Digite seu Email
              </label>

              <input
                type="email"
                id="email"
                placeholder='E-mail:'
                className='
                  w-full bg-gray-50 text-gray-800
                  border border-sky-600/50 rounded-tr-lg rounded-br-lg
                  px-4 py-3 placeholder:text-gray-500 placeholder:italic
                  focus:outline-none focus:border-sky-400 focus:shadow-[0_0_10px_#38bdf8]
                  hover:border-sky-400 transition-all duration-300 ease-in-out
                '
              />
            </div>

            <div className='flex flex-col w-1/2 my-4'>
              <label
                htmlFor="mensagem"
                className='"mb-1 text-sky-400 text-lg font-semibold tracking-wide'
              >
                Sua mensagem
              </label>

              <input
                type="text"
                placeholder='Sua mensagem:'
                id=""
                className='
                  w-full bg-gray-50 text-gray-800
                  border border-sky-600/50 rounded-tr-lg rounded-br-lg
                  px-4 py-3 placeholder:text-gray-500 placeholder:italic
                  focus:outline-none focus:border-sky-400 focus:shadow-[0_0_10px_#38bdf8]
                  hover:border-sky-400 transition-all duration-300 ease-in-out text-wrap
                '
              />
            </div>

            <button
              className='
                flex items-end text-lg shadow-[0_0_5px_#38bdf8]
                border border-sky-800 px-2 py-1 mt-4 rounded-lg
                transition-all duration-300 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]
              '
            >
              <i class="bx bx-send m-auto p-1"></i>
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
