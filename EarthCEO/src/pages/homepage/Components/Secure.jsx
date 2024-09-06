import React from "react";
import SecureGlobe from "../../../assets/globe.png";

const Secure = () => {
  return (
    <div>
      <div className="bg-black pt-[7vw] pb-[24vw] secure text-white relative overflow-hidden">
        <div className="absolute left-[12%] top-[15vw]">
          <img src={SecureGlobe} alt="" className="w-[75vw]" />
        </div>
        {/* ________________________________Benefits_______________________________________________ */}
        <div className="flex justify-center">
          <div className="py-24 sm:py-8 absolute bottom-[10px] rounded-[40px] secure-benefits">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className=" text-base leading-7 text-gray-200">
                    USDL is backed by real land
                  </dt>
                  <dd className="font-Inter mb-[-10px] order-first text-3xl font-semibold tracking-tight text-[#B9DB63] sm:text-3xl">
                    Stable Investment
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-200">
                    Land remains a valuable resources
                  </dt>
                  <dd className="font-Inter mb-[-10px] order-first text-3xl font-semibold tracking-tight text-[#B9DB63] sm:text-3xl">
                    Future-Proof Asset
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-200">
                    USDL tokens can be easily traded
                  </dt>
                  <dd className="font-Inter mb-[-10px] order-first text-3xl font-semibold tracking-tight text-[#B9DB63] sm:text-3xl">
                    High Liquidity
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        {/* ________________________________Benefits_______________________________________________ */}
        <h2 className="tracking-tighter secure-heading leading-[10vw] text-center font-bold text-[11vw] font-Inter text-[#0E1414]">
          Secure Your Future
        </h2>
        <div className="secure-container"></div>
      </div>
    </div>
  );
};

export default Secure;
