import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/category.css'
import {styles} from './styles/styles'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as API from '../actions/api'

const itemsArray=[
    {
        image:require('./images/cooler.png'),
        title:''
    },
    {
        image:require('./images/cooler.png'),
        title:''
    },
    {
        image:require('./images/cooler.png'),
        title:''
    },
    {
        image:require('./images/cooler.png'),
        title:''
    },
    {
        image:require('./images/cooler.png'),
        title:''
    },
    {
        image:require('./images/cooler.png'),
        title:''
    },
    {
        image:require('./images/cooler.png'),
        title:''
    },
    {
        image:require('./images/cooler.png'),
        title:''
    }
]
class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            tab:0,
            categories:[]
        };
        this.changeTab = this.changeTab.bind(this);
    }
    changeTab(index){
        this.setState({tab:index})
    }

    async componentDidMount()
    {
        console.log('params',this.props.match.params.id)
        await API.getSubCategories(this.props.match.params.id).then((value)=>{
            console.log('value',value)
            this.setState({categories:value})
        });
    }
    render() {
        let items=itemsArray.map((item,index)=>{
            return(
                <li key={index}>
                    <div className="item">
                        <img className="itemPicture" src={item.image} alt=""/>
                    </div>
                    <div className="itemBottom">
                        {item.name}
                    </div>
                </li>
            )
        });
        let categories=this.state.categories.map((value,index)=>{
            return(
                <li key={index} onClick={()=>this.changeTab(index)}>
                    <span className={this.state.tab===index?css(styles.borderYellow):null}>{value.name}</span>
                </li>
            )
        });
        return (
            <div>
                <Header/>
                <div className="categories">
                    <div className="afterHeader">
                        <img className="afterHeaderPicture" src={require('./images/pictureCategory.png')} alt=""/>
                    </div>
                    <div className="d-flex">
                        <div className="col-3 categoryMenu">
                            <ul>
                                {categories}
                            </ul>
                        </div>
                        <div className="col categoryView">
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