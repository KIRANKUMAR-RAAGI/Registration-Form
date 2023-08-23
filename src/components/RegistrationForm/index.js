// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showSubmitSuccess: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  onSubmitSuccess = () => {
    this.setState({showSubmitSuccess: true})
  }

  onSubmitResponse = () => {
    this.setState({showSubmitSuccess: false})
  }

  onBlurLastName = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({showLastNameError: true})
    } else {
      this.setState({showLastNameError: false})
    }
  }

  onBlurFirstName = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({showFirstNameError: true})
    } else {
      this.setState({showFirstNameError: false})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state

    if (firstname !== '' && lastname !== '') {
      this.onSubmitSuccess()
    } else {
      this.onBlurFirstName()
      this.onBlurLastName()
    }
  }

  renderLastname = () => {
    const {lastname, showLastNameError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className="lastname-input-field"
          value={lastname}
          onChange={this.onChangeLastname}
          onBlur={this.onBlurLastName}
          placeholder="Last name"
        />
        {showLastNameError && <p className="error-message">Required</p>}
      </>
    )
  }

  renderFirstname = () => {
    const {firstname, showFirstNameError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className="firstname-input-field"
          value={firstname}
          onChange={this.onChangeFirstname}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
        {showFirstNameError && <p className="error-message">Required</p>}
      </>
    )
  }

  render() {
    const {showSubmitSuccess} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration</h1>

        {showSubmitSuccess ? (
          <form className="form-container" onSubmit={this.onSubmitResponse}>
            <div className="success-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="image"
              />
              <p className="result">Submitted Successfully</p>
              <button type="submit" className="submit-success-button">
                Submit Another Response
              </button>
            </div>
          </form>
        ) : (
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderFirstname()}</div>
            <div className="input-container">{this.renderLastname()}</div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
