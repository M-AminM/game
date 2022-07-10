import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/signupOrLogin">Signup Or Login</Link>
        </div>
    )
}
export default Header;