import { useNavigate } from "react-router";
import Navbar from "../Components/shared/Navbar";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen max-w-7xl mx-auto bg-base-100 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Large 404 */}
          <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-purple-500 to-secondary leading-none tracking-tighter">
            404
          </h1>

          <h2 className="text-4xl font-semibold text-base-content mb-3">
            Oops! Page Not Found
          </h2>

          <p className="text-base-content/70 text-lg mb-10">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline btn-primary btn-lg flex-1 sm:flex-none"
            >
              ← Go Back
            </button>

            <button
              onClick={() => navigate("/")}
              className="btn btn-primary btn-lg flex-1 sm:flex-none"
            >
              Back to Home
            </button>
          </div>

          {/* Decorative dots */}
          <div className="mt-12 flex justify-center gap-3 opacity-30">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
