import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
const Main = () => {
  return (
    <div className="bg-[#eeeff0]">
      <NavBar></NavBar>
      <Toaster />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
