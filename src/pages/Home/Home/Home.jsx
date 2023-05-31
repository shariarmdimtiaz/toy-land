import { TabTitle } from "../../../utils/GeneralFunctions";
import Banner from "./Banner";
import Gallery from "./Gallery";
import NewsBrands from "./NewsBrands";
import Shop from "./Shop";

const Home = () => {
  TabTitle("Toyland");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Shop></Shop>
      <NewsBrands></NewsBrands>
    </div>
  );
};

export default Home;
