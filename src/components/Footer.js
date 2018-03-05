import React, { Component } from 'react';
import './styles/footer.css';

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container main footerContainer">
                    <div className="row ml-0 mr-0">
                        <div className="col-3 footerBlockLeft d-flex justify-content-center align-items-center">
                            <div className="footerLogoTextLeft">Клімат</div>
                            <img className="footerLogoImage" src={require("./images/logo.png")} alt="Logo"/>
                            <div className="footerLogoTextRight">Комплект</div>
                        </div>
                        <div className="col-6  d-flex justify-content-center footerCenter">
                            <div className="col d-flex justify-content-start">
                                <ul className="footerList">
                                    <li>Про нас</li>
                                    <li>Обладнання</li>
                                    <li>Референс</li>
                                    <li>Контакти</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="contacts">
                                    <li>Контакти</li>
                                    <li><i className="fas fa-envelope contactIcons"/>email@gmail.com</li>
                                    <li><i className="fas fa-phone-volume contactIcons"/>+38 099 001 00 00</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <div className="delivery">
                                <img src={require("./images/truck.png")} style={{width:150}} alt=""/>
                                <div className="deliveryText">Доставка 24 години</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Footer))