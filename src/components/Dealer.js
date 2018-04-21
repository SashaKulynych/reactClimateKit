import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/dealer.css'
import {styles} from './styles/styles'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as API from "../actions/api";

class Dealer extends Component {
    constructor(props){
        super(props)
        this.state = {
            tab:0,
            add:[]
        };
        this.changeTab = this.changeTab.bind(this);
        this.Status =this.Status.bind(this)
    }
    changeTab(index){
        this.setState({tab:index})
    }

    async componentDidMount(){
        let userInfo = await JSON.parse(localStorage.getItem('userInfo'));
        await API.getShop(userInfo.id).then((value)=>{
            console.log('userInfo',value)
            this.setState({add:value})
        });
    }

    Status(value){
        if(value.status == 1 ){
            return(
            <tb style={{padding:15, color:"red"}}>Обробка</tb>
            )
        } else if (value.status == 2){
            return(
                <tb style={{padding:15, color:"yellow"}}>Готовий до видачі</tb>
            )
        }else if (value.status == 3){
            return(
                <tb style={{padding:15, color:"green"}}>Відправлено</tb>
            )
    }
    }

    render() {
        let model = this.state.add.map((value, index)=>{

            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{value.model_name}</td>
                    <td>{value.count}</td>
                    <td>{value.model_price}</td>
                    {this.Status(value)}
                </tr>
            )
        });
        return (
            <div>
                <Header/>
                <div className="dealer">
                    <div className="afterHeader">
                        <img className="afterHeaderPicture" src={require('./images/dealer.png')} alt=""/>
                    </div>
                    <div className="d-flex row container_wrap">
                        <div className="col-sm-12 col-lg-9 categoryView">
                            <table className="col-12 ">
                                <tr className="col-1">
                                    <th>№</th>
                                    <th>Назва</th>
                                    <th>Кількість</th>
                                    <th>Вартість</th>
                                    <th>Статус</th>
                                </tr>
                                {model}
                            </table>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(Dealer))