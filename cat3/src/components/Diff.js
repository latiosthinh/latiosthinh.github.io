import React, {Component} from 'react'
import data from './../data/diff.json'
import ReactSVG from 'react-svg'
import { decorate, observable } from "mobx"
import { observer } from "mobx-react"
import classNames from 'classnames'
import $ from 'jquery';

const Diff = observer(

  class Diff extends Component{ 
    data = data 
    index = 0
    resultsOfUser = []
    resultOfUserRaw = []
    isClickXemKetQua = false
    lengthh = () => this.data.length
    currentItem = () => this.data[this.index]
    nextItem = () => this.data[this.index + 1]

    constructor(){
      super();
  
      this.state = {
        isHidden: false
      }
    }
  

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
      localStorage.setItem('Differ', socaudung)
    }

    componentDidMount(){ 
      for(let i = 0; i < this.data.length; i++){
        this.resultsOfUser.push(null)
        this.resultOfUserRaw.push(null)
      }
      $('label').on('click', function() {
        $(this).css('opacity', '1');
        $(this).siblings('label').css('opacity', '0.3');
      });
    }


    componentDidUpdate(prevProps, prevState) {
        // console.log('prevProps', prevProps)
        // console.log('prevState', prevState)
        // console.log('cdu')
        console.log(localStorage.getItem('answerRes'))
    }

    handleClick = (answer) => {
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
      setTimeout(function() { //Start the timer
        if(this.index < this.data.length-1) {
          this.index += 1
          $('label').css('opacity', '1');
        }
      }.bind(this), 1000)
    }

    cont = () => {
      console.log('123')
      this.setState({isHidden: !this.state.isHidden})
    }

    next = () => {
      if(this.index < this.data.length - 1) {
        this.index += 1
      }
    }
    prev = () => {
      if(this.index > 0) {
        this.index -= 1
      }
    }

    render(){
      const qname = this.currentItem()
      const question = this.currentItem().acf
      // const preload = this.nextItem().acf
      let divHidden = this.state.isHidden ? "hiddenDiv" : "visiDiv";
      return (
        <div>
        {/* {!!(typeof preload !== 'undefined') && (
        <div className="preload"> 
          {!!question.answer.answer_a.imga && (
            <img src={preload.answer.answer_a.imga} alt=""/>
          )}
          {!!question.answer.answer_a.imga && (
            <img src={preload.answer.answer_b.imgb} alt=""/>
          )}
          {!!question.answer.answer_a.imga && (
            <img src={preload.answer.answer_c.imgc} alt=""/>
          )}
          {!!question.answer.answer_a.imga && (
            <img src={preload.answer.answer_d.imgd} alt=""/>
          )}
        </div>
        )} */}
        <section className="psy-section" id="id2">
          <div className="container">
            <div className="row tn">
              <div className="col-lg-12">
                <div className="bigwhale">
                  <h1>TEST DIFFERENCE</h1>
                  <a className="test-item squid" href="/iq">
                    <ReactSVG src="./images/SVG/differ2.svg" />
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
          <p className="questionNo"> {this.index + 1} </p>
          {!!this.showKetQua() && (
            <div className={`show-kg-button-wr ${divHidden}`}> 
              <button onClick={e=> {
                this.isClickXemKetQua = true
                this.counter = 0
                this.index = 0
              }} className="xemkq"> Submit Results </button> 
            </div>
          )}
          {!!this.isClickXemKetQua && (
            <div id="thanks" className={divHidden}>
              <h3>THANSK FOR SUBMITTING</h3>
              <a href="#lt" onClick={e => {this.cont()}} className="psy-btn">Continue...</a>
            </div>
          )}
            <div className="test-detail">
                            <div className="noidung-dapan-wr">  
                                {!!question.answer.answer_a.imga && (
                  <label className="col-lg-6">
                    <input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "a"})} onClick={e=> { this.handleClick("a")}} />
                    <img src={question.answer.answer_a.imga} alt=""/>
                  </label>
                                )}  
                                {!!question.answer.answer_b.imgb && (
                                    <label className="col-lg-6">
                    <input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "b"})} onClick={e=> { this.handleClick("b")}} />
                    <img src={question.answer.answer_b.imgb} alt=""/>
                  </label>
                                )}  
                                {!!question.answer.answer_c.imgc && ( 
                                    <label className="col-lg-6">
                    <input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "c"})} onClick={e=> { this.handleClick("c")}} />
                    <img src={question.answer.answer_c.imgc} alt=""/>
                  </label>
                                )}  
                                {!!question.answer.answer_d.imgd && (
                                    <label className="col-lg-6">
                    <input type="radio" name={qname.id} className={classNames({'active': this.resultOfUserRaw[this.index] === "d"})} onClick={e=> { this.handleClick("d")}} />
                    <img src={question.answer.answer_d.imgd} alt=""/>
                  </label>
                                )} 
                            </div>
              <button className="prev" onClick={e=> { this.prev()}}>PREV</button>
              <button className="next" onClick={e=> { this.next()}}>NEXT</button>
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
          </div>
          <div id="lt" className="container list-test">
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
            margin:170px 0 0;
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
            width: 250px;
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
              width: 200px;
            }
            .next {
              right: 220px;
            }
            .prev {
              left: 220px;
            }
          }
          `}
          </style>
        </div>  
      ) 
    } 
  } 

)


decorate(Diff, {
  data: observable,
  index: observable,
  resultsOfUser: observable,
  resultsOfUserRaw: observable,
  showKetQua: observable,
  isClickXemKetQua: observable
})

export default Diff
