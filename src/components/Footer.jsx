import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "ກ່ຽວກັບພວກເຮົາ",
        path: "/about"
    },
    {
        display: "ກ່ຽວກັບພວກເຮົາ",
        path: "/about"
    },
    {
        display: "ກ່ຽວກັບພວກເຮົາ",
        path: "/about"
    },
    {
        display: "ກ່ຽວກັບພວກເຮົາ",
        path: "/about"
    },
    {
        display: "ກ່ຽວກັບພວກເຮົາ",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "ໜ້າລັກ",
        path: "/about"
    },
    {
        display: "ຂ່າວສານ",
        path: "/about"
    },
    {
        display: "ບົດຄວນ",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                        ກ່ຽວກັບພວກເຮົາ
                        </div>
                        <div className="footer__content">
                            <p>
                                ເບີໂທ <strong>0123456789</strong>
                            </p>
                            <p>
                                ເບີໂທ <strong>0123456789</strong>
                            </p>
                            <p>
                                ເບີໂທ <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            ຂໍ້ມູນຕິດຕໍ່
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            ເນື້ອຫາ
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            ຄຳອະທິບາຍແລະລາຍລະອຽດຂອງລະບົບຂອງພວກເຮົາ ນອກຈາກນິ້ຫຍັງເປັນການພັດທະນາລະບົບເພື່ອທົບສອບການປ່ຽນແປ່ງການເຕັກໂຂໂລຊີ.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
