import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './styles/item.css'
import { css, StyleSheet } from 'aphrodite'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Item extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div>
                <Header/>
                <div className="item">
                    <div className="row itemContainer">
                        <div className="col">
                            <img className="itemImage" src={require('./images/cooler.png')} alt=""/>
                            <div className="d-flex justify-content-between">
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column justify-content-center rightPart">
                            <div className="subTitle">
                                Lorem ipsum dolor
                            </div>
                            <div className="title">
                                ML PRO EC
                            </div>
                            <div className="description">
                                Lorem  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            </div>
                            <div className="row">
                                <div className="rightButtonStyle">
                                    <span>Опис</span>
                                </div>
                                <div className="rightButtonStyle">
                                    <span>Технічні дані</span>
                                </div>
                                <div className="rightButtonStyle">
                                    <span>Характеристики</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Item))