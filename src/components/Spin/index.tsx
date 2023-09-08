import { Spin } from "antd";
import { string } from "yup";
type SpinProps = {
  size: "small" | "middle" | "large";
  tip?: string;
};

const SpinLoading = ({ size, tip }: SpinProps) => {
  return (
    <div className="bg-headingColor bg-opacity-40 fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center">
      <Spin size={size as any} tip={tip} />
    </div>
  );
};

export default SpinLoading;
