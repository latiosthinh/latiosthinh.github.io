import { CSSTransition } from 'react-transition-group'
import React, { Component } from 'react'
import data from './../../data/memory.json'
import ReactSVG from 'react-svg'
import { decorate, observable } from 'mobx'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import './memory.css'
import FadeIn from 'react-lazyload-fadein'

var counterTime = 6
const TestTriNho = observer(
	class TestTriNho extends Component {
		data = data
		index = 0
		counter = counterTime
		resultsOfUser = []
		resultOfUserRaw = []
		isClickXemKetQua = false
		lengthh = () => this.data.length
		currentItem = () => this.data[this.index]
		isHetGio = () => this.counter <= 0
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

			return `Bạn đã trả lời đúng ${socaudung} trên tổng số ${
				this.data.length
			} câu!`
		}

		componentDidMount() {
			for (let i = 0; i < this.data.length; i++) {
				this.resultsOfUser.push(null)
				this.resultOfUserRaw.push(null)
			}
			this.interval = setInterval(() => this.tick(), 1000)
		}

		componentWillUnmount() {
			clearInterval(this.interval)
		}
		tick() {
			if (this.counter > 0) {
				this.counter--
			}
		}

		componentDidUpdate(prevProps, prevState) {
			// console.log('prevProps', prevProps)
			// console.log('prevState', prevState)
			// console.log('cdu')
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
		}

		render() {
			const question = this.currentItem().acf
			return (
				<div>
					<section className="psy-section" id="id2">
						<div className="container">
							<div className="row tn">
								<div className="col-lg-12">
									<div className="bigwhale">
										<h1>TEST MEMORY</h1>
										<a className="test-item cam" href="/memory">
											<ReactSVG src="./images/SVG/memory.svg" />
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
										Xem Ket qua{' '}
									</button>
								</div>
							)}
							<div>
								{!this.isHetGio() && (
									<div className="noidungcauhoi-wr">
										<p>
											{' '}
											<button className="time-left">
												{' '}
												{this.counter}{' '}
											</button>{' '}
										</p>
										<FadeIn height={300} duration={150} easing={'ease-in-out'}>
											{onload => (
												<img
													onLoad={onload}
													style={{ height: 300 }}
													src={question.question}
													alt=""
												/>
											)}
										</FadeIn>
									</div>
								)}

								{!!this.isHetGio() && (
									<div className="noidung-dapan-wr">
										{!!this.isClickXemKetQua && (
											<div className="showimage">
												<p> Show Original Image </p>
												<FadeIn height={300} duration={150}>
													{onload => (
														<img
															className="question-image-in-show-result"
															src={question.question}
															alt=""
															onLoad={onload}
															style={{ height: 300 }}
														/>
													)}
												</FadeIn>
												/>
											</div>
										)}
										{!!question.answer.answer_a.imga && (
											<FadeIn height={300} duration={150}>
												{onload => (
													<img
														className={classNames({
															active: this.resultOfUserRaw[this.index] === 'a',
														})}
														onClick={e => {
															this.handleClick('a')
														}}
														src={question.answer.answer_a.imga}
														alt=""
														onLoad={onload}
														style={{ height: 300 }}
													/>
												)}
											</FadeIn>
										)}
										{!!question.answer.answer_b.imgb && (
											<FadeIn height={300} duration={150}>
												{onload => (
													<img
														className={classNames({
															active: this.resultOfUserRaw[this.index] === 'b',
														})}
														onClick={e => {
															this.handleClick('b')
														}}
														src={question.answer.answer_b.imgb}
														alt=""
														onLoad={onload}
														style={{ height: 300 }}
													/>
												)}
											</FadeIn>
										)}
										{!!question.answer.answer_c.imgc && (
											<FadeIn height={300} duration={150}>
												{onload => (
													<img
														className={classNames({
															active: this.resultOfUserRaw[this.index] === 'c',
														})}
														onClick={e => {
															this.handleClick('c')
														}}
														src={question.answer.answer_c.imgc}
														alt=""
														onLoad={onload}
														style={{ height: 300 }}
													/>
												)}
											</FadeIn>
										)}
										{!!question.answer.answer_d.imgd && (
											<FadeIn height={300} duration={150}>
												{onload => (
													<img
														className={classNames({
															active: this.resultOfUserRaw[this.index] === 'd',
														})}
														onClick={e => {
															this.handleClick('d')
														}}
														src={question.answer.answer_d.imgd}
														alt=""
														onLoad={onload}
														style={{ height: 300 }}
													/>
												)}
											</FadeIn>
										)}
										{!!question.answer.answer_e.imge && (
											<FadeIn height={300} duration={150}>
												{onload => (
													<img
														className={classNames({
															active: this.resultOfUserRaw[this.index] === 'e',
														})}
														onClick={e => {
															this.handleClick('e')
														}}
														src={question.answer.answer_e.imge}
														alt=""
														onLoad={onload}
														style={{ height: 300 }}
													/>
												)}
											</FadeIn>
										)}
										{!!question.answer.answer_f.imgf && (
											<FadeIn height={300} duration={150}>
												{onload => (
													<img
														className={classNames({
															active: this.resultOfUserRaw[this.index] === 'f',
														})}
														onClick={e => {
															this.handleClick('f')
														}}
														src={question.answer.answer_f.imgf}
														alt=""
														onLoad={onload}
														style={{ height: 300 }}
													/>
												)}
											</FadeIn>
										)}
									</div>
								)}
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
														if (this.isClickXemKetQua) {
														} else {
															this.counter = counterTime
														}
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
								<div>
									{' '}
									<p>
										{' '}
										Bạn còn {this.numberOfQuestionLeft()} câu hỏi chưa trả lời!{' '}
									</p>{' '}
								</div>
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

decorate(TestTriNho, {
	data: observable,
	index: observable,
	counter: observable,
	resultsOfUser: observable,
	resultsOfUserRaw: observable,
	showKetQua: observable,
	isClickXemKetQua: observable,
})

export default TestTriNho
