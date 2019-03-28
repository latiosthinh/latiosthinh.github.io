import { CSSTransition } from 'react-transition-group'
import React, { Component } from 'react'
import data from './../../data/memory.json'
import ReactSVG from 'react-svg'
import { decorate, observable } from 'mobx'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import FadeIn from 'react-lazyload-fadein'
import { CauhoiWrapper } from '../../stylesComponent/CauhoiWrapper'

var counterTime = 10
const TestTriNho = observer(
  class TestTriNho extends Component {
    isStart = false
    data = data
    index = 0
    counter = counterTime
    resultsOfUser = []
    resultRaw = []
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
        this.resultRaw.push(null)
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
    handleClick = answer => {
      if (this.isClickXemKetQua) {
        return
      }
      let result
      let answerName = 'answer_' + answer
      let tName = 't' + answer

      if (
        typeof this.currentItem().acf.answer[answerName][tName] === 'string'
      ) {
        result = false
      } else {
        result = true
      }

      console.log(1)
      this.resultRaw[this.index] = answer
      console.log(2)
      this.resultsOfUser[this.index] = result
      console.log(3)

      // console.log('result', result)
      // console.log(
      //  'this.resultRaw[this.index] ',
      //  this.resultRaw[this.index]
      // )
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
        const question = this.currentItem().acf
        return (
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
                    <button className="time-left"> {this.counter} </button>{' '}
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
                
                  {!!question.answer.answer_a.imga && (
                    <FadeIn height={300} duration={150}>
                      {onload => (
                        <img
                          className={classNames({
                            active: this.resultRaw[this.index] === 'a',
                          })}
                          onClick={e => {
                            this.handleClick('a')
                          }}
                          src={question.answer.answer_a.imga}
                          alt=""
                          onLoad={onload}
                      
                        />
                      )}
                    </FadeIn>
                  )}
                  {!!question.answer.answer_b.imgb && (
                    <FadeIn height={300} duration={150}>
                      {onload => (
                        <img
                          className={classNames({
                            active: this.resultRaw[this.index] === 'b',
                          })}
                          onClick={e => {
                            this.handleClick('b')
                          }}
                          src={question.answer.answer_b.imgb}
                          alt=""
                          onLoad={onload}
                      
                        />
                      )}
                    </FadeIn>
                  )}
                  {!!question.answer.answer_c.imgc && (
                    <FadeIn height={300} duration={150}>
                      {onload => (
                        <img
                          className={classNames({
                            active: this.resultRaw[this.index] === 'c',
                          })}
                          onClick={e => {
                            this.handleClick('c')
                          }}
                          src={question.answer.answer_c.imgc}
                          alt=""
                          onLoad={onload}
                    
                        />
                      )}
                    </FadeIn>
                  )}
                </div>
              )}
            </div>

            <div className="currentQuestion"> {this.index + 1} </div>
            <div className="hidden"> hidden {this.resultRaw[this.index]} </div>
            <div className="dot-wr">
              <div
                onClick={e => {
                  if (this.index === 0) return
                  this.index--
                  if (this.isClickXemKetQua) {
                  } else {
                    this.counter = counterTime
                  }
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
                  if (this.isClickXemKetQua) {
                  } else {
                    this.counter = counterTime
                  }
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
              
                <p className="questionLeft">
                
                  {this.numberOfQuestionLeft()} questions left!
                </p>
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
        )
      }
    }

    render() {
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

decorate(TestTriNho, {
  resultRaw: observable,
  data: observable,
  index: observable,
  counter: observable,
  resultsOfUser: observable,

  showKetQua: observable,
  isClickXemKetQua: observable,
  isStart: observable,
})

export default TestTriNho



