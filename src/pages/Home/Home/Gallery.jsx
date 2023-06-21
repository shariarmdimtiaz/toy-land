import { useEffect, useState } from "react";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [toys, setToys] = useState([]);
  const api = {
    apiLink: import.meta.env.VITE_APILINK,
  };
  const url = `${api.apiLink}/alltoys`;
  const shuffledData = [...toys].sort(() => Math.random() - 0.5);
  const slicedToyData = shuffledData.slice(0, 6);
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
          //Navigate("/");
        }
      });
  }, [url]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-left" className="container mx-auto">
      <h2 className="font-bold text-5xl text-black text-center pt-[120px]">
        Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-[50px]">
        {slicedToyData.map((toy) => (
          <Card key={toy._id} toy={toy}></Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
