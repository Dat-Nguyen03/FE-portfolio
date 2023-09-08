import React, { useEffect, useState } from "react";
import { IProject } from "../../interfaces/project";
import { getProjectByID } from "../../api/project";
import { Spin } from "antd";
type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeID: string | number;
};

const Modal = ({ setShowModal, activeID }: Props) => {
  const [project, setProject] = useState<IProject>({} as IProject);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getProjectByID(activeID);
        setProject(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
        <div className="w-[90%] max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
          {isLoading ? (
            <div className="text-center">
              <Spin size="large" tip="Loading" />
            </div>
          ) : (
            <>
              <div>
                <img
                  className="rounded-[8px] sm:h-auto sm:w-auto md:h-[300px] md:max-h-[350px] md:w-full object-cover"
                  src={project?.imgUrl}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-3xl text-headingColor font-[800] my-5">
                  {project?.title}
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <h4 className="text-headingColor text-[18px] font-[700]">
                    Category
                  </h4>
                  <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0">
                    {project?.projectCategoryId?.name}
                  </span>
                </div>
                <p className="text-[15px] leading-7 text-smallTextColor">
                  {project?.description}
                </p>
                <div className="mt-5 flex items-center gap-3 flex-wrap">
                  <h4 className="text-headingColor text-[18px] font-[700]">
                    Technologies
                  </h4>
                  {project?.technologyId?.map((item, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
                    >
                      {item?.name}
                    </span>
                  ))}
                </div>
                <a href={project?.siteUrl} target="_blank">
                  <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                    Live site
                  </button>
                </a>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
              >
                &times;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
