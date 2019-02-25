import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import LineTo from 'react-lineto'
import { decorate, observable, toJS } from 'mobx'
import { observer } from 'mobx-react'
import axios from 'axios'
import classNames from 'classnames'
import matchingData from './../../data/matching.json'
import { remove_character } from './../../helpers/index.js'

var audioUrl =
	'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-18146/zapsplat_multimedia_click_003_19369.mp3?_=1'
var audio = new Audio(audioUrl)

const Commont = observer(
	class Commont extends Component {
		isStart = false
		data = []
		lineData = []
		resultList = [] // [true, false, null] cau dau tien dung, cau thu hai sai, cau thu ba chua tra loi
		currentIndex = 1
		currentQuestionIndex = 0
		showAnswer = false
		isClickXemKetQua = false
		modalIsOpen = false

		reset = (redrawMode = false) => {
			let a = this.lineData[this.currentQuestionIndex]
			for (
				let i = 0;
				i < this.numberOfQuestion(this.data[this.currentQuestionIndex]);
				i++
			) {
				a[i] = { from: '', to: '' }
			}

			if (!redrawMode) {
				this.resultList[this.currentQuestionIndex] = null
			} else {
			}
			console.log('this.lineData', toJS(this.lineData))
		}

		reDrawLines = () => {
			let a = this.lineData[this.currentQuestionIndex]
			let b = [...a]
			this.reset(true)

			for (let i = 0; i < b.length; i++) {
				setTimeout(() => {
					a[i] = { from: b[i].from, to: b[i].to }
				}, 400)
			}
		}

		showKetQua = () => {
			return this.numberOfQuestionLeft() === 0
		}

		nextQuestion = () => {
			if (this.currentQuestionIndex >= this.data.length - 1) return
			setTimeout(() => {
				this.currentQuestionIndex++
			}, 500)
		}

		ketquaCuthe = () => {
			let socaudung = 0
			for (let i = 0; i < this.resultList.length; i++) {
				if (this.resultList[i]) {
					socaudung++
				}
			}

			return (
				<div className="questionLeft">
					Your score is: {socaudung} / {this.data.length}!
				</div>
			)
		}
		numberOfImageOfCurrentQuestion() {
			let number = 0
			let question = this.data[this.currentQuestionIndex].acf.question
			if (question.question_1 && question.question_1.image) {
				number++
			}
			if (question.question_2 && question.question_2.image) {
				number++
			}
			if (question.question_3 && question.question_3.image) {
				number++
			}
			if (question.question_4 && question.question_4.image) {
				number++
			}
			return number
		}

		numberOfQuestion(currentQuestion) {
			let number = 0
			let question = currentQuestion.acf.question
			if (question.question_1 && question.question_1.image) {
				number++
			}
			if (question.question_2 && question.question_2.image) {
				number++
			}
			if (question.question_3 && question.question_3.image) {
				number++
			}
			if (question.question_4 && question.question_4.image) {
				number++
			}
			return number
		}

		numberOfQuestionLeft() {
			let number = 0
			for (let i = 0; i < this.resultList.length; i++) {
				if (this.resultList[i] === null) {
					number++
				}
			}
			return number
		}

		handleLeftImageClick(from) {
			console.log('handleleftclik')
			console.log('from', from)

			let a = this.lineData[this.currentQuestionIndex]

			for (let i = 0; i < a.length; i++) {
				if (a[i].from) {
				} else {
					a[i].from = from
					break
				}
			}

			this.checkAnswer()
			console.log('this.lineData', toJS(this.lineData))
		}

		handleRightImageClick(to) {
			console.log('to', to)
			let a = this.lineData[this.currentQuestionIndex]

			for (let i = 0; i < a.length; i++) {
				if (a[i].to) {
				} else {
					a[i].to = to
					break
				}
			}

			this.checkAnswer()
			console.log('this.lineData', toJS(this.lineData))
		}

		renderKetQua() {
			if (this.isClickXemKetQua) {
				return (
					<div>
						{this.resultList[this.currentQuestionIndex] === null ? null : (
							<div>
								<div> {this.ketquaCuthe()} </div>
								{this.resultList[this.currentQuestionIndex] === true ? (
									<div className="text-success traloidung">
										<i className="fa fa-check" /> Correct
									</div>
								) : (
									<div className="text-danger traloisai">
										<i className="fa fa-times" /> Incorrect
									</div>
								)}
							</div>
						)}
					</div>
				)
			} else {
				return null
			}
		}
		checkAnswer() {
			let a = this.lineData[this.currentQuestionIndex]
			// neu van con anh chua noi het, khong check nua
			for (let i = 0; i < a.length; i++) {
				if (!a[i].from || !a[i].to) {
					return
				}
			}
			// nguoi dung noi tat ca cac anh, tiep tuc
			let acf = this.data[this.currentQuestionIndex].acf

			for (let i = 0; i < this.numberOfImageOfCurrentQuestion(); i++) {
				let questionName = remove_character(a[i].from, 9)
				let answerName = remove_character(a[i].to, 7)

				if (acf.question[questionName].tag !== acf.answer[answerName].tag) {
					this.resultList[this.currentQuestionIndex] = false
					this.nextQuestion()
					return
				}
			}
			this.resultList[this.currentQuestionIndex] = true
			this.nextQuestion()
		}

		componentDidMount() {
			this.data = matchingData
			for (let i = 0; i < this.data.length; i++) {
				this.lineData.push([])
				this.resultList.push(null)

				for (let j = 0; j < this.numberOfQuestion(this.data[i]); j++) {
					this.lineData[i].push({ from: '', to: '' })
				}
			}

			// NEU DUNG AXIOS THI DUNG DOAN CODE DUOI VA COMMENT DOAN CODE TREN
			// axios.get("http://khoi.catopiana.com/wp-json/acf/v3/matching?fbclid=IwAR1F4CnA83XLTVrONGyjWHP-gq_v_HS9_wF7FRoHjUmMo0GCd9NvOI9-eww")
			// .then(({data}) => {
			//  this.data = data
			//  for(let i = 0; i < this.data.length; i++){
			//    this.lineData[i] = {from1: null, from2: null, from3: null, to1: null, to2: null, to3: null, currentIndex: 1}
			//    this.resultList.push(null)

			//  }

			// })
			// .catch(err => console.log('err', err))
		}

		renderContent() {
			if (!this.isStart) {
				return (
					<div className="container test-content">
						Nhan nut start de bat dau
						<button onClick={e => (this.isStart = true)}> Start! </button>
					</div>
				)
			} else {
				let a = this.lineData[this.currentQuestionIndex]
				if (!this.data || !this.data.length) {
					return <div> Loading... </div>
				}
				const currentQuestion = this.data[this.currentQuestionIndex]
				const {
					acf: {
						answer: { answer_1, answer_2, answer_3 },
						question: { question_1, question_2, question_3 },
					},
				} = currentQuestion

				return (
					<div className="Commont-wrapper container test-content">
						{this.renderLines()}

						<div className="left-right-wr">
							<div className="left">
								{!!question_1.image && (
									<img
										onClick={e => {
											this.handleLeftImageClick(
												`question_${this.currentQuestionIndex}1`
											)
											audio.play()
										}}
										className={`question_${this.currentQuestionIndex}1`}
										src={question_1.image}
										alt=""
									/>
								)}

								{!!question_2.image && (
									<img
										onClick={e => {
											this.handleLeftImageClick(
												`question_${this.currentQuestionIndex}2`
											)
											audio.play()
										}}
										className={`question_${this.currentQuestionIndex}2`}
										src={question_2.image}
										alt=""
									/>
								)}

								{!!question_3.image && (
									<img
										onClick={e => {
											this.handleLeftImageClick(
												`question_${this.currentQuestionIndex}3`
											)
											audio.play()
										}}
										className={`question_${this.currentQuestionIndex}3`}
										src={question_3.image}
										alt=""
									/>
								)}
							</div>
							<div className="right">
								{!!answer_1.image && (
									<img
										onClick={e => {
											this.handleRightImageClick(
												`answer_${this.currentQuestionIndex}1`
											)
											audio.play()
										}}
										className={`answer_${this.currentQuestionIndex}1`}
										src={answer_1.image}
										alt=""
									/>
								)}

								{!!answer_2.image && (
									<img
										onClick={e => {
											this.handleRightImageClick(
												`answer_${this.currentQuestionIndex}2`
											)
											audio.play()
										}}
										className={`answer_${this.currentQuestionIndex}2`}
										src={answer_2.image}
										alt=""
									/>
								)}

								{!!answer_3.image && (
									<img
										onClick={e => {
											this.handleRightImageClick(
												`answer_${this.currentQuestionIndex}3`
											)
											audio.play()
										}}
										className={`answer_${this.currentQuestionIndex}3`}
										src={answer_3.image}
										alt=""
									/>
								)}
							</div>
						</div>

						<div> {this.renderKetQua()} </div>
						<div className="currentQuestion">
							{' '}
							{this.currentQuestionIndex + 1}{' '}
						</div>

						<div className="dot-wr">
							<div
								onClick={e => {
									if (this.currentQuestionIndex === 0) return
									this.currentQuestionIndex--
								}}
								className={classNames('prev-btn', {
									disabled: this.currentQuestionIndex === 0,
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
													'is-active': this.currentQuestionIndex === i,
												})}
												onClick={e => {
													this.currentQuestionIndex = i
													setTimeout(() => {
														this.reDrawLines()
													}, 100)
												}}
											/>
									  ))
									: null}
							</div>
							<div
								onClick={e => {
									if (this.currentQuestionIndex === this.data.length - 1) {
										return
									}
									this.currentQuestionIndex++
								}}
								className={classNames('next-btn', {
									disabled: this.currentQuestionIndex === this.data.length - 1,
								})}
							>
								{' '}
								Next{' '}
							</div>
						</div>

						<div>
							{// !this.isClickXemKetQua
							true && (
								<p className="questionLeft">
									{' '}
									You have: {this.numberOfQuestionLeft()} questions left!{' '}
								</p>
							)}

							{!!this.showKetQua() && (
								<div className="show-kg-button-wr">
									<button
										onClick={e => {
											this.isClickXemKetQua = true
											// this.currentQuestionIndex = 0
											// this.reDrawLines()
										}}
										className="xemkq"
									>
										{' '}
										See result!{' '}
									</button>
								</div>
							)}

							{!this.isClickXemKetQua && (
								<div>
									{' '}
									<button
										onClick={e => {
											this.reset()
										}}
										className="lamlai-btn"
									>
										Start over!
									</button>{' '}
								</div>
							)}
						</div>
					</div>
				)
			}
		}

		renderLines() {
			let a = this.lineData[this.currentQuestionIndex]
			return a.map((item, index) => (
				<LineTo
					key={index}
					zIndex={999}
					from={item.from}
					to={item.to}
					fromAnchor="middle right"
					toAnchor="middle left"
					borderWidth={3}
					borderColor="#006699"
				/>
			))
		}

		render() {
			return (
				<div>
					<section className="psy-section" id="id2">
						<div className="container">
							<div className="row tn">
								<div className="col-lg-12">
									<div className="bigwhale">
										<h1>General knowledge test</h1>
										<a className="test-item brain" href="/iq">
											<ReactSVG src="./images/SVG/iq.svg" />
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

						<div className="cauhoi-wr">{this.renderContent()}</div>

						<div className="container list-test">
							<div className="row">
								<div className="top">
									<a className="test-item atom" href="/common">
										<ReactSVG src="./images/SVG/common.svg" />
									</a>
									<a className="test-item ghitar" href="/music">
										<ReactSVG src="./images/SVG/music.svg" />
									</a>
									<a className="test-item lightball" href="/creative">
										<ReactSVG src="./images/SVG/creative.svg" />
									</a>
								</div>
								<div className="bot">
									<a className="test-item zoom" href="/memory">
										<ReactSVG src="./images/SVG/memory.svg" />
									</a>
									<a className="test-item chat" href="/language">
										<ReactSVG src="./images/SVG/language.svg" />
									</a>
									<a className="test-item global" href="/position">
										<ReactSVG src="./images/SVG/position.svg" />
									</a>
								</div>
							</div>
							<img className="f6" src="./images/SVG/f6.svg" alt="" />
							<img className="f7" src="./images/SVG/f7.svg" alt="" />
						</div>
					</section>
				</div>
			)
		}
	}
)

decorate(Commont, {
	isStart: observable,
	data: observable,
	lineData: observable,
	currentQuestionIndex: observable,
	resultList: observable,
	showAnswer: observable,
	isClickXemKetQua: observable,
	modalIsOpen: observable,
})

export default Commont
