import React, { Component } from 'react';
import './styles/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="container main">
                <div className="row header d-flex align-items-center">
                    <div className="col">
                        <div className="row">
                            <div className="circle">
                                <i class="fab fa-facebook-f"></i>
                            </div>
                            <div className="circle">
                                <i class="fab fa-twitter"></i>
                            </div>
                            <div className="circle">
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row d-flex align-items-center">
                            <div className="text phone">+38 099 001 01 01</div>
                            <div className="text email">email_adress@gmail.com</div>
                            <div className="circle">
                                <i class="fas fa-user"></i>
                            </div>
                            <div className="text enter">Вхід</div>
                        </div>
                    </div>
                </div>
                <div className="row menu d-flex align-items-center">
                    <div className="col d-flex justify-content-start">
                        <div className="row">
                            <div className="menu-left-part">
                                <ul>
                                    <li>
                                        <a href="#">ПРО НАС</a>
                                        <ul>
                                            <li><a href="#">ІСТОРІЯ</a></li>
                                            <li><a href="#">РЕВЕРЕНС</a></li>
                                            <li><a href="#">СЕРВІС</a></li>
                                            <li><a href="#">НОВИНИ</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">ОБЛАДНАННЯ</a>
                                        <ul>
                                            <li><a href="#">ІСТОРІЯ</a></li>
                                            <li><a href="#">РЕВЕРЕНС</a></li>
                                            <li><a href="#">СЕРВІС</a></li>
                                            <li><a href="#">НОВИНИ</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="logo d-flex justify-content-center ">
                            <div className="logoTextLeft logoTextStyle">Клімат</div>
                            <img className="logoImage" src={require('./images/logo.png')} alt="Logo"/>
                            <div className="logoTextRight logoTextStyle">Комплект</div>
                        </div>
                    </div>
                    <div className="col menu-right-part d-flex justify-content-end">
                        <ul>
                            <li>
                                <a href="#">РЕФЕРЕНС</a>
                                <ul>
                                    <li><a href="#">ІСТОРІЯ</a></li>
                                    <li><a href="#">РЕВЕРЕНС</a></li>
                                    <li><a href="#">СЕРВІС</a></li>
                                    <li><a href="#">НОВИНИ</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">КОНТАКТИ</a>
                                <ul>
                                    <li><a href="#">ІСТОРІЯ</a></li>
                                    <li><a href="#">РЕВЕРЕНС</a></li>
                                    <li><a href="#">СЕРВІС</a></li>
                                    <li><a href="#">НОВИНИ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}}