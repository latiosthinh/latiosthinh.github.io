import React, { Component } from 'react'
import data from './../data/iq.json'
import ReactSVG from 'react-svg'
import { decorate, observable } from 'mobx'
import { observer } from 'mobx-react'
import classNames from 'classnames'

const Iq = observer(
	class Iq extends Component {
		data = data
		index = 0
		resultTrueOrFalse = []
		resultOfUserRaw = []
		isClickXemKetQua = false
		lengthh = () => this.data.length
		currentItem = () => this.data[this.index]

		numberOfQuestionLeft = () => {
			let number = 0
			for (let i = 0; i < this.resultTrueOrFalse.length; i++) {
				if (this.resultTrueOrFalse[i] === null) {
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
			for (let i = 0; i < this.resultTrueOrFalse.length; i++) {
				if (this.resultTrueOrFalse[i]) {
					socaudung++
				}
			}
			localStorage.setItem('IQ', socaudung)
			return (
				<p className="result">
					You've got {socaudung} / {this.data.length}
				</p>
			)
		}

		componentDidMount() {
			for (let i = 0; i < this.data.length; i++) {
				this.resultTrueOrFalse.push(null)
				this.resultOfUserRaw.push(null)
			}
		}

		componentDidUpdate(prevProps, prevState) {
			// console.log('prevProps', prevProps)
			// console.log('prevState', prevState)
			// console.log('cdu')
			console.log(localStorage.getItem('answerRes'))
		}

		handleClick = answer => {
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
			this.resultTrueOrFalse[this.index] = result
			this.resultOfUserRaw[this.index] = answer
			console.log('result', result)
			setTimeout(
				function() {
					//Start the timer
					if (this.index < this.data.length - 1) {
						this.index += 1
					}
				}.bind(this),
				1000
			)
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
										<h1>TEST IQ</h1>
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
						<div className="container test-content">
							<p className="questionNo"> Question number: {this.index + 1} </p>
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
							<div className="test-detail">
								<div className="noidungcauhoi-wr">
									<img src={question.question} alt="" />
								</div>
								<div className="noidung-dapan-wr">
									{!!question.answer.answer_a.imga && (
										<label className="col-lg-4">
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
											<img src={question.answer.answer_a.imga} alt="" />
										</label>
									)}
									{!!question.answer.answer_b.imgb && (
										<label className="col-lg-4">
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
											<img src={question.answer.answer_b.imgb} alt="" />
										</label>
									)}
									{!!question.answer.answer_c.imgc && (
										<label className="col-lg-4">
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
											<img src={question.answer.answer_c.imgc} alt="" />
										</label>
									)}
									{!!question.answer.answer_d.imgd && (
										<label className="col-lg-4">
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
										</label>
									)}
									{!!question.answer.answer_e.imge && (
										<label className="col-lg-4">
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
										</label>
									)}
									{!!question.answer.answer_f.imgf && (
										<label className="col-lg-4">
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
										</label>
									)}
								</div>
							</div>

							<div className="dot-wr">
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

							{this.resultTrueOrFalse[this.index] === null ? null : (
								<React.Fragment>
									{!!this.isClickXemKetQua && (
										<div>
											{this.resultTrueOrFalse[this.index] ? (
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
				</div>
			)
		}
	}
)

decorate(Iq, {
	data: observable,
	index: observable,
	resultTrueOrFalse: observable,
	resultTrueOrFalseRaw: observable,
	showKetQua: observable,
	isClickXemKetQua: observable,
})

export default Iq
