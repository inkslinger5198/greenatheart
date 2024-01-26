import React, { Component } from "react";
import { NewsItem } from "../../components";
import "./news.css";
import { GrNext, GrPrevious } from "react-icons/gr";

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
      "https://newsapi.org/v2/everything?q=deforestation&apiKey=e192465df5564c0197eb691bd0ad1a13&page=1&pageSize=4";
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
    }&pageSize=4`;
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
      }&pageSize=4`;
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
      <div className="home_news">
        <div className="news-heading">
              <h1>Latest News</h1>
            </div>
        <div className="news-carousel-container">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="prev-btn"
            onClick={this.handlePrevClick}
          >
            <GrPrevious />
          </button>
          

          <div className="news-card-container">
            {this.state.articles.map((element) => {
              return (
                <div className="news-container">
                  <NewsItem
                    key={element.url}
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                  />
                </div>
              );
            })}
          </div>

          <button
            type="button"
            class=" next-btn"
            onClick={this.handleNextClick}
          >
            <GrNext />
          </button>
        </div>
      </div>
    );
  }
}

export default News;
