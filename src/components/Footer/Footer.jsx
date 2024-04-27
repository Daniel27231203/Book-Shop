import React from 'react';
import './Footer.css'

import {FaInstagram} from 'react-icons/fa'
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                        <h1>BOOKShop</h1>
                        <div className="footer-block1">
                            <h3>Способ оплаты</h3>
                            <h3>Условия доставки</h3>
                            <h3>Правила покупки</h3>
                        </div>
                        <div className="footer-block2">
                            <h3>FAQ</h3>
                            <h3>О нас</h3>
                        </div>
                        <div className="footer-block3">
                            <h3>Связаться с нами:</h3>
                            <h3>+996 222 533 735</h3>
                            <h3>+996 222 533 735</h3>
                            <h3>+996 222 533 735</h3>
                            <div className="footer-icons">
                                <button><FaInstagram />
</button>
                                <button><FaTelegram />
</button>
                                <button><FaWhatsapp />
</button>
                                <button><FaFacebook />
</button>
                            </div>
                        </div>
                        <div className="footer-block4">
                            <h3>Адрес</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in dolor viverra feugiat neque, sed in. Mattis volutpat malesuada velit parturient aliquam, est. Mauris vitae velit laoreet faucibus nec amet velit.</p>
                        </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;