import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import search from "../../images/header/search.png";
import user from "../../images/header/user.png";
import cart from "../../images/header/cart.png";


const Header = () => {
    return (
    <header className={style.header}>

        <div className={style.headerWrapper}>
            <div className={style.logo}>
                <NavLink to={'/'}>LOGO</NavLink>
            </div>
            <div className={style.mainMenu}>
                <NavLink to={'/clothes/'}>ОДЕЖДА</NavLink>
                <NavLink to={'/shoes/'}>ОБУВЬ</NavLink>
                <NavLink to={'/brands/'}>БРЕНДЫ</NavLink>
                <NavLink to={'/order/'}>ЗАКАЗ</NavLink>
                <NavLink to={'/info/'}>ИНФОРМАЦИЯ</NavLink>
            </div>
            <div className={style.shopping}>
                <NavLink to={'/'}>
                    <img src={search} alt=""/>
                </NavLink>
                <NavLink to={'/'}>
                    <img src={user} alt=""/>
                </NavLink>
                <NavLink to={'/'}>
                    <img src={cart} alt=""/>
                </NavLink>
            </div>
        </div>

    </header>
    );
}

export default Header;