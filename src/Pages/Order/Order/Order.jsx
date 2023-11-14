import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {


    const categoryes = ['dessert', 'pizza', 'salad', 'soup', 'drinks']
    const { category } = useParams()
    const initialIndex = categoryes.indexOf(category)
    const [tabIndex, setTabindex] = useState(initialIndex)

    console.log(category)
    const [menu] = useMenu()


    const dessert = menu.filter(item => item.category === "dessert")
    const offered = menu.filter(item => item.category === "offered")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Helmet>
                <title>Returent | Order</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <Cover
                img={coverImg}
                title={"Order"}
                description={"Would you like to try a dish?"}
            ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs
                        items={dessert}
                    ></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={pizza}
                    ></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={salad}
                    ></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={soup}
                    ></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={drinks}
                    ></OrderTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;