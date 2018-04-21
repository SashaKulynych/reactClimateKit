import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/support.css'
import {MyGoogleMapComponent} from './maps'
import Notifications, {notify} from 'react-notify-toast';

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as user from "../actions/user";
import * as API from "../actions/api";




let toast = { background: '#fed328', text: "#5f5f5f" };

class Support extends Component {
    constructor(){
        super();
        this.state = {
            form: {
                email: '',
                name: '',
                message: '',
                file:{}

            }

        };
        this.onChangeForm = this.onChangeForm.bind(this)
    };

    onChangeForm(field,value){
        this.setState({
            form:{...this.state.form,[field]:value}
        })
    }

    async form(){
        for(let i in this.state.form){
            if(this.state.form[i]==='')
                return notify.show("Не всі поля заповнені!", "custom", 3000, toast);
        }
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(this.state.form.email))
            return notify.show("Емейл некоректний!", "custom", 3000, toast);;
        try{
            await API.feedback(this.state.form).then((response)=>{
                console.log("123",this.state.form)
                if(response.status !== 200) throw new Error('Проблема з відправкою');
                return response.json();
            }).then(()=>{
                return notify.show("Повідомлення відправлено. Дякуємо!", "custom", 3000, toast);
            });
        }
        catch (e){alert('Проблема з відправкою')}


    }

    render() {
        return (
            <div>
                <Header/>
                <div className="support">
                    <div className="afterHeader">
                        <img className="afterHeaderPicture" src={require('./images/pictureSupp.png')} alt=""/>
                    </div>
                    <div className="d-flex row container_wrap" style={{margin:"0"}}>
                        <div className="col contactContainer">
                            <div className="contact">КОНТАКТИ</div>
                            <div className="phones">
                                <i className="fas fa-phone-volume phoneIcon"/>
                                <div className="numbers">
                                    <span>+38 (066) 279 10 90</span>
                                    <span>+38 (066) 279 10 90</span>
                                </div>
                            </div>
                            <div className="emails">
                                <i className="fas fa-at emailIcon"/>
                                <div className="numbers">
                                    <span>info@klimatkomplect.com.ua</span>
                                    <span>email_2@gmail.com</span>
                                </div>
                            </div>
                            <div className="location">
                                <i className="fas fa-map-marker-alt locationIcon"/>
                                <div className="numbers">
                                    <span>Вулиця будинок 20</span>
                                    <span>Місто</span>
                                    <span>Країна</span>
                                </div>
                            </div>
                        </div>
                        <div className="col supportContainer">
                            <div className="arrow"></div>
                            <div className="contact">ЗВОРОТНІЙ ЗВ'ЯЗОК</div>
                            <div className="nameInputGroup row d-flex">
                                <div className="nameInputIcon d-flex align-items-center">
                                    <i className="fas fa-user"/>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Ім'я"
                                    value={this.state.form.name}
                                    onChange={(e)=>this.onChangeForm('name',e.target.value)}
                                />
                            </div>
                            <div className="nameInputGroup row d-flex">
                                <div className="nameInputIcon d-flex align-items-center">
                                    <i className="fas fa-at"/>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={this.state.form.email}
                                    onChange={(e)=>this.onChangeForm('email',e.target.value)}

                                />
                            </div>
                            <div className="nameInputGroup row d-flex">
                               <textarea
                                   value={this.state.form.message}
                                   onChange={(e)=>this.onChangeForm('message',e.target.value)}
                                   placeholder="ТЕКСТ ПОВІДОЛЕННЯ"
                                   rows={5}/>
                            </div>
                            <input
                                type="file"
                                style={{width:"100%"}}
                                className="mb-3"
                                onChange={(e)=>this.onChangeForm('file',e.target.files[0])}
                            />
                            <div className=" row d-flex sendMessage align-items-center justify-content-between">
                                <span style={{margin:"auto"}} onClick={()=> this.form()}>ВІДПРАВИТИ ПОВІДОЛЕННЯ</span>
                                <i className="fas fa-arrow-right"/>
                            </div>
                            {console.log(this.state.form)}
                        </div>
                    </div>
                    <div className="doct container_wrap">
                        <p>
                            ДОСТАВКА
                        </p>
                        <div  className="img_doct">
                        <img  className="img_supp" src={require("./images/delivery.png")} />
                        </div>


                    </div>
                </div>
                <div style={{width:"100%",height:550, paddingTop:"40px"}}>
                    <MyGoogleMapComponent
                        containerElement={<div style={{ height: `510px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        isMarkerShown={true}/>
                </div>
                <Footer/>
                <Notifications options={{zIndex: 5000}} />
            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(Support))