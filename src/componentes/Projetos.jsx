import React from 'react'
import Carrosel from './Carrosel'

export default function Projetos() {
    const projeto1 = [
  
 "/imagem/lembreMed-descktop2.png",
  "/imagem/lembreMed-descktop3.png",
  "/imagem/lembreMed-descktop4.png",
  "/imagem/lembreMed-mobile1.png",
  "/imagem/lembreMed-mobile2.png",
  "/imagem/lembreMed-mobile3.png"

];

const projeto2 = [

  "/imagem/portfolio-descktop0.png",
  "/imagem/portfolio-descktop2.png",
  "/imagem/portfolio-descktop3.png",
  "/imagem/portfolio-descktop4.png",
  "/imagem/portfolio-descktop5.png",
  "/imagem/portfolio-descktop6.png",
  "/imagem/portfolio-descktop7.png",
];

const projeto3 = [
  "/imagem/controleDeGasto-descktop1.png",
  "/imagem/controleDeGasto-descktop2.png",
  "/imagem/controleDeGasto-mobile1.png",
   "/imagem/controleDeGasto-mobile1.png"
];

  return (
    <section id='projeto' className='text-white w-full min-h-screen flex flex-col items-center justify-center py-28'>
         <h1 className="text-white font-bold text-4xl py-40">Meus projetos👨‍💻</h1>

         <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-[85%] h-full '>
            
      {/* Card 1 */}      
    <div >
     
<div className="border-2 border-sky-400 rounded-xl overflow-hidden shadow-[0_0_10px_#38bdf8] hover:shadow-[0_0_20px_#1e40ff]">
  <Carrosel images={projeto1} />
</div>


       
        <div className="projeto-inf fadeInRight">
          
            <h1 className='font-bold text-xl mt-6 mb-3 
            '> <span className=" bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 
            bg-clip-text text-transparent animate-gradient-x duration-300 ease-in-out">Gerenciador</span>  de Medicamentos</h1>
            <p className='font-semibold '>Aplicação freelancer real para controle de medicamentos, com CRUD completo, 
            histórico de registros e alerta sonoro para horários. Simulação de API REST com JSON 
            local para exibição dinâmica dos dados.
       
           Skills:<strong className="gradient-skills">JavaScript (ES6+)</strong>,<strong className="border-b-2 border-sky-600">HTML</strong>, 
           <strong className="border-b-2 border-sky-600">CSS</strong>,<strong className="border-b-2 border-sky-600"> JSON</strong>,
           <strong className="border-b-2 border-sky-600"> localStorage</strong>, <strong className="border-b-2 border-sky-600"> Git/GitHub,</strong>
           <strong className="border-b-2 border-sky-600"> UX/UI</strong>, 
            <strong className="border-b-2 border-sky-600">Responsividade</strong>,<strong className="border-b-2 border-sky-600"> Acessibilidade</strong>,
            <strong className="border-b-2 border-sky-600"> Clean Code </strong></p>   

            <button className='flex items-end text-lg shadow-[0_0_5px_#38bdf8] border border-sky-800 px-2 py-1 mt-4
        rounded-lg transition-all duration-300 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]
       '><i className='bx bx-link-external m-auto p-1'></i> 
            <a href="https://lembre-med.netlify.app/" target="_blank">Websit</a></button>
        </div>

    </div>
    
      {/* Card 2 */}    
    <div className="">
  <div className="border-2 border-sky-400 rounded-xl overflow-hidden shadow-[0_0_10px_#38bdf8] hover:shadow-[0_0_20px_#1e40ff]">
  <Carrosel images={projeto2} />
</div>

        <div className="projeto-inf fadeInRight">
          
            <h1 className='font-bold text-xl mt-6 mb-3'><span className=" bg-gradient-to-r from-sky-400
             via-blue-500 to-purple-600 
            bg-clip-text text-transparent animate-gradient-x duration-300 ease-in-out">Portfólio</span> Pessoal
           </h1>
            <p className='font-semibol'>Aplicação freelancer real para controle de medicamentos, com CRUD completo, 
            histórico de registros e alerta sonoro para horários. Simulação de API REST com JSON 
            local para exibição dinâmica dos dados.
       
           Skills:<strong className="border-b-2 border-sky-600">JavaScript (ES6+)</strong>,<strong className="border-b-2 border-sky-600">HTML</strong>, 
           <strong className="border-b-2 border-sky-600">CSS</strong>,<strong className="border-b-2 border-sky-600"> JSON</strong>,
           <strong className="border-b-2 border-sky-600"> localStorage</strong>, <strong className="border-b-2 border-sky-600"> Git/GitHub,</strong>
           <strong className="border-b-2 border-sky-600"> UX/UI</strong>, 
            <strong className="border-b-2 border-sky-600">Responsividade</strong>,<strong className="border-b-2 border-sky-600"> Acessibilidade</strong>,
            <strong className="border-b-2 border-sky-600"> Clean Code </strong></p>   

            <button className='flex items-end text-lg shadow-[0_0_5px_#38bdf8] border border-sky-800 px-2 py-1 mt-4
        rounded-lg transition-all duration-300 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]'>
            <i className='bx bx-link-external m-auto p-1'></i> 
            <a href="https://lembre-med.netlify.app/" target="_blank">Websit</a></button>
        </div>


    </div>

     {/* Card 3 */}      
    <div className="">
      <div className="border-2 border-sky-400 rounded-xl overflow-hidden 
      shadow-[0_0_10px_#38bdf8] hover:shadow-[0_0_20px_#1e40ff]">
     <Carrosel images={projeto3} />
    </div>

       
        <div className="projeto-inf fadeInRight">
          
            <h1 className='font-bold text-xl mt-6 mb-3'>Controle de  <span className=" bg-gradient-to-r from-sky-400
             via-blue-500 to-purple-600 
            bg-clip-text text-transparent animate-gradient-x duration-300 ease-in-out">Gastos</span>  </h1>
            <p className='font-semibol'>Aplicação freelancer real para controle de medicamentos, com CRUD completo, 
            histórico de registros e alerta sonoro para horários. Simulação de API REST com JSON 
            local para exibição dinâmica dos dados.
       
           Skills:<strong className="border-b-2 border-sky-600">JavaScript (ES6+)</strong>,<strong className="border-b-2 border-sky-600">HTML</strong>, 
           <strong className="border-b-2 border-sky-600">CSS</strong>,<strong className="border-b-2 border-sky-600"> JSON</strong>,
           <strong className="border-b-2 border-sky-600"> localStorage</strong>, <strong className="border-b-2 border-sky-600"> Git/GitHub,</strong>
           <strong className="border-b-2 border-sky-600"> UX/UI</strong>, 
            <strong className="border-b-2 border-sky-600">Responsividade</strong>,<strong className="border-b-2 border-sky-600"> Acessibilidade</strong>,
            <strong className="border-b-2 border-sky-600"> Clean Code </strong></p>   

            <button className='flex items-end text-lg shadow-[0_0_5px_#38bdf8] border border-sky-800 px-2 py-1 mt-4
        rounded-lg transition-all duration-300 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]'>
            <i className='bx bx-link-external m-auto p-1 '></i> 
            <a href="https://lembre-med.netlify.app/" target="_blank">Websit</a></button>
        </div>  
    </div>

     {/* Card 3 */}    
   
    </div>
    </section>
  )
}
