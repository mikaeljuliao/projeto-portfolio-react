import React from 'react'

export default function Contato() {
  return (
    <section
      className='flex flex-col items-center justify-center w-full min-h-screen py-20'
    >
      <h1 className='text-center text-white font-bold text-4xl py-28'>
        Fale comigo🤝
      </h1>

      {/* Grid responsivo */}
      <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full'>

        {/* Coluna do formulário */}
        <div
          className='flex flex-col items-center justify-center text-white gap-6 
          md:items-end md:justify-end m-auto w-full order-1 md:order-1'
        >
          <div className='w-[90%] md:w-3/4'>
           <p className="text-lg font-semibold text-wrap py-5 tracking-normal">
  Precisa de um{" "}
  <span
    className="relative font-bold bg-gradient-to-r from-blue-900 via-sky-400 to-blue-900 
    bg-[length:200%_200%] text-transparent bg-clip-text text-2xl
    animate-gradientFlow"
  >
    desenvolvedor front-end
  </span>{" "}
  para seu projeto? Entre em contato comigo.
</p>

            {/* Campo nome */}
            <div className="flex flex-col w-full my-4">
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

            {/* Campo email */}
            <div className='flex flex-col w-full my-4'>
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

            {/* Campo mensagem */}
            <div className='flex flex-col w-full my-4'>
              <label
                htmlFor="mensagem"
                className="mb-1 text-sky-400 text-lg font-semibold tracking-wide"
              >
                Sua mensagem
              </label>

              <input
                type="text"
                placeholder='Sua mensagem:'
                id="mensagem"
                className='
                  w-full bg-gray-50 text-gray-800
                  border border-sky-600/50 rounded-tr-lg rounded-br-lg
                  px-4 py-3 placeholder:text-gray-500 placeholder:italic
                  focus:outline-none focus:border-sky-400 focus:shadow-[0_0_10px_#38bdf8]
                  hover:border-sky-400 transition-all duration-300 ease-in-out text-wrap
                '
              />
            </div>

            {/* Botão */}
            <button
              className='
                flex items-center justify-center text-lg shadow-[0_0_5px_#38bdf8]
                border border-sky-800 px-3 py-2 mt-7 rounded-lg
                transition-all duration-300 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]
              '
            >
              <i className="bx bx-send mr-2"></i> Enviar mensagem
            </button>
          </div>
        </div>

        {/* Coluna dos ícones */}
        <div className='flex flex-col w-full h-full items-center justify-center gap-3
        mt-5 text-white order-2 md:order-2'>
          <a href="https://www.linkedin.com/in/mikael-juliao-dev" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin-square text-2xl mr-2 text-sky-400"></i>
            <span className="hover:text-sky-300 transition-colors duration-300">
              linkedin.com/in/mikael-juliao-dev
            </span>
          </a>

          <a href="https://github.com/mikaeljuliao" target="_blank" rel="noreferrer">
            <i className='bx bxl-github text-2xl mr-2 text-sky-400'></i>
            <span className="hover:text-sky-300 transition-colors duration-300">
              github.com/mikaeljuliao
            </span>
          </a>

          <a href="#">
            <i className="bx bxs-phone-call text-2xl mr-2 text-sky-400"></i>
            <span className="hover:text-sky-300 transition-colors duration-300">
              859 86066467
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
