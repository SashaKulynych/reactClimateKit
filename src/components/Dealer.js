import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/dealer.css'
import {styles} from './styles/styles'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Dealer extends Component {
    constructor(props){
        super(props)
        this.state = {
            tab:0
        };
        this.changeTab = this.changeTab.bind(this);
    }
    changeTab(index){
        this.setState({tab:index})
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="dealer">
                    <div className="afterHeader">
                        <img className="afterHeaderPicture" src={require('./images/dealer.png')} alt=""/>
                    </div>
                    <div className="d-flex row container_wrap">
                        <div className="col-lg-3 col-sm-12 categoryMenu">
                            <ul>
                                <li onClick={()=>this.changeTab(0)}>
                                    <span className={this.state.tab===0?css(styles.borderYellow):null}>Меню 1</span>
                                </li>
                                <li onClick={()=>this.changeTab(1)}>
                                    <span className={this.state.tab===1?css(styles.borderYellow):null}>Меню 2</span>
                                </li>
                                <li onClick={()=>this.changeTab(2)}>
                                    <span className={this.state.tab===2?css(styles.borderYellow):null}>Меню 3</span>
                                </li>
                                <li onClick={()=>this.changeTab(3)}>
                                    <span className={this.state.tab===3?css(styles.borderYellow):null}>Меню 4</span>
                                </li>
                                <li onClick={()=>this.changeTab(4)}>
                                    <span className={this.state.tab===4?css(styles.borderYellow):null} >Меню 5</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-lg-9 categoryView">
                            <table className="col-12 ">
                                <tr className="col-1">
                                    <th>№</th>
                                    <th>Дата замовлення</th>
                                    <th>Обладняння</th>
                                    <th>Кількість</th>
                                    <th>Вартість</th>
                                    <th>Баланс у.о.</th>
                                    <th>Статус</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>18.09.2018</td>
                                    <td>Название товара</td>
                                    <td>4</td>
                                    <td>000 000</td>
                                    <td>000 000</td>
                                    <td style={{color:'#4ebc45'}}>Готовий до видачі</td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(Dealer))