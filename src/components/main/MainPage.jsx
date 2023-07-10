import style from './MainPage.module.css';
import {NavLink} from "react-router-dom";
import Header from "../header/Header";
import telegram from './../../images/footer/telegram.png'
// import whatsapp from './../../images/footer/whatsapp.png'
import instagram from './../../images/footer/instagram.png'


function MainPage() {
    return (
        <div className={style.wrapper}>

            <Header />

            <main className={style.main}>

            </main>

            <footer className={style.footer}>
                <div className={style.footerWrapper}>
                    <div className={style.footerTop}>
                        <div className={style.sections}>
                            <div className={style.logo}>
                                <h4>РАЗДЕЛЫ</h4>
                            </div>
                            <div className={style.items}>
                                <NavLink to={'/'}>ОДЕЖДА</NavLink>
                                <NavLink to={'/'}>ОБУВЬ</NavLink>
                                <NavLink to={'/'}>БРЕНДЫ</NavLink>
                                <NavLink to={'/'}>ЗАКАЗ</NavLink>
                                <NavLink to={'/'}>ИНФОРМАЦИЯ</NavLink>
                            </div>
                        </div>
                        <div className={style.information}>
                            <div className={style.logo}>
                                <h4>ИНФОРМАЦИЯ</h4>
                            </div>
                            <div className={style.items}>
                                <NavLink to={'/'}>КОНТАКТЫ</NavLink>
                                <NavLink to={'/'}>ДОСТАВКА</NavLink>
                                <NavLink to={'/'}>ОПЛАТА</NavLink>
                                <NavLink to={'/'}>ВОЗВРАТ</NavLink>
                                <NavLink to={'/'}>FAQ</NavLink>
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

        </div>
    );
}

export default MainPage;
