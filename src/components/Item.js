import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './styles/item.css'
import { css, StyleSheet } from 'aphrodite'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

import * as API from '../actions/api'


class Item extends Component {
    constructor(props){
        super(props)
        this.state={
            data : [
                {name: '14.02.18', total: 8, paid: 7},
                {name: '15.02.18', total: 9, paid: 9},
                {name: '16.02.18', total: 8, paid: 5},
                {name: '17.02.18', total: 9, paid: 6},
                {name: '18.02.18', total: 10, paid: 8},
                {name: '19.02.18', total: 10, paid: 10},
                {name: '20.02.18', total: 9, paid: 3}
            ],
            product:{
                name:'',
                desc:''
            }
        }
    }
    async componentDidMount(){
        await API.getProduct(this.props.match.params.id).then((value)=>{
            console.log('getProduct',value)
            this.setState({product:value})
        });
        // let resurs = await API.getProducts();
        // let res = resurs[0]
        // let data = [];
        // for(let i = 0;i<Number(res.Qmax);i=i+0.1){
        //     let total = (Number(res.Nst)*Number(res.Imax)*Number(res.u))/
        //         (i*3.14*3.14*(Number(res.d)*Number(res.d)*Number(res.d)*Number(res.d))*8.31*Number(res.Tmax)+8*i*i*i*0.029)
        //     console.log(total)
        //     data.push({name:i,total:total,paid:i})
        // }
        // this.setState({data})

    }
    render() {
        return (
            <div>
                <Header/>
                <div className="item">
                    <div className="row itemContainer">
                        <div className="col-sm-12 col-lg-6">
                            <img className="itemImage" src={require('./images/cooler.png')} alt=""/>
                            <div className="d-flex justify-content-between row">
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                                <div className="leftPartCircle"></div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column justify-content-center rightPart">
                            {/*<div className="subTitle">*/}
                            {/*Lorem ipsum dolor*/}
                            {/*</div>*/}
                            <div className="title">
                                {this.state.product.name}
                            </div>
                            <div className="description">
                                {this.state.product.desc}
                            </div>
                            {console.log("", this.state.product)}
                            <div className="row">
                                <div className="rightButtonStyle col-sm-12">
                                    <span>Опис</span>
                                </div>
                                <div className="rightButtonStyle col-sm-12">
                                    <span onClick={()=>this.props.history.push('/Docm')}>Технічні дані</span>
                                </div>
                                <div  className="rightButtonStyle col-sm-12">
                                    <span >Характеристики</span>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:20}}>
                                <div className="row saveButtonStyle">
                                    <div className="circle">
                                        <i className="far fa-save"/>
                                    </div>
                                    <span>зберегти проект</span>
                                </div>
                                <div className="row addButtonStyle">
                                    <div className="circle">
                                        <i className="fas fa-check"/>
                                    </div>
                                    <span>додати в кошик</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="graf_1">
                        <AreaChart  className="col-12 row"  width={750} height={350} data={this.state.data}>
                            <defs >
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="rgb(2, 74, 229)" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="rgb(2, 74, 229)" stopOpacity={0.1}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="rgb(214, 221, 6)" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="rgb(214, 221, 6)" stopOpacity={0.1}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#212121"/>
                            <YAxis stroke="#212121"/>
                            <Tooltip/>
                            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="url(#colorUv)"/>
                            <Area type="monotone" dataKey="paid" stroke="#82ca9d" fill="url(#colorPv)"/>
                        </AreaChart>
                    </div>

                    <div className="graf_2">
                        <AreaChart className="col-12 row"  width={330} height={350} data={this.state.data}>
                            <defs >
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="rgb(2, 74, 229)" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="rgb(2, 74, 229)" stopOpacity={0.1}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="rgb(214, 221, 6)" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="rgb(214, 221, 6)" stopOpacity={0.1}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#212121"/>
                            <YAxis stroke="#212121"/>
                            <Tooltip/>
                            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="url(#colorUv)"/>
                            <Area type="monotone" dataKey="paid" stroke="#82ca9d" fill="url(#colorPv)"/>
                        </AreaChart>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Item))