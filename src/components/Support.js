import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/support.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Support extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="support">
                    <div className="afterHeader">
                        <img className="afterHeaderPicture" src={require('./images/pictureCategory.png')} alt=""/>
                    </div>
                    <div className="d-flex">
                        <div className="col contactContainer">
                            <div className="contact">КОНТАКТЫ</div>
                            <div className="phones">
                                <i className="fas fa-phone-volume phoneIcon"/>
                                <div className="numbers">
                                    <span>+38 066 001 01 01</span>
                                    <span>+38 066 001 01 01</span>
                                </div>
                            </div>
                            <div className="emails">
                                <i className="fas fa-at emailIcon"/>
                                <div className="numbers">
                                    <span>email_1@gmail.com</span>
                                    <span>email_2@gmail.com</span>
                                </div>
                            </div>
                            <div className="location">
                                <i className="fas fa-map-marker-alt locationIcon"/>
                                <div className="numbers">
                                    <span>улица дом 20</span>
                                    <span>город</span>
                                    <span>Страна</span>
                                </div>
                            </div>
                        </div>
                        <div className="col supportContainer">
                            <div className="arrow"></div>
                            <div className="contact">ОБРАТНАЯ СВЯЗЬ</div>
                            <div className="nameInputGroup row d-flex">
                                <div className="nameInputIcon d-flex align-items-center">
                                    <i className="fas fa-user"/>
                                </div>
                                <input type="text" placeholder="ИМЯ"/>
                            </div>
                            <div className="nameInputGroup row d-flex">
                                <div className="nameInputIcon d-flex align-items-center">
                                    <i className="fas fa-at"/>
                                </div>
                                <input type="text" placeholder="EMAIL"/>
                            </div>
                            <div className="nameInputGroup row d-flex">
                               <textarea placeholder="ТЕКСТ СООБЩЕНИЯ" rows={5}/>
                            </div>
                            <div className=" row d-flex sendMessage align-items-center justify-content-between">
                                <span>ОТПРАВИТЬ СООБЩЕНИЕ</span>
                                <i className="fas fa-arrow-right"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(Support))