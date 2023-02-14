import { NavLink } from "react-router-dom";
export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">Fakelandia</div>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__nav-item"><NavLink to='/'>Home</NavLink></li>
                    <li className="header__nav-item"><NavLink to='/confession'>Confession</NavLink></li>
                    <li className="header__nav-item"><NavLink to='/misdemeanour'>Misdemeanour</NavLink></li>
                </ul>
            </nav>

        </header>
    );
};