import React, { Component } from 'react';
import './styles/header.css';
import Modal from "react-responsive-modal";
export default class Header extends Component {
    state = {
        openAuth: false,
        openReg:false,
        personType:0
    };
    personType(index){
       this.setState({personType:index})
    }
    openRegonOpenModal = () => {
        this.setState({ openReg: true });
    };

    openRegonCloseModal = () => {
        this.setState({ openReg: false });
    };

    openAuthonOpenModal = () => {
        this.setState({ openAuth: true });
    };

    openAuthonCloseModal = () => {
        this.setState({ openAuth: false });
    };
    render() {
        const { openAuth,openReg } = this.state;
        return (
            <div className="container main">
                <Modal showCloseIcon={false} open={openReg} onClose={this.openRegonCloseModal} little>
                    <div className="authorizationHeader d-flex align-items-center justify-content-center">
                        <span>РЕЄСТРАЦІЯ</span>
                    </div>
                    <div className="authorization">
                        <div className="authGroup">
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i class="fas fa-user"></i>
                                </div>
                                <input type="text" placeholder="ПІБ"/>
                            </div>
                            <div className="row d-flex justify-content-between align-items-center paddingHorizontal15">
                                <div className="typeButtons"
                                     onClick={()=>this.personType(0)}
                                     style={this.state.personType===0?{backgroundColor:'#fed328'}:null}
                                >Компанія</div>
                                <div className="typeButtons"
                                     onClick={()=>this.personType(1)}
                                     style={this.state.personType===1?{backgroundColor:'#fed328'}:null}
                                >Приватна особа</div>
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i class="fas fa-at"></i>
                                </div>
                                <input type="email" placeholder="email"/>
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <input id="phone" type="text" placeholder="номер телефону"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="buttonEnter">Зареєструватися</div>
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-end d-flex align-items-center"
                                     onClick={()=>{
                                         this.openRegonCloseModal()
                                         this.openAuthonOpenModal()
                                     }}
                                >
                                    <span className="rememberMe">Назад</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
                <Modal showCloseIcon={false} open={openAuth} onClose={this.openAuthonCloseModal} little>
                    <div className="authorizationHeader d-flex align-items-center justify-content-center">
                        <span>ВХІД</span>
                    </div>
                    <div className="authorization">
                        <div className="authGroup">
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i class="fas fa-user"></i>
                                </div>
                                <input type="text" placeholder="username"/>
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i class="fas fa-unlock-alt"></i>
                                </div>
                                <input type="password" placeholder="password"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="buttonEnter">Увійти</div>
                            </div>
                            <div className="col">
                                <div className="d-flex align-items-center justify-content-end">
                                    <input type="checkbox"/>
                                    <label className="rememberMe">Запам'ятати мене</label>
                                </div>
                            </div>
                        </div>
                        <div className="row reg_forgetPassword">
                            <div className="col">
                                <div className="d-flex justify-content-start">
                                    <span className="registrationView" onClick={()=>{
                                        this.openAuthonCloseModal()
                                        this.openRegonOpenModal()
                                    }}>Зареєструватися</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-end">
                                    <span className="forgerPassword">Забув пароль</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
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
                            <div className="circle" onClick={this.openAuthonOpenModal}>
                                <i class="fas fa-user"></i>
                            </div>
                            <div className="text enter" onClick={this.openAuthonOpenModal}>Вхід</div>
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