import { Outlet, useNavigation } from "react-router";
import Loading from "../Components/Loading/Loading";
import Footer from "../Components/shared/Footer";
import Navbar from "../Components/shared/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
