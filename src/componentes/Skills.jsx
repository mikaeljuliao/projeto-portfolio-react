import React from 'react'

export default function Skills() {
  return (
   <section>
    <h1 class="section-title autoDisplay">
     minhas skills👌✔
     </h1>
     
     <div class="skills-box">
  
    <img class="skills-image" src="images/digital brain.png" alt="skills-image" />

    
    <div class="designer autoDisplay">
    
      <h1 class="gradient"> Designer <i class="bx bx-laptop"></i></h1>

   

<p>
  Atuei por mais de 1 ano e meio como <strong class="gradient-skills">designer gráfico </strong>, 
  desenvolvendo identidades visuais, 
  banners e estampas para diferentes públicos e nichos.  
 Essa vivência me deu uma base sólida em cores, tipografia e <strong class="gradient-skills"></strong>comunicação,
  fortalecendo minha atuação como <strong class="gradient-skills">desenvolvedor front-end</strong>, agregando valor em 
  como <strong class="gradient-skills">UX/UI</strong> e ajudando a equilibrar design, usabilidade 
  e performance nas interfaces que crio.
</p>

 
    </div>


    <div class="coder autoDisplay">
    
      <h1 class="gradient">Dev Front <i class="bx bx-code-block"></i> </h1>

     
      <p>
  Tenho experiência em <strong class="gradient-skills">HTML5</strong>, <strong class="gradient-skills">CSS3</strong>, <strong class="gradient-skills">JavaScript (ES6+)</strong> e <strong class="gradient-skills">React</strong>.  
  Utilizo <strong class="gradient-skills">Vite</strong> para otimizar o processo de desenvolvimento, além de <strong class="gradient-skills">Git</strong> e <strong class="gradient-skills">GitHub</strong> para controle de versão.  
  Trabalho com <strong class="gradient-skills">Tailwind CSS</strong>, <strong class="gradient-skills">Bootstrap</strong>, <strong class="gradient-skills">JSON/localStorage</strong> e <strong class="gradient-skills">Recharts</strong> para gráficos interativos.  
  Sigo boas práticas como <strong class="gradient-skills">Clean Code</strong>, <strong class="gradient-skills">Responsividade</strong>, <strong class="gradient-skills">Acessibilidade (A11y)</strong>, <strong class="gradient-skills">UX/UI</strong>, 
  <strong class="gradient-skills">API REST</strong> e <strong class="gradient-skills">Metodologias Ágeis (Scrum)</strong>.
</p>


    </div>

    
    <div class="slider" reverse="true" style="
      --width: 100px;      /* Variável CSS que define a largura de cada item do slider */
      --height: 100px;     /* Variável CSS que define a altura dos itens do slider */
      --quantity: 7;">     
     
      <div class="list">
     
        <div class="item" style="--position: 1">
          <img src="images/1.png" alt="slider-image" />
        </div>
        <div class="item" style="--position: 2" />
          <img src="images/2.png" alt="slider-image" />
        </div>
        <div class="item" style="--position: 3">
          <img src="images/6.png" alt="slider-image" />
        </div>
        <div class="item" style="--position: 4">
          <img src="images/7.png" alt="slider-image" />
        </div>
        <div class="item" style="--position: 5">
          <img src="images/Vitejs-logo.png" alt="slider-image" />
        </div>
         <div class="item" style="--position: 6">
          <img src="images/React-icon.svg.png" alt="slider-image" />
        </div>
         <div class="item" style="--position: 7">
          <img src="images/logo git.png" alt="slider-image" />
        </div>
     
      </div>

    </div>
  

   </section>
  )
}
