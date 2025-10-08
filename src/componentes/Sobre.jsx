import React from 'react'

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="min-h-screen w-full flex flex-col items-center justify-center 
      px-6 md:px-16 text-white relative py-6"
    >
      {/* Título da seção */}
      <h1 className="text-3xl md:text-4xl font-semibold mt-10 text-center py-11">
        Olá 👋
      </h1>

      {/* Grid principal dos cards */}
      <div
        className="grid w-full mt-16 gap-6 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        max-w-6xl"
      >
        {/* --- CARD 1 --- */}
        <div
          className="relative flex flex-col items-start bg-slate-900/40 
          border border-sky-400/30 backdrop-blur-md rounded-xl
          overflow-hidden p-4 hover:shadow-[0_0_15px_#38bdf8]
          transition-all duration-300"
        >
          <img 
            src="imagems/eu-editado-portifolio3.png"
            alt="Foto Mikael"
            className="w-full  h-1/2 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-sky-300">
            Olá, eu sou Mikael
          </h2>
          <p className="text-sm leading-relaxed">
            Com 8 meses de experiência, aprimorei minhas habilidades em
            desenvolvimento front-end, criando sites dinâmicos e responsivos.
          </p>
        </div>

        {/* --- CARD 2 --- */}
        <div
          className="relative flex flex-col items-start bg-slate-900/40 
          border border-sky-400/30 backdrop-blur-md rounded-xl
          overflow-hidden p-4 hover:shadow-[0_0_15px_#38bdf8]
          transition-all duration-300"
        >
            <img
            src="imagem/grid2.png"
            alt="Tecnologias"
            className="w-full h-1/2 object-cover rounded-md mt-auto"
          />

          <h2 className="text-xl font-semibold mb-2 text-sky-300">
            Pilha de tecnologia
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Sou especialista em diversas linguagens, frameworks e ferramentas
            que me permitem construir aplicativos robustos e escaláveis.
          </p>
      
        </div>

    
       {/* --- CARD 3 --- */}
<div
  className="relative flex flex-col justify-end 
  border border-sky-400/30 backdrop-blur-md rounded-xl 
  overflow-hidden hover:shadow-[0_0_15px_#38bdf8]
  transition-all duration-300 lg:row-span-2 h-[80vh]"
>
  {/* Vídeo de fundo */}
  <video
    autoPlay
    loop
    muted
    playsInline
    src="video/glob.mp4"
    type="video/mp4"
    className="absolute inset-0 w-full h-2/3 object-cover z-0"
  />

  {/* Camada escura sutil pra dar contraste no texto */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>

  {/* Conteúdo */}
  <div className="relative z-20 p-4 flex flex-col">
    <h2 className="text-xl font-semibold mb-2 text-sky-300">
      Flexível quanto ao formato de trabalho, pronto para novos projetos.
    </h2>
    <p className="text-sm leading-relaxed mb-4">
      Estou baseado no Brasil, em Fortaleza (bairro Granja Lisboa), e procuro
      principalmente oportunidades presenciais. No entanto, também estou aberto
      a propostas de trabalho remoto.
    </p>

    <button
      className="mt-auto border border-sky-400 px-4 py-2 rounded-md
      hover:bg-sky-500/30 hover:shadow-[0_0_12px_#38bdf8]
      transition duration-300 flex items-center gap-2 w-fit"
    >
      <i className="bx bx-link-external text-sky-300"></i>
      <a href="#contato">Entre em contato comigo</a>
    </button>
  </div>
</div>
        {/* --- CARD 4 --- */}
        <div
          className="relative flex flex-col items-start bg-slate-900/40 
          border border-sky-400/30 backdrop-blur-md rounded-xl
          overflow-hidden p-4 hover:shadow-[0_0_15px_#38bdf8]
          transition-all duration-300 sm:col-span-2"
        >
           <img
            src="images/grid4.png"
            alt="Paixão por código"
            className="w-full h-1/2 object-cover rounded-md mt-auto"
          />
          <h2 className="text-xl font-semibold mb-2 text-sky-300">
            Minha paixão por código
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Adoro resolver problemas e construir coisas por meio de código.
            Programar não é apenas minha profissão, é minha paixão. Gosto de
            explorar novas tecnologias e aprimorar minhas habilidades.
          </p>
         
        </div>
      </div>
    </section>
  )
}
