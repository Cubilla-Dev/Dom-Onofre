import {  PATH_HOME } from "../../routers/routerPath";
import { Link } from "react-router-dom";
import Logo from './Logo'
import './styleNavbar.css'


const  Navbar = () => {

    return (
        <div className="container-navbar">
                <div className="logo">
                    <Logo/>
                </div>
                <div className="redireccion" style={{ textDecoration: 'none', color: 'black',fontSize:'20px' }}>
                    <div>
                        <Link style={{ textDecoration: 'none'}} to={`${PATH_HOME}`}>Tienda</Link>
                    </div>
                    <div>
                        <Link style={{ textDecoration: 'none' }}>Contacto</Link>
                    </div>
                </div>
        </div>
    );
}

export default Navbar;