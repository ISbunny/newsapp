import React, { Component } from 'react'
import Newsitem from './Newsitem';

export default class News extends Component {
  apiUrl = {
    url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8a09d90585d247cca732667dce9ab910"
  }
  constructor(prop) {
    super(prop);
    this.state = {
      data: null,
      page: 1
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch(`${this.apiUrl.url}&page=${this.state.page}`);
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  handleNextClick = async () => {
    console.log("Next");
    try {
      const response = await fetch(`${this.apiUrl.url}&page=${this.state.page + 1}`);
      const data = await response.json();
      this.setState({ data, page: this.state.page + 1 });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  handlePrevClick = async () => {
    console.log("Previous");
    try {
      const response = await fetch(`${this.apiUrl.url}&page=${this.state.page - 1}`);
      const data = await response.json();
      this.setState({ data, page: this.state.page - 1 });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  render() {
    return (
      <>
        <div className="container">

          <h1>News</h1>
          <p>Top headlines from BBC News</p>
          <div className="row">
            {this.state.data ? this.state.data.articles.map((item) =>
              <div className="col-md-4" key={item.url}>
                <Newsitem title={item.title} description={item.description.slice(0, 88)} urlToImage={item.urlToImage} newsUrl={item.url} />
              </div>
            ) : <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}


          </div>
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page>1} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    );
  }
}
