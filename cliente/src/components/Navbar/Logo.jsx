import {Link} from 'react-router-dom'
import {  PATH_HOME } from "../../routers/routerPath";

const Logo = () => {
    return (
        <div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`${PATH_HOME}`}>
                <img src='' alt='Logo'/>
            </Link>
        </div>
    )
}

export default Logo