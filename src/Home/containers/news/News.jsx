import React, { Component } from "react";
import { NewsItem } from "../../components";
import "./news.css";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=deforestation&apiKey=e192465df5564c0197eb691bd0ad1a13&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/everything?q=deforestation&apiKey=e192465df5564c0197eb691bd0ad1a13&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("next");
    if (Math.ceil(this.state.totalResults / 20) < this.state.page + 1) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=deforestation&apiKey=e192465df5564c0197eb691bd0ad1a13&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 news">
        <h1>Latest News</h1>

        <div className="row w-full h-full">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3">
                <NewsItem
                  key={element.url}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageURL={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="buttons-news container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
