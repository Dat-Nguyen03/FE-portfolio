import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { settingSchema, SettingForm } from "../../../interfaces/schemas";
import { editSetting, getSettingByID } from "../../../api/setting";

type Props = {};

const EditSetting = (props: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingForm>({
    resolver: yupResolver(settingSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchHeaderById(id);
      }
    },
  });

  const fetchHeaderById = async (id: number | string) => {
    try {
      const { data } = await getSettingByID(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleSubmit = async (data: SettingForm) => {
    try {
      if (id) {
        await editSetting(id, data);
        message.info(`Cập nhật setting thành công`);
        navigate("/admin/setting");
      }
    } catch (error: any) {
      message.info(`Cập nhật setting thất bại! ${error.message}`);
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          {...register("title")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {errors.title && errors.title.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          {...register("logoTitle")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {errors.logoTitle && errors.logoTitle.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Logo Title
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          {...register("bigTitle")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {errors.bigTitle && errors.bigTitle.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Big Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          {...register("smallTitle")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {errors.smallTitle && errors.smallTitle.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Small Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          {...register("description")}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write here..."
          rows={10}
        ></textarea>
        <span className="text-red-500 text-sm block my-2">
          {" "}
          {errors.description && errors.description.message}
        </span>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default EditSetting;
