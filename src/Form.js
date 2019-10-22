import React, { Component } from "react";
class Form extends Component {
      constructor(props) {
            super(props)

            this.initialState = {
                  name: '',
                  job: '',
                  city: '',
                  year: ''
            }

            this.state = this.initialState
      }


      handleChange = event => {
            const { name, value } = event.target

            this.setState({
                  [name]: value,
            })
      }

      submitForm = ()=>{
            this.props.handleSubmit(this.state)
            this.setState(this.initialState)
      }

      render() {
            const { name,job,city,year } = this.state;

            return (
                  <form>
                        <label>Name</label>
                        <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={this.handleChange} /> <br/>
                        <label>Job</label>
                        <input
                              type="text"
                              name="job"
                              value={job}
                              onChange={this.handleChange} /><br/>
                        <label>Location</label>
                        <input
                              type="text"
                              name="city"
                              value={city}
                              onChange={this.handleChange} /><br/>
                        <label>Year</label>
                        <input
                              type="text"
                              name="year"
                              value={year}
                              onChange={this.handleChange} /> <br/>
                              <input type="button" value="Submit" onClick={this.submitForm} />
                  </form>
            );
      }
}
export default Form;