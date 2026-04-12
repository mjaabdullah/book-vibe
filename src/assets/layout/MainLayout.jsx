import { Outlet } from "react-router";
import Footer from "../Components/shared/Footer";
import Navbar from "../Components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
