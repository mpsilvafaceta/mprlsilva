"use client";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white w-full relative">
        <div className="max-w-[1440px] flex mx-auto flex-col gap-4 lg:flex-row  items-center py-[12px] px-[16px] xl:px-[96px]">
            <div className="flex w-full justify-between px-4 py-3">
                <div className="flex items-center gap-2 text-azul">
                    <span className="font-bold text-[32px] leading-[40px]">
                        {menuOpen ? "Menu" : "Marcos Silva"}
                    </span>
                </div>

                {/* Menus em Desktop */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    <a href="#inicio" className="hover:text-azul-claro transition">
                        Início
                    </a>
                    <a href="#sobre-mim" className="hover:text-azul-claro transition">
                        Sobre mim
                    </a>
                    <a href="#experiencia" className="hover:text-azul-claro transition">
                        Experiência
                    </a>
                    <a href="#educacao" className="hover:text-azul-claro transition">
                        Educação
                    </a>
                </nav>

                {/* Botão Hamburguer no Mobile */}
                <button
                onClick={toggleMenu}
                className="lg:hidden text-3xl focus:outline-none"
                >
                {menuOpen ? <IoMdClose /> : <IoIosMenu />}
                </button>
            </div>

            <div className="flex gap-4 justify-center">
                <a className="bg-azul p-1 rounded-[4px]" href="https://www.instagram.com/mprls_silva/" target="_blank" rel="noopener noreferrer">
                    <img src="/1.35 - Social media (2).svg" alt="" />
                </a>
                <a className="bg-azul p-1 rounded-[4px]" href="https://www.linkedin.com/in/mprlsilva/" target="_blank" rel="noopener noreferrer">
                    <img src="/1.35 - Social media (3).svg" alt="" />
                </a>
            </div>

        </div>
        <div className="flex gap-4 justify-center">
            <p className="pb-8 px-4 text-[14px] leading-[18px] text-[#737373]">Copyright © 2025 Marcos Silva | Todos os direitos reservados</p>
        </div>

      {/* Menu Mobile com animação da direita */}
      <nav
        className={`lg:hidden fixed bottom-[170px] right-0 w-full bg-gray-50 border-t transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-start px-4 gap-4 py-4">
          <a href="#inicio" onClick={toggleMenu} className="hover:text-azul-claro transition">
            Início
          </a>
          <a href="#sobre-mim" onClick={toggleMenu} className="hover:text-azul-claro transition">
            Sobre mim
          </a>
          <a href="#experiencia" onClick={toggleMenu} className="hover:text-azul-claro transition">
            Experiência
          </a>
          <a href="#educacao" onClick={toggleMenu} className="hover:text-azul-claro transition">
            Educação
          </a>
          <a href="" className="bg-azul hover:bg-azul-claro text-white px-4 py-2 rounded-md">
            Entrar em Contato
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Footer;
