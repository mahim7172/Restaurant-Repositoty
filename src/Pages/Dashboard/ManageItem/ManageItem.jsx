import { RiDeleteBin2Fill } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
// import useCard from "../../../Hooks/useCard";

const ManageItem = () => {
    const [menu, , refetch] = useMenu()
    // const [refetch] = useCard()
    const axiosSecure = UseAxiosSecure()
    // console.log(menu)

    // delete menu
    const handleDelete = (item) => {
        console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res?.data)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }

    const handleUpdate = item => {
        console.log(item)
    }
    return (
        <div>
            <SectionTitle heading="MANAGE ALL ITEMS" subHeading="Hurry Up"></SectionTitle>
            <div className="text-xl bg-orange-700 text-center py-2 rounded-lg text-white mb-2">
                Total Item {menu.length}
            </div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="rounded-2xl bg-slate-200 ">
                                <th>
                                    #
                                </th>
                                <th>Image</th>

                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td className="text-right">${item?.price}</td>
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button
                                            onClick={() => handleUpdate(item._id)}
                                            className=" btn btn-md bg-orange-400  text-xl text-white hover:text-black">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                </th>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className=" btn btn-md bg-red-600  text-xl text-white hover:text-black">
                                        <RiDeleteBin2Fill />
                                    </button>
                                </td>
                            </tr>)}

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;