import { Link } from "react-router-dom";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg, description }) => {
    // console.log(title)
    return (
        <div className="mb-14">
            {title

                &&

                <Cover
                    img={coverImg}
                    title={title}
                    description={description}

                ></Cover>
            }


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 mx-10">
                {
                    items.map(item => <MenuItem

                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;