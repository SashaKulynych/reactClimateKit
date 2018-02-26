import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/category.css'
import {styles} from './styles/styles'
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
export default class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            tab:0
        };
    }
    changeTab(index){
        this.setState({tab:index})
    }
    render() {
        let items=itemsArray.map((item)=>{
            return(
                <div>
                    <div className="item">
                        <img className="itemPicture" src={item.image} alt=""/>
                    </div>
                    <div className="itemBottom">
                        {item.name}
                    </div>
                </div>
            )
        })
        return (
            <div>
                <Header/>
                <div className="afterHeader">
                    <img className="afterHeaderPicture" src={require('./images/pictureCategory.png')} alt=""/>
                </div>
                <div className="d-flex">
                    <div className="col-3 categoryMenu">
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
                    <div className="col categoryView">
                        {items}
                    </div>
                </div>
                <Footer/>
            </div>
        )
}}