import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import './css/slick.css'

class Header extends Component {
    render() {    
        return (
            <header>
                <nav className="d-nav">
                <ul className="psy-pane">

                    <li className="home"><img src='./images/home.png' alt=""/><a className="smooth active" href="/">home</a></li>
                    <li className="contact"><img src="./images/contact.png" alt=""/><a className="smooth" href="">contact</a></li>
                    <li className="about"><img src="./images/about.png" alt=""/><a className="smooth" href="">about us</a></li>

                </ul>
                <ul className="top-right-menu">
                    <li className="sign"><img src="./images/sign.png" alt=""/><a className="smooth" href="">sign in</a></li>
                    {/* <li className="sign"><img src="./images/sign.png" alt=""/><a className="smooth" href="">sign up</a></li> */}
                    <Popup
                        trigger={<li className="sign"><img src="./images/sign.png" alt=""/><a className="smooth">sign up</a></li>}
                        modal
                        closeOnDocumentClick
                    >
                        <div>
                            <label>
                                <input type="text" placeholder="username" />
                            </label>
                            <label>
                                <input type="password" placeholder="******" />
                            </label>
                            <button type="submit">Register</button>
                        </div>
                    </Popup>

                </ul>
                </nav>
                <button className="open-mnav"><span></span><span></span><span></span></button>

                <style>
                {`
                    header{position:fixed;top:0;left:0;width:100%;z-index:10;background:url(images/2x/navbg@2x.png) top center/100% fixed no-repeat;height:180px}
                    .d-nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;align-items:center;text-transform:uppercase;padding:20px 30px;font-size:16px;color:#fff;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}
                    .d-nav .psy-pane{display:-webkit-box;display:-ms-flexbox;display:flex}
                    .d-nav .psy-pane li{margin-right:10px;position:relative}
                    .d-nav .psy-pane li a{position:absolute;top:40%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);color:#fff}
                    .d-nav .psy-pane li a.active{color:#fd6c1e}
                    .d-nav .psy-pane li.home a{left:70px}
                    .d-nav .psy-pane li.contact a{left:60px}
                    .d-nav .psy-pane li:nth-child(3) a{left:50px}
                    .d-nav .psy-pane li:hover a{color:#fd6c1e}
                    .d-nav .top-right-menu{display:-webkit-box;display:-ms-flexbox;display:flex}
                    .d-nav .top-right-menu li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}
                    .d-nav .top-right-menu li.sign a{position:absolute;left:50%;top:40%;-webkit-transform:translate(-55%, -50%);-ms-transform:translate(-55%, -50%);transform:translate(-55%, -50%);color:#fff}
                    .d-nav .top-right-menu li.sign:hover a{color:#fd6c1e}
                    .d-nav .top-right-menu a{margin:0 2px}
                    .d-nav .top-right-menu a:first-child{color:#fd6c1e}
                    .d-nav .top-right-menu .s-line{margin-left:20px;margin-top:-10px;position:relative}
                    .d-nav .top-right-menu .s-line input{height:40px;line-height:40px;border:0;background:#fd6c1e;padding-left:20px;color:#ffffff;border-radius:999px;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}
                    .d-nav .top-right-menu .s-line input::-webkit-input-placeholder{color:#ffffff}
                    .d-nav .top-right-menu .s-line input:-ms-input-placeholder{color:#ffffff}
                    .d-nav .top-right-menu .s-line input::-ms-input-placeholder{color:#ffffff}
                    .d-nav .top-right-menu .s-line input::placeholder{color:#ffffff}
                    .d-nav .top-right-menu .s-line input:hover{-webkit-box-shadow:5px 5px 5px 0px #9c9c9c;box-shadow:5px 5px 5px 0px #9c9c9c}
                    .d-nav .top-right-menu .s-line button{position:absolute;top:50%;right:15px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);color:#ffffff}
                    .open-mnav{position:absolute}
                    @media all and (max-width:1440px) {
                        .d-nav {font-size:14px;padding:7px}
                        .d-nav .psy-pane li a, .d-nav .top-right-menu li.sign a { top: 36%}
                        .d-nav .psy-pane li.home a {left:58px}
                        .d-nav .psy-pane li.contact a {left: 50px;}
                        .d-nav .psy-pane li:nth-child(3) a {left: 45px;}
                        .d-nav .psy-pane li {margin-right:10px}.d-nav .psy-pane li img, .d-nav .top-right-menu li img {width:140px;}
                    }
                    @media all and (max-width:1366px) {
                        header {height: 38px;}
                        .d-nav {font-size:11px;padding:5px}
                        .d-nav .psy-pane li a, .d-nav .top-right-menu li.sign a { top: 38%}
                        .d-nav .psy-pane li.home a {left:38px}
                        .d-nav .psy-pane li.contact a {left: 35px;}
                        .d-nav .psy-pane li:nth-child(3) a {left: 30px;}
                        .d-nav .psy-pane li {margin-right:10px}.d-nav .psy-pane li img, .d-nav .top-right-menu li img {width:100px;}
                    }
                    @media (max-width:991px) {
                        .m-nav-over {
                            position: fixed;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            z-index: 998;
                            background: rgba(0, 0, 0, 0.5);
                            -webkit-transition: all .15s ease-in-out;
                            -o-transition: all .15s ease-in-out;
                            transition: all .15s ease-in-out
                        }
                        .m-nav {
                            display: block;
                            position: fixed;
                            top: 0;
                            width: 280px;
                            bottom: 0;
                            z-index: 999;
                            color: #fff;
                            background: #333;
                            -webkit-transition: all .15s ease-in-out;
                            -o-transition: all .15s ease-in-out;
                            transition: all .15s ease-in-out;
                            left: -280px
                        }
                        .m-nav.active {
                            -webkit-box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.15);
                            box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.15);
                            left: 0
                        }
                        .m-nav.active .m-nav-close {
                            visibility: visible;
                            opacity: 1
                        }
                        .m-nav .m-nav-close {
                            position: absolute;
                            top: 0;
                            width: 40px;
                            height: 40px;
                            left: 100%;
                            background: #444;
                            outline: none;
                            color: #fff;
                            font-size: 28px;
                            cursor: pointer;
                            -webkit-transition: inherit;
                            -o-transition: inherit;
                            transition: inherit;
                            opacity: 0;
                            visibility: hidden
                        }
                        .m-nav .nav-ct {
                            height: 100%;
                            overflow: auto
                        }
                        .m-nav a {
                            display: block;
                            font-size: 14px;
                            font-family: arial;
                            line-height: 20px;
                            padding: 10px 15px 10px 18px;
                            border-bottom: solid 1px #444
                        }
                        .m-nav ul ul {
                            background: rgba(255, 255, 255, 0.04);
                            display: none
                        }
                        .m-nav ul ul a {
                            padding-left: 36px
                        }
                        .m-nav ul ul ul {
                            padding-left: 54px
                        }
                        .m-nav .acd-drop {
                            width: 40px;
                            height: 40px;
                            float: right;
                            position: relative;
                            z-index: 1;
                            font-size: 20px;
                            color: inherit;
                            font-family: monospace;
                            outline: none;
                            cursor: pointer;
                            border-left: solid 1px #444;
                            background: rgba(255, 255, 255, 0.04)
                        }
                    }
                `}
                </style>

            </header>
        );
    }
}
    
export default Header;