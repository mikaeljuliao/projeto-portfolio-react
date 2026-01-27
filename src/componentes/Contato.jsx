import React, { useState } from "react";

/* =========================
   Funções de validação
========================= */
const validarNome = (nome) => {
  if (!nome.trim()) return "Digite seu nome.";
  if (nome.trim().length < 3)
    return "O nome deve ter pelo menos 3 caracteres.";
  return "";
};

const validarEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return "Digite seu email.";
  if (!emailRegex.test(email)) return "Digite um email válido.";
  return "";
};

const validarMensagem = (mensagem) => {
  if (!mensagem.trim()) return "Digite sua mensagem.";
  if (mensagem.trim().length < 10)
    return "A mensagem deve ter pelo menos 10 caracteres.";
  return "";
};

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroMensagem, setErroMensagem] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    const erroNomeValidado = validarNome(nome);
    const erroEmailValidado = validarEmail(email);
    const erroMensagemValidada = validarMensagem(mensagem);

    setErroNome(erroNomeValidado);
    setErroEmail(erroEmailValidado);
    setErroMensagem(erroMensagemValidada);

    if (erroNomeValidado || erroEmailValidado || erroMensagemValidada) return;

    const texto = `
Olá! Me chamo ${nome}.
Email: ${email}

Mensagem:
${mensagem}
    `;

    const telefone = "5585986066467";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  const formularioInvalido =
    erroNome || erroEmail || erroMensagem || !nome || !email || !mensagem;

  return (
    <section id="contato" className="w-full py-32 px-6 bg-gradient-to-b 
from-[#020617] 
to-[#021024]">
      {/* Título */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-white mb-4">
          Vamos conversar?
        </h2>9
        <p className="text-gray-400">
          Interessado em trabalhar juntos? Entre em contato e vamos discutir seu
          projeto.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulário */}
        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-6">
            Envie uma mensagem
          </h3>

          <form onSubmit={enviarFormulario} className="flex flex-col gap-5">
            {/* Nome */}
            <div>
              <label className="text-sm text-gray-300">Nome completo</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  setErroNome(validarNome(e.target.value));
                }}
                placeholder="Seu nome"
                className="w-full mt-2 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-sky-500"
              />
              {erroNome && (
                <p className="text-red-400 text-sm mt-1">{erroNome}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErroEmail(validarEmail(e.target.value));
                }}
                placeholder="seu@email.com"
                className="w-full mt-2 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-sky-500"
              />
              {erroEmail && (
                <p className="text-red-400 text-sm mt-1">{erroEmail}</p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <label className="text-sm text-gray-300">Mensagem</label>
              <textarea
                value={mensagem}
                onChange={(e) => {
                  setMensagem(e.target.value);
                  setErroMensagem(validarMensagem(e.target.value));
                }}
                placeholder="Conte-me sobre seu projeto ou oportunidade..."
                className="w-full mt-2 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white h-32 resize-none outline-none focus:border-sky-500"
              />
              {erroMensagem && (
                <p className="text-red-400 text-sm mt-1">{erroMensagem}</p>
              )}
            </div>

            {/* Botão */}
            <button
              type="submit"
              disabled={formularioInvalido}
              className={`mt-4 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2
                ${
                  formularioInvalido
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-sky-500 hover:bg-sky-600"
                } text-white`}
            >
              Enviar mensagem
              <i className="bx bxl-whatsapp text-2xl text-green-400"></i>
            </button>
          </form>
        </div>

         {/* Informações */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Informações de contato
            </h3>
            <p className="text-gray-400">
              Estou disponível para trabalhos freelancer, estágio, PJ ou
              oportunidades CLT. Vamos criar algo incrível juntos?
            </p>
          </div>

           {/* Telefone */} 
         <div className="bg-slate-900/40 border border-white/10 rounded-xl p-6 flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-sky-500/20 text-sky-400 rounded-lg">
        <i className="bx bx-phone text-xl"></i>
        </div>
        <div className="flex flex-col">
        <p className="text-gray-400 text-sm">Telefone</p>
        <p className="text-white font-medium">(85) 98606-6467</p>
        </div>
        </div>

           {/* Email */} 
          <div className="bg-slate-900/40  border border-white/10 rounded-xl p-6 flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-sky-500/20 text-sky-400 rounded-lg">
         <i className="bx bx-envelope text-xl"></i>
          </div>
          <div  className="flex flex-col">
            <p className="text-gray-400 text-sm">Email</p>
            <a   href="mailto:mikaeljuliao56@gmail.com"
             aria-label="Enviar e-mail"
             >
            <p className="text-white font-medium">
              mikaeljuliao56@gmail.com
            </p>
            </a>
          </div>
          </div>

          {/* linkedin */}  
          <div className="bg-slate-900/40  border border-white/10 rounded-xl p-6 flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-sky-500/20 text-sky-400 rounded-lg">
        <i className="bx bxl-linkedin-square text-xl"></i>
          </div>
          <div  className="flex flex-col">
            <p className="text-gray-400 text-sm">linkedin</p>
            <a href="https://www.linkedin.com/in/mikael-juliao-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <p className="text-white font-medium">
             linkedin.com/in/mikael-juliao-dev
            </p>
            </a>
          </div>
          </div>
            
           {/* github */}  
          <div className="bg-slate-900/40  border border-white/10 rounded-xl p-6 flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-sky-500/20 text-sky-400 rounded-lg">
         <i className="bx bxl-github text-xl"></i>
          </div>
          <div  className="flex flex-col">
            <p className="text-gray-400 text-sm">github</p>
            <a
            href="https://github.com/mikaeljuliao"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <p className="text-white font-medium transition hover:text-sky-400">
              github.com/mikaeljuliao
            </p>
            </a>
          </div>
          </div>


          {/* Status */}
          <div className="bg-slate-900/40 border border-sky-500/30 rounded-xl p-6">
            <p className="text-sky-400 font-medium">
              ● Disponível para contratação
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Atualmente buscando oportunidades em Front-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
