
const FoodCart = ({ item }) => {
    const { recipe, name, image, price } = item
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">


                <figure><img src={image} alt="Shoes" /></figure>

                <p className="absolute right-0 mr-4 mt-4 opacity-75 bg-slate-800 text-white w-12 text-center rounded-sm">${price}</p>

                <div className="card-body text-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;