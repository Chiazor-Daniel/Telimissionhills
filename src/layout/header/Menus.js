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
          The Firm
        </Link>
      </li>{" "}
      <li>
      <a href="#">
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
