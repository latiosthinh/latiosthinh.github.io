import React, {Component} from 'react'
import data from './../data/lan.json'
import ReactSVG from 'react-svg'
import { decorate, observable } from "mobx"
import { observer } from "mobx-react"
import classNames from 'classnames'
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons'
library.add(faVolumeDown)

const Language = observer(
	class Language extends Component{ 
		data = data 
		index = 0
		resultsOfUser = []
		resultOfUserRaw = []
		isClickXemKetQua = false
		lengthh = () => this.data.length  
		currentItem = () => this.data[this.index]
		
		numberOfQuestionLeft = () => {
			let number = 0
			for(let i = 0; i < this.resultsOfUser.length; i++){
				if(this.resultsOfUser[i] === null){
					number ++
				}
			}
			return number
		}

		showKetQua = () => {
			return this.numberOfQuestionLeft() === 0
		}

		ketquaCuthe = ()=> {
			let socaudung = 0
			for(let i = 0; i < this.resultsOfUser.length; i++){
				if(this.resultsOfUser[i]){
					socaudung ++
				}
			}
			localStorage.setItem('Language', socaudung)
			return (
                <p className="result">You've got ${socaudung} / {this.data.length}</p>
            )
		}

		componentDidMount(){ 
			for(let i = 0; i < this.data.length; i++){
				this.resultsOfUser.push(null)
				this.resultOfUserRaw.push(null)
            }
            $('body').on('hover', '.q', function(){
                $(this).children('audio')[0].play();
            });
		} 

		componentDidUpdate(prevProps, prevState) {
				// console.log('prevProps', prevProps)
				// console.log('prevState', prevState)
				// console.log('cdu')
		}
		handleClick(answer){
			if( this.isClickXemKetQua){
				return
			}
			let result = false
			let answerName = "answer_" + answer
			let tName = "t" + answer

			if(typeof this.currentItem().acf.answer[answerName][tName] === "string"){

			} else{
				result = true
			}
			this.resultsOfUser[this.index] = result
			this.resultOfUserRaw[this.index] = answer
			console.log('result', result)
			if(this.index < this.data.length-1) {
				this.index += 1
			}
		}

		render(){ 
			const qname = this.currentItem()
			const question = this.currentItem().acf
			return (
				<div>
				<section className="psy-section" id="id2">
					<div className="container">
						<div className="row tn">
							<div className="col-lg-12">
								<div className="bigwhale">
									<h1>TEST LANGUAGE</h1>
									<a className="test-item chat" href="/language">
                                        <ReactSVG src="./images/SVG/language.svg" />
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
					<div className="container test-content">  
					<p className="questionNo"> Question number: {this.index + 1} </p>
					{!!this.showKetQua() && (
						<div className="show-kg-button-wr"> 
							<button onClick={e=> {
								this.isClickXemKetQua = true
								this.counter = 0
								this.index = 0
							}} className="xemkq"> Check Results </button> 
						</div>  
					)}
						<div>
                            <div className="noidungcauhoi-wr q"> 
								<FontAwesomeIcon icon="volume-down" /> 
                                <img src={question.question.img} alt=""/> 
                                <audio src={!!question.question.sound ? question.question.sound : null}></audio>
                            </div>  
                            <div className="noidung-dapan-wr">  
                                {!!this.isClickXemKetQua && (
                                    <div className="showimage">
                                        <img className="question-image-in-show-result" src={question.question} alt=""/>
                                    </div>
                                )}
                                {!!question.answer.answer_a.imga && (
                                    <label className="q">
										<FontAwesomeIcon icon="volume-down" />
										<input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "a"})} onClick={e=> { this.handleClick("a")}} />
										<img onClick={e=> { this.handleClick("a")}}   src={question.answer.answer_a.imga} alt=""/>   
										<audio src={!!question.answer.answer_a.sounda ? question.answer.answer_a.sounda : null}></audio>
									</label>
                                )}  
                                {!!question.answer.answer_b.imgb && ( 
                                    <label className="q">
										<FontAwesomeIcon icon="volume-down" />
										<input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "b"})}  onClick={e=> { this.handleClick("b")}} />
										<img src={question.answer.answer_b.imgb} alt=""/>   
										<audio src={!!question.answer.answer_b.soundb ? question.answer.answer_b.soundb : null}></audio>
									</label>
                                )}  
                                {!!question.answer.answer_c.imgc && ( 
									<label className="q">
										<FontAwesomeIcon icon="volume-down" />
										<input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "c"})}  onClick={e=> { this.handleClick("c")}} />
										<img src={question.answer.answer_c.imgc} alt=""/>   
										<audio src={!!question.answer.answer_c.soundc ? question.answer.answer_c.soundc : null}></audio>
									</label>
                                )}  
                                {!!question.answer.answer_d.imgd && ( 
                                    <label className="q">
										<FontAwesomeIcon icon="volume-down" />
										<input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "d"})}  onClick={e=> { this.handleClick("d")}} />
										<img src={question.answer.answer_d.imgd} alt=""/>    
										<audio src={!!question.answer.answer_d.soundd ? question.answer.answer_d.soundd : null}></audio>
									</label>
                                )}  
                                {!!question.answer.answer_e.imge && ( 
                                    <label className="q">
										<FontAwesomeIcon icon="volume-down" />
										<input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "e"})}  onClick={e=> { this.handleClick("e")}} />
										<img src={question.answer.answer_e.imge} alt=""/>    
										<audio src={!!question.answer.answer_e.sounde ? question.answer.answer_e.sounde : null}></audio>
									</label>
                                )} 
                                {!!question.answer.answer_f.imgf && ( 
                                    <label className="q">
										<FontAwesomeIcon icon="volume-down" />
										<input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "f"})}  onClick={e=> { this.handleClick("f")}} />
										<img src={question.answer.answer_f.imgf} alt=""/>    
										<audio src={!!question.answer.answer_f.soundf ? question.answer.answer_f.soundf : null}></audio>
									</label>
                                )}  
                            </div>  
						</div>

						<div className="dot-wr">
							{this.data.length && this.data
								? this.data.map((item, i) => (
										<span key={item.id} className={classNames('dot-navigation', {'is-active': this.index === i})} onClick={e => {
											this.index = i
										}}> </span>
									))
								: null
							}
						</div>

						{!this.isClickXemKetQua && (
							<p className="questionLeft"> You have {this.numberOfQuestionLeft()} questions left! </p>
						)}

						{!!this.isClickXemKetQua && (
							<div> <p> {this.ketquaCuthe()} </p> </div>  
						)}

						{
							this.resultsOfUser[this.index] === null ? 
							( null ):
							( 
								<React.Fragment>
									{!!this.isClickXemKetQua && (
										<div> 
										{ 
											this.resultsOfUser[this.index] ?  
											( <div className="text-success"> <i className="fa fa-check"></i> Đúng </div> ): 
											( <div className="text-danger"> <i className="fa fa-times"></i> Sai </div> )  
										}   
										</div>    
									
									)}        
								</React.Fragment>
							)
					}
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
                    <img className="f6" src="./images/SVG/f6.svg" alt=""/>
                    <img className="f7" src="./images/SVG/f7.svg" alt=""/>
					</div>
				</section>
					<style> {`
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
					.q svg {
						position: absolute;
						bottom: 5px;
						left: 5px;
						width:25px !important;
						height:25px !important;
					}
					.q img {
						width: 150px;
						transition: all linear .3s;
					}
					.test-content ul {
						display: flex;
						justify-content: center;
					}
					.test-content ul li {
						margin: 40px 20px 0;
					}
					.countTrue {
						display: none;
					}
					.bigwhale {
						margin:300px 0 150px;
						text-align: center;
					}
					#id2 .container .row.tn h3 {
						margin-top: 120px;
						margin-bottom: 200px;
						font-size: 16px;
						font-weight: lighter;
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
						margin: 20px 50px;
						position: relative;
						z-index: 5
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
					.is-active{
						background-color: green!important;
					}
					.noidungcauhoi-wr {
						width: 250px;
						margin:0 auto;
					}
					.noidungcauhoi-wr img {
						width: 100%;
					}.noidung-dapan-wr{
                        display:flex;
                        flex-wrap: wrap;
						justify-content:center;
						align-items: center;
						padding: 15px;
						width: 100%;
						margin-bottom: 30px;
					}

                    .noidung-dapan-wr {
                        padding-right: 35px;
                        justify-content: space-around;
                    }
					input[type=radio] {
						position: absolute;
						opacity:0;
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

					.noidung-dapan-wr img{
						width: 130px;
						border: 1px solid #efefef;
						border-radius: 4px;
						cursor: pointer;
					}

					.noidung-dapan-wr img.active{
						border: 3px solid green;
					}
					.xemkq{
						position: absolute;
						bottom: 10px;
						right: 0;
						width: 150px;
						height: 40px;
						border: 2px solid green;
						border-radius: 5px;
						cursor: pointer;
						transition: all 0.2s ease;
						font-size: 16px;
						color: green;
						font-weight: bold;
						text-transform: uppercase;
					}

					.xemkq:hover{
						background: green;
						color: white;
					}
                    .questionNo {
                        padding-left: 100px;
                    }
                    .questionLeft, .result{
                        text-align: center;
                        margin-top: 20px;
                    }
					`}
					</style>
				</div>  
			) 
		} 
	} 
)


decorate(Language, {
	data: observable,
	index: observable,
	resultsOfUser: observable,
	resultsOfUserRaw: observable,
	showKetQua: observable,
	isClickXemKetQua: observable
})

export default Language
