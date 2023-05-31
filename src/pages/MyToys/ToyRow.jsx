import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ToyRow = ({ toy, handleDelete }) => {
  const { _id, img, toyName, category, price, rating, quantity } = toy;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-32 h-32">
            {img && (
              <LazyLoadImage src={img} alt="Avatar Tailwind CSS Component" />
            )}
          </div>
        </div>
      </td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/editToys/${_id}`}>
          <button className="btn btn-ghost text-white border-0 bg-[#F974B5] btn-xs hover:bg-[#EC2F8B]">
            Edit
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyRow;
