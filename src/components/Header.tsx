import { Link } from "react-router-dom";

type Props = {
    info: string;
}
const Header = ({info}: Props) => {
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/signupOrLogin">Signup Or Login</Link>
            <Link to="/orders">Orders</Link>
            <div className="info">{info}</div>
        </div>
    )
}
export default Header;