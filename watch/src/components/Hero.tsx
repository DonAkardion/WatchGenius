import React from "react";
import { ReactComponent as ArrowBack } from "../assets/icons/arrow-back.svg";
import WatchImg from "../assets/images/watch-img.png";

const Hero: React.FC = () => {
  return (
    <section className="pt-[30px] pl-[20px] pr-[18px] md:pt-[45px] md:pl-[70px] md:pr-[72px]">
      <div className="container">
        <button>
          <a href="." className="flex items-center leading-[24px] text-xl">
            <ArrowBack className="w-2.5 h-4 mr-3 " /> Назад
          </a>
        </button>
        <div className="flex flex-col lg:flex-row gap-[25px] mt-6">
          <div className="lg:w-1/2 w-full rounded-[5px]">
            <img className="" src={WatchImg} alt="Годинник" />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-[30px] justify-between">
            <div className="">
              <h1 className="md:text-4xl mb-5 md:leading-[36px] text-[32px] leading-[32px]">
                Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002
              </h1>
              <ul>
                <li>
                  <h3 className="md:leading-6 leading-4 text-[16px] mb-[15px]">
                    Корпус: Нержавіюча сталь Oystersteel (сплав 904L)
                  </h3>
                </li>
                <li>
                  <h3 className="md:leading-6 leading-4 text-[16px] mb-[15px]">
                    Скло: Сапфірове з циклоп-лінзою над датою
                  </h3>
                </li>
                <li>
                  <h3 className="md:leading-6 leading-4 text-[16px] mb-[15px]">
                    Категорія: Дайверський годинник
                  </h3>
                </li>
                <li>
                  <h3 className="md:leading-6 text-[16px] leading-4">
                    Діаметр: 41 мм
                  </h3>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-[30px] items-center">
              <button className="hidden h-[72px] md:block bg-black flex-1 text-white  rounded-[5px]">
                <h3 className="text-2xl leading-[29px]">Купити</h3>
              </button>
              <h1 className="md:text-[40px] text-[32px] leading-[32px]">
                19 500 грн
              </h1>
              <button className="md:hidden h-[72px] bg-black w-full text-white rounded-[5px]">
                <h3 className="text-2xl leading-[29px]">Купити</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
