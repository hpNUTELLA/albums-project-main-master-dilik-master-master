import "./footer.scss";
import LogoWhite from "./img/site-logo-white.png";
const Footer = () => {
  return (
    <div className="site-footer ">
      <div className="footer-container">
        <ul className="footer-inner-wrapper">
          <img src={LogoWhite} alt="" />
          <ul className="footer-lists">
            <ul className="footer-lists-column-first">
              <h3>FIGHT WITH ME ON:</h3>
              <li className="footer-lists-item">Twitter</li>
              <li className="footer-lists-item br">Instagram</li>
              <li className="footer-lists-item">YouTube</li>
              <li className="footer-lists-item">Figma</li>
            </ul>

            <ul className="footer-lists-column-first">
              <h3>WHAT I HAVE DONE:</h3>
              <li className="footer-lists-item">Xalq Kutubxonasi</li>
              <li className="footer-lists-item br-2">Websitee</li>
              <li className="footer-lists-item">Website</li>
              <li className="footer-lists-item">App Store</li>
            </ul>

            <ul className="footer-lists-column-first">
              <h3>Contact:</h3>
              <li className="footer-lists-item br-3">Blog</li>
              <li className="footer-lists-item">Dribbble</li>
              <li className="footer-lists-item">Behance</li>
            </ul>
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
