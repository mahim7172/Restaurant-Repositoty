
const MenuItem = ({ item }) => {


    const { recipe, name, image, price } = item
    return (
        <div className="flex space-x-4">
            <div>
                <img style={{ borderRadius: '0 300px 300px 300px' }} className="w-[120px] " src={image} alt="" />
            </div>
            <div>
                <h1 className="uppercase">{name}-------</h1>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;