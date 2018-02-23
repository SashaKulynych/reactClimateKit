import React, { Component } from 'react';
import './styles/styles.css';
import Slider from 'react-slick';
import Header from './Header'

export default class MainPage extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Header/>
                <div className="container main">
                    <div className="row">
                        <div className="slider">
                            <Slider {...settings}>
                                <div className="d-flex flex-row  ">
                                    <div className="col d-flex align-items-center">
                                        <div className="textInSlider">
                                            Якщо Ви на цьому сайті , то Ви шукаєте свіже повітря! Або ж цікавлять певні особливі кліматичні умови?
                                            <br/><br/>
                                            Не має значення, Ви прийшли за простим вентилятором, чи цілою кліматизаційною установкою – пошук буде простим і приємним.
                                            <br/><br/>
                                            Наш розумний airob (airbot/smartic)  вже готовий швидко та точно підібрати і запропонувати Вам оптимальний клімат-комплект для будь-якого приміщення та існуючих умов.
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <img style={{maxHeight: '100%'}} src={require('./images/graph.png')} alt="Graph"/>
                                    </div>
                                </div>
                                <div className="d-flex flex-row  ">
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <div className="textInSlider">
                                            Якщо Ви на цьому сайті, то Ви шукаєте свіже повітря! Або ж цікавлять певні особливі кліматичні умови?
                                            <br/><br/>
                                            Не має значення, Ви прийшли за простим вентилятором, чи цілою кліматизаційною установкою – пошук буде простим і приємним.
                                            <br/><br/>
                                            Наш розумний airob (airbot/smartic)  вже готовий швидко та точно підібрати і запропонувати Вам оптимальний клімат-комплект для будь-якого приміщення та існуючих умов.
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <img style={{maxHeight: '100%'}} src={require('./images/graph.png')} alt="Graph"/>
                                    </div>
                                </div>
                                <div className="d-flex flex-row  ">
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <div className="textInSlider">
                                            Якщо Ви на цьому сайті, то Ви шукаєте свіже повітря! Або ж цікавлять певні особливі кліматичні умови?
                                            <br/><br/>
                                            Не має значення, Ви прийшли за простим вентилятором, чи цілою кліматизаційною установкою – пошук буде простим і приємним.
                                            <br/><br/>
                                            Наш розумний airob (airbot/smartic)  вже готовий швидко та точно підібрати і запропонувати Вам оптимальний клімат-комплект для будь-якого приміщення та існуючих умов.
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <img style={{maxHeight: '100%'}} src={require('./images/graph.png')} alt="Graph"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="achievement">Наші досяглення</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className="achievementBlock">
                                <div className="achievementBlockTitle">Збереження електроенергії</div>
                                <img className="achievementBlockImage" src={require("./images/roket.png")} alt="roket"/>
                                    <div className="achievementBlockTitle">Вистачить для запуску ракети</div>
                            </div>
                            <div className="achievementBlock">
                                <div className="achievementBlockTitle">Наші вентилятори заробляють біткоїни</div>
                                <img className="achievementBlockImage" src={require("./images/bitcoin.png")} alt="bitcoin"/>
                                    <div className="achievementBlockTitle">Їх встановлюють для охолодження біткоїн ферм</div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="achievementBlock">
                                <div className="achievementBlockTitle">Найбільший вентилятор у зібраному стані</div>
                                <img className="achievementBlockImage" src={require("./images/vandamm.png")} alt="vandamm"/>
                                    <div className="achievementBlockTitle">Займав цілий грузовий автомобіль</div>
                            </div>
                            <div className="achievementBlock">
                                <div className="achievementBlockTitle">Неймовірний Об‘єм очищеного повітря</div>
                                <img className="achievementBlockImage" src={require("./images/air.png")} alt="air"/>
                                    <div className="achievementBlockTitle">Можна створити атмосферу на Місяці</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container main aboutUs">
                    <div className="row d-flex justify-content-center">
                        <div className="about">Про нас</div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <img style={{maxHeight: 350}} src={require("./images/vent.png")} alt=""/>
                        </div>
                        <div className="col">
                            <div className="aboutUsText">
                                Сьогодні будівельний ринок України <br/>
                                пропонує досить значний асортимент <br/>
                                вентиляційного обладнання. <br/><br/>

                                Опираючись на 15-річний досвід, ми <br/>
                                обираємо та успішно реалізуємо <br/>
                                надійні бренди вентиляційного <br/>
                                обладнання та на 100% відповідаємо <br/>
                                за його технічні характеристики.
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="aboutButton">
                            Підібрати вентилятор
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="achievement">Новини та статті</div>
                    </div>
                    <div className="row">
                        <div className="col mr-3">
                            <div className="row mb-4">
                                <div className="col newsBlock">
                                    <div className="newsPicture d-flex justify-content-center align-items-center"
                                         style={{backgroundImage: `url(${require('./images/newsPicture1.png')}`}}>
                                        <div className="pictureTitle">Заголовок</div>
                                    </div>
                                    <div className="newsTitle d-flex justify-content-center">Заголовок новости</div>
                                    <div className="newsDescription">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad
                                    </div>
                                </div>
                                <div className="col newsBlock">
                                    <div className="newsPicture d-flex justify-content-center align-items-center"
                                         style={{backgroundImage: `url(${require('./images/newsPicture2.png')}`}}>
                                        <div className="pictureTitle">Заголовок</div>
                                    </div>
                                    <div className="newsTitle d-flex justify-content-center">Заголовок новости</div>
                                    <div className="newsDescription">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <span className="allNews">Всі новини</span>
                            </div>
                        </div>
                        <div className="col ml-3">
                            <div className="row mb-4">
                                <div className="col newsBlock">
                                    <div className="newsPicture d-flex justify-content-center align-items-center"
                                         style={{backgroundImage: `url(${require('./images/newsPicture1.png')}`}}>
                                        <div className="pictureTitle">Заголовок</div>
                                    </div>
                                    <div className="newsTitle d-flex justify-content-center">Заголовок новости </div>
                                    <div className="newsDescription">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad
                                    </div>
                                </div>
                                <div className="col newsBlock">
                                    <div className="newsPicture d-flex justify-content-center align-items-center"
                                         style={{backgroundImage: `url(${require('./images/newsPicture2.png')}`}}>
                                        <div className="pictureTitle">Заголовок</div>
                                    </div>
                                    <div className="newsTitle d-flex justify-content-center">Заголовок новости</div>
                                    <div className="newsDescription">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <span className="allNews">Всі статті</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container main advantageSection">
                    <div className="row">
                        <div className="col">
                            <div className="advantage">
                                Головна перевага нашого обладнання
                                - саме енергоефективність, що
                                досягається завдяки передовим
                                технологіям та стандартам якості.

                                Сучасні енергозберігаючі та екологічні
                                технології виробництва, досвід,
                                злагодженість та професійний підхід –
                                це те, що дозволяє нашому
                                обладнанню досягти принципово
                                нового рівня якості.
                            </div>
                        </div>
                        <div className="col">
                            <img src={require("./images/advantage.png")} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container main whatYouGet">
                    <div className="row d-flex justify-content-center">
                        <span className="sectionTitles">Що ви отримаєте?</span>
                    </div>
                    <div className="row d-flex justify-content-center">
                <span className="whatYouGetText">
                    Великий досвід на ринку України та інших країн дозволив нам
                    створити професійну команду, що складається з провідних
                    технічних спеціалістів з вищою інженерною освітою, налагодити
                    систему логістики, а також надійну сервісну команду з
                    обслуговування обладнання.
                </span>
                    </div>
                    <div className="row d-flex justify-content-center mb-5">
                        <div className="row">
                            <div className="col">
                                <div className="whatYouGetBlock">
                                    <img className="whatYouGetBlockImage" src={require("./images/architect.png")} alt=""/><br/>
                                        <div className="whatYouGetBlockText">
                                            Проектування вентиляційних
                                            систем насправді є
                                            творчим процесом, а наші
                                            продукти дозволяють більш
                                            досконало реалізувати
                                            побажання Вашого замовника.
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="whatYouGetBlock">
                                    <img className="whatYouGetBlockImage" src={require("./images/advantage_.png")} alt=""/><br/>
                                        <div className="whatYouGetBlockText">
                                            Запропоноване нами обладнання
                                            заощаджуватиме електроенергію
                                            інвестору, що має в першу
                                            чергу враховуватись при
                                            виборі вентиляційного обладнання.
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="whatYouGetBlock">
                                    <img className="whatYouGetBlockImage" src={require("./images/podium.png")} alt=""/><br/>
                                        <div className="whatYouGetBlockText">
                                            Крім того,  ми добре орієнтуємось
                                            у вартості обладнання, тому
                                            пропонуємо вигідні ціни на ринку України.
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="whatYouGetBlock">
                                    <img className="whatYouGetBlockImage" src={require("./images/customer-service.png")} alt=""/><br/>
                                        <div className="whatYouGetBlockText">
                                            Ми надаємо повну технічну
                                            підтримку та плануємо повний
                                            цикл робіт: від підбору
                                            обладнання, розрахунків
                                            та доставки, до подальшої
                                            його експлуатації.
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-5">
                <span className="whatYouGetText">
                    Головне правило нашої компанії: для успішного ведення бізнесу
                    необхідно передбачати тенденції та завжди бути на крок
                    попереду інших.
                </span>
                    </div>
                </div>
                <div className="container main footer">
                    <div className="row ml-0 mr-0">
                        <div className="col-3 footerBlockLeft d-flex justify-content-center align-items-center">
                            <div className="footerLogoTextLeft">Клімат</div>
                            <img className="footerLogoImage" src={require("./images/logo.png")} alt="Logo"/>
                                <div className="footerLogoTextRight">Комплект</div>
                        </div>
                        <div className="col-6  d-flex justify-content-center footerCenter">
                            <div className="col d-flex justify-content-start">
                                <ul className="footerList">
                                    <li>Про нас</li>
                                    <li>Обладнання</li>
                                    <li>Референс</li>
                                    <li>Контакти</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="contacts">
                                    <li>Контакти</li>
                                    <li><i class="fas fa-envelope contactIcons"></i>email@gmail.com</li>
                                    <li><i class="fas fa-phone-volume contactIcons"></i>+38 099 001 00 00</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <div className="delivery">
                                <img src={require("./images/truck.png")} style={{width:150}} alt=""/>
                                <div className="deliveryText">Доставка 24 години</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
