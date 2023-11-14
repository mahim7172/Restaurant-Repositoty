import FoodCart from "../../../Components/FoodCart/FoodCart";

const OrderTabs = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 '>
            {
                items.map(item => <FoodCart
                    key={item._id}
                    item={item}
                ></FoodCart>)
            }

        </div>
    );
};

export default OrderTabs;