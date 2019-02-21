import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
class CSSTransitionDemo extends Component {

  state = {
    show: false
  }
  render() {
    return (
      <div className="CSSTransitionDemo-wrapper">
      <div> <button onClick={e => this.setState({ show: true })} > show </button> </div>
      <div> <button onClick={e => this.setState({ show: false })} > hide </button> </div>
        <CSSTransition
          in={this.state.show}
          timeout={300}
          classNames="message"
          unmountOnExit
        >
          {state => (
            <div>
              Your name rocks!
              {/*
              <CSSTransition
                in={state === 'entered'}
                timeout={300}
                classNames="star"
                unmountOnExit
              >
                <div className="star">⭐</div>
              </CSSTransition>
              {*/}
            </div>
          )}
        </CSSTransition>

        <style jsx>
          {`
            .message-enter {
              opacity: 0.01;
              transform: scale(0.9) translateY(50%);
            }
            .message-enter-active {
              opacity: 1;
              transform: scale(1) translateY(0%);
              transition: all 300ms ease-out;
            }
            .message-exit {
              opacity: 1;
              transform: scale(1) translateY(0%);
            }
            .message-exit-active {
              opacity: 0.01;
              transform: scale(0.9) translateY(50%);
              transition: all 300ms ease-out;
            }
          `}
        </style>
      </div>
    )
  }
}

export default CSSTransitionDemo
