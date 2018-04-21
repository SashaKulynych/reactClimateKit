import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/category.css'
import {styles} from './styles/styles'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as API from '../actions/api'


class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            tab:0,
            showCategory:0,
            categories:[],
            products:[],
            id:0
        };
        this.changeTab = this.changeTab.bind(this);
    }
    changeTab(index,value){
        this.setState({tab:index,showCategory:value.id})
    }

    async componentDidMount()
    {
        console.log("12334",this.props.match.params.id)
        await API.getSubCategories(this.props.match.params.id).then((value)=>{
            console.log('getSubCategories',value)
            this.setState({categories:value,showCategory:value.length!==0?value[0].id:0})
        });
        localStorage.setItem("categories_id", this.state.showCategory)
        let categories_id = localStorage.getItem('categories_id');
        console.log("",categories_id)
        await API.getProducts(this.state.showCategory).then((value)=>{
            console.log('getProducts',value)
            this.setState({products:value})
        });
    }
    render() {

        let categories=this.state.categories.map((value,index)=>{
            return(
                <li key={index} onClick={()=>this.changeTab(index,value)}>
                    <span className={this.state.tab===index?css(styles.borderYellow):null}>{value.name}</span>
                </li>
            )
        });

        let filter = this.state.products.filter((value)=>{
            return(value.sub_category_id===this.state.showCategory);

        });

        let items = filter.map((value,index)=>{
            let a = '/item/'+value.id;
            return(
                <a href={a}>
                    <li key={index}>
                        <div className="item_1">
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
                <div className="categories ">
                    <div className="afterHeader">
                        <img className="afterHeaderPicture" src={require('./images/pictureCategory.png')} alt=""/>
                    </div>
                    <div className="row col container_wrap" style={{padding:0}}>
                        <div className="col-sm-12 col-lg-3 categoryMenu">
                            <ul>
                                {categories}
                            </ul>
                        </div>
                        <div className="col-sm-12 col-lg-9 categoryView">
                            <ul>
                                {items}
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(Categories))