import "./App.css";
import Article from "./components/Article/Article";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";

function Main() {
  return (
    <div>
      <Aside />
      <Article />
      <Footer />
    </div>
  );
}

export default Main;
