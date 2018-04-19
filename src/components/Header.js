import React, { Component } from 'react';
import './styles/header.css';
import Modal from "react-responsive-modal";
import Notifications, {notify} from 'react-notify-toast';

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {host} from '../actions/const'
import * as API from '../actions/api'
import * as user from '../actions/user'

let toast = { background: '#fed328', text: "#5f5f5f" };
class Header extends Component {
    constructor(){
        super();
        this.state = {
            userInfo:null,
            openAuth: false,
            openReg:false,
            personType:0,
            manufacts:[],
            categories:[],
            login:{
                email:'',
                password:''
            },
            registration:{
                org_name:'',
                name:'',
                email:'',
                password:'',
                c_password:'',
                org_address:'',
                phone:''
            }
        };
        this.personType=this.personType.bind(this);
        this.openRegonOpenModal=this.openRegonOpenModal.bind(this);
        this.openRegonCloseModal=this.openRegonCloseModal.bind(this);
        this.openAuthonOpenModal=this.openAuthonOpenModal.bind(this);
        this.openAuthonCloseModal=this.openAuthonCloseModal.bind(this);
        this.onChangeRegistration = this.onChangeRegistration.bind(this);
        this.onChangeAuth = this.onChangeAuth.bind(this);
        this.login = this.login.bind(this);
    }

    async componentDidMount(){
        API.getNews();
        await API.getCategories().then((value)=>{this.setState({categories:value})});
        await API.getManufact().then((value)=>{this.setState({manufacts:value})});
        API.getSubCategories(1);
        // Only with token
        let userInfo = await JSON.parse(localStorage.getItem('userInfo'));
        API.getProducts()
        API.getModels();

        if(userInfo!==null){
            await user.userInfo(userInfo)
        }
    }

    personType(index){this.setState({personType:index})}

    openRegonOpenModal(){this.setState({ openReg: true });};

    openRegonCloseModal(){this.setState({ openReg: false });};

    openAuthonOpenModal(){this.setState({ openAuth: true });};

    openAuthonCloseModal(){this.setState({ openAuth: false });};

    onChangeRegistration(field,value){
        this.setState({
            registration:{...this.state.registration,[field]:value}
        })
    }
    onChangeAuth(field,value){
        this.setState({
            login:{...this.state.login,[field]:value}
        })
    }
    async login(){
        await API.login(this.state.login).then((response)=>{
            console.log(response)
            if(response.status !== 200) return console.log('Проблема з авторизацією');
            return response.json();
        }).then((res)=>{
            console.log(res)
            if(res===undefined){
                return alert('Некоректні дані для входу')
            }

            localStorage.setItem('userInfo', JSON.stringify(res.success));
            user.userInfo(res.success)
            this.openAuthonCloseModal()
        })
    }

    async registration(){
        for(let i in this.state.registration){
            if(this.state.registration[i]==='')
                return notify.show("Не всі поля заповнені!", "custom", 3000, toast);
        }
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(this.state.registration.email))
            return notify.show("Емейл некоректний!", "custom", 3000, toast);;
        if(this.state.registration.password!==this.state.registration.c_password){
            return notify.show("Паролі не співпадають!", "custom", 3000,toast);
        }
        try{
            await API.register(this.state.registration).then((response)=>{
                if(response.status !== 200) throw new Error('Проблема з реєстрацією');
                return response.json()
            }).then((res)=>{
                localStorage.setItem('userInfo', JSON.stringify(res.success));
                user.userInfo(res.success)
                this.openRegonCloseModal()
            });
        }
        catch (e){alert('Проблема з реєстрацією')}


    }

    registrationView(){
        return(
            <Modal showCloseIcon={true}
                   styles={{
                       closeIcon:{
                           background:"white",
                           margin:10,
                           borderRadius:20
                       }
                   }} open={this.state.openReg} onClose={this.openRegonCloseModal} little>
                <div className="header">
                    <div className="authorizationHeader d-flex align-items-center justify-content-center">
                        <span>РЕЄСТРАЦІЯ</span>
                    </div>
                    <div className="authorization">
                        <div className="authGroup">
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-users"/>
                                </div>
                                <input value={this.state.registration.org_name}
                                       onChange={(e)=>this.onChangeRegistration('org_name',e.target.value)}
                                       type="text" placeholder="Назва організації"/>
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user"/>
                                </div>
                                <input type="text"
                                       value={this.state.registration.name}
                                       onChange={(e)=>this.onChangeRegistration('name',e.target.value)}
                                       placeholder="Прізвище, ім'я"/>
                            </div>
                            {/*<div className="row d-flex justify-content-between align-items-center paddingHorizontal15">*/}
                                {/*<div className="typeButtons"*/}
                                     {/*onClick={()=>this.personType(0)}*/}
                                     {/*style={this.state.personType===0?{backgroundColor:'#fed328'}:null}*/}
                                {/*>Компанія</div>*/}
                                {/*<div className="typeButtons"*/}
                                     {/*onClick={()=>this.personType(1)}*/}
                                     {/*style={this.state.personType===1?{backgroundColor:'#fed328'}:null}*/}
                                {/*>Приватна особа</div>*/}
                            {/*</div>*/}
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-at"/>
                                </div>
                                <input type="email" placeholder="email"
                                       value={this.state.registration.email}
                                       onChange={(e)=>this.onChangeRegistration('email',e.target.value)}
                                />
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-unlock-alt"/>
                                </div>
                                <input type="password" placeholder="Пароль"
                                       value={this.state.registration.password}
                                       onChange={(e)=>this.onChangeRegistration('password',e.target.value)}
                                />
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-unlock"/>
                                </div>
                                <input type="password" placeholder="Повторити пароль"
                                       value={this.state.registration.c_password}
                                       onChange={(e)=>this.onChangeRegistration('c_password',e.target.value)}
                                />
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-map-marker"/>
                                </div>

                                <input type="text" placeholder="Адреса організіції"
                                       value={this.state.registration.org_address}
                                       onChange={(e)=>this.onChangeRegistration('org_address',e.target.value)}
                                />
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-phone"/>
                                </div>
                                <input type="text" placeholder="номер телефону"
                                       value={this.state.registration.phone}
                                       onChange={(e)=>this.onChangeRegistration('phone',e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{padding:0}}>
                                <div className="buttonEnter"
                                     onClick={()=>this.registration()}
                                >Зареєструватися</div>
                            </div>
                            <div className="col" style={{padding:0}}>
                                <div className="d-flex justify-content-end d-flex align-items-center"
                                     onClick={()=>{
                                         this.openRegonCloseModal()
                                         this.openAuthonOpenModal()
                                     }}
                                >
                                    <span className="rememberMe">Назад</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <span className="consent">Реєстрація в системі означає згоду...</span>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
    authorizationView(){
        return(
            <Modal showCloseIcon={true}
                   styles={{
                       closeIcon:{
                           background:"white",
                           margin:10,
                           borderRadius:20
                        }
                   }}
                   open={this.state.openAuth} onClose={this.openAuthonCloseModal} little>
                <div className="header">
                    <div className="authorizationHeader d-flex align-items-center justify-content-center">
                        <span>ВХІД</span>
                    </div>
                    <div className="authorization">
                        <div className="authGroup">
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user"/>
                                </div>
                                <input type="text" value={this.state.login.email} placeholder="Логін"
                                    onChange={(e)=>this.onChangeAuth('email',e.target.value)}
                                />
                            </div>
                            <div className="authInputGroup row d-flex align-items-center justify-content-center">
                                <div className="authInputIcon d-flex align-items-center justify-content-center">
                                    <i className="fas fa-unlock-alt"/>
                                </div>
                                <input type="password" placeholder="Пароль"
                                       value={this.state.login.password}
                                       onChange={(e)=>this.onChangeAuth('password',e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3" style={{padding:"0"}}>
                                <div className="buttonEnter " onClick={()=>this.login()}>Увійти</div>
                            </div>
                            <div className="col-lg-9" style={{padding:"0"}}>
                                <div className="d-flex align-items-center justify-content-end">
                                    <input type="checkbox"/>
                                    <label className="rememberMe">Запам'ятати мене</label>
                                </div>
                            </div>
                        </div>
                        <div className="row reg_forgetPassword">
                            <div className="col reg_text_1">
                                <div className="d-flex justify-content-start">
                                    <span className="registrationView" onClick={()=>{
                                        this.openAuthonCloseModal()
                                        this.openRegonOpenModal()
                                    }}>Зареєструватися</span>
                                </div>
                            </div>
                            <div className="col reg_text_2">
                                <div className="d-flex justify-content-end">
                                    <span className="forgerPassword">Забув пароль</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
    logOut(){
        let r = window.confirm("Вийти з акаунта?");
        if (r == true) {
            localStorage.removeItem("userInfo");
            user.userInfo(null)
        }
    }
    render() {
        let manufacts = this.state.manufacts.map((value)=>{
            let array = [];
            array.push(<p className="manufactName">{value.name}</p>);
            let catArray = this.state.categories.filter((val)=>val.manufact_id===value.id);
            catArray.map((category)=>{
                array.push( <li>
                    <a href={'/category/'+category.id}><span>{category.name}</span></a>
                </li>)
            })
            return array;
        })

        return (
            <div className="header">
                <Notifications options={{zIndex: 5000}} />
                <div className='bg_header'>
                <div className="container_wrap" style={{padding:"0"}}>
                    {this.registrationView()}
                    {this.authorizationView()}
                    <div className="row col headerCircles">
                        <div className="row col-lg-3 col-sm-11
                        ">
                            <div className="fb">
                                <i className="fab fa-facebook-f"/>
                            </div>
                            <div className="tw">
                                <i className="fab fa-twitter"/>
                            </div>
                            <div className="ig">
                                <i className="fab fa-instagram"/>
                            </div>
                        </div>
                        <div className="row col headerRightPart">
                            {/*<div className="text phone">+380443791090 </div>*/}
                            {/*<span className="phone_1">+380662791090 +380682791090 +380932791090</span>*/}
                            <span data-toggle="collapse" className="text phone" data-target="#6"><i class="fas fa-arrow-down"></i>   +380443791090</span>
                            <ul id="6" className="collapse hide_phone">
                                <li><span>  +380662791090</span></li>
                                <li><span>  +380682791090</span></li>
                                <li><span>  +380932791090</span></li>
                            </ul>
                            <div className="text email">info@klimatkomplect.com.ua</div>
                            {this.props.userInfo===null?
                                <div className="row">
                                    <div className="circle" onClick={this.openAuthonOpenModal}>
                                        <i className="fas fa-user"/>
                                    </div>
                                    <div className="text enter" onClick={this.openAuthonOpenModal}>Вхід</div>
                                </div>:
                                <div className="row" onClick={()=>this.logOut()}>
                                    <div className="circle" style={{backgroundColor:"#fe9228"}}>
                                        <i className="fas fa-user"/>
                                    </div>
                                    <div className="text enter" >{this.props.userInfo.name}</div>
                                </div>}
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className="hideMenu">
                        <nav className="navbar navbar-toggleable-md navbar-light bg-faded hideMainMenu">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="row" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                                <img className="hideMenuLogo"
                                     onClick={()=>this.props.history.push('/')}
                                     src={require('./images/logo.png')} alt="Logo"/>
                                <span className="navbar-brand " >Клімат комплект</span>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <span data-toggle="collapse" data-target="#1">ГОЛОВНА &#8595;</span>
                                    <ul id="1" className="collapse">
                                        <li onClick={()=>this.props.history.push('/text')}><span>Історія</span></li>
                                        <li onClick={()=>this.props.history.push('/reference')}><span>Референс</span></li>
                                        <li onClick={()=>this.props.history.push('/service')}><span>Сервіс</span></li>
                                    </ul>

                                    <span data-toggle="collapse" data-target="#2">КАТЕГОРІЇ &#8595;</span>
                                    <ul id="2" className="collapse">
                                        {manufacts}
                                    </ul>
                                    <span onClick={()=>this.props.history.push('/text')}>КОНТАКТИ</span>
                                    <span data-toggle="collapse" data-target="#4">ПІДТРИМКА &#8595;</span>
                                    <ul  id="4" className="collapse">
                                        <li onClick={()=>this.props.history.push('/text')}><span>Відеокурс</span></li>
                                        <li onClick={()=>this.props.history.push('/support')}><span>Зв'язок</span></li>
                                        <li onClick={()=>this.props.history.push('/about')}><span>Про компанію</span></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="mainMenu container_wrap">
                        <div className="row menu d-flex align-items-center" style={{margin:"0"}}>
                            <div className="col d-flex justify-content-start">
                                <div className="row">
                                    <div className="menu-left-part">
                                        <ul>
                                            <li>
                                                <span onClick={()=>this.props.history.push('/')}  data-toggle="collapse" data-target="#1">ГОЛОВНА</span>
                                                <ul id="1" className="collapse">
                                                    <li onClick={()=>this.props.history.push('/text')}><span>Історія</span></li>
                                                    <li onClick={()=>this.props.history.push('/reference')}><span>Референс</span></li>
                                                    <li onClick={()=>this.props.history.push('/service')}><span>Сервіс</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <span style={{paddingLeft:"40px"}}   data-toggle="collapse" data-target="#2">КАТЕГОРІЇ</span>
                                                <ul style={{marginLeft:"30px"}} id="2" className="collapse">
                                                    {manufacts}
                                                    <li onClick={()=>this.props.history.push('/Docm')}><span>Технічна документація</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="logoBlock">
                                <div className="logo d-flex justify-content-center ">
                                    <div className="logoTextLeft logoTextStyle">Клімат</div>
                                    <img className="logoImage"
                                         onClick={()=>this.props.history.push('/')}
                                         src={require('./images/logo.png')} alt="Logo"/>
                                    <div className="logoTextRight logoTextStyle">Комплект</div>
                                </div>
                            </div>
                            <div className="col menu-right-part d-flex justify-content-end">
                                <ul>
                                    <li>
                                        <span  style={{paddingRight:"40px"}} onClick={()=>this.props.history.push('/text')} >КОНТАКТИ</span>

                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span data-toggle="collapse" data-target="#4">ПІДТРИМКА</span>
                                        <ul  id="4" className="collapse">
                                            <li onClick={()=>this.props.history.push('/text')}><span className="potd">Відеокурс</span></li>
                                            <li onClick={()=>this.props.history.push('/support')}><span className="potd">Зв'язок</span></li>
                                            <li onClick={()=>this.props.history.push('/about')}><span className="potd">Про компанію</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default connect(state => ({userInfo:state.user}))(withRouter(Header))