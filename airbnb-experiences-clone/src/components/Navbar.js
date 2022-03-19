import logo from "../images/logo-airbnb.png"
import "../style.css"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" width="109px" height="60px" className="nav--logo" />
        </nav>
    )
}