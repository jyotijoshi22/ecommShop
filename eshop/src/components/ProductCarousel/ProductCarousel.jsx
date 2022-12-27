import styles from "./ProductCarousel.module.scss";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
//import { useContext } from "react";
//import { SearchContext } from "../context/SearchContext";
//import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     image: "./assets/tshirts.jfif",
//     caption: "Caption",
//     description: "Description Here",
//   },
//   {
//     image: "./assets/tshirts.jfif",
//     caption: "Caption",
//     description: "Description Here",
//   },
//   {
//     image: "./assets/tshirts.jfif",
//     caption: "Caption",
//     description: "Description Here",
//   },
// ];

const ProductCarousel = () => {
  //   const [index, setIndex] = useState(0);
  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);
  //   };

  return (
    <div className={styles.ProductCarousel}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/assets/carousel1.jfif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/assets/carousel2.jfif"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/assets/carousel2.jfif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
