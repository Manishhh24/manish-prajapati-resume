import React from "react";

const Introduction = () => {
  return (
    <section className="px-7 pt-7 flex flex-col lg:flex-row">
      <div className="bg-slate-200 p-10 flex mx-auto sm:-skew-x-6 w-[90%] shadow-xl">
        <div className="flex flex-col md:flex-row justify-around items-center sm:skew-x-6 w-full">
          <div className="md:pl-7 flex justify-center md:justify-start lg:w-1/3">
            {/* <div className="border-[9px] md:border-[14px] -skew-x-6 border-blue-800 bg-blue-200 p-2 w-fit rounded-xl"> */}
            {/* <div className="border-[5px] md:border-[7px] border-blue-600 h-full p-3 md:p-6 rounded-xl"> */}
            <img
              src="/introduction/My_pic_tie.png"
              className="max-w-[150px] sm:max-w-[200px] sm:min-w-[200px] sm:min-h-[150px] md:h-[300px] rounded-xl"
            />{" "}
            {/* </div> */}
            {/* </div> */}
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
          {/* <div className="pt-4 flex pl-4 pr-4 lg:pt-0 lg:pr-0 ml-0 lg:ml-20">
            <div>
              Screenshot Prevention in Mobile App Hello Guys, here is how to
              block taking screenshots in React Native. Screenshot Prevention in
              Mobile App Hello Guys, here is how to block taking screenshots in
              React Native.
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
