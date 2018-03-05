import React, { Component } from 'react';
import './styles/header.css';
import Modal from "react-responsive-modal";
import Notifications, {notify} from 'react-notify-toast';

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Header extends Component {
    constructor(){
        super();
        this.state = {
            openAuth: false,
            openReg:false,
            personType:0,
            registration:{
                orgName:'',
                name:'',
                email:'',
                password:'',
                confirmPassword:'',
                phone:''
            }
        };
        this.personType=this.personType.bind(this);
        this.openRegonOpenModal=this.openRegonOpenModal.bind(this);
        this.openRegonCloseModal=this.openRegonCloseModal.bind(this);
        this.openAuthonOpenModal=this.openAuthonOpenModal.bind(this);
        this.openAuthonCloseModal=this.openAuthonCloseModal.bind(this);
        this.onChangeRegistration = this.onChangeRegistration.bind(this);
    }
    personType(index){this.setState({personType:index})}

    openRegonOpenModal(){this.setState({ openReg: true });};

    openRegonCloseModal(){this.setState({ openReg: false });};

    openAuthonOpenModal(){this.setState({ openAuth: true });};

    openAuthonCloseModal(){this.setState({ openAuth: false });};

    onChangeRegistration(field,value){
        this.setState({
            registration:{...this.state.registration,[field]:value}
        })
    }

    registration(){
        let toast = { background: '#fed328', text: "#5f5f5f" };
        for(let i in this.state.registration){
            if(this.state.registration[i]==='')
                return notify.show("Не всі поля заповнені!", "custom", 3000, toast);
        }
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(this.state.registration.email))
            return notify.show("Емейл некоректний!", "custom", 3000, toast);;
        if(this.state.registration.password!==this.state.registration.confirmPassword){
            return notify.show("Паролі не співпадають!", "custom", 3000,toast);
        }

    }

    registrationView(){
        return(
            <Modal showCloseIcon={false} open={this.state.openReg} onClose={this.openRegonCloseModal} little>
                <div className="header">
                    <div className="authorizationHeader d-flex align-items-center justify-content-center">
                        <span>РЕЄСТРАЦІЯ</span>
                    </div>
                    <div className="authorization">
                        <div className="authGroup">
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-users"/>
                                </div>
                                <input value={this.state.registration.orgName}
                                       onChange={(e)=>this.onChangeRegistration('orgName',e.target.value)}
                                       type="text" placeholder="Назва організації"/>
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user"/>
                                </div>
                                <input type="text"
                                       value={this.state.registration.name}
                                       onChange={(e)=>this.onChangeRegistration('name',e.target.value)}
                                       placeholder="Прізвище, ім'я"/>
                            </div>
                            {/*<div className="row d-flex justify-content-between align-items-center paddingHorizontal15">*/}
                                {/*<div className="typeButtons"*/}
                                     {/*onClick={()=>this.personType(0)}*/}
                                     {/*style={this.state.personType===0?{backgroundColor:'#fed328'}:null}*/}
                                {/*>Компанія</div>*/}
                                {/*<div className="typeButtons"*/}
                                     {/*onClick={()=>this.personType(1)}*/}
                                     {/*style={this.state.personType===1?{backgroundColor:'#fed328'}:null}*/}
                                {/*>Приватна особа</div>*/}
                            {/*</div>*/}
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-at"/>
                                </div>
                                <input type="email" placeholder="email"
                                       value={this.state.registration.email}
                                       onChange={(e)=>this.onChangeRegistration('email',e.target.value)}
                                />
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-unlock-alt"/>
                                </div>
                                <input type="password" placeholder="Пароль"
                                       value={this.state.registration.password}
                                       onChange={(e)=>this.onChangeRegistration('password',e.target.value)}
                                />
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-unlock"/>
                                </div>
                                <input type="password" placeholder="Повторити пароль"
                                       value={this.state.registration.confirmPassword}
                                       onChange={(e)=>this.onChangeRegistration('confirmPassword',e.target.value)}
                                />
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-phone"/>
                                </div>
                                <input type="text" placeholder="номер телефону"
                                       value={this.state.registration.phone}
                                       onChange={(e)=>this.onChangeRegistration('phone',e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="buttonEnter"
                                     onClick={()=>this.registration()}
                                >Зареєструватися</div>
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
                        <div className="row">
                            <span className="consent">Реєстрація в системі означає згоду...</span>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
    authorizationView(){
        return(
            <Modal showCloseIcon={false} open={this.state.openAuth} onClose={this.openAuthonCloseModal} little>
                <div className="header">
                    <div className="authorizationHeader d-flex align-items-center justify-content-center">
                        <span>ВХІД</span>
                    </div>
                    <div className="authorization">
                        <div className="authGroup">
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user"/>
                                </div>
                                <input type="text" placeholder="username"/>
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-unlock-alt"/>
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
                </div>
            </Modal>
        )
    }
    render() {
        return (
            <div className="header">
                <Notifications options={{zIndex: 5000}} />
                <div className="container main">
                    {this.registrationView()}
                    {this.authorizationView()}
                    <div className="row headerCircles">
                        <div className="row">
                            <div className="circle">
                                <i className="fab fa-facebook-f"/>
                            </div>
                            <div className="circle">
                                <i className="fab fa-twitter"/>
                            </div>
                            <div className="circle">
                                <i className="fab fa-instagram"/>
                            </div>
                        </div>
                        <div className="row headerRightPart">
                            <div className="text phone">+38 099 001 01 01</div>
                            <div className="text email">email_adress@gmail.com</div>
                            <div className="circle" onClick={this.openAuthonOpenModal}>
                                <i className="fas fa-user"/>
                            </div>
                            <div className="text enter" onClick={this.openAuthonOpenModal}>Вхід</div>
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
                        <div className="logoBlock">
                            <div className="logo d-flex justify-content-center ">
                                <div className="logoTextLeft logoTextStyle">Клімат</div>
                                <img className="logoImage"
                                     onClick={()=>this.props.history.push('/')}
                                     src={require('./images/logo.png')} alt="Logo"/>
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
            </div>
        )
    }
}
export default connect(state => ({state:state}))(withRouter(Header))