import React, { Component } from "react";
import { NewsItem } from "../../components";
import "./news.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 4,
      totalResults: 0,
      errorMessage: null,
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
    let url = `https://newsapi.org/v2/everything?q=deforestation&sortBy=publishedAt&apiKey=e192465df5564c0197eb691bd0ad1a13&page=${page}&pageSize=${pageSize}&language=en`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      if (parsedData.status === "error") {
        this.setState({
          errorMessage:
            "Currently, articles are not available. Please try again later.",
        });
      } else {
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          errorMessage: null,
        });
      }
    } catch (error) {
      this.setState({
        errorMessage:
          "An error occurred while fetching articles. Please try again later.",
      });
    }
  };

  updatePageSize = () => {
    const screenWidth = window.innerWidth;
    let pageSize = 4; // Default pageSize

    if (screenWidth <= 2560 && screenWidth >= 2080) {
      pageSize = 4;
    } else if (screenWidth < 2080 && screenWidth > 1224) {
      pageSize = 4;
    } else if (screenWidth <= 1224) {
      pageSize = 3;
    }

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
        {this.state.errorMessage ? (
          <div className="error-message">{this.state.errorMessage}</div>
        ) : (
          Array.isArray(this.state.articles) && (
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
                        author={element.author}
                        date={element.publishedAt}
                      />
                    </div>
                  );
                })}
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
          )
        )}
      </div>
    );
  }
}

export default News;
