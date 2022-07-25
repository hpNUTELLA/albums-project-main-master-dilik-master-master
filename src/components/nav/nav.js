import Logo from "./img/site-logo.png";
import Bars from "./img/bars.png";
import Exit from "./img/Exit.png";
import "./nav.scss";
import Filter from "../filter/filter";
import { useState } from "react";

const SitesNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav>
      <div className="wrapper-all">
        <img src={Logo} alt="" />
        <ul className={click ? "nav-1 nav-active" : "nav"}>
          <li className="nav-item ">
            <p className="nav-item-first">All</p>
          </li>
          <li className="nav-item">
            <p>Design Theory</p>
          </li>
          <li className="nav-item">
            <p>UX</p>
          </li>
          <li className="nav-item">
            <p>UI</p>
          </li>
          <li className="nav-item">
            <p>Typography</p>
          </li>
        </ul>

        <div className="nav-hamburger" onClick={handleClick}>
          {click ? (
            <img src={Exit} alt="" className="exit" />
          ) : (
            <img src={Bars} alt="" />
          )}
        </div>
      </div>

      <div className="filter-block">
        <Filter></Filter>
      </div>
    </nav>
  );
};
export default SitesNav;
