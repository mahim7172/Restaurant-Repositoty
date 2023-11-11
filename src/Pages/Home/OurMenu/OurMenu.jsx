import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/MenuItem/MenuItem";

const OurMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerItem = data.filter(item => item.category === 'popular')
                setMenu(populerItem)
            })

    }, [])


    console.log(menu)


    return (
        <div className="mb-5 md:mb-12">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >

            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem

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