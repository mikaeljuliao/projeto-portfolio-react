import React from 'react'

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="min-h-screen w-full flex flex-col items-center justify-center 
      px-6 md:px-16 text-white relative py-40 md:py-12 bg-[#02040f]"
    >
      
      {/* Título da seção */}
      <h1 className="text-3xl md:text-4xl font-semibold mt-10 text-center py-11">
        Olá👋
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
          { /*
          <img 
            src="imagems/eu-editado-portifolio3.png"
            alt="Foto Mikael"
            className="w-full  h-1/2 object-cover rounded-md mb-4"
          />
           */}
          <h2 className="text-xl font-semibold mb-2 text-sky-300">
            Olá, eu sou Mikael
          </h2>
          <p className="text-sm leading-relaxed text-gray-400 font-semibold">
           Sou desenvolvedor front-end com 12 meses de experiência no desenvolvimento 
           de aplicações web modernas e de alta performance.
          Antes disso, atuei por mais de 1 ano e meio como designer gráfico, 
          o que fortaleceu minha visão de UX/UI e ampliou minha experiência com 
          clientes e identidade visual.
          Atualmente, trabalho como freelancer front-end, aperfeiçoando minhas 
          habilidades a cada projeto realizado.
          </p>
        </div>

        {/* --- CARD 2 --- */}
        <div
          className="relative flex flex-col items-start bg-slate-900/40 
          border border-sky-400/30 backdrop-blur-md rounded-xl
          overflow-hidden p-4 hover:shadow-[0_0_15px_#38bdf8]
          transition-all duration-300"
        >
          {/*
            <img
            src="imagem/grid2.png"
            alt="Tecnologias"
            className="w-full h-1/2 object-cover rounded-md mt-auto"
          />
        */}
        
          <h2 className="text-xl font-semibold mb-2 text-sky-300">
            Pilha de tecnologia
          </h2>
          <p className="text-sm leading-relaxed mb-4 text-gray-400 font-semibold">
  Trabalho com as principais tecnologias para criar projetos modernos e funcionais: 
  JavaScript (ES6+), React, HTML, CSS e frameworks como Tailwind e Bootstrap, além do uso constante do Git para versionamento.
  Tenho experiência com integração de APIs REST, boas práticas de Clean Code e princípios de UX/UI, garantindo desempenho e uma ótima experiência ao usuário.
  Também possuo conhecimento em Git Flow, integração e entrega contínuas (CI/CD) e metodologias ágeis como Scrum.
  Busco aplicar cada tecnologia de forma estratégica, entregando soluções escaláveis e bem estruturadas.
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
    <p className="text-sm leading-relaxed mb-4 text-gray-400 font-semibold">
      Moro em Fortaleza (CE) e tenho flexibilidade para atuar tanto de forma presencial quanto remota. 
  Estou disponível para colaborações em regime PJ, CLT ou como freelancer, conforme a necessidade do projeto.
  Valorizo trabalho em equipe, comunicação clara e entregas consistentes, sempre buscando agregar valor 
  e resolver problemas reais.
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
          transition-all duration-300 lg:col-span-2"
        >
           <img
            src="imagem/grid4.png"
            alt="Paixão por código"
            className=" flex flex-col m-auto items-center justify-center w-1/2 h-full object-cover rounded-md mt-auto"
          />
          <h2 className="text-xl font-semibold mb-2 text-sky-300">
            Minha paixão por código
          </h2>
          <p className="text-sm leading-relaxed mb-4 text-gray-400 font-semibold">
           Encontrei na programação uma forma de transformar ideias em algo real e útil.  
  Gosto de entender como as coisas funcionam, resolver problemas e criar projetos que causem impacto.  
  Essa paixão me motiva a continuar aprendendo e evoluindo a cada novo desafio.
          </p>
         
        </div>
      </div>
    </section>
  )
}
