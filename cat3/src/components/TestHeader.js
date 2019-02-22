import React, { Component } from 'react';
import ReactSVG from 'react-svg'

class Home extends Component {
	render() {    
		return (
			<div className="container">
				<div className="row tn">
					<div className="col-lg-12">
						<div className="bigwhale">
							<h1>TEST IQ</h1>
							<a className="test-item brain" href="/iq">
								<ReactSVG src="./images/SVG/iq.svg" />
							</a>
						</div>
					</div>
					<div className="col-lg-6 offset-lg-3">
						<h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iste sunt explicabo? Doloremque, odio. Quos totam corrupti dignissimos? Consequuntur impedit quaerat non dolorum autem tenetur! Impedit deserunt dignissimos facilis odio.</h3>
					</div>
				</div>
				<img className="girl" src="./images/girl.png" alt=""/>
				<img className="whale" src="./images/wavems.png" alt=""/>
			</div> 
		);
	}
}
	
export default Home;