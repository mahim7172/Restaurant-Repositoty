import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureimg from '../../../assets/home/featured.jpg';
import './Feature.css'


const Featured = () => {
    return (
        <div className="backround-img bg-fixed text-white py-8">
            <SectionTitle
                subHeading="Check it out"
                heading="Feature Item"
            ></SectionTitle>
            <div
                className="
                md:rounded-full
            bg-slate-700 bg-opacity-50
            md:flex 
            items-center
             pb-20 pt-12 
             px-10 md:px-36 gap-16">
                <div>
                    <img className="rounded-md" src={featureimg} alt="" />
                </div>
                <div>
                    <p className="text-2xl">March 20, 2023</p>
                    <p className="text-2xl">WHERE CAN I GET SOME?</p>
                    <p className="my-4">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Error voluptate facere, deserunt
                        dolores maiores quod nobis quas quasi.
                        Eaque repellat recusandae ad laudantium
                        tempore consequatur consequuntur
                        omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>



        </div>
    );
};

export default Featured;