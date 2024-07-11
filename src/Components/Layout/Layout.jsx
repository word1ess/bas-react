import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
