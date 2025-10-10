import React from 'react'

export default function Projetos() {
  return (
    <section className='text-white w-full min-h-screen flex flex-col items-center justify-center py-28'>
         <h1 className="text-white font-bold text-4xl py-40">Meus projetos👨‍💻</h1>

         <div className='grid grid-cols-3 gap-5 w-[85%] h-full '>
            
      {/* Card 1 */}      
    <div >
       <div className=" border-2 border-sky-400 rounded-xl 
       overflow-hidden shadow-[0_0_10px_#38bdf8] hover:shadow-[0_0_20px_#1e40ff]
        ">
            <video  id="projetoVideo1" src="video/site-medicamentos.mp4"></video>
    
            <div className="hover-sign"></div>
        </div>
       
        <div className="projeto-inf fadeInRight">
          
            <h1 className='font-bold text-xl mt-6 mb-3 
            '> <span className=" bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 
            bg-clip-text text-transparent animate-gradient-x duration-300 ease-in-out  ">Gerenciador</span>  de Medicamentos</h1>
            <p className='font-semibold '>Aplicação freelancer real para controle de medicamentos, com CRUD completo, 
            histórico de registros e alerta sonoro para horários. Simulação de API REST com JSON 
            local para exibição dinâmica dos dados.
       
           Skills:<strong className="gradient-skills">JavaScript (ES6+)</strong>,<strong className="gradient-skills">HTML</strong>, 
           <strong className="gradient-skills">CSS</strong>,<strong className="gradient-skills"> JSON</strong>,
           <strong className="gradient-skills"> localStorage</strong>, <strong className="gradient-skills"> Git/GitHub,</strong>
           <strong className="gradient-skills"> UX/UI</strong>, 
            <strong className="gradient-skills">Responsividade</strong>,<strong className="gradient-skills"> Acessibilidade</strong>,
            <strong className="gradient-skills"> Clean Code </strong></p>   

            <button className='flex items-end text-lg shadow-[0_0_5px_#38bdf8] border border-sky-800 px-2 py-1 mt-4
        rounded-lg transition-all duration-300 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]
       '><i className='bx bx-link-external m-auto p-1'></i> 
            <a href="https://lembre-med.netlify.app/" target="_blank">Websit</a></button>
        </div>

    </div>
    
      {/* Card 2 */}    
    <div className="">
       <div className="border-2 border-sky-400 rounded-lg overflow-hidden
       shadow-[0_0_10px_#38bdf8]  hover:shadow-[0_0_20px_#1e40ff]">
            <video  id="projetoVideo1" src="video/portifolio-pessoal.mp4"></video>
    
            <div className="hover-sign"></div>
        </div>
       
        <div className="projeto-inf fadeInRight">
          
            <h1 className='font-bold text-xl mt-6 mb-3'><span className=" bg-gradient-to-r from-sky-400
             via-blue-500 to-purple-600 
            bg-clip-text text-transparent animate-gradient-x duration-300 ease-in-out">Portfólio</span> Pessoal
           </h1>
            <p className='font-semibol'>Aplicação freelancer real para controle de medicamentos, com CRUD completo, 
            histórico de registros e alerta sonoro para horários. Simulação de API REST com JSON 
            local para exibição dinâmica dos dados.
       
           Skills:<strong className="gradient-skills">JavaScript (ES6+)</strong>,<strong className="gradient-skills">HTML</strong>, 
           <strong className="gradient-skills">CSS</strong>,<strong className="gradient-skills"> JSON</strong>,
           <strong className="gradient-skills"> localStorage</strong>, <strong className="gradient-skills"> Git/GitHub,</strong>
           <strong className="gradient-skills"> UX/UI</strong>, 
            <strong className="gradient-skills">Responsividade</strong>,<strong className="gradient-skills"> Acessibilidade</strong>,
            <strong className="gradient-skills"> Clean Code </strong></p>   

            <button className='flex items-end text-lg shadow-[0_0_5px_#38bdf8] border border-sky-800 px-2 py-1 mt-4
        rounded-lg transition-all duration-300 hover:rounded-md hover:text-sky-400 hover:shadow-[0_0_10px_#38bdf8]'>
            <i className='bx bx-link-external m-auto p-1'></i> 
            <a href="https://lembre-med.netlify.app/" target="_blank">Websit</a></button>
        </div>


    </div>

     {/* Card 3 */}      
    <div className="">
       <div className="border-2 border-sky-400 rounded-lg overflow-hidden shadow-[0_0_10px_#38bdf8]
      hover:shadow-[0_0_20px_#1e40ff]
        ">
            <video  id="projetoVideo1" src="video/controle-de-gasto.mp4"></video>
    
            <div className="hover-sign"></div>
        </div>
       
        <div className="projeto-inf fadeInRight">
          
            <h1 className='font-bold text-xl mt-6 mb-3'>Controle de  <span className=" bg-gradient-to-r from-sky-400
             via-blue-500 to-purple-600 
            bg-clip-text text-transparent animate-gradient-x duration-300 ease-in-out">Gastos</span>  </h1>
            <p className='font-semibol'>Aplicação freelancer real para controle de medicamentos, com CRUD completo, 
            histórico de registros e alerta sonoro para horários. Simulação de API REST com JSON 
            local para exibição dinâmica dos dados.
       
           Skills:<strong className="gradient-skills">JavaScript (ES6+)</strong>,<strong className="gradient-skills">HTML</strong>, 
           <strong className="gradient-skills">CSS</strong>,<strong className="gradient-skills"> JSON</strong>,
           <strong className="gradient-skills"> localStorage</strong>, <strong className="gradient-skills"> Git/GitHub,</strong>
           <strong className="gradient-skills"> UX/UI</strong>, 
            <strong className="gradient-skills">Responsividade</strong>,<strong className="gradient-skills"> Acessibilidade</strong>,
            <strong className="gradient-skills"> Clean Code </strong></p>   

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
