import React from 'react'

export default function Sobre() {
  return (
    <section className='container min-h-screen relative flex flex-col w-full items-center justify-center
     px-6 md:px-16 text-white '>

         <h1 className='text-3xl md:text-4xl font-semibold '>Olá👋</h1>

        <div className='ralative grid w-full max-h-screen grid-cols-[auto_auto_auto] mt-24 gap-5'>
           
           <div class="ralative flex w-auto border h-[43vh] items-start flex-col hover:shadow-lg hover:shadow-gray-500">
            <h1 className='absolute top-[34%] left-[6%]'>Olá, eu sou Mikael</h1>
            <p className='absolute top-[42%] left-[6%] '>Com 8 mês de experiência, aprimorei minhas habilidades em
             desenvolvimento front-end, criando sites dinâmicos e responsivos.
            </p>
            <img class="minhaImagem" src="images/eu-editado-portifolio3.png" alt="card-image"
            className='w-[80%] h-[50%] object-cover'/>
        </div>
          
          { /*Segundo card: Tecnologias utilizadas */}
        <div className='ralative flex w-auto border h-[40vh] items-start flex-col hover:shadow-lg hover:shadow-gray-500'>
            <h1>Pilha de tecnologia</h1>
            <p>Sou especialista em diversas linguagens, frameworks e ferramentas
             que me permitem construir aplicativos robustos e escaláveis.
            </p>
            <img class="imgCard2" src="images/grid2.png" alt="card-image" /> 
        </div>

           
        {/* Terceiro card: Informações sobre localização e disponibilidade */}
        <div className='ralative flex w-auto border items-start flex-col hover:shadow-lg hover:shadow-gray-500'>
            <h1>Flexível quanto ao formato de trabalho, pronto para novos projetos.</h1>
            <p>Estou baseado no Brasil, em Fortaleza (bairro Granja Lisboa), e procuro principalmente oportunidades presenciais. 
              No entanto, também estou aberto a propostas de trabalho remoto.
            </p>
            <video autoplay loop muted plays-inline src="videos/glob.mp4" type="video/mp4"></video>
            <button><i class='bx bx-link-external'></i><a href="#contato">Entre em contato comigo</a></button>
        </div>

        
       { /* Quarto card: Paixão pela programação */}
        <div className='ralative flex w-auto border h-[40vh] items-start flex-col hover:shadow-lg hover:shadow-gray-500'>
            <h1>Minha paixão por código</h1>
            <p>Adoro resolver problemas e construir coisas por meio de código.
             Programar não é apenas minha profissão, é minha paixão. Gosto
            de explorar novas tecnologias e aprimorar minhas habilidades.
            </p>
            <img src="images/grid4.png" alt="card-image" />
        </div>
   
        </div>
    </section>
  )
}