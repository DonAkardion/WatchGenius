import React from "react";

const Agent: React.FC = () => {
  return (
    <section className="mt-[60px] md:mt-[50px] mb-[60px]">
      <div className="h-[400px] md:h-[320px] w-full bg-[url(./assets/images/AgentBG.png)] bg-black bg-cover bg-center flex flex-col justify-center items-center gap-[60px] text-white">
        <div className="w-[348px] md:w-full flex flex-col items-center gap-1 text-center">
          <h1 className="md:leading-[40px] md:text-[40px] leading-[32px] text-[32px]">
            АІ агент
          </h1>
          <h3 className="leading-[16px] text-[16px] md:leading-[24px] md:text-xl">
            Швидко, точно та без нав’язливих порад. Просто запитайте.
          </h3>
        </div>
        <div>
          <button className="w-[348px] md:w-[440px] h-[72px] bg-white text-black flex justify-center rounded-[5px]">
            <a href="." className="flex items-center leading-[29px] text-2xl">
              <p>Перейти в чат</p>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Agent;
