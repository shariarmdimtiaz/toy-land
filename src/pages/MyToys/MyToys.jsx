import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import ToyRow from "./ToyRow";
import { AiOutlineEdit } from "react-icons/ai";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TabTitle } from "../../utils/GeneralFunctions";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();
  TabTitle("Toyland | My Toys");
  const api = {
    apiLink: import.meta.env.VITE_APILINK,
  };

  const url = `${api.apiLink}/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("toyland-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setToys(data);
        } else {
          // logout and then navigate
          navigate("/");
        }
      });
  }, [url, navigate]);
  //console.log(">>>$", toys);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete?");
    if (proceed) {
      fetch(`${api.apiLink}/toyDelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.error("Deleted successfully");
            // alert("Deleted successful!");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  const sortData = () => {
    const sorted = [...toys].sort((a, b) => {
      if (sortOption === "dsc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setToys(sorted);
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    sortData();
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-5xl py-5 text-center">My Toys</h2>
      <div className="flex justify-center items-center py-6">
        <select
          onChange={handleSortChange}
          defaultValue={"DEFAULT"}
          className="select select-bordered select-sm w-full max-w-xs"
        >
          <option value="DEFAULT" disabled>
            Sort by price
          </option>
          <option value="asc">Ascending</option>
          <option value="dsc">Descending</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <HiArchiveBoxXMark />
                </label>
              </th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>
                <AiOutlineEdit />
              </th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToyRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></ToyRow>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyToys;
