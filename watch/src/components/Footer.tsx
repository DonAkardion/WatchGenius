import React from "react";
import { ReactComponent as Coffe } from "../assets/icons/coffe.svg";

const Footer: React.FC = () => {
  return (
    <footer className="pt-[71px] pr-[78px] pb-[71px] pl-[78px] md:pt-[39px] md:pr-[75px] md:pb-[39px] md:pl-[75px] leading-[24px] text-white bg-[#171414]">
      <div className="container flex flex-col md:flex-row md:justify-between items-center">
        <a href="/" className="">
          <h1 className="text-2xl">WatchGenius</h1>
        </a>
        <div className="">
          <ul className="flex mt-[80px] mb-[80px] md:mt-0 md:mb-0 md:flex-row flex-col gap-[60px] items-center text-center">
            <li className="text-xl">
              <a href="/">Політика конфедеційності</a>
            </li>
            <li className="text-xl">
              <a href="/">+380 95 615 6714</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-[5px] md:gap-[50px] items-center">
            <li className="text-xl leading-[24px]">
              <a href="/">Support the project</a>
            </li>
            <li className="text-xl">
              <a href="/">
                <Coffe className="w-[39px] h-[39px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
