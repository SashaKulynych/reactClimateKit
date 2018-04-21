import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import {styles} from './styles/styles'
import { css, StyleSheet } from 'aphrodite'

import { connect } from 'react-redux'
import './styles/category.css'
import { withRouter } from 'react-router'
import * as API from "../actions/api";

// import * as API from '../actions/api'


class Docm extends Component {
    constructor(props){
        super(props)
        this.state={
            tab:0,
            products:[]
        }
    }
    async componentDidMount() {
        let categories_id = localStorage.getItem('categories_id');
        await API.getProducts(categories_id).then((value) => {
            console.log('getModels', value)
            this.setState({products: value})
            console.log("", this.state.products)
        });
    }

    Data(name){
        API.getData(name)
    }
    render() {
        let products = this.state.products.map((value, index)=>{
            return(
                <a style={{paddingRight:10}} onClick={this.Data.bind(this,value.name)}>
                    <li key={index} style={{width:200,height:200,border:"1px solid #acacac", background:"#fff"}}>
                        <div className="itemTop">
                            {value.name}
                        </div>
                        <div className="item_2" style={{background:"#fff"}}>
                            <img className="DocmPicture" src={require('./images/cooler.png')} alt=""/>
                        </div>
                        <div className="docmBottom">
                            {value.name}
                        </div>
                    </li>
                </a>
            )
        })




        return (
            <div>
                <Header/>
                <div>
                <div className="afterHeader">
                    <img style={{width:"100%"}} src={require('./images/pictureCategory.png')} alt=""/>
                </div>
                <div className="title_docm">
                    ТЕХНІЧНА ДОКУМЕНТАЦІЯ
                </div>
                <div className="row col-12 container_wrap">
                        <div onClick={() => this.setState({tab:0})}    className={`col-lg-4 col-sm-12 ${this.state.tab===0?css(styles.li_docm_1):css(styles.li_docm)}`}><p>RUCK</p></div>
                        <div onClick={() => this.setState({tab:1})}   className={`col-lg-4 col-sm-12 ${this.state.tab===1?css(styles.li_docm_1):css(styles.li_docm)}`}><p>SODECA</p></div>
                    <div onClick={() => this.setState({tab:2})}   className={`col-lg-4 col-sm-12 ${this.state.tab===2?css(styles.li_docm_1):css(styles.li_docm)}`}><p>ЩЕ ЩОСЬ</p></div>
                </div>
                <div className="docm_div_1">
                    <p>
                    ВЕНТИЛЯТОРИ КАНАЛЬНІ
                    </p>
                </div>
                <div className="col-sm-12 col-lg-12 categoryView_1 container_wrap">
                    <ul >
                        {products}
                    </ul>
                </div>
                    <div className="docm_div_2">
                        <p>
                            ВЕНТИЛЯТОРИ КУХОННІ
                        </p>
                    </div>
                    <div className="col-sm-12 col-lg-12 categoryView_1 container_wrap">
                        <ul>
                            {products}
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Docm))