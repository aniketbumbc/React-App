import React, { Component } from "react";
class Form extends Component {
      constructor(props) {
            super(props)

            this.initialState = {
                  name: '',
                  job: '',
                  location: '',
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

      render() {
            const { name, job, location, year } = this.state;

            return (
                  <form>
                        <label>Name</label>
                        <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={this.handleChange} />
                        <label>Job</label>
                        <input
                              type="text"
                              name="job"
                              value={job}
                              onChange={this.handleChange} />
                        <label>Location</label>
                        <input
                              type="text"
                              name="location"
                              value={location}
                              onChange={this.handleChange} />
                        <label>Year</label>
                        <input
                              type="text"
                              name="year"
                              value={year}
                              onChange={this.handleChange} />
                  </form>
            );
      }
}
export default Form;