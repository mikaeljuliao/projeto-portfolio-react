import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center py-28 px-6 md:px-16 text-white"
    >
      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-center py-28">
      Minhas skills💻
      </h1>

      {/* CONTAINER PRINCIPAL */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

          {/* --------------------------
              CÉREBRO CENTRAL
          -------------------------- */}
          <div
            className="order-1 md:order-1 md:col-span-3 
            lg:col-span-1 lg:order-2 flex justify-center items-center 
            -mt-16 md:-mt-20 lg:-mt-20"
          >
            <img
              src="imagem/digital brain.png"
              alt="digital brain"
              className="w-11/12 md:w-5/6 lg:w-[950px] max-w-none 
              mix-blend-lighten object-contain transition-all duration-500"
            />
          </div>

         {/* --------------------------
    SOFT SKILLS
-------------------------- */}
<div
  className="designer order-2 md:order-2 lg:order-1 p-4 flex flex-col justify-center 
  mt-6 text-center md:text-left"
>
  <h2 className="text-3xl font-semibold mb-4">
    Soft Skills <i className="bx bx-laptop"></i>
  </h2>

  <p className="text-base leading-relaxed">
    Possuo{" "}
    <strong className="border-b-2 border-sky-600">boa comunicação</strong>,{" "}
    <strong className="border-b-2 border-sky-600">trabalho em equipe</strong> e{" "}
    <strong className="border-b-2 border-sky-600">controle emocional</strong> para lidar com prazos, feedbacks e desafios do dia a dia.
    Tenho{" "}
    <strong className="border-b-2 border-sky-600">organização</strong>,{" "}
    <strong className="border-b-2 border-sky-600">responsabilidade</strong> e{" "}
    <strong className="border-b-2 border-sky-600">proatividade</strong>, além de facilidade em{" "}
    <strong className="border-b-2 border-sky-600">aprender</strong>,{" "}
    <strong className="border-b-2 border-sky-600">me adaptar a mudanças</strong> e{" "}
    <strong className="border-b-2 border-sky-600">trabalhar com foco em resultados</strong>.
  </p>
</div>

          {/* --------------------------
              DEV FRONT
          -------------------------- */}
        <div 
  className="coder order-3 md:order-3 lg:order-3 p-4 flex flex-col justify-center 
  mt-6 text-center md:text-left"
>
  <h2 className="text-3xl font-semibold mb-4">
    Hard Skills <i className="bx bx-code-block"></i>
  </h2>

  <p className="text-base leading-relaxed">
    Tenho experiência em{" "}
    <strong className="border-b-2 border-sky-600">HTML5</strong>,{" "}
    <strong className="border-b-2 border-sky-600">CSS3</strong>,{" "}
    <strong className="border-b-2 border-sky-600">JavaScript (ES6+)</strong>,{" "}
    <strong className="border-b-2 border-sky-600">TypeScript</strong> e{" "}
    <strong className="border-b-2 border-sky-600">React</strong>. Utilizo{" "}
    <strong className="border-b-2 border-sky-600">Vite</strong>,{" "}
    <strong className="border-b-2 border-sky-600">Git</strong>,{" "}
    <strong className="border-b-2 border-sky-600">GitHub</strong> e{" "}
    <strong className="border-b-2 border-sky-600">Git Flow</strong>. Trabalho com{" "}
    <strong className="border-b-2 border-sky-600">Tailwind CSS</strong>,{" "}
    <strong className="border-b-2 border-sky-600">Bootstrap</strong>,{" "}
    <strong className="border-b-2 border-sky-600">API REST</strong>,{" "}
    <strong className="border-b-2 border-sky-600">localStorage</strong>,{" "}
    <strong className="border-b-2 border-sky-600">Recharts</strong> e{" "}
    <strong className="border-b-2 border-sky-600">Figma</strong>, seguindo boas práticas de{" "}
    <strong className="border-b-2 border-sky-600">Clean Code</strong>,{" "}
    <strong className="border-b-2 border-sky-600">Responsividade</strong> e{" "}
    <strong className="border-b-2 border-sky-600">Acessibilidade (A11y)</strong>.
  </p>
</div>

        </div>

        {/* --------------------------
            LOGOS ANIMADAS
        -------------------------- */}
        <div className="mt-20 w-2/3 flex items-center justify-center m-auto overflow-hidden">
          <div className="relative w-full">
            <div className="flex gap-7 animate-scroll whitespace-nowrap">
              {[
                "1.png",
                "2.png",
                "6.png",
                "7.png",
                "Vitejs-logo.png",
                "React-icon.svg.png",
                "logo git.png",
              ].map((img, i) => (
                <img
                  key={i}
                  src={`imagem/${img}`}
                  alt={`logo ${i + 1}`}
                  className="w-20 h-20 object-contain opacity-90 hover:opacity-100 transition-all"
                />
              ))}

              {/* DUPLICAÇÃO PARA LOOP INFINITO */}
              {[
                "1.png",
                "2.png",
                "6.png",
                "7.png",
                "Vitejs-logo.png",
                "React-icon.svg.png",
                "logo git.png",
              ].map((img, i) => (
                <img
                  key={`dup-${i}`}
                  src={`imagem/${img}`}
                  alt={`logo duplicada ${i + 1}`}
                  className="w-20 h-20 object-contain opacity-90 hover:opacity-100 transition-all"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
