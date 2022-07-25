import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import MainError from "./img/error-main.png";
import "./not-fount.scss";
import SitesNav from "../../components/nav/nav";

const NotFound = () => {
  const { token } = useContext(AuthContext)
  return (
    <>
    <div className="container">
    <header>
<SitesNav/>
    <main>
    <img src={MainError} alt=""/>
    <h3>
    Page not found - 404
    </h3>
    <p>
    This page not found (deleted or never exists).Try a phrase in search box or back to home and start again.
    </p>
    </main>
    <div className="register"> 
    <Link className="login" to={"/" + (token ? "" : "login")}>{token ? "Home" : "Login"}</Link>
    </div>
    </header>
    </div>
    </>
    );
  }
  
  export default NotFound;