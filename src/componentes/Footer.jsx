import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#010314] py-10 text-white">
      <div
        className="max-w-7xl mx-auto px-6
        flex flex-col md:flex-row
        items-center md:items-center
        justify-between gap-8"
      >
        {/* Branding */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-sky-300">
            Mikael
          </p>
          <p className="text-sm text-gray-400">
            © 2026 Mikael Julião da Rocha. Todos os direitos reservados.
          </p>
        </div>

        {/* Mensagem */}
        <div className="text-sm text-gray-300">
          Feito com <span className="text-red-400">❤️</span> e muito café
        </div>

        {/* Redes / Contato */}
        <div className="flex gap-5 text-gray-400">
          {/* Email */}
          <a
            href="mailto:mikaeljuliao56@gmail.com"
            aria-label="Enviar e-mail"
            className="text-xl transition hover:text-sky-400 hover:scale-110"
          >
            <i className="bx bx-envelope"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mikael-juliao-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-xl transition hover:text-sky-400 hover:scale-110"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mikaeljuliao"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-xl transition hover:text-sky-400 hover:scale-110"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
