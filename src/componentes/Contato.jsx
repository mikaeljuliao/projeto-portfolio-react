import React, { useState } from "react";

export default function Contato() {
  // 🧩 Estados dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  // ⚠️ Estados de erro
  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroMensagem, setErroMensagem] = useState("");

  // 🧠 Envio para WhatsApp
  const enviarFormulario = (evento) => {
    evento.preventDefault();

    // limpa erros
    setErroNome("");
    setErroEmail("");
    setErroMensagem("");

    let temErro = false;

    if (nome.trim() === "") {
      setErroNome("Por favor, digite seu nome.");
      temErro = true;
    }

    if (email.trim() === "") {
      setErroEmail("Por favor, digite seu email.");
      temErro = true;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErroEmail("Digite um email válido.");
      temErro = true;
    }

    if (mensagem.trim() === "") {
      setErroMensagem("Por favor, digite sua mensagem.");
      temErro = true;
    }

    if (temErro) return;

    // 📱 Mensagem enviada ao WhatsApp
    const texto = `
Olá! Me chamo ${nome}.
Meu email é ${email}.

Mensagem:
${mensagem}
    `;

    const telefone = "5585986066467"; // DDI + DDD + número
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contato"
      className="flex flex-col items-center justify-center w-full min-h-screen py-20"
    >
      <h1 className="text-center text-white font-bold text-4xl py-28">
        Fale comigo 🤝
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        {/* 🧾 FORMULÁRIO */}
        <div className="flex flex-col items-center justify-center text-white gap-6 m-auto w-full">
          <div className="w-[90%] md:w-3/4">
            <p className="text-lg font-semibold py-5">
              Precisa de um{" "}
              <span className="font-bold text-sky-400 text-2xl">
                desenvolvedor front-end
              </span>{" "}
              para seu projeto? Vamos conversar no WhatsApp.
            </p>

            <form onSubmit={enviarFormulario} className="flex flex-col w-full">
              {/* Nome */}
              <label className="text-sky-400 text-lg font-semibold">
                Nome completo:
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                className="border-2 border-sky-400 rounded-lg py-2 px-3 text-gray-800 outline-none"
              />
              {erroNome && (
                <p className="text-red-400 text-sm mt-1">{erroNome}</p>
              )}

              {/* Email */}
              <label className="mt-4 text-sky-400 text-lg font-semibold">
                Seu email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@exemplo.com"
                className="border-2 border-sky-400 rounded-lg py-2 px-3 text-gray-800 outline-none"
              />
              {erroEmail && (
                <p className="text-red-400 text-sm mt-1">{erroEmail}</p>
              )}

              {/* Mensagem */}
              <label className="mt-4 text-sky-400 text-lg font-semibold">
                Sua mensagem:
              </label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Descreva sua ideia ou projeto..."
                className="border-2 border-sky-400 rounded-lg py-2 px-3 text-gray-800 h-28 resize-none outline-none"
              />
              {erroMensagem && (
                <p className="text-red-400 text-sm mt-1">{erroMensagem}</p>
              )}

              {/* Botão */}
              <button
                type="submit"
                className="text-lg mt-6 border border-sky-800 px-4 py-3 rounded-lg
                hover:text-sky-400 transition-all duration-300
                hover:shadow-[0_0_10px_#38bdf8]"
              >
                Falar comigo no WhatsApp 💬
              </button>
            </form>
          </div>
        </div>

        {/* 📱 LINKS */}
        <div className="flex flex-col items-center justify-center gap-4 mt-8 text-white">
          <a
            href="https://www.linkedin.com/in/mikael-juliao-dev"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square text-2xl text-sky-400 mr-2"></i>
            linkedin.com/in/mikael-juliao-dev
          </a>

          <a href="https://github.com/mikaeljuliao" target="_blank">
            <i className="bx bxl-github text-2xl text-sky-400 mr-2"></i>
            github.com/mikaeljuliao
          </a>

          <a
            href="https://wa.me/5585986066467"
            target="_blank"
          >
            <i className="bx bxl-whatsapp text-2xl text-sky-400 mr-2"></i>
            (85) 98606-6467
          </a>
        </div>
      </div>
    </section>
  );
}
