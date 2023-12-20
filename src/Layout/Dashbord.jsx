import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaCartShopping, FaUsers } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { SiCodereview } from "react-icons/si";
import { TbBrandBooking } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingBagFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { MdContacts, MdManageHistory } from "react-icons/md";
import useCard from "../Hooks/useCard";
const Dashbord = () => {
    const [card] = useCard()
    // TODO 
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-2">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/adminHome">
                                        <FaHome /> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/addItems">
                                        <ImSpoonKnife /> Add items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/manageItems">
                                        <MdManageHistory /> Manage items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/manageBookings">
                                        <FaBook /> Manage bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/allUsers">
                                        <FaUsers /> All users
                                    </NavLink>
                                </li>

                            </>

                            :

                            <>  <li>
                                <NavLink
                                    className="hover:border-b-2"
                                    to="/dashboard/userHome">
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/reservation">
                                        <FaCalendar /> Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/paymentHistory">
                                        < AiFillCreditCard /> Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/addReview">
                                        < SiCodereview /> Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/myBooking">
                                        < TbBrandBooking /> My Booking
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="hover:border-b-2"
                                        to="/dashboard/cart">
                                        <FaCartShopping /> My Card {card.length}
                                    </NavLink>
                                </li></>
                    }
                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li>
                        <NavLink
                            className="hover:border-b-2"
                            to="/">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="hover:border-b-2"
                            to="/order/dessert">
                            <GiHamburgerMenu /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="hover:border-b-2"
                            to="/order/dessert">
                            <RiShoppingBagFill /> Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="hover:border-b-2"
                            to="/order/dessert">
                            <MdContacts /> Contact
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;