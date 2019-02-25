import React, { Component } from 'react'
import { decorate, observable, flow, computed, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import _ from 'lodash'

let result = _.isEqual(3, '3')
console.log('result', result)

const Test = observer(
  class Test extends Component {
    result = ''

    handleClick(x) {
      this.result = x
    }
    render() {
      return (
        <div className="Test-wrapper">
          <div>
            <img
              src="//via.placeholder.com/350x150"
              className={this.result === 'a' ? 'activee' : ''}
              onClick={e => this.handleClick('a')}
            />
            <img
              src="//via.placeholder.com/350x150"
              className={this.result === 'b' ? 'activee' : ''}
              onClick={e => this.handleClick('b')}
            />
            <img
              src="//via.placeholder.com/350x150"
              className={this.result === 'c' ? 'activee' : ''}
              onClick={e => this.handleClick('c')}
            />
          </div>
          <style jsx>
            {' '}
            {`
              img.activee {
                border: 3px solid green;
              }

              img {
                margin-right: 20px;
              }
            `}
          </style>
        </div>
      )
    }
  }
)

decorate(Test, {
  result: observable,
})

export default Test
