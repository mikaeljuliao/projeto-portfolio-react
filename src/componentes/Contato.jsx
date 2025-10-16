import React, { useState } from "react";

export default function Contato() {
  // 🧩 Estados para guardar o que o usuário digita
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  // ⚠️ Estados para guardar possíveis erros
  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroMensagem, setErroMensagem] = useState("");

  // 🧠 Função chamada quando o usuário clica em "Enviar"
  const enviarFormulario = (evento) => {
    evento.preventDefault(); // impede que o formulário recarregue a página

    // limpa erros antigos
    setErroNome("");
    setErroEmail("");
    setErroMensagem("");

    let temErro = false; // variável de controle

    // verifica se o nome foi preenchido
    if (nome.trim() === "") {
      setErroNome("Por favor, digite seu nome.");
      temErro = true;
    }

    // verifica se o email foi preenchido e se tem formato válido
    if (email.trim() === "") {
      setErroEmail("Por favor, digite seu email.");
      temErro = true;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErroEmail("Digite um email válido.");
      temErro = true;
    }

    // verifica se a mensagem foi preenchida
    if (mensagem.trim() === "") {
      setErroMensagem("Por favor, digite sua mensagem.");
      temErro = true;
    }

    // se tiver algum erro, para aqui
    if (temErro) return;

    // se não tiver erro, envia o formulário normalmente (FormSubmit)
    evento.target.submit();
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen py-20">
      <h1 className="text-center text-white font-bold text-4xl py-28">
        Fale comigo 🤝
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        {/* 🧾 Coluna do formulário */}
        <div className="flex flex-col items-center justify-center text-white gap-6 m-auto w-full">
          <div className="w-[90%] md:w-3/4">
            <p className="text-lg font-semibold py-5 tracking-normal">
              Precisa de um{" "}
              <span className="relative font-bold bg-gradient-to-r from-blue-900 via-sky-400 to-blue-900 
                bg-[length:200%_200%] text-transparent bg-clip-text text-2xl animate-gradientFlow">
                desenvolvedor front-end
              </span>{" "}
              para seu projeto? Entre em contato comigo.
            </p>

            <form
              onSubmit={enviarFormulario}
              action="https://formsubmit.co/d535fca56c14892152da6bcc8dd9f22b"
              method="POST"
              className="flex flex-col w-full"
            >
              {/* Campo nome */}
              <label className="text-sky-400 text-lg font-semibold tracking-wide">
                Nome completo:
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                className="border-2 border-sky-400 outline-none rounded-lg py-2 px-3 text-gray-800"
              />
              {erroNome && <p className="text-red-400 text-sm mt-1">{erroNome}</p>}

              {/* Campo email */}
              <label className="mt-4 text-sky-400 text-lg font-semibold tracking-wide">
                Digite seu Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="border-2 border-sky-400 rounded-lg outline-none py-2 px-3 text-gray-800"
              />
              {erroEmail && <p className="text-red-400 text-sm mt-1">{erroEmail}</p>}

              {/* Campo mensagem */}
              <label className="mt-4 text-sky-400 text-lg font-semibold tracking-wide">
                Sua mensagem:
              </label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="border-2 border-sky-400 rounded-lg outline-none py-2 px-3
                 text-gray-800 h-28 resize-none"
              />
              {erroMensagem && (
                <p className="text-red-400 text-sm mt-1">{erroMensagem}</p>
              )}

              {/* Configurações do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://127.0.0.1:5501/obrigado.html"
              />

              {/* Botão de envio */}
              <button
                type="submit"
                className="text-lg mt-6 border border-sky-800 px-3 py-2 rounded-lg
                 hover:text-sky-400 transition-all duration-300  hover:shadow-[0_0_10px_#38bdf8]"
              >
                Enviar mensagem 🚀
              </button>
            </form>
          </div>
        </div>

        {/* 📱 Coluna dos ícones */}
        <div className="flex flex-col w-full h-full items-center justify-center gap-3 mt-5 text-white">
          <a href="https://www.linkedin.com/in/mikael-juliao-dev" target="_blank">
            <i className="bx bxl-linkedin-square text-2xl mr-2 text-sky-400"></i>
            <span className="hover:text-sky-300 transition-colors duration-300">
              linkedin.com/in/mikael-juliao-dev
            </span>
          </a>

          <a href="https://github.com/mikaeljuliao" target="_blank">
            <i className="bx bxl-github text-2xl mr-2 text-sky-400"></i>
            <span className="hover:text-sky-300 transition-colors duration-300">
              github.com/mikaeljuliao
            </span>
          </a>

          <a href="#">
            <i className="bx bxs-phone-call text-2xl mr-2 text-sky-400"></i>
            <span className="hover:text-sky-300 transition-colors duration-300">
              (85) 98606-6467
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
