import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { TabTitle } from "../../utils/GeneralFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState("");
  TabTitle("Toyland | Add Toy");
  const api = {
    apiLink: import.meta.env.VITE_APILINK,
  };

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.toyName.value;
    const category = selectedValue;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const img = form.url.value;
    const description = form.description.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;

    const toy = {
      sellerName,
      sellerEmail,
      toyName,
      category,
      price,
      rating,
      quantity,
      description,
      img,
    };

    console.log(toy);

    fetch(`${api.apiLink}/addToy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          toast.info("Toy added successfully");
        }
      });
  };
  return (
    <div className="container mx-auto py-5">
      <h1 className="font-bold text-5xl text-black text-center py-[50px]">
        Add Toy
      </h1>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="sellerName"
              placeholder="Seller name"
              className="input input-bordered input-info"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="sellerEmail"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered input-info"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="Name"
              className="input input-bordered input-info"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="select select-info w-full"
            >
              <option value="DEFAULT" disabled>
                Select one category
              </option>
              <option value="Language">Language</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              min="0.0"
              step="0.1"
              className="input input-bordered input-info"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="number"
              min="1"
              step="1"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered input-info"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              min="0.0"
              step="0.1"
              max="5.0"
              name="rating"
              placeholder="Rating"
              className="input input-bordered input-info"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="url"
              placeholder="URL"
              className="input input-bordered input-info"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details description</span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="textarea textarea-info"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary text-white text-lg bg-[#198AB7] btn-block border-0 hover:bg-[#136F95]"
            type="submit"
            value="Save"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddToy;
