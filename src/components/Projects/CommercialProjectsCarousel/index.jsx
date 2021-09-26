import React from "react";
import { Link } from "react-scroll";
import CommercialProject from "./CommercialProject";
import nekiroImg from "../images/nekiro-dev.webp";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { CarouselContainer } from "./index.style";

const CommercialProjectsList = React.forwardRef(({ inView }, ref) => {
  return (
    <div ref={ref}>
      <CarouselContainer
        spaceBetween={50}
        triggeredinview={inView.toString()}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <a href="https://www.nekiro.dev/" rel="noopener noreferrer">
            <CommercialProject
              name="Nekiro.dev"
              description="A portfolio website"
              image={nekiroImg}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="Contact" isDynamic={true} smooth={true} duration={500}>
            <CommercialProject
              name="Contact me"
              description="And join the brave ones that trust me 🔥"
            />
          </Link>
        </SwiperSlide>
      </CarouselContainer>
    </div>
  );
});

export default CommercialProjectsList;
