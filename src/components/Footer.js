import React, { Component } from 'react';
import './styles/footer.css';

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid  footerContainer">
                    <div className=" container_wrap">
                    <div className="row ml-0 mr-0">
                        <div className="col-lg-3 col-sm-12 footerBlockLeft d-flex justify-content-center align-items-center">
                            <div className="footerLogoTextLeft">Клімат</div>
                            <img className="footerLogoImage" src={require("./images/logo.png")} alt="Logo"/>
                            <div className="footerLogoTextRight">Комплект</div>
                        </div>
                        <div style={{margin:"auto"}} className="col-lg-6 col-sm-12  row d-flex justify-content-center footerCenter">
                            <div className="col-sm-12 col-lg-6 ">
                                <ul className="footerList">
                                    <li>Про нас</li>
                                    <li>Обладнання</li>
                                    <li>Референс</li>
                                    <li>Контакти</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-lg-6 ">
                                <ul className="contacts">
                                    <li style={{fontSize:20}}>Контакти</li>
                                    <li><i className="fas fa-envelope contactIcons"/>info@ klimatkomplect.com.ua</li>
                                    <li><i className="fas fa-phone-volume contactIcons"/>+38 099 001 00 00</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{margin:0}} className="col-lg-3 col-sm-12 row align-items-center justify-content-center">
                            <div className="delivery">
                                <img  src={require("./images/truck.png")} style={{width:150}} alt=""/>
                                <div className="deliveryText">Доставка 24 години</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Footer))