import React from "react";
import { useState } from "react";
import { ReactComponent as Language } from "../assets/icons/iconoir_language.svg";
import { ReactComponent as MenuBtn } from "../assets/icons/menu-btn.svg";
import { ReactComponent as ExitBtn } from "../assets/icons/exit-btn.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="p-5 leading-[20px] md:leading-[24px] md:pt-3.5 md:pr-[70px] md:pb-3.5 md:pl-[70px] text-white bg-[#171414]">
        <div className="container flex justify-between items-center">
          <a href="/" className="">
            <h1 className="md:text-2xl text-xl">WatchGenius</h1>
          </a>

          <nav className="hidden md:block ">
            <ul className="flex gap-[50px]">
              <li className="text-xl">
                <a href="/">Про нас</a>
              </li>
              <li className="text-xl">
                <a href="/">Каталог</a>
              </li>
              <li className="text-xl">
                <a href="/">Контакти</a>
              </li>
            </ul>
          </nav>
          <Language className=" hidden md:block" />
          <button
            className="md:hidden"
            aria-label="open menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ExitBtn className="w-[23px] h-[23px] " />
            ) : (
              <MenuBtn className="w-8 h-3.5 md:hidden" />
            )}
          </button>
        </div>
      </header>
      <div>
        {isOpen && (
          <div className="bg-black text-white md:hidden pt-[146px] pb-[205px] items-center flex flex-col ">
            <div className="items-center flex flex-col gap-[50px] mb-[86px]">
              <a href="/" className="hover:underline">
                Про нас
              </a>
              <a href="/" className="hover:underline">
                Каталог
              </a>
              <a href="/" className="hover:underline">
                Контакти
              </a>
            </div>
            <Language className="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
