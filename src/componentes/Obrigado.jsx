import React from "react";
import { Link } from "react-router-dom";

export default function Obrigado() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-sky-400 to-blue-900 bg-[length:200%_200%] text-transparent bg-clip-text animate-gradientFlow">
          Mensagem enviada! 🚀
        </h1>

        <p className="text-lg text-gray-300">
          Obrigado por entrar em contato! Sua mensagem foi recebida com sucesso.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="px-6 py-3 border border-sky-500 rounded-lg text-sky-400 hover:bg-sky-500 hover:text-white transition"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
