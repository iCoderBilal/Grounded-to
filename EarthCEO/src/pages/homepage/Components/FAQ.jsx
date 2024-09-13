import React from "react";

const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="faq-container px-6 py-[30vw] md:px-[15.5vw] md:py-[7vw] md:pt-[0] pt-[0] bg-black text-white">
        <div className="heading">
          <h2 className="text-center section-heading mb-8 md:mb-[10px] tracking-tighter font-Poppins text-3xl md:text-[6vw] text-[9vw] text-white font-semibold md:leading-[6vw] leading-[9vw]">
            FAQ's
          </h2>

          <p className="text-center font-Poppins md:text-[1.8vw] text-[6vw] text-white font-semibold mb-[15px]">
            You’ve got questions, we’ve got answers!
          </p>
        </div>

        <div className="relative h-2 sm:w-[50vw] w-[90vw] overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl mx-auto">
          <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37D398_0%,#A0DA6E_50%,#B6DB65_100%)]" />
          <div className="inline-flex h-full w-full items-center justify-center rounded-xl text-sm font-medium text-gray-50 backdrop-blur-3xl"></div>
        </div>

        <div className="flex justify-between pt-[50px] sm:flex-wrap flex-wrap">
          {/* _____________________ */}
          <div className="left">
            <div className="space-y-6">
              <details className="group rounded-xl bg-[#101B18] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)] sm:w-[33vw] w-[90vw]">
                <summary className="font-Poppins flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Why is USDL backed by land?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300">
                  Land is one of the most stable assets available—it’s finite
                  and cannot be replicated. By anchoring our tokens to real
                  land, we offer a currency that’s resistant to inflation and
                  market volatility, making USDL a future-proof investment.
                </div>
              </details>

              <details className=" group rounded-xl bg-[#101B18] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)] sm:w-[33vw] w-[90vw]">
                <summary className="font-Poppins flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  How can I grow my investment with USDL?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300">
                  As the value of land increases, so does the value of your USDL
                  tokens. By holding onto your tokens or trading them on our
                  marketplace, you can enjoy the benefits of land ownership
                  without the complexities of traditional real estate
                  investment.
                </div>
              </details>
            </div>
          </div>

          {/* __________________________________ */}

          {/* ________________________________Right___________________________ */}
          <div className="right sm:mt-[0] mt-[23px]">
            <div className="space-y-6">
              <details className="group rounded-xl bg-[#101B18] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)] sm:w-[33vw] w-[90vw]">
                <summary className="font-Poppins flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Can I transfer my USDL tokens?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300">
                  Yes! USDL tokens are highly liquid and can be transferred
                  between users or traded on our platform, allowing for easy
                  exchange and investment flexibility.
                </div>
              </details>

              <details className="group rounded-xl bg-[#101B18] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)] sm:w-[33vw] w-[90vw]">
                <summary className="font-Poppins flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  What happens if the value of land decreases?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300">
                  While land is generally considered a stable and appreciating
                  asset, its value can fluctuate. However, because USDL tokens
                  are diversified across various parcels, they are less
                  susceptible to the volatility that might affect a single
                  property.
                </div>
              </details>
            </div>
          </div>

          {/* __________________________right_________________ */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
