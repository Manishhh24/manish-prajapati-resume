import React from "react";

const Introduction = () => {
  return (
    <section className="px-7 pt-7 flex flex-col lg:flex-row bg-blue-100">
      <div className="bg-slate-100 p-10 flex mx-auto sm:-skew-x-6 w-[90%] shadow-2xl">
        <div className="flex flex-col md:flex-row justify-around items-center sm:skew-x-6 w-full">
          <div className="md:pl-7 flex justify-center md:justify-start lg:w-1/3">
            <img
              src="/introduction/My_pic_tie.png"
              className="max-w-[150px] opacity-[100%] sm:max-w-[200px] sm:min-w-[200px] sm:min-h-[150px] md:h-[300px] rounded-xl"
            />{" "}
          </div>
          <div className="md:ml-10">
            <h1>
              <sub className="text-[30px] md:text-[50px]">"</sub>
            </h1>
            <p className="flex mx-auto w-full md:w-[90%] font-sourceCodePro text-[10px] xxs:text-[12px] sm:text-sm smd:text-lg lg:text-xl text-justify">
              {" "}
              Screenshot Prevention in Mobile App Hello Guys, here is how to
              block taking screenshots in React Native. Screenshot Prevention in
              Mobile App Hello Guys, here is how to block taking screenshots in
              React Native.
            </p>
            <h1 className="text-right">
              <sub className="text-right text-[30px] md:text-[50px]">"</sub>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
