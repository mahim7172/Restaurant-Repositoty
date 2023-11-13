
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const OurMenu = () => {
    const [menu] = useMenu()

    const popular = menu.filter(item => item.category === "popular")



    return (
        <div className="mb-5 md:mb-12">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >

            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10">
                {
                    popular.map(item => <MenuItem

                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>


        </div>
    );
};

export default OurMenu;