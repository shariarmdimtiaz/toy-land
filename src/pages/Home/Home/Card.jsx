import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ toy }) => {
  const { img } = toy;
  return (
    <div className="carousel-item h-full border-2 border-[#F974B5] rounded-xl">
      <LazyLoadImage className="rounded-xl" src={img} />
    </div>
  );
};

export default Card;
