import { Link } from "react-router-dom";

const ToysRow = ({ toy }) => {
  const { _id, sellerName, toyName, category, price, quantity } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toys/${_id}`}>
          <button className="btn btn-ghost text-white border-0 bg-[#F974B5] btn-xs hover:bg-[#EC2F8B]">
            Details
          </button>
        </Link>
        {/* <label
          htmlFor="my-modal-5"
          className="btn btn-xs text-white border-0 bg-[#F974B5] hover:bg-[#EC2F8B]"
        >
          Details
        </label> */}
      </td>

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Toy Name: {toyName}</h3>
          <div className="flex">
            <img
              src={img}
              alt=""
              className="bg-cover bg-center h-80 my-5 rounded-lg "
            />
            <div className="px-5">
              <p className="py-4">Category: {category}</p>
              <p className="py-4">Price: {price}</p>
              <p className="py-4">Quantity: {quantity}</p>
              <p className="py-4">Description: {description}</p>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div> */}
    </tr>
  );
};

export default ToysRow;
