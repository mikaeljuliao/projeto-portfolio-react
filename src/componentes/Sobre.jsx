import React from "react"

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="
        w-full min-h-screen px-6 md:px-20 py-24
        bg-gradient-to-b from-[#020617] via-[#020617] to-[#020a1a]
        text-white
      "
    >
      {/* TÍTULO */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Sobre mim
        </h2>

        <p className="text-gray-400 text-lg">
          Desenvolvedor Front-end com paixão por criar experiências digitais excepcionais
        </p>
      </div>

      {/* CONTEÚDO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">

        {/* TEXTO */}
        <div className="flex flex-col gap-6 text-gray-300 leading-relaxed">
          <p>
            Sou <span className="text-white font-semibold">Mikael Julião da Rocha</span>,
            desenvolvedor Front-end com foco em criar aplicações web responsivas,
            bem estruturadas e centradas na experiência do usuário.
          </p>

          <p>
            Minha jornada na tecnologia é impulsionada pela combinação de
            desenvolvimento Front-end com um sólido background em
            <span className="text-sky-400"> Design Gráfico</span>, o que me permite
            criar interfaces funcionais, intuitivas e visualmente atraentes.
          </p>

          <p>
            Atualmente atuo como <span className="text-sky-400">Freelancer</span>,
            sempre buscando evoluir minhas habilidades e aplicar boas práticas
            em cada projeto entregue.
          </p>

          {/* TECNOLOGIAS */}
          <div className="mt-8">
            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Tecnologias principais
            </h4>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "Git & GitHub",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-2 rounded-full text-sm
                    bg-slate-900/60 border border-white/10
                    text-gray-200
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* CARD */}
          {[
            {
              icon: "bx-code-alt",
              title: "Experiência",
              text: "12 meses de experiência em desenvolvimento front-end, criando aplicações web modernas e performáticas.",
            },
            {
              icon: "bx-palette",
              title: "Background em Design",
              text: "Mais de 1,5 ano de experiência em Design Gráfico, fortalecendo minha visão de UX/UI.",
            },
            {
              icon: "bx-time",
              title: "Disponibilidade",
              text: "Disponível para freelas, estágios e oportunidades CLT, remoto ou presencial.",
            },
            {
              icon: "bx-star",
              title: "Motivação",
              text: "Apaixonado por criar interfaces que encantam usuários e resolvem problemas reais.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="
                p-8 rounded-2xl
                bg-slate-900/50 border border-white/10
                backdrop-blur-md
              "
            >
              <div
                className="
                  w-12 h-12 mb-6 flex items-center justify-center
                  rounded-xl bg-sky-500/20 text-sky-400 text-2xl
                "
              >
                <i className={`bx ${card.icon}`}></i>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MÉTRICAS */}
      <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-6xl mx-auto">
        {[
          { value: "12+", label: "Meses de experiência" },
          { value: "5+", label: "Projetos entregues" },
          { value: "1.5+", label: "Anos em Design" },
          { value: "100%", label: "Comprometimento" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">
              {item.value}
            </p>
            <p className="text-gray-400 text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
