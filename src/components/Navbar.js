import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
  const {submittedName } = this.props;
  const myStyle = {
    color: "rgb(235 219 219)",
    padding: "10px",
    fontFamily: "Arial"
  };
    const { news, home,newsapp } = this.props;
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={myStyle}>{newsapp}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Home" style={myStyle}>{home}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/News" style={myStyle}>{news}</Link>
                </li>
              </ul>

              {submittedName && (
            <p className="navbar-text" style={myStyle}>Welcome: {submittedName}</p>
          )}
            </div>
          </div>
        </nav>
      </>
    )
  }
}
