import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");

  const activeMenuSet = (value) => setActiveMenu(activeMenu === value ? "" : value);
  const activeBtn = (value) => (value === activeMenu ? "-" : "+");
  const activeLi = (value) => (value === activeMenu ? { display: "block" } : { display: "none" });
  const setSub = (value, motherMenu) =>
    motherMenu === activeMenu && value === subMenus ? setSubMenus("") : setSubMenus(value);
  const activeSub = (value) => (value === subMenus ? { display: "block" } : { display: "none" });

  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none header____" style={{background: 'black'}}>
      <div className="mobile-menu mean-container" style={{background: 'black'}}>
        <div className="mean-bar">
        <div style={{position: 'absolute', top: '0', zIndex: 999, display: 'flex', alignItems: 'center', background: ''}}>
        <img src="lg.png" style={{width: '80px', height: ''}} alt="logo" />
        <h1 className="head" style={{fontSize: '1.6rem', color: 'white'}}>Telimissionhills&CO.</h1>
        </div>
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul className="nav_scroll" style={{ display: toggle ? "block" : "none" }}>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/service">Our Firm</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              <li className="mean-last">
                <Link legacyBehavior href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};

export default MobileMenu;
