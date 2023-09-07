import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { CategoryForm, categorySchema } from "../../../interfaces/schemas";
import { getCategoryById, updateCategory } from "../../../api/category";

type Props = {};

const EditCategory = (props: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryForm>({
    resolver: yupResolver(categorySchema),
    defaultValues: async () => {
      if (id) {
        return await fetchCategoryById(id);
      }
    },
  });

  const fetchCategoryById = async (id: number | string) => {
    try {
      const { data } = await getCategoryById(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleSubmit = async (data: CategoryForm) => {
    try {
      if (id) {
        await updateCategory(id, data);
        message.info("Cập nhật category thành công");
        navigate("/admin/category");
      }
    } catch (error: any) {
      message.info(`Cập nhật category thất bại "${error.message}"`);
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          {...register("name")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {errors.name && errors.name.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Name
        </label>
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

export default EditCategory;
