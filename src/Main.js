import "./App.css";
import Article from "./components/Article/Article";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Auction from "./components/JapanCompanyVersionB/Auction";
import CustomerCars from "./components/JapanCompanyVersionB/CustomerCars";

function Main() {
  return (
    <div>
      <Auction />
      <CustomerCars />
      <Aside />
      <Article />
      <Footer />
    </div>
  );
}

export default Main;
