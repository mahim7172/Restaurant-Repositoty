import useCard from "../../../Hooks/useCard";
import { RiDeleteBin2Fill } from "react-icons/ri";
const Cart = () => {
    const [card] = useCard()
    const totalPrice = card.reduce((total, item) => total + item.price, 0)
    console.log(totalPrice)
    return (
        <div>
            <div className="text-4xl flex justify-evenly ">
                <h2>Total Ordes : {card.length} </h2>
                <h2>Total Price : {totalPrice} </h2>
                <button className="btn btn-primary">Pay</button>
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
                                    <button className=" btn btn-md bg-red-600  text-xl text-white hover:text-black"><RiDeleteBin2Fill /></button>
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