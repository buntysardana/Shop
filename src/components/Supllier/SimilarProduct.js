import React from "react";
import Card from "../../common/Card";
import dustbin from "../../Assets/🦆 icon _trash_.png";
import styles from "./SimilarProduct.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarProduct = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <div className="px-3">
              <Card
                bgColor="#fff"
                width="100%"
                paddingLeft="2%"
                paddingRight="2%"
              >
                <div className={`${styles.container}`}>
                  <div style={{ backgroundColor: "red" }}>don</div>
                  <div style={{ backgroundColor: "yellow", height: "70px" }}>
                    hello
                  </div>
                </div>
              </Card>
              <div
                className="mt-1 px-1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>Edit</p>
                <img width={15} height={20} src={dustbin} alt="Trash Icon" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarProduct;
