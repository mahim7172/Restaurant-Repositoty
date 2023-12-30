import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaCar, FaPerson, FaWallet } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";

const AdminHome = () => {
    const { user } = UseAuth()
    const axiosSeccure = UseAxiosSecure()
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSeccure.get('/admin-stats');
            return res.data;
        }

    })
    return (
        <div>
            <h2 className="text-2xl ">Hi😊 Welcome {user?.displayName ? user.displayName : "Back"}   </h2>
            <div className="lg:flex lg:gap-2   mt-12 ">
                {/* Revenue */}
                <div className="bg-red-400  rounded-lg flex items-center py-3 px-2 gap-2 text-white font-bold">
                    <div className="text-2xl">
                        <FaWallet></FaWallet>
                    </div>
                    <div>
                        <h2 className="text-xl"> $ {stats?.revenue}</h2>
                        <h2 className="ml-2">Revenue</h2>
                    </div>
                </div>
                {/* Customers */}
                <div className="bg-orange-400  rounded-lg flex items-center py-3 px-2 gap-2 text-white font-bold">
                    <div className="text-2xl">
                        <FaPerson></FaPerson>
                    </div>
                    <div>
                        <h2 className="text-xl">{stats?.users}</h2>
                        <h2 className="">Customers</h2>
                    </div>
                </div>
                {/* Products */}
                <div className="bg-yellow-400  rounded-lg flex items-center py-3 px-2 gap-2 text-white font-bold">
                    <div className="text-2xl">
                        <FaMagic></FaMagic>
                    </div>
                    <div>
                        <h2 className="text-xl"> $ {stats?.menuItems}</h2>
                        <h2 className="ml-2">Products</h2>
                    </div>
                </div>
                {/* Orders */}
                <div className="bg-red-400  rounded-lg flex items-center py-3 px-2 gap-2 text-white font-bold">
                    <div className="text-2xl">
                        <FaCar></FaCar>
                    </div>
                    <div>
                        <h2 className="text-xl"> $ {stats?.orders}</h2>
                        <h2 className="ml-2">Orders</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;