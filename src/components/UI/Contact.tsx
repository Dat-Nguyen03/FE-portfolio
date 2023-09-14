import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { useForm } from "react-hook-form";
import { ContactForm, contactSchema } from "../../interfaces/schemas";
import { sendContact } from "../../api/contact.api";
type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(contactSchema),
  });

  const onHandleSubmit = async (data: ContactForm) => {
    try {
      await sendContact(data);
      message.success("Thank you send message");
      reset();
    } catch (error: any) {
      console.log(error);
      message.error(error);
    }
  };
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6217.825943413688!2d105.7457467192597!3d21.035390237543407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1680793299153!5m2!1svi!2s"
              className="border-0 w-full h-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form
              action=""
              className="w-full"
              onSubmit={handleSubmit(onHandleSubmit)}
            >
              <div className="mb-5">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
                <span className="text-red-500 text-sm block my-2">
                  {errors.name && errors.name.message}
                </span>
              </div>
              <div className="mb-5">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
                <span className="text-red-500 text-sm block my-2">
                  {errors.email && errors.email.message}
                </span>
              </div>

              <div className="mb-5">
                <textarea
                  {...register("content")}
                  rows={3}
                  placeholder="Content..."
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
                <span className="text-red-500 text-sm block my-2">
                  {errors.content && errors.content.message}
                </span>
              </div>
              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
