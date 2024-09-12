import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll" style={{width: 'auto'}}>
      {" "}
      <li>
        <a href="/home">
          Home{" "}
          <span>
          </span>
        </a>
        
      </li>{" "}
      <li>
        <Link legacyBehavior href="service">
          Our Firm
        </Link>
      </li>{" "}
      <li>
      <a href="/team">
        Our team{" "}
        
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
