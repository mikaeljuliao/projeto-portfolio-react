import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center py-28 px-6 md:px-16 text-white"
    >
      {/* título */}
      <h1 className="text-4xl font-bold text-center py-28">minhas skills👌✔</h1>

      {/* wrapper central */}
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
              DESIGNER
             -------------------------- */}
          <div className="designer order-2 md:order-2 lg:order-1 p-4 flex flex-col justify-center 
         mt-6 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">
              Designer <i className="bx bx-laptop"></i>
            </h2>
            <p className="text-sm leading-relaxed">
              Atuei por mais de 1 ano e meio como{" "}
              <strong className="border-b-2 border-sky-600">designer gráfico</strong>,
              desenvolvendo identidades visuais, banners e estampas para diferentes públicos e nichos.
              Essa vivência me deu uma base sólida em cores, tipografia e{" "}
              <strong className="border-b-2 border-sky-600">comunicação</strong>, fortalecendo minha atuação como{" "}
              <strong className="border-b-2 border-sky-600">desenvolvedor front-end</strong> e agregando valor em{" "}
              <strong className="border-b-2 border-sky-600">UX/UI</strong>.
            </p>
          </div>

          {/* --------------------------
              DEV FRONT
             -------------------------- */}
          <div className="coder order-3 md:order-3 lg:order-3 p-4 flex flex-col justify-center 
          mt-6  text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">
              Dev Front <i className="bx bx-code-block"></i>
            </h2>
            <p className="text-sm leading-relaxed">
              Tenho experiência em <strong className="border-b-2 border-sky-600">HTML5</strong>,{" "}
              <strong className="border-b-2 border-sky-600">CSS3</strong>,{" "}
              <strong className="border-b-2 border-sky-600">JavaScript (ES6+)</strong> e{" "}
              <strong className="border-b-2 border-sky-600">React</strong>. Utilizo{" "}
              <strong className="border-b-2 border-sky-600">Vite</strong> para otimizar o desenvolvimento, além de{" "}
              <strong className="border-b-2 border-sky-600">Git</strong> e{" "}
              <strong className="border-b-2 border-sky-600">GitHub</strong> para versionamento. Trabalho com{" "}
              <strong className="border-b-2 border-sky-600">Tailwind CSS</strong>,{" "}
              <strong className="border-b-2 border-sky-600">Bootstrap</strong>,{" "}
              <strong className="border-b-2 border-sky-600">JSON/localStorage</strong> e{" "}
              <strong className="border-b-2 border-sky-600">Recharts</strong>. Sigo boas práticas como{" "}
              <strong className="border-b-2 border-sky-600">Clean Code</strong>,{" "}
              <strong className="border-b-2 border-sky-600">Responsividade</strong> e{" "}
              <strong className="border-b-2 border-sky-600">Acessibilidade (A11y)</strong>.
            </p>
          </div>
        </div>

        {/* logos abaixo */}
        <div className="mt-12 flex justify-center">
          <div className="list flex gap-6 flex-wrap justify-center">
            {[
              "1.png",
              "2.png",
              "6.png",
              "7.png",
              "Vitejs-logo.png",
              "React-icon.svg.png",
              "logo git.png",
            ].map((img, i) => (
              <div key={i} className="item">
                <img
                  src={`imagem/${img}`}
                  alt={`logo ${i + 1}`}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
