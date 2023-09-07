import React from "react";
import { ISetting } from "../../interfaces/setting";
import { IICon } from "../../interfaces/icon";
import { Link } from "react-router-dom";
type Props = {
  footerData: ISetting[];
  icons: IICon[];
};

const Footer = ({ footerData, icons }: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        {footerData.map((item, index) => (
          <div
            className="sm:flex items-center justify-between md:gap-8"
            key={index}
          >
            <div className="w-full sm:w-1/2">
              <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                {item.title}
              </h2>
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i>Hire me
                </button>
              </a>
            </div>

            <div className="w-full sm:w-1/2">
              <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                {item.description}
              </p>

              <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                <span className="text-gray-300 font-[600] text-[15px]">
                  Follow Me:
                </span>
                {icons.map((item, index) => (
                  <span
                    className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center"
                    key={index}
                  >
                    <a
                      href={`${item.url}`}
                      className="text-gray-300 font-[500] text-[18px]"
                    >
                      <i className={`${item.icon}`}></i>
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1b1e29 py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              {footerData.map((item, index) => (
                <a
                  href="#"
                  className="flex items-center gap-[10px]"
                  key={index}
                >
                  <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                    {item.logoTitle}
                  </span>

                  <div className="leading-[20px]">
                    <h2 className="text-gray-200 font-[500] text-[18px]">
                      {item.bigTitle}
                    </h2>
                    <p className="text-gray-400 text-[14px] font-[500]">
                      {item.smallTitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-gray-400 tetx-[14px]">
              Copyright {year} by Dat Nguyen - All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
