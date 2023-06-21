import { useEffect } from "react";
import img1 from "../../../assets/banner-1.png";
import img2 from "../../../assets/banner-2.png";
import img3 from "../../../assets/banner-3.png";
import img4 from "../../../assets/banner-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" className="container mx-auto">
      <AwesomeSlider animation="cubeAnimation" className="md:h-[500px]">
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
        <div data-src={img4} />
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
