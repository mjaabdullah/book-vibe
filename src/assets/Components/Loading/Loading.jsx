import { HashLoader } from "react-spinners";

const Loading = () => {
  console.log("Loading...");
  return (
    <div className="flex items-center justify-center text-9xl h-screen text-red-800">
      <HashLoader />
    </div>
  );
};

export default Loading;
