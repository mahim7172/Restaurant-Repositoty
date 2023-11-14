import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const offered = menu.filter(item => item.category === "offered")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    console.log(dessert)
    return (
        <div>

            <Helmet>
                <title>Returent | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover
                img={menuImg}
                title="Our menu"
                description={"Would you like to try a dish?"}
            ></Cover>

            {/* main cover */}
            <div className='my-10'>
                <SectionTitle
                    subHeading={"Don't Miss"}
                    heading={"Today's Offer"}
                >
                </SectionTitle>
            </div>

            {/* offered */}
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/* dessert */}
            <MenuCategory
                coverImg={dessertImg}
                items={dessert}
                title="Dessert"
                description="Lorem Ipsum has been the industry’s 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled 
                it to make a type specimen book."
            ></MenuCategory>

            {/* pizza */}
            <MenuCategory
                items={pizza}
                coverImg={pizzaImg}
                title={"PIZZA"}
                description="Lorem Ipsum has 
                been the industry’s standard 
                dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and
                 scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* salad*/}
            <MenuCategory
                items={salad}
                coverImg={saladImg}
                title={"salad"}
                description="Lorem Ipsum has 
                been the industry’s standard 
                dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and
                 scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* soup*/}
            <MenuCategory
                items={soup}
                coverImg={soupImg}
                title={"soup"}
                description="Lorem Ipsum has 
                been the industry’s standard 
                dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and
                 scrambled it to make a type specimen book."
            ></MenuCategory>
        </div>
    );
};

export default Menu;