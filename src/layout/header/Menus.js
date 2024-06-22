import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll" style={{width: 'auto'}}>
      {" "}
      <li>
        <a href="/">
          Home{" "}
          <span>
          </span>
        </a>
        
      </li>{" "}
      <li>
        <Link legacyBehavior href="testimonial">
          Testimonials
        </Link>
      </li>{" "}
      <li>
      <a href="#">
        Recovery{" "}
        <span>
          <i className="fas fa-angle-down" />
        </span>
      </a>
      <ul className="sub-menu">
        <li>
          <Link legacyBehavior href="service">
            Binary Options
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="service">
            CryptoCurrency
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="service">
            Forex
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="service">
            Stock Trading
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="service">
            Property Scam
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="service">
            Romance Scam
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="service">
            Others
          </Link>
        </li>
      </ul>
    </li>{" "}
    <li>
    <a href="#">
          Blacklist{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="portfolio">
              Scams
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio">
              Imposters
            </Link>
          </li>{" "}
        
        </ul>
      </li>{" "}
      <li>
      <Link legacyBehavior href="blogs">
              Blogs
            </Link>

      </li>{" "}
      <li>
        <a href="/about">
          About{" "}
        
        </a>
        
      </li>{" "}     
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};
