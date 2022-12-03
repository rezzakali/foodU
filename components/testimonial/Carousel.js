import React from "react";
import Slider from "react-slick";
import userImage1 from '../../public/assets/test_image.jpg';
import userImage2 from '../../public/assets/user_image2.jpeg';
import userImage3 from '../../public/assets/user_image3.jpeg';
import userImage4 from '../../public/assets/user_image4.jpeg';
import TestimonialCard from "./TestimonialCard";

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };
    return (
        <div className="text-center">
            <Slider {...settings}>
                <TestimonialCard name={'Shakir Ahmed'} message={"Nice Pizza"} image={userImage1} />
                <TestimonialCard name={'Masum Mirza'} message={'lorem ipsum dolor sit amit'} image={userImage3} />
                <TestimonialCard name={'Hasan Mirza'} message={'lorem ipsum dolor sit amit'} image={userImage2} />
                <TestimonialCard name={'Ali'} message={'lorem ipsum dolor sit amit'} image={userImage1} />
                <TestimonialCard name={'Joe Biden'} message={'lorem ipsum dolor sit amit'} image={userImage3} />
                <TestimonialCard name={'JavaScript'} message={'lorem ipsum dolor sit amit'} image={userImage4} />

            </Slider>
        </div>
    );

};
export default Carousel;