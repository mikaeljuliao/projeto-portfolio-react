import React from "react";

export default function Experiencia() {
  const experiencias = [
    {
      empresa: "Freelancer Autônomo",
      cargo: "Desenvolvedor Front-end",
      periodo: "Nov/2024 – Atual",
      descricao: [
        "Desenvolvimento de interfaces web responsivas utilizando React, JavaScript (ES6+), HTML e CSS",
        "Criação de componentes reutilizáveis seguindo princípios de Clean Code",
        "Estilização de aplicações com Tailwind CSS e Bootstrap conforme a necessidade do projeto",
        "Implementação de melhorias de UX/UI, garantindo navegação intuitiva e acessibilidade básica",
        "Desenvolvimento de landing pages focadas em performance, conversão e responsividade",
        "Manutenção, refatoração de código e correção de bugs em projetos existentes"
      ]
    },
    {
      empresa: "CustomFashion",
      cargo: "Designer Gráfico Digital",
      periodo: "Jan/2024 – Jun/2025",
      descricao: [
        "Criação de identidades visuais, logotipos e materiais gráficos digitais e impressos",
        "Tratamento e edição de imagens para impressão em alta qualidade",
        "Desenvolvimento de artes para banners, estampas e materiais promocionais",
        "Atuação com foco em estética, consistência visual e experiência do usuário",
        "Utilização profissional de CorelDRAW e Adobe Photoshop"
      ]
    }
  ];

  return (
    <section id="experiencias" className="w-full py-24 text-white relative bg-gradient-to-b from-[#020617] to-[#021024]">

      <h2 className="text-center text-4xl font-bold mb-24">
        Jornada Profissional
      </h2>

      {/* LINHA CENTRAL */}
      <div className="hidden md:block absolute left-1/2 top-40 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

      <div className="flex flex-col gap-20 max-w-6xl mx-auto px-6">

        {experiencias.map((item, index) => {
          const esquerda = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex w-full 
                ${esquerda ? "md:justify-start" : "md:justify-end"}
                justify-center
              `}
            >
              {/* BOLINHA */}
              <span className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-sky-400 -translate-x-1/2" />

              {/* CARD */}
              <div
                className={`
                  w-full md:max-w-md
                  bg-slate-900/40 border border-white/10
                  rounded-xl p-6
                  ${esquerda ? "md:translate-x-16" : "md:-translate-x-16"}
                `}
              >
                <span className="text-sky-400 text-sm block mb-1">
                  {item.empresa}
                </span>

                <h3 className="text-xl font-semibold">
                  {item.cargo}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {item.periodo}
                </p>

                <ul className="text-sm text-gray-300 space-y-2">
                  {item.descricao.map((texto, i) => (
                    <li key={i}>• {texto}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
