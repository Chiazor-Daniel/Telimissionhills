import Link from "next/link";
import { DaskTopMenusMenus } from "./Menus";
import ModalForm from "@/src/components/modal";
import { useState } from "react";

const DefaultHeader = () => {
  const[handleShow, setHandleShow] = useState(false)

  return (
    <div id="sticky-header" className="consen_nav_manu header____">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a className="logo_img" title="consen">
                  <div style={{padding: '0px', backgroundColor: '', width: '300px', paddingRight: '20px',paddingLeft: '30px', height: '100px', position: 'absolute', top: -40
                  , left: -150, display: 'flex', gap: '20px', alignItems: 'center', borderRadius: '50px', display: 'flex'}}>
                    <img src="assets/images/logo6.png" style={{width: '100%'}} alt="logo" />
                    {/* <h1 className="" style={{fontSize: '1.7rem', color: 'white'}}>Margin Watchers</h1> */}
                  </div>
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a className="main_sticky" title="consen" style={{padding: '10px'}}>
                  <img src="assets/images/logo6.png" style={{width: '150px'}} alt="logo" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-10 pl-0 pr-0">
            <nav className="consen_menu">
              <DaskTopMenusMenus />
              <div className="header-button" onClick={()=>setHandleShow(!handleShow)}>
                <Link legacyBehavior href="">
                  <a>Schedule Free Consultation</a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <ModalForm showForm={handleShow} handleToggle={()=>setHandleShow(!handleShow)}/>
      </div>
    </div>
  );
};

export default DefaultHeader;
