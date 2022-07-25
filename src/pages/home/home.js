import Albums from "../../components/albums/albums";
import SitesNav from "../../components/nav/nav";
import Arrow from "./img/right-arrow.png";
import Footer from "../../components/footer/footer";
import "./home.scss";
import Pagination from "../../components/pagination/pagination";
const Home = () => {
  return (
    <>
      <div className="container">
        <header>
          <SitesNav />
        </header>
        <div className="wrapper-home-page">
          <section className="home-left-section">
            <h3>What I do!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              aliquet, orci in bibendum luctus, turpis ante pretium velit rutrum
              augue erat ac eros. Cras ultricies mattis convallis.
            </p>
            <span>EXPLORE ME</span>
            <img alt="" src={Arrow} />
          </section>
          <section className="home-right-section">
            <Albums />
            <Pagination />
          </section>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
