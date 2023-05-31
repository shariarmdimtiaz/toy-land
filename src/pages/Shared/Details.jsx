import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toy = useLoaderData();
  const {
    img,
    sellerName,
    sellerEmail,
    toyName,
    category,
    price,
    quantity,
    description,
  } = toy;
  //console.log(toyInfo);
  return (
    <div className="container mx-auto py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img src={img} alt="toy" className="bg-cover bg-center rounded-xl" />
        </div>
        <div>
          <h1 className="font-bold text-2xl">Toy Name: {toyName}</h1>
          <p className="py-2">
            <span className="font-bold">Category: </span>
            {category}
          </p>
          <p className="py-2">
            <span className="font-bold">Price: $</span>
            {price}
          </p>
          <p className="py-2">
            <span className="font-bold">Available quantity: </span>
            {quantity}
          </p>
          <p className="py-2">
            <span className="font-bold">Details information: </span>
            {description}
          </p>
          <p className="font-semibold py-2">Seller: {sellerName}</p>
          <p className="font-semibold">Email: {sellerEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
