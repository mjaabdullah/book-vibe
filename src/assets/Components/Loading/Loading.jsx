import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center text-9xl h-screen text-green-500">
      <HashLoader color="#0b9b2f" size={100} />
    </div>
  );
};

export default Loading;
