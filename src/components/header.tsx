"use client";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] w-full relative">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-[12px] px-[16px] xl:px-[96px]">
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
          <a href="https://wa.me/5521964757037?text=Olá,%20gostaria%20de%20entrar%20em%20contato%20para%20consultorias%20estratégicas,%20conselhos%20executivos%20ou%20convites%20para%20palestras%20e%20aulas" target="_blank" rel="noopener noreferrer" className="bg-azul text-white px-4 py-2 rounded-md hover:bg-[#BEDDFF] hover:text-azul">
            Entrar em Contato
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

      {/* Menu Mobile com animação da direita */}
      <nav
        className={`lg:hidden fixed top-[64px] right-0 w-full bg-gray-50 border-t transform transition-transform duration-300 ease-in-out
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
          <a href="https://wa.me/5521964757037?text=Olá,%20gostaria%20de%20entrar%20em%20contato%20para%20consultorias%20estratégicas,%20conselhos%20executivos%20ou%20convites%20para%20palestras%20e%20aulas" target="_blank" rel="noopener noreferrer" className="bg-azul text-white px-4 py-2 rounded-md hover:bg-[#BEDDFF] hover:text-azul">
            Entrar em Contato
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
