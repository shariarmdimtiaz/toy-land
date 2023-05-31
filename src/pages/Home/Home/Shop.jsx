import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "./ShopCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Shop = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Language");
  const api = {
    apiLink: import.meta.env.VITE_APILINK,
  };

  useEffect(() => {
    fetch(`${api.apiLink}/category/${activeTab}`, {
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
          // navigate("/");
        }
      });
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-right" className="container mx-auto py-5">
      <h2 className="font-bold text-5xl text-black text-center py-8">
        Shop by Category
      </h2>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTabChange("Language")}>Language</Tab>
          <Tab onClick={() => handleTabChange("Science")}>Science</Tab>
          <Tab onClick={() => handleTabChange("Math")}>Math</Tab>
          <Tab onClick={() => handleTabChange("Engineering")}>Engineering</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toys.map((toy) => (
              <ShopCard key={toy._id} toy={toy}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toys.map((toy) => (
              <ShopCard key={toy._id} toy={toy}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toys.map((toy) => (
              <ShopCard key={toy._id} toy={toy}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toys.map((toy) => (
              <ShopCard key={toy._id} toy={toy}></ShopCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
