import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import './css/slick.css'

class Header extends Component {
	render() {    
		return (
			<header>
				<nav className="d-nav">
				<ul className="psy-pane">
					<li className="home"><img src='./images/home.png' alt=""/><a className="smooth psy-btn active" href="/home">home</a></li>
					<li className="contact"><img src="./images/contact.png" alt=""/><a className="smooth psy-btn" href="#id2">contact</a></li>
					<li className="about"><img src="./images/about.png" alt=""/><a className="smooth psy-btn" href="#id3">about us</a></li>
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
			</header>
		);
	}
}
	
export default Header;