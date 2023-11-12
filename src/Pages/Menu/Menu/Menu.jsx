import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import OurMenu from '../../Home/OurMenu/OurMenu';



const Menu = () => {
    return (
        <div>

            <Helmet>
                <title>Returent Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>


            <Cover
                img={menuImg}
                title="Our menu"
                description={"Would you like to try a dish?"}
            ></Cover>
            <OurMenu></OurMenu>
            <Cover
                img={menuImg}
                title="Our menu"
                description={"Would you like to try a dish?"}
            ></Cover>
            <OurMenu></OurMenu>
            <Cover
                img={menuImg}
                title="Our menu"
                description={"Would you like to try a dish?"}
            ></Cover>
            <OurMenu></OurMenu>
            <Cover
                img={menuImg}
                title="Our menu"
                description={"Would you like to try a dish?"}
            ></Cover>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Menu;