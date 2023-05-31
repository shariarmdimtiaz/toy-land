//import Rating from "react-rating";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ShopCard = ({ toy }) => {
  const { img, toyName, price, rating } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <LazyLoadImage src={img} alt="toys" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <div className="flex justify-between items-center">
          <p>
            Price: $<span className="font-bold">{price}</span>
          </p>
          <div className="flex justify-center items-center py-2">
            <Rating
              style={{ maxWidth: 150 }}
              value={Math.round(rating || 0)}
              readOnly
            />
            <p className="text-lg ps-3">{rating}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/toys/${toy._id}`}>
            <button className="btn btn-primary border-0 bg-[#3197C0] hover:bg-[#136F95]">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
