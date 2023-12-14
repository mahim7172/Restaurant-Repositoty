
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useCard from "../../Hooks/useCard";


const FoodCart = ({ item }) => {

    const { recipe, name, image, price, _id } = item
    const { user } = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()
    const [, refetch] = useCard()


    const handleAddToCart = () => {

        if (user && user.email) {
            // console.log(food, user?.email)
            // todo : send card item to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cards', cartItem)
                .then(res => {
                    // console.log(res?.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name}  added to your carts`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not login ",
                text: "Please login add to the card ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">


                <figure><img src={image} alt="Shoes" /></figure>

                <p className="absolute right-0 mr-4 mt-4 opacity-75 bg-slate-800 text-white w-12 text-center rounded-sm">${price}</p>

                <div className="card-body text-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                    <div className="card-actions justify-end">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]  hover:bg-slate-800 "
                        >
                            Add to cart

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;