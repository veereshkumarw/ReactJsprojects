// import { Menu } from "semantic-ui-react";
import { logo } from "../../constants/Constant";
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="ui secondary  menu">
            <img className="ui tiny image" src={logo}/>

            <Link to="/" className="item">Home</Link>
            <Link to="/recipes" className="item">Recipes</Link>
            <Link to ='/contact' className="item">Contact Us </Link>

        </div>
    )
}

export default Navbar;