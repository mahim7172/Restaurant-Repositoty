import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSeccure = UseAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSeccure('/users', {
                headers: {
                    authorization: `Bearer${localStorage.getItem('access-token')}`
                }
            })
            return res?.data
        },
    })

    //  make admin
    const handleMakeAdmin = user => {
        axiosSeccure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: `${user.name}`,
                        text: " is an admin Now",
                        icon: "success",
                        position: "top-end"
                    });
                }
            })
    }
    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSeccure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>

            <div className="text-3xl border-y-2 py-2 flex justify-center font-semibold">MANAGE ALL USERS</div>
            <div className="text-xl font-medium mt-4">Total users : {users?.length} </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user?._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className=" btn btn-md bg-[#D1A054]  text-xl text-white hover:text-black">
                                                <FaUsers />
                                            </button>
                                        }
                                    </td>
                                    <td><button
                                        onClick={() => handleDelete(user)}
                                        className=" btn btn-md bg-red-600  text-xl text-white hover:text-black">
                                        <RiDeleteBin2Fill />
                                    </button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;