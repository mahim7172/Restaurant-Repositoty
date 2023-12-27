import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import { TiShoppingCart } from 'react-icons/ti';
import useCard from "../../../Hooks/useCard";

const NavBer = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [card] = useCard()
    const handleLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
    }
    const navOption =
        <>

            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="menu"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Menu
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="secret"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Secret
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="order/dessert"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Order
                </NavLink>
            </li>
            {
                user
                    ?
                    <>

                        <li>

                            <NavLink
                                onClick={handleLogOut}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                LogOut
                            </NavLink>
                        </li>
                    </>
                    :
                    <li>
                        <NavLink
                            to="login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>

            }

        </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <Link to="/" reloadDocument><button className=" btn btn-sm md:btn-md  md:text-xl font-semibold bg-slate-800 bg-opacity-70 md:px-3 md:py-2 rounded-xl text-white">Resturent</button></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1">
                        {navOption}
                    </ul>
                </div>

                <div className="navbar-end">
                    <Link to="/dashboard/cart">
                        <button className="flex border-2 rounded-lg p-1 bg-gray-600 bg-opacity-50 hover:border-sky-600">
                            <TiShoppingCart />
                            <div className="badge badge-primary bg-blue-700 hover:bg-sky-600">+{card.length}</div>
                        </button>
                    </Link>
                    <span className="mx-2"> {user?.email}</span>
                    {/* <img src={card?.photoURL} alt="" /> */}

                </div>
            </div>

        </div>
    );
};

export default NavBer;