import styles from "./ProductCarousel.module.scss";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
//import { useContext } from "react";
//import { SearchContext } from "../context/SearchContext";
//import { useNavigate } from "react-router-dom";

const data = [
  {
    image: "./assets/tshirts.jfif",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: "./assets/tshirts.jfif",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: "./assets/tshirts.jfif",
    caption: "Caption",
    description: "Description Here",
  },
];

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.ProductCarousel}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
              />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default ProductCarousel;
