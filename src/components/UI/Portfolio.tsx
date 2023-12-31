import { useEffect, useState } from "react";
import Modal from "./Modal";
import { getAll } from "../../api/project";
import { IProject } from "../../interfaces/project";
import { Skeleton } from "antd";
import { pause } from "../../utils/pause";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState<number>(6);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [selecttab, setSelectTab] = useState<string>("all");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string | number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShowModal = (id: number | string) => {
    if (typeof id === "string" || typeof id === "number") {
      setShowModal(true);
      setActiveId(id);
    }
  };
  const handleLoadMore = () => {
    setNextItems((prev) => prev + 3);
  };
  const handleLoadLess = () => {
    setNextItems(6);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await pause(1000);
      const { data } = await getAll();

      if (selecttab === "all") {
        setProjects(data);
        setIsLoading(false);
      }
      if (selecttab === "web-design") {
        const filterData = data.filter((item: IProject) => {
          return item.projectCategoryId.name === "Web";
        });
        setProjects(filterData);
        setIsLoading(false);
      }

      if (selecttab === "app-design") {
        const filterData = data.filter((item: IProject) => {
          return item.projectCategoryId.name === "App";
        });
        setProjects(filterData);
        setIsLoading(false);
      }
    })();
  }, [selecttab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className={`${
                selecttab === "all"
                  ? "bg-smallTextColor text-white"
                  : "text-smallTextColor bg-none"
              }  border border-solid border-smallTextColor py-2 px-4 rounded-[8px]`}
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className={`${
                selecttab === "web-design"
                  ? "bg-smallTextColor text-white"
                  : "text-smallTextColor bg-none"
              } text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]`}
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("app-design")}
              className={`${
                selecttab === "app-design"
                  ? "bg-smallTextColor text-white"
                  : "text-smallTextColor bg-none"
              } text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]`}
            >
              App Design
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-10">
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((_, index) => (
                <Skeleton.Image
                  key={index + 1}
                  active={true}
                  className="!w-full !h-[249px] sm:!w-[337px] sm:!h-[225px] md:!w-[260px] md:!h-[173px] lg:!w-[363px] lg:!h-[240px] !rounded-[8px]"
                />
              ))
            : Array.isArray(projects) &&
              projects
                ?.slice(0, nextItems)
                ?.map((item: IProject, index: number) => (
                  <div
                    key={index}
                    data-aos="fade-zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="group max-w-full w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                  >
                    <div className="w-full">
                      <img
                        className="rounded-[8px] w-full object-cover"
                        src={item.imgUrl}
                        alt=""
                      />
                    </div>
                    <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-[8px]">
                      <div className="w-full h-full flex items-center justify-center">
                        <button
                          onClick={() => handleShowModal(item._id)}
                          className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                        >
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
        </div>

        {!isLoading && (
          <div className="text-center mt-6">
            {projects.length <= 3 || projects.length <= 6 ? (
              ""
            ) : nextItems >= projects.length ? (
              <button
                onClick={handleLoadLess}
                className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
              >
                See Less
              </button>
            ) : (
              <button
                onClick={handleLoadMore}
                className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
              >
                See More
              </button>
            )}
          </div>
        )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeId} />}
    </section>
  );
};

export default Portfolio;
