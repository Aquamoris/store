import React from "react";
import style from "./Footer.module.css"
import {NavLink} from "react-router-dom";
import telegram from "../../images/footer/telegram.png";
import instagram from "../../images/footer/instagram.png";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerWrapper}>
                <div className={style.footerTop}>
                    <div className={style.sections}>
                        <div className={style.logo}>
                            <h4>РАЗДЕЛЫ</h4>
                        </div>
                        <div className={style.items}>
                            <NavLink to={'/clothes'}>ОДЕЖДА</NavLink>
                            <NavLink to={'/shoes'}>ОБУВЬ</NavLink>
                            <NavLink to={'/brands/'}>БРЕНДЫ</NavLink>
                            <NavLink to={'/order/'}>ЗАКАЗ</NavLink>
                            <NavLink to={'/info/'}>ИНФОРМАЦИЯ</NavLink>
                        </div>
                    </div>
                    <div className={style.information}>
                        <div className={style.logo}>
                            <h4>ИНФОРМАЦИЯ</h4>
                        </div>
                        <div className={style.items}>
                            <NavLink to={'/contacts/'}>КОНТАКТЫ</NavLink>
                            <NavLink to={'/delivery/'}>ДОСТАВКА</NavLink>
                            <NavLink to={'/payment/'}>ОПЛАТА</NavLink>
                            <NavLink to={'/return/'}>ВОЗВРАТ</NavLink>
                            <NavLink to={'/faq/'}>FAQ</NavLink>
                        </div>
                    </div>
                    <div className={style.contacts}>
                        <div className={style.logo}>
                            <h4>КОНТАКТЫ</h4>
                        </div>
                        <div className={style.items}>
                            <p>8 (914) 671 65 59</p>
                            <p>ЧАСЫ РАБОТЫ С 11:00 ДО 22:00 (ВДК)</p>
                            <p>PESTRYAK.NIKITA@MAIL.RU</p>
                            <p>ВЛАДИВОСТОК, СВЕТЛАНСКАЯ 1</p>
                        </div>
                    </div>
                    <div className={style.social}>
                        <div className={style.logo}>
                            <h4>SOCIAL MEDIAS</h4>
                        </div>
                        <div className={style.socialImg}>
                            <img src={telegram} alt="telegram"/>
                            <img src={telegram} alt="whatsapp"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                    </div>
                </div>
                <div className={style.footerBot}>
                    <div className={style.copyrightMark + ' ' + style.footerItem}>
                        <p>EST. 2023 © NIKITA PESTRYAK</p>
                    </div>
                    <div className={style.laws + ' ' + style.footerItem}>
                        <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
                    </div>
                    <div className={style.privacy + ' ' + style.footerItem}>
                        <NavLink to={'/'}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ В МАГАЗИНЕ SP</NavLink>
                        <NavLink to={'/'}>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</NavLink>
                        <NavLink to={'/'}>ДОГОВОР ОФЕРТЫ</NavLink>
                    </div>
                    <div className={style.empty + ' ' + style.footerItem}>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;