import axios from "axios";

const upLoadFile = async (file: File) => {
  const CLOUD_NAME = "deopy6zgw";
  const PRESET_NAME = "upload-img";
  const FOLDER_NAME = "NodeJs";

  const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  const formData = new FormData();
  formData.append("upload_preset", PRESET_NAME);
  formData.append("folder", FOLDER_NAME);
  formData.append("file", file);
  const response = await axios.post(api, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const {
    data: { secure_url },
  } = response;
  return secure_url;
};

export default upLoadFile;
