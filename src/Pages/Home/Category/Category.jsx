import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

// import './Category.css';

const Category = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className="text-2xl text-center -mt-20 text-white uppercase ">SALAD</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className="text-2xl text-center -mt-20 text-white ">PIZZA</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className="text-2xl text-center -mt-20 text-white ">SOUP</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className="text-2xl text-center -mt-20 text-white ">SALAD</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className="text-2xl text-center -mt-20 text-white ">SALAD</h1>
                </SwiperSlide>




            </Swiper>
        </div>
    );
};

export default Category;