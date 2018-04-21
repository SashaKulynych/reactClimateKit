import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/support.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as API from "../actions/api";

class AllNews extends Component {
    constructor(){
        super();
        this.state={
            news:[]
        }
    }

    async componentDidMount(){
        await API.getNewsPage().then((value)=>{
            console.log('getNews',value)
            this.setState({news:value.reverse()})
        })
    }

    render() {
        let newsFirst=this.state.news.map((value)=>{
            let maxLength = 15;
            let title =value.title.length>15?value.title.substring(0, maxLength) + '...':value.title;
            let img = value.img===''?{backgroundImage: `url(${require('./images/newsPicture1.png')}`}:
                {backgroundImage: "url(http://admin.klimatkomplect.com.ua/image/news/"+value.img+")"};
            return(
                <div className="col-lg-5 col-sm-12 mt-5 newsBlock_1" >
                    <div onClick={()=>this.props.history.push('/News/'+ value.id)}  className="newsPicture d-flex justify-content-center align-items-center"
                         style={img}>
                        <div className="pictureTitle"></div>
                    </div>
                    <div onClick={()=>this.props.history.push('/News/'+ value.id)} className="newsTitle d-flex justify-content-center">{title}</div>
                    <div   className="newsDescription">
                        {value.text}
                    </div>
                    <div className="text-center">
                        <button  onClick={()=>this.props.history.push('/News/'+ value.id)} className="allNews_1 col-12" >Відкрити новину</button>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <Header/>
                <div className="afterHeader">
                    <img style={{width:"100%"}} src={require('./images/pictureCategory.png')} alt=""/>
                </div>
                <div className="container">
                    <p className="col-12 title text-center">Всі Новини</p>
                <div className="row mb-4">
                    {newsFirst}
                </div>
                </div>
                <Footer/>

            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(AllNews))