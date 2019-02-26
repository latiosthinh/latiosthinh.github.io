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

import FadeIn from 'react-lazyload-fadein'
import { nextQuestionMusicOrLanguage } from '../helpers'

library.add(faVolumeDown)

const Music = observer(
	class Music extends Component {
		constructor(props) {
			super(props)
			this.state = {
				answerRes: [],
			}
		}
		isStart = false
		ures = 0
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
			localStorage.setItem('Music', socaudung)
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
			// $('body').on('mouseenter', '.q', function() {
			//  $(this)
			//    .children('audio')[0]
			//    .play()
			// })
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
			this.resultTrueOrFalse[this.index] = result
			this.resultOfUserRaw[this.index] = answer
			nextQuestionMusicOrLanguage(
				this.index,
				this.data.length,
				this.myEl,
				() => {
					this.index++
				}
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
						<div
							ref={myEl => (this.myEl = myEl)}
							className="cauhoi-wr cauhoi-music"
						>
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
										<FadeIn height={300} duration={100}>
											{onload => (
												<img
													onMouseEnter={e => {
														this.audioQuestionRef.play()
														return
													}}
													src={question.question.img}
													alt=""
													onLoad={onload}
												/>
											)}
										</FadeIn>

										<audio
											ref={audioQuestionRef =>
												(this.audioQuestionRef = audioQuestionRef)
											}
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
														console.log('input')
														this.handleClick('a')
													}}
												/>
												<FadeIn height={300} duration={100}>
													{onload => (
														<img
															onMouseEnter={e => {
																this.audioARef.play()
																return
															}}
															src={question.answer.answer_a.imga}
															alt=""
															onLoad={onload}
															style={
																{
																	/* height: 300 */
																}
															}
														/>
													)}
												</FadeIn>

												<audio
													ref={audioARef => (this.audioARef = audioARef)}
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
												<FadeIn height={300} duration={100}>
													{onload => (
														<img
															onMouseEnter={e => {
																this.audioBRef.play()
																return
															}}
															src={question.answer.answer_b.imgb}
															alt=""
															onLoad={onload}
															style={
																{
																	/* height: 300 */
																}
															}
														/>
													)}
												</FadeIn>

												<audio
													ref={audioBRef => (this.audioBRef = audioBRef)}
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
												<FadeIn height={300} duration={100}>
													{onload => (
														<img
															onMouseEnter={e => {
																this.audioCRef.play()
																return
															}}
															src={question.answer.answer_c.imgc}
															alt=""
															onLoad={onload}
															style={
																{
																	/* height: 300 */
																}
															}
														/>
													)}
												</FadeIn>

												<audio
													ref={audioCRef => (this.audioCRef = audioCRef)}
													src={
														!!question.answer.answer_c.soundc
															? question.answer.answer_c.soundc
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

decorate(Music, {
	data: observable,
	index: observable,
	resultTrueOrFalse: observable,
	resultTrueOrFalseRaw: observable,
	showKetQua: observable,
	isClickXemKetQua: observable,
	isStart: observable,
})

export default Music
