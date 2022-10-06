import CardWidget from "./CardWidget/CardWidget";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <>
        <header className="navbar navcolor border-bottom shadow navbartype fixed-top">
            <div className="container-fluid navbarGrid">
              <div className="sidebarnav">
                <ul className="listasidebar">
                  <Link to={'/CapsuleShop2/album'} className="links"><p>Home</p></Link>
                </ul>
              </div>
              <CardWidget />
            </div>
        </header>
      </>
    );
  };
  
  export default NavBar;