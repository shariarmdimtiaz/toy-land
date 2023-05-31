import { useEffect, useState } from "react";
import ToysRow from "./ToysRow";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../../utils/GeneralFunctions";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const api = {
    apiLink: import.meta.env.VITE_APILINK,
  };
  //console.log(user.email);
  TabTitle("Toyland | All Toys");

  const url = `${api.apiLink}/alltoys`;
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

  const handleSearch = () => {
    if (search !== "") {
      const url = `${api.apiLink}/searchToys/${search}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "toyland-access-token"
          )}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            const results = data.slice(0, 20);
            setToys(results);
          } else {
            // logout and then navigate
            navigate("/");
          }
        });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-5xl py-6 text-center">All Toys</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex justify-center items-center my-5">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search…"
                className="input input-bordered"
              />
              <button
                onClick={handleSearch}
                className="btn btn-square border border-[#136F95] bg-[#198AB7] hover:bg-[#136F95]"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToysRow
                key={toy._id}
                toy={toy}
                // handleDelete={handleDelete}
              ></ToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
