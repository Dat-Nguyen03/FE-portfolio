import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { IAbout } from "../../interfaces/about";
import { getAllAbout } from "../../api/about";
import { IICon } from "../../interfaces/icon";
import { TypeAnimation } from "react-type-animation";
import { Skeleton } from "antd";
import { pause } from "../../utils/pause";

type Props = {
  icons: IICon[];
};
const Hero = ({ icons }: Props) => {
  const [about, setAbout] = useState<IAbout[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await pause(1000);
        const { data } = await getAllAbout();
        setIsLoading(false);
        setAbout(data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(isLoading);

  return (
    <section className="pt-0" id="about">
      {isLoading ? (
        <div className="container pt-14">
          <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            <div className="w-full md:basis-1/2 mb-5">
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-smallTextColor font-[600] text-[16px]"
              >
                <Skeleton active paragraph={{ rows: 1 }} />
              </h5>

              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 h-[92px]"
              >
                <Skeleton active paragraph={{ rows: 2 }} />
              </h1>

              <div
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex items-center gap-6 mt-7"
              >
                <a href="#contact">
                  <Skeleton.Button active shape="square" />
                </a>
                <a
                  href="#portfolio"
                  className="text-smallTextColor font-[600] text-[16px] border-smallTextColor"
                >
                  <Skeleton.Button active shape="square" />
                </a>
              </div>

              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 mt-12 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
              >
                <Skeleton />
              </p>

              <div className="flex items-center gap-9 mt-14">
                <span className="text-smallTextColor text-[15px] font-[600]">
                  <Skeleton.Button size="large" />
                </span>
                <Skeleton.Avatar size="large" />
                <Skeleton.Avatar size="large" />
                <Skeleton.Avatar size="large" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="basis-1/3 mt-10 sm:mt-0"
            >
              <div className="flex items-center justify-center">
                {/* <img src={item.image} alt="" /> */}
                <Skeleton.Image
                  className="!w-[300px] !h-[600px] !rounded-lg"
                  active
                />
              </div>
            </div>
            <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <Skeleton.Input active />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  <Skeleton.Input active block />
                </h4>
              </div>
              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <Skeleton.Input active />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  <Skeleton.Input active block />
                </h4>
              </div>
              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <Skeleton.Input active />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  <Skeleton.Input active block />
                </h4>
              </div>
              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <Skeleton.Input active />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  <Skeleton.Input active block />
                </h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container pt-14">
          {about.map((item, index) => (
            <div
              className="md:flex items-center justify-between sm:flex-col md:flex-row"
              key={index}
            >
              <div className="w-full md:basis-1/2">
                <h5
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className="text-smallTextColor font-[600] text-[16px]"
                >
                  {item.subIntro}
                </h5>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 h-[92px]"
                >
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                      500,
                      item.introText,
                      1000,
                      "I'm Dat Nguyen Back-End Web Developer",
                    ]}
                    speed={20}
                    repeat={Infinity}
                  />
                </h1>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1800"
                  data-aos-delay="200"
                  className="flex items-center gap-6 mt-7"
                >
                  <a href="#contact">
                    <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                      <i className="ri-mail-line"></i>Hire me
                    </button>
                  </a>
                  <a
                    href="#portfolio"
                    className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                  >
                    See portfolio
                  </a>
                </div>

                <p
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="flex gap-2 mt-12 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
                >
                  <span>
                    <i className="ri-apps-2-line"></i>
                  </span>
                  {item.description}
                </p>

                <div className="flex items-center gap-9 mt-14">
                  <span className="text-smallTextColor text-[15px] font-[600]">
                    Follow me:
                  </span>
                  {icons.map((item, index) => (
                    <span key={index}>
                      <a
                        href={`${item.url}`}
                        className="text-smallTextColor text-[18px] font-[600]"
                        target="_blank"
                      >
                        <i className={`${item.icon}`}></i>
                      </a>
                    </span>
                  ))}
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="basis-1/3 mt-10 sm:mt-0"
              >
                <div className="flex items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
              </div>
              <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                <div className="mb-10">
                  <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={6} duration={2} suffix="+" />
                  </h2>
                  <h4 className="text-headingColor font-[600] text-[18px]">
                    Years of experience
                  </h4>
                </div>
                <div className="mb-10">
                  <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={100} duration={2} suffix="%" />
                  </h2>
                  <h4 className="text-headingColor font-[600] text-[18px]">
                    Success rate
                  </h4>
                </div>
                <div className="mb-10">
                  <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={150} duration={2} suffix="+" />
                  </h2>
                  <h4 className="text-headingColor font-[600] text-[18px]">
                    Happy clients
                  </h4>
                </div>
                <div className="mb-10">
                  <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={249} duration={2} suffix="+" />
                  </h2>
                  <h4 className="text-headingColor font-[600] text-[18px]">
                    Projects Completed
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
