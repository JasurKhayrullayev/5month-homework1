import "./Header.css";
import NewsImg from "../../assets/images/logo.svg";
import {VscListSelection} from "react-icons/vsc";
import {VscSearch} from "react-icons/vsc";
import {FaRegUser} from "react-icons/fa";
import {AiOutlineHeart , AiOutlineShoppingCart} from "react-icons/ai";

function Header() {
    return (
        <div>
            <header className="header">
                <div className="container wrapper">

                    <div className="menu">
                        <span className="menu-icon">
                            <VscListSelection/>
                        </span>
                        <span className="menu-text">Menu</span>
                    </div>

                    <div className="search">
                        <span className="search-icon"><VscSearch/></span>
                        <input className="search-input" type="text" placeholder="Search"/>
                    </div>

                    <a className="logo-link" href="/">
                        <img className="logo-img" src={NewsImg} alt="logo"/>
                    </a>

                    <ul className="header-list">
                        <li className="list-item">
                            <a href="#" className="item-link">
                                <FaRegUser/>
                            </a>
                        </li>

                        <li className="list-item">
                            <a href="#" className="item-link">
                                <AiOutlineHeart/>
                            </a>
                        </li>

                        <li className="list-item">
                            <a href="#" className="item-link">
                                <AiOutlineShoppingCart/>
                            </a>
                        </li>
                    </ul>

                    <div className="selects">
                        <select className="language">
                            <option value="ENG">ENG</option>
                            <option value="RUS">RUS</option>
                            <option value="UZB">UZB</option>
                        </select>

                        <select className="volyuta">
                            <option value="USD">USD</option>
                            <option value="RUB">RUB</option>
                            <option value="UZS">UZS</option>
                        </select>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;