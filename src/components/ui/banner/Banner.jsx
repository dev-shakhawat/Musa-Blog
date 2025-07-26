import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../common/Container";

export default function Banner() {
  const bnrSlideSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <Container>
      <div className="relative h-[400px] mt-2  mx-auto ">
        {/* slider */}
        <Slider {...bnrSlideSetting}>
          {/* slider item */}

          {Array(5)
            .fill(0)
            .map((_, index) => (
              <img src="/banner.png" alt="banner" className="w-full h-full object-cover p-2 " />
            ))}
        </Slider>
      </div>
    </Container>
  );
}
