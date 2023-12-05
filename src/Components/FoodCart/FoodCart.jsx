
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const FoodCart = ({ item }) => {

    const { recipe, name, image, price } = item
    const { user } = UseAuth()
    const navigate = useNavigate()
    const handleAddToCart = food => {
        console.log(food, user?.email)
        if (user && user.email) {
            // todo : send card item to database
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
                    navigate('/login')
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
                            onClick={() => handleAddToCart(item)}
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