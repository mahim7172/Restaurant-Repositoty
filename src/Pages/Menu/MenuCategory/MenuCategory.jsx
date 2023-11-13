import MenuItem from "../../../Components/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg, description }) => {
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

        </div>
    );
};

export default MenuCategory;