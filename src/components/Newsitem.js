import React, { Component } from 'react'

export default class Newsitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    render() {
        const { title, description, urlToImage,newsUrl } = this.props;
        const myStyle = {
            width: "18rem"
        };
        return (
            <div>
                <div className="card" style={myStyle}>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
