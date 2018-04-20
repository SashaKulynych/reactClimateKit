import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './styles/item.css'
import { css, StyleSheet } from 'aphrodite'
import * as user from '../actions/user'
import Notifications, {notify} from 'react-notify-toast';

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';
import * as API from '../actions/api'


let toast = { background: '#fed328', text: "#5f5f5f" };
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
            },
            model:[],
            shop:{
                user_id:0,
                model_id:0
            },
            add:[]
        }
    }
    async componentDidMount(){
        let userInfo = await JSON.parse(localStorage.getItem('userInfo'));
        await API.getProduct(this.props.match.params.id).then((value)=>{
            console.log('getProduct',value)
            this.setState({product:value})
        });
        await API.getModels(this.props.match.params.id).then((value)=>{
            console.log('getModels',value)
            this.setState({model:value})
            console.log("model",this.state.model)
        });

        await API.getShop(userInfo.id).then((value)=>{
            console.log('userInfo',value)
            this.setState({add:value})
        });





        if(userInfo!==null){
            let shop = Object.assign({}, this.state.shop);
            shop.user_id = userInfo.id;
            this.setState({shop});
        }
        console.log(this.state)
        // if(userInfo!==null){
        //     await user.userInfo(userInfo)
        // }
        // let resurs = await API.getProducts();
        // let res = resurs[0]s
        // let data = [];
        // for(let i = 0;i<Number(res.Qmax);i=i+0.1){
        //     let total = (Number(res.Nst)*Number(res.Imax)*Number(res.u))/
        //         (i*3.14*3.14*(Number(res.d)*Number(res.d)*Number(res.d)*Number(res.d))*8.31*Number(res.Tmax)+8*i*i*i*0.029)
        //     console.log(total)
        //     data.push({name:i,total:total,paid:i})
        // }
        // this.setState({data})

    }


    // async shop(){
    //     for(let i in this.state.shop){
    //      if(!re.test(this.state.form.email))
    //         return notify.show("Емейл некоректний!", "custom", 3000, toast);;
    //     try{
    //         await API.shopAdd(this.state.form).then((response)=>{
    //             console.log("123",this.state.form)
    //             if(response.status !== 200) throw new Error('Проблема з відправкою');
    //             return response.json();
    //         }).then(()=>{
    //             return notify.show("Повідомлення відправлено. Дякуємо!", "custom", 3000, toast);
    //         });
    //     }
    //     catch (e){alert('Проблема з відправкою')}
    //
    //
    // }

    async shopId(id){
        let shop = await Object.assign({}, this.state.shop);
        shop.model_id = id;
        await this.setState({shop});
        try{
            await API.shopAdd(this.state.shop).then((response)=>{
                console.log("123",response.status)
                if(response.status !== 200) throw new Error('Проблема з відправкою');
                return response.json();
            }).then(()=>{
                return notify.show("Товар доданий", "custom", 3000, toast);
            });
        }
        catch (e){alert('Проблема з відправкою')}
    }

    render() {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        let model = this.state.model.map((value, index)=>{
            return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>18.09.2018</td>
                            <td>{value.name}</td>
                            <td>000 000</td>
                            {userInfo !==  null ?(<td>
                                <div className="row" style={{marginTop:20}}>
                                    <div className="row addButtonStyle">
                                        <div className="circle">
                                            <i className="fas fa-check"/>
                                        </div>
                                        <span onClick={()=> this.shopId(value.id)}>додати в кошик</span>

                                    </div>
                                </div>
                            </td>): null
                            }
                        </tr>
            )
        });
        return (
            <div>
                <Header/>
                {console.log(this.state.shop)}
                <div className="item container_wrap">
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
                                    <span onClick={()=>this.props.history.push('/Docm/'+this.props.match.params.id)}>Технічні дані</span>
                                </div>
                                <div  className="rightButtonStyle col-sm-12">
                                    <span >Характеристики</span>
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
                    <div className="col-sm-12 col-lg-9 categoryView">
                        <table className="col-12 ">
                            <tr className="col-1">
                                <th>№</th>
                                <th>Дата замовлення</th>
                                <th>Обладняння</th>
                                <th>Вартість</th>
                                {userInfo !==null ?(<th>Замовити</th>):null}
                            </tr>
                    {model}
                        </table>
                    </div>
                </div>
                <Footer/>
                <Notifications options={{zIndex: 5000}} />
            </div>
        )
    }}
export default connect(state => ({state:state,userInfo:state.user}))(withRouter(Item))