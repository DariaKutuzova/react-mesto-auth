import logo from "../images/logo.svg";
import {useLocation, Link} from "react-router-dom";

function Header({loggedIn, onSingOut, autoEmail}) {

    const address = useLocation()

    function handleSignOut() {
        onSingOut();
    }

    return (
        <header className="header page__item">
            <img src={logo} alt="Лого шапки" className="header__logo"/>
            {loggedIn && (
                <p className="header__entry">{autoEmail}
                    <button className="header__button" type="button" onClick={handleSignOut}>Выйти</button>
                </p>
            )}
            {!loggedIn && (
                <p>
                    {address.pathname === '/sign-in' &&
                    (<Link className="header__link" to="/sign-up">Регистрация</Link>)}
                    {address.pathname === '/sign-up' &&
                    (<Link className="header__link" to="/sign-in">Войти</Link>)}
                </p>
            )}
        </header>
    );
}

export default Header;