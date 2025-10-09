import React from "react";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      {/* título da sessão */}
      <h1 className="section-title autoDisplay">minhas skills👌✔</h1>

      {/* container principal */}
      <div className="skills-box">
        {/* imagem de destaque */}
        <img
          className="skills-image"
          src="images/digital brain.png"
          alt="skills-image"
        />

        {/* bloco designer */}
        <div className="designer autoDisplay">
          <h1 className="gradient">
            Designer <i className="bx bx-laptop"></i>
          </h1>

          <p>
            Atuei por mais de 1 ano e meio como{" "}
            <strong className="gradient-skills">designer gráfico</strong>,
            desenvolvendo identidades visuais, banners e estampas para diferentes
            públicos e nichos. Essa vivência me deu uma base sólida em cores,
            tipografia e{" "}
            <strong className="gradient-skills">comunicação</strong>, fortalecendo
            minha atuação como{" "}
            <strong className="gradient-skills">desenvolvedor front-end</strong>,
            agregando valor em{" "}
            <strong className="gradient-skills">UX/UI</strong> e ajudando a
            equilibrar design, usabilidade e performance nas interfaces que crio.
          </p>
        </div>

        {/* bloco coder */}
        <div className="coder autoDisplay">
          <h1 className="gradient">
            Dev Front <i className="bx bx-code-block"></i>
          </h1>

          <p>
            Tenho experiência em{" "}
            <strong className="gradient-skills">HTML5</strong>,{" "}
            <strong className="gradient-skills">CSS3</strong>,{" "}
            <strong className="gradient-skills">JavaScript (ES6+)</strong> e{" "}
            <strong className="gradient-skills">React</strong>. Utilizo{" "}
            <strong className="gradient-skills">Vite</strong> para otimizar o
            processo de desenvolvimento, além de{" "}
            <strong className="gradient-skills">Git</strong> e{" "}
            <strong className="gradient-skills">GitHub</strong> para controle de
            versão. Trabalho com{" "}
            <strong className="gradient-skills">Tailwind CSS</strong>,{" "}
            <strong className="gradient-skills">Bootstrap</strong>,{" "}
            <strong className="gradient-skills">JSON/localStorage</strong> e{" "}
            <strong className="gradient-skills">Recharts</strong> para gráficos
            interativos. Sigo boas práticas como{" "}
            <strong className="gradient-skills">Clean Code</strong>,{" "}
            <strong className="gradient-skills">Responsividade</strong>,{" "}
            <strong className="gradient-skills">
              Acessibilidade (A11y)
            </strong>
            , <strong className="gradient-skills">UX/UI</strong>,{" "}
            <strong className="gradient-skills">API REST</strong> e{" "}
            <strong className="gradient-skills">
              Metodologias Ágeis (Scrum)
            </strong>
            .
          </p>
        </div>

        {/* slider de tecnologias */}
        <div
          className="slider"
          reverse="true"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": "7",
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <img src="images/1.png" alt="slider-image" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src="images/2.png" alt="slider-image" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src="images/6.png" alt="slider-image" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src="images/7.png" alt="slider-image" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src="images/Vitejs-logo.png" alt="slider-image" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src="images/React-icon.svg.png" alt="slider-image" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src="images/logo git.png" alt="slider-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
