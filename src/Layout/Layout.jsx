import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBer from "../Pages/Shared/NavBer/NavBer";

const Layout = () => {
    const location = useLocation()
    const noNavFooter = location.pathname.includes("login")
    console.log(location)
    return (
        <div>
            {noNavFooter || <NavBer></NavBer>}
            <Outlet></Outlet>
            {noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Layout;