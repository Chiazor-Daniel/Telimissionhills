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
                  <div style={{padding: '0px', backgroundColor: '', width: '600px', paddingRight: '20px',paddingLeft: '30px', height: '100px', position: 'absolute', top: -40
                  , left: -150, display: 'flex', gap: '20px', alignItems: 'center', borderRadius: '50px', display: 'flex'}}>
                    <div></div>
                    <div style={{background: '', padding: '10px', width: 'fit', borderRadius: '50%', height: 'fit', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="lg.png" style={{width: '100px', height: ''}} alt="logo" />

                    </div>
                    <h1 className="head" style={{fontSize: '2rem', color: 'white', width: 'auto'}}>TellimissionHills &CO.</h1>
                  </div>
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a className="main_sticky" title="consen" style={{padding: '10px'}}>
                <h1 className="head" style={{fontSize: '2rem', color: 'white', width: '500px'}}>TellimissionHills &Co.</h1>
                  
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-10 pl-0 pr-0">
            <nav className="consen_menu">
              <DaskTopMenusMenus />
              <div className="header-button" onClick={()=>setHandleShow(!handleShow)}>
               
              </div>
            </nav>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default DefaultHeader;
