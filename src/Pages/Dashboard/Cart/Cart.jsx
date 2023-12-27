import Swal from "sweetalert2";
import useCard from "../../../Hooks/useCard";
import { RiDeleteBin2Fill } from "react-icons/ri";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
const Cart = () => {
    const [card, refetch] = useCard()
    const totalPrice = card.reduce((total, item) => total + item.price, 0)
    const axiosSecoure = UseAxiosSecure()
    const handleDelete = id => {
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

                axiosSecoure.delete(`/cards/${id}`)
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
            <div className="text-4xl flex justify-evenly ">
                <h2>Total Ordes : {card.length} </h2>
                <h2>Total Price : {totalPrice} </h2>
                {
                    card.length
                        ?
                        <Link to="/dashboard/payment"> <button disabled={!card.length} className="btn btn-primary">Pay</button></Link>
                        :
                        <button disabled className="btn btn-primary">Pay</button>
                }
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            card.map((item, index) => <tr key={item._id}>
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
                                <td>{item?.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className=" btn btn-md bg-red-600  text-xl text-white hover:text-black">
                                        <RiDeleteBin2Fill />
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;