import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      submittedEmail: null,
      submittedName: null

    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const submittedName = e.target[0].value;
    const submittedEmail = e.target[1].value;
    this.props.onSubmit(submittedEmail, submittedName);
    const form = document.getElementById('myForm');
    form.reset();
  }

  render() {
    const { submittedEmail,submittedName } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-6 container">
            <form onSubmit={this.handleSubmit} id='myForm'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {submittedEmail && submittedName && (
              <div className="mt-3 container">
                <h4>Submitted Name:{submittedName}</h4>
                <h4>Submitted Email:{submittedEmail}</h4>
              </div>)}

          </div>
        </div>
      </>
    )
  }
}
