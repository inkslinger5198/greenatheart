import React, { Component } from "react";
import { NewsItem } from "../../components"; // Ensure this import path is correct
import "./news.css"; // Ensure this path is correct
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 4, // Corrected the state variable name to camelCase
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.updatePageSize();
    window.addEventListener("resize", this.updatePageSize);
    this.fetchArticles();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePageSize);
  }

  fetchArticles = async () => {
    const { page, pageSize } = this.state;
    let url = `https://newsapi.org/v2/everything?q=deforestation&apiKey=e192465df5564c0197eb691bd0ad1a13&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  };

  updatePageSize = () => {
    const screenWidth = window.innerWidth;
    let pageSize = 4; // Default pageSize

    if (screenWidth <= 2560 && screenWidth >= 2080) {
      pageSize = 6;
    } else if (screenWidth < 2080 && screenWidth > 1224) {
      pageSize = 4;
    } else if (screenWidth <= 1224) {
      pageSize = 3;
    }
    // More conditions can be added here for different screen sizes

    this.setState({ pageSize }, this.fetchArticles);
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({
        page: Math.max(prevState.page - 1, 1),
      }),
      this.fetchArticles
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      this.fetchArticles
    );
  };

  render() {
    return (
      <div className="home_news">
        <div className="news-heading">
          <h1>Latest News</h1>
        </div>
        <div className="news-carousel-container">
          <div className="news-card-container">
            {this.state.articles.map((element, index) => {
              return (
                <div className="news-container" key={element.url || index}>
                  <NewsItem
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
        </div>

        <div className="news_buttons">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="prev-btn"
            onClick={this.handlePrevClick}
          >
            <GrLinkPrevious />
          </button>
          <button
            type="button"
            className="next-btn"
            onClick={this.handleNextClick}
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
    );
  }
}

export default News;
