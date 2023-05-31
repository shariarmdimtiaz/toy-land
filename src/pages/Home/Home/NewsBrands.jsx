import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NewsBrands = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="container mx-auto py-[120px]">
      <h1 className="text-center font-bold text-5xl py-5">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="card w-90 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">New Toy Trends for Endless Fun</h2>
            <p>
              Stay updated with the latest toy trends that will spark
              imagination and delight children of all ages. From interactive
              robots to creative building sets, explore the toys that are
              capturing hearts and minds.
            </p>
          </div>
        </div>
        <div className="card w-90 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">
              Must-Have Toys for the Holiday Season
            </h2>
            <p>
              Get a sneak peek at the hottest toys that will be on every child's
              wish list this holiday season. From classic favorites to
              innovative new releases, find the perfect gifts to make their
              dreams come true.
            </p>
          </div>
        </div>
        <div className="card w-90 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">
              The Power of Play: Benefits of Toys for Child Development
            </h2>
            <p>
              Explore the remarkable impact of play on child development. Learn
              how toys contribute to cognitive, social, and emotional growth,
              and discover the types of toys that promote different areas of
              development.
            </p>
          </div>
        </div>
        <div className="card w-90 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">New Toy Trends for Endless Fun</h2>
            <p>
              Stay updated with the latest toy trends that will spark
              imagination and delight children of all ages. From interactive
              robots to creative building sets, explore the toys that are
              capturing hearts and minds.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[120px]">
        <h1 className="text-center font-bold text-5xl py-5">Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="carousel-item mx-auto">
            <LazyLoadImage
              className="border rounded-lg"
              src="https://i.ibb.co/C8vmwFw/2021-p-and-w-logo-packaging-design-little-lot-toy-brand.png"
              alt=""
            />
          </div>
          <div className="carousel-item mx-auto">
            <LazyLoadImage
              className="border rounded-lg"
              src="https://i.ibb.co/Gdr3dzR/f0ed4c5f-220a-4a38-be6b-56daa4558fb3-png-Lego.png"
              alt=""
            />
          </div>
          <div className="carousel-item mx-auto">
            <LazyLoadImage
              className="border rounded-lg"
              src="https://i.ibb.co/pb3q8Yj/download.png"
              alt=""
            />
          </div>
          <div className="carousel-item mx-auto">
            <LazyLoadImage
              className="border rounded-lg"
              src="https://i.ibb.co/Q9vgg8k/janod-sm.png"
              alt=""
            />
          </div>
          <div className="carousel-item mx-auto">
            <LazyLoadImage
              className="border rounded-lg"
              src="https://i.ibb.co/M6Cwd2F/hely002-533ebfc052cccc1f1f6b2f834ead154f.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBrands;
