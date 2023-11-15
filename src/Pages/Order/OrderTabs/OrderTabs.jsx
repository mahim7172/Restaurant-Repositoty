import FoodCart from "../../../Components/FoodCart/FoodCart";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTabs = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 '>
                        {
                            items.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTabs;