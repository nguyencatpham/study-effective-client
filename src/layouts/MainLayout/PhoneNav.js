import React from 'react'
// import PropTypes from 'prop-types'

class PhoneNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleOpen () {
    debugger
    this.setState({open: !this.state.open})
  }

  render () {
    return (
      <nav className={'phone-nav' + (this.state.open ? ' onscreen' : '')}>
        <section>

          <ul className='secondary'>
            <li><a href='/users/login/'>Log In</a></li>
          </ul>

          <h3>Order On The Go</h3>
          <ul>
            <li className='download'>
              <a className='ios'
                href='http://mnch.me/a/110101738656125502?channel=interstitial&amp;data=eyJyZWZlcnJlcl92YWxpZCI6ZmFsc2UsInJlZmVycmVyX2Vycm9yIjoiU29ycnksIHRoYXQgaW52aXRlIGNvZGUgY2Fubm90IGJlIHVzZWQuIiwicmVmZXJyZXJfY29kZSI6bnVsbCwicmVmZXJyZXJfbmFtZSI6IllvdXIgRnJpZW5kIiwicmVmZXJyZXJfY3JlZGl0IjoiJDIwIiwiaW52aXRlcl9jcmVkaXQiOjIwLCJyZWZlcnJlZV9jcmVkaXQiOiIkMjAiLCJpbnZpdGVlX2NyZWRpdCI6MjAsInJlZmVycmVyX3Rva2VuIjoiYW5vbi1iYWZiYWJhYjZlMmUwMjdhYmIwN2U3ZGFkYTlkNjJkMCIsInQiOm51bGwsImEiOm51bGwsImQiOm51bGx9'>Download
                for <strong>iPhone</strong></a>
            </li>
            <li className='download'>
              <a className='android'
                href='http://mnch.me/a/110101738656125502?channel=interstitial&amp;data=eyJyZWZlcnJlcl92YWxpZCI6ZmFsc2UsInJlZmVycmVyX2Vycm9yIjoiU29ycnksIHRoYXQgaW52aXRlIGNvZGUgY2Fubm90IGJlIHVzZWQuIiwicmVmZXJyZXJfY29kZSI6bnVsbCwicmVmZXJyZXJfbmFtZSI6IllvdXIgRnJpZW5kIiwicmVmZXJyZXJfY3JlZGl0IjoiJDIwIiwiaW52aXRlcl9jcmVkaXQiOjIwLCJyZWZlcnJlZV9jcmVkaXQiOiIkMjAiLCJpbnZpdGVlX2NyZWRpdCI6MjAsInJlZmVycmVyX3Rva2VuIjoiYW5vbi1iYWZiYWJhYjZlMmUwMjdhYmIwN2U3ZGFkYTlkNjJkMCIsInQiOm51bGwsImEiOm51bGwsImQiOm51bGx9'>Download
                for <strong>Android</strong></a>
            </li>
          </ul>
        </section>
      </nav>
    )
  }
}

export default PhoneNav

