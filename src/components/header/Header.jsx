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
                <NavLink to={'/'}>ОДЕЖДА</NavLink>
                <NavLink to={'/'}>ОБУВЬ</NavLink>
                <NavLink to={'/'}>БРЕНДЫ</NavLink>
                <NavLink to={'/'}>ЗАКАЗ</NavLink>
                <NavLink to={'/'}>ИНФОРМАЦИЯ</NavLink>
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