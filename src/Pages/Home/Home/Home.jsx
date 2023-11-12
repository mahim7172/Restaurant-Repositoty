import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import OurMenu from "../OurMenu/OurMenu";
import TestMonials from "../TestMonials/TestMonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Returent Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <OurMenu></OurMenu>
            <Featured></Featured>
            <TestMonials></TestMonials>
        </div>
    );
};

export default Home;