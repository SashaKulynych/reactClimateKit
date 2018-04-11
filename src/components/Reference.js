import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/text.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Reference extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="text">
                    <div className="textContainer">
                        <p>Об’єкти, на яких успішно використовується наше обладнання - добре відомі та легко впізнавані будівлі по всій території України. Часто вони мають принципове значення у своїй галузі або значний обсяг виробництва, тож ми усвідомлюємо рівень відповідальності, що нам припадає. Кожен наш об’єкт – витвір мистецтва у дуже специфічному жанрі та водночас, високотехнологічна і точна система.</p>
                        <p>Ми пишаємося своїм доробком у технологічному прогресі України, довершеною естетикою та комфортом створюваних умов. І безперечно, своїми задоволеними клієнтами!</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(Reference))