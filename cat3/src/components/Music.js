import React, { Component } from 'react'
import data from './../data/music.json'
import ReactSVG from 'react-svg'
import { decorate, observable } from 'mobx'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import $ from 'jquery'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons'

library.add(faVolumeDown)

const Music = observer(
	class Music extends Component {
		constructor(props) {
			super(props)
			this.state = {
				answerRes: [],
			}
		}
		ures = 0
		data = data
		index = 0
		resultsOfUser = []
		resultOfUserRaw = []
		isClickXemKetQua = false
		lengthh = () => this.data.length
		currentItem = () => this.data[this.index]

		numberOfQuestionLeft = () => {
			let number = 0
			for (let i = 0; i < this.resultsOfUser.length; i++) {
				if (this.resultsOfUser[i] === null) {
					number++
				}
			}
			return number
		}

		showKetQua = () => {
			return this.numberOfQuestionLeft() === 0
		}

		ketquaCuthe = () => {
			let socaudung = 0
			for (let i = 0; i < this.resultsOfUser.length; i++) {
				if (this.resultsOfUser[i]) {
					socaudung++
				}
			}
			localStorage.setItem('Music', socaudung)
			return (
				<p className="result">
					You've got {socaudung} / {this.data.length}
				</p>
			)
		}

		componentDidMount() {
			for (let i = 0; i < this.data.length; i++) {
				this.resultsOfUser.push(null)
				this.resultOfUserRaw.push(null)
			}
			$('body').on('mouseenter', '.q', function() {
				$(this)
					.children('audio')[0]
					.play()
			})
		}

		componentDidUpdate(prevProps, prevState) {
			// console.log('prevProps', prevProps)
			// console.log('prevState', prevState)
			// console.log('cdu')
		}
		componentWillUpdate(nextProps, nextState) {
			// localStorage.setItem('Music', '10/10')
		}

		handleClick(answer) {
			if (this.isClickXemKetQua) {
				return
			}

			let result = false
			let answerName = 'answer_' + answer
			let tName = 't' + answer

			if (
				typeof this.currentItem().acf.answer[answerName][tName] === 'string'
			) {
			} else {
				result = true
			}
			this.resultsOfUser[this.index] = result
			this.resultOfUserRaw[this.index] = answer
			console.log('result', result)
			if (this.index < this.data.length - 1) {
				setTimeout(() => {
					this.index++
				}, 400)
			}
		}

		render() {
			const qname = this.currentItem()
			const question = this.currentItem().acf
			return (
				<div>
					<section className="psy-section" id="id2">
						<div className="container">
							<div className="row tn">
								<div className="col-lg-12">
									<div className="bigwhale">
										<h1>TEST MUSIC</h1>
										<a className="test-item ghitar" href="/music">
											<ReactSVG src="./images/SVG/music.svg" />
										</a>
									</div>
								</div>
								<div className="col-lg-6 offset-lg-3">
									<h3>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Consectetur iste sunt explicabo? Doloremque, odio. Quos
										totam corrupti dignissimos? Consequuntur impedit quaerat non
										dolorum autem tenetur! Impedit deserunt dignissimos facilis
										odio.
									</h3>
								</div>
							</div>
							<img className="girl" src="./images/girl.png" alt="" />
							<img className="whale" src="./images/wavems.png" alt="" />
						</div>
						<div className="cauhoi-wr cauhoi-music">
							<div className="container test-content">
								{!!this.showKetQua() && (
									<div className="show-kg-button-wr">
										<button
											onClick={e => {
												this.isClickXemKetQua = true
												this.counter = 0
												this.index = 0
											}}
											className="xemkq"
										>
											{' '}
											Check Results{' '}
										</button>
									</div>
								)}
								<div>
									<div className="noidungcauhoi-wr q">
										<FontAwesomeIcon icon="volume-down" />
										<img
											onMouseEnter={() => {
												console.log(1)
											}}
											src={question.question.img}
											alt=""
										/>
										<audio
											src={
												!!question.question.sound
													? question.question.sound
													: null
											}
										/>
									</div>
									<div className="noidung-dapan-wr">
										{!!question.answer.answer_a.imga && (
											<label className="q">
												<FontAwesomeIcon icon="volume-down" />
												<input
													type="radio"
													name={qname.id}
													className={classNames({
														active: this.resultOfUserRaw[this.index] === 'a',
													})}
													onClick={e => {
														this.handleClick('a')
													}}
												/>
												<img
													onMouseEnter={() => {
														console.log(2)
													}}
													onClick={e => {
														this.handleClick('a')
													}}
													src={question.answer.answer_a.imga}
													alt=""
												/>
												<audio
													src={
														!!question.answer.answer_a.sounda
															? question.answer.answer_a.sounda
															: null
													}
												/>
											</label>
										)}
										{!!question.answer.answer_b.imgb && (
											<label className="q">
												<FontAwesomeIcon icon="volume-down" />
												<input
													type="radio"
													name={qname.id}
													className={classNames({
														active: this.resultOfUserRaw[this.index] === 'b',
													})}
													onClick={e => {
														this.handleClick('b')
													}}
												/>
												<img
													onMouseEnter={() => {
														console.log(3)
													}}
													src={question.answer.answer_b.imgb}
													alt=""
												/>
												<audio
													src={
														!!question.answer.answer_b.soundb
															? question.answer.answer_b.soundb
															: null
													}
												/>
											</label>
										)}
										{!!question.answer.answer_c.imgc && (
											<label className="q">
												<FontAwesomeIcon icon="volume-down" />
												<input
													type="radio"
													name={qname.id}
													className={classNames({
														active: this.resultOfUserRaw[this.index] === 'c',
													})}
													onClick={e => {
														this.handleClick('c')
													}}
												/>
												<img
													onMouseEnter={() => {
														console.log(4)
													}}
													src={question.answer.answer_c.imgc}
													alt=""
												/>
												<audio
													src={
														!!question.answer.answer_c.soundc
															? question.answer.answer_c.soundc
															: null
													}
												/>
											</label>
										)}
										{!!question.answer.answer_d.imgd && (
											<label className="q">
												<FontAwesomeIcon icon="volume-down" />
												<input
													type="radio"
													name={qname.id}
													className={classNames({
														active: this.resultOfUserRaw[this.index] === 'd',
													})}
													onClick={e => {
														this.handleClick('d')
													}}
												/>
												<img src={question.answer.answer_d.imgd} alt="" />
												<audio
													src={
														!!question.answer.answer_d.soundd
															? question.answer.answer_d.soundd
															: null
													}
												/>
											</label>
										)}
										{!!question.answer.answer_e.imge && (
											<label className="q">
												<FontAwesomeIcon icon="volume-down" />
												<input
													type="radio"
													name={qname.id}
													className={classNames({
														active: this.resultOfUserRaw[this.index] === 'e',
													})}
													onClick={e => {
														this.handleClick('e')
													}}
												/>
												<img src={question.answer.answer_e.imge} alt="" />
												<audio
													src={
														!!question.answer.answer_e.sounde
															? question.answer.answer_e.sounde
															: null
													}
												/>
											</label>
										)}
										{!!question.answer.answer_f.imgf && (
											<label className="q">
												<FontAwesomeIcon icon="volume-down" />
												<input
													type="radio"
													name={qname.id}
													className={classNames({
														active: this.resultOfUserRaw[this.index] === 'f',
													})}
													onClick={e => {
														this.handleClick('f')
													}}
												/>
												<img src={question.answer.answer_f.imgf} alt="" />
												<audio
													src={
														!!question.answer.answer_f.soundf
															? question.answer.answer_f.soundf
															: null
													}
												/>
											</label>
										)}
									</div>
								</div>

								<div className="currentQuestion"> {this.index + 1} </div>
								<div className="dot-wr">
									<div
										onClick={e => {
											if (this.index === 0) return
											this.index--
										}}
										className={classNames('prev-btn', {
											disabled: this.index === 0,
										})}
									>
										{' '}
										Previous
									</div>
									<div className="dots">
										{this.data.length && this.data
											? this.data.map((item, i) => (
													<span
														key={item.id}
														className={classNames('dot-navigation', {
															'is-active': this.index === i,
														})}
														onClick={e => {
															this.index = i
														}}
													>
														{' '}
													</span>
											))
											: null}
									</div>

									<div
										onClick={e => {
											if (this.index === this.data.length - 1) {
												return
											}
											this.index++
										}}
										className={classNames('next-btn', {
											disabled: this.index === this.data.length - 1,
										})}
									>
										{' '}
										Next{' '}
									</div>
								</div>

								{!this.isClickXemKetQua && (
									<p className="questionLeft">
										{' '}
										You have {this.numberOfQuestionLeft()} questions left!{' '}
									</p>
								)}

								{!!this.isClickXemKetQua && (
									<div>
										{' '}
										<p> {this.ketquaCuthe()} </p>{' '}
									</div>
								)}

								{this.resultsOfUser[this.index] === null ? null : (
									<React.Fragment>
										{!!this.isClickXemKetQua && (
											<div>
												{this.resultsOfUser[this.index] ? (
													<div className="text-success">
														{' '}
														<i className="fa fa-check" /> Đúng{' '}
													</div>
												) : (
													<div className="text-danger">
														{' '}
														<i className="fa fa-times" /> Sai{' '}
													</div>
												)}
											</div>
										)}
									</React.Fragment>
								)}
							</div>
						</div>
						<div className="container list-test">
							<div className="row">
								<div className="top">
									{/* <a className={`test-item ghitar 
									${!localStorage.getItem('Music') && (
										"`done`"
									)}
												`} href="/music">
									<ReactSVG src="./images/SVG/music.svg" />
								</a> */}
									{!localStorage.getItem('Music') && (
										<a className="test-item ghitar" href="/music">
											<ReactSVG src="./images/SVG/music.svg" />
										</a>
									)}
									{!localStorage.getItem('IQ') && (
										<a className="test-item brain" href="/iq">
											<ReactSVG src="./images/SVG/iq.svg" />
										</a>
									)}
									{!localStorage.getItem('Creative') && (
										<a className="test-item lightball" href="/creative">
											<ReactSVG src="./images/SVG/creative.svg" />
										</a>
									)}
									{!localStorage.getItem('Differ') && (
										<a className="test-item squid" href="/difference">
											<ReactSVG src="./images/SVG/differ2.svg" />
										</a>
									)}
								</div>
								<div className="bot">
									{!localStorage.getItem('Common') && (
										<a className="test-item atom" href="/common">
											<ReactSVG src="./images/SVG/common.svg" />
										</a>
									)}
									{!localStorage.getItem('Memory') && (
										<a className="test-item zoom" href="/memory">
											<ReactSVG src="./images/SVG/memory.svg" />
										</a>
									)}
									{!localStorage.getItem('Language') && (
										<a className="test-item chat" href="/language">
											<ReactSVG src="./images/SVG/language.svg" />
										</a>
									)}
									{!localStorage.getItem('Position') && (
										<a className="test-item global" href="/position">
											<ReactSVG src="./images/SVG/position.svg" />
										</a>
									)}
								</div>
							</div>
							<img className="f6" src="./images/SVG/f6.svg" alt="" />
							<img className="f7" src="./images/SVG/f7.svg" alt="" />
						</div>
					</section>
					<style> {`
					.preload {
						display: none;
					}
					#id2 {
						margin-top: 150px;
					}
					#id2 .container {
						position: relative;
					}
					.girl {
						width: 300px;
						position: absolute;
						top: 0;
						left:0;
						z-index: 5;
					}
					.test-content {
						position: relative;
						z-index: 5;
					}
					.q {
						display: flex;
						justify-content: center;
						align-items: center;
						cursor:pointer;
						position: relative;
					}
					.q img {
						width: 150px;
						transition: all linear .3s;
					}
					.bigwhale {
						margin:0 0 0;
						text-align: center;
					}
					#id2 .container .row.tn h3 {
						margin-top: 40px;
						margin-bottom: 200px;
						font-size: 16px;
						font-weight: lighter;
						text-align: center;
					}
					.tn {
						position: relative;
						z-index: 5;
					}
					.whale {
						position: absolute;
						top:0;
						left:30px;
						z-index: 2;
						width: 100%;
					}
					.list-test {
						position: relative;
						z-index: 5;
						background: rgba(112,90,237, .5);
						width: 50%;
						padding: 30px;
						border-radius: 50px;
					}
					
					#id2 .container .bot,
					#id2 .container .top {
						display: -webkit-box;
						display: -ms-flexbox;
						display: flex;
						-webkit-box-align: center;
						-ms-flex-align: center;
						align-items: center;
						-webkit-box-pack: center;
						-ms-flex-pack: center;
						justify-content: center;
						width: 100%
					}
					
					#id2 .container .test-item {
						display: block;
						width: 100px;
						padding: 10px;
						position: relative;
						z-index: 5;
						margin: 0 15px;
					} 
					.test-item:hover {
						transform: scale(1.3);
						transition: .3s;
					}
					#id2 .bigwhale .test-item {
						display: block;
						width: 200px;
						margin: 0 auto;
					}
					.one-question > img {
						display: block;
						margin: 0 auto;
						width: 200px;
					}
					.answer-list li img {
						width:100px;
					}
					.dot-wr {
						display: flex;
						justify-content: center;
						align-items: center;
					}
					span.dot-navigation{
						width: 20px;
						height: 20px;
						border: 1px solid #ddd;
						border-radius: 50%;
						margin-right: 15px;
						cursor: pointer;
						background-color: white;
					}
					.is-active {
						background: linear-gradient(to right, rgba(229,113,47,1) 0%,rgba(255,210,106,1) 36%,rgba(255,210,106,1) 67%,rgba(229,113,47,1) 100%);
					}
					.test-detail {
						align-items: center;
					}
					
					button.time-left{
						border-radius: 50%;
						border: 5px solid green;
						width: 100px;
						height: 100px;
						color: green;
						font-weight: bold;
						font-size: 30px;
					}

					button.time-left{
						position: absolute;
						top: 10px;
						right: 10px;
						z-index: 10;
					}

					.TestTriNho-wrapper{
						position: relative;
					}
					.noidungcauhoi-wr{
						display:flex;
						flex-wrap: wrap;
						justify-content:center;
						align-items: center;
						padding: 15px;
						margin-bottom: 30px;
					}
					.noidungcauhoi-wr img {
						width: 400px;
					}
					.noidung-dapan-wr {
						width: 65%;
						margin: 0 auto;
						flex-wrap: wrap;
						display: flex;
						justify-content: space-around;
						position: relative;
					}
					.noidung-dapan-wr label {
						display: block;
					}
					.noidung-dapan-wr img{
						width: 120px;
						cursor: pointer;
						box-shadow: 5px 5px 5px rgb(77, 141, 173);
						border-radius: 10px;
						display: block;
						margin: 0 auto;
						border: 2px solid #fff;
					}
					.noidung-dapan-wr img:hover {
						box-shadow: 0 0 0 #000;
					}
					.next {
						position: absolute;
						bottom: 100px;
						right: 100px;
						background: linear-gradient(to right, rgba(229,113,47,1) 0%,rgba(255,210,106,1) 36%,rgba(255,210,106,1) 67%,rgba(229,113,47,1) 100%);
						padding: 5px 20px;
						border-radius: 8px;
						box-shadow: 4px 4px 4px rgba(0,0,0,0.4);
					}
					.prev {
						position: absolute;
						bottom: 100px;
						left: 100px;
						background: linear-gradient(to right, rgba(229,113,47,1) 0%,rgba(255,210,106,1) 36%,rgba(255,210,106,1) 67%,rgba(229,113,47,1) 100%);
						padding: 5px 20px;
						border-radius: 8px;
						box-shadow: 4px 4px 4px rgba(0,0,0,0.4);
					}
					.next:hover , .prev:hover {
						box-shadow: 0 0 0 #000;
					}
					label{position:relative}
					label input {position:absolute; opacity:0;}
					input.active ~ img{
						border: 3px solid green;
					}
					.show-kg-button-wr {
						position: fixed;
						top: 0;
						left: 0;
						background: rgba(0,0,0,.5);
						width: 100%;
						height: 100%;
						z-index: 13;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.xemkq{
						padding: 15px 30px;
						background: #9ADBF9;
						border-radius: 5px;
						cursor: pointer;
						transition: all 0.2s ease;
						font-size: 16px;
						color: #000;
						font-weight: bold;
						text-transform: uppercase;
						margin: 0 20px;
					}
					.xemkq:hover{
						background: #9ADBF9;
						color: white;
					}
					#thanks {
						position: fixed;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						background: #9ADBF9;
						color: #000;
						padding: 20px 40px;
						z-index: 14;
						border-radius: 10px;
					}
					.hiddenDiv {
						display:none;
					}
					.questionNo {
						margin: 0 auto;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 2.3em;
						color: #fff;
						width:70px;
						height:70px;
						box-shadow: 4px 4px 4px rgba(0,0,0,0.4);
						border-radius: 50%;
						background: url(./../images/number.png) center center / 100% no-repeat;
					}
					.questionLeft, .result{
						text-align: center;
						margin-top: 20px;
					}
					@media all and (max-width:1440px) {
						.noidungcauhoi-wr img {
							width: 250px;
						}
						.noidung-dapan-wr {
							width: 500px;
						}
						.noidung-dapan-wr img{
							box-shadow: 5px 5px 5px rgb(77, 141, 173);
							border-radius: 8px;
							border: 2px solid #fff;
							width: 90px;
						}
						.next {
						right: 220px;
						}
						.prev {
						left: 220px;
						}
					}
					@media all and (max-width:1366px) {
						.test-detail {
							display:flex;
							padding-left: 75px;
						}
						.prev, .next {
							bottom:40px;
						}
					}
					`}
					</style>
				</div>
			)
		}
	}
)

decorate(Music, {
	data: observable,
	index: observable,
	resultsOfUser: observable,
	resultsOfUserRaw: observable,
	showKetQua: observable,
	isClickXemKetQua: observable,
})

export default Music
