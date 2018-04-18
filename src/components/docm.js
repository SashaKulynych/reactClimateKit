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
    async componentDidMount(){
        await API.getProducts(13).then((value)=>{
            console.log('getProducts',value)
            this.setState({products:value})
            console.log("",this.state.products)
        });
    }
    render() {
        let products = this.state.products.map((value, index)=>{
            let a = '/item/'+value.id;
            return(
                <a href={a}>
                    <li key={index}>
                        <div className="item">
                            <img className="itemPicture" src={require('./images/cooler.png')} alt=""/>
                        </div>
                        <div className="itemBottom">
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
                <div className="row col-12">
                        <div onClick={() => this.setState({tab:0})}    className={`col-4 ${this.state.tab===0?css(styles.li_docm_1):css(styles.li_docm)}`}><p>RUCK</p></div>
                        <div onClick={() => this.setState({tab:1})}   className={`col-4 ${this.state.tab===1?css(styles.li_docm_1):css(styles.li_docm)}`}><p>SODECA</p></div>
                    <div onClick={() => this.setState({tab:2})}   className={`col-4 ${this.state.tab===2?css(styles.li_docm_1):css(styles.li_docm)}`}><p>ЩЕ ЩОСЬ</p></div>
                </div>
                <div className="docm_div_1">
                    <p>
                    ВЕНТИЛЯТОРИ КУХОННІ
                    </p>
                </div>
                <div className="col-sm-12 col-lg-12 categoryView_1">
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