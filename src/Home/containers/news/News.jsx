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
      currentCarouselPage: 0,
      pageSize: 4, // Default pageSize
      totalResults: 0,
      errorMessage: null,
    };
  }

  componentDidMount() {
    this.fetchArticles();
    this.updatePageSize();
    window.addEventListener('resize', this.updatePageSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePageSize);
  }

  updatePageSize = () => {
    // Check if max screen width is 1024px, then set pageSize to 3, else to 4
    const newSize = window.innerWidth <= 1024 ? 3 : 4;
    this.setState({ pageSize: newSize });
  };

  fetchArticles = async () => {
    let url = `https://gnews.io/api/v4/search?q=deforestation&sortBy=publishedAt&lang=en&country=us&max=10&page=1&token=1729d733fca3705e5dbd4aa4b79ef9ec`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      if (parsedData.articles) {
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalArticles,
          errorMessage: null
        });
      } else {
        this.setState({ 
          errorMessage: "Currently, articles are not available. Please try again later."
        });
      }
    } catch (error) {
      this.setState({
        errorMessage: "An error occurred while fetching articles. Please try again later."
      });
    }
  };

  handlePrevClick = () => {
    this.setState(prevState => ({
      currentCarouselPage: Math.max(prevState.currentCarouselPage - 1, 0),
    }));
  };

  handleNextClick = () => {
    this.setState(prevState => ({
      currentCarouselPage: Math.min(prevState.currentCarouselPage + 1, Math.ceil(this.state.articles.length / this.state.pageSize) - 1),
    }));
  };

  renderArticles() {
    const {articles, currentCarouselPage, pageSize} = this.state;
    const startIndex = currentCarouselPage * pageSize;
    const articlesToShow = articles.slice(startIndex, startIndex + pageSize);

    return articlesToShow.map((article, index) => (
      <div className="news-container" key={article.url || index}>
        <NewsItem
          title={article.title ? article.title.slice(0, 45) : ""}
          description={article.description ? article.description.slice(0, 88) : ""}
          imageURL={article.image}
          newsURL={article.url}
          author={article.source.name}
          date={article.publishedAt}
        />
      </div>
    ));
  }

  render() {
    const isPrevDisabled = this.state.currentCarouselPage <= 0;
    const isNextDisabled = this.state.currentCarouselPage >= Math.ceil(this.state.articles.length / this.state.pageSize) - 1;

    return (
      <div className="home_news">
        <div className="news-heading">
          <h1>Insights</h1>
        </div>
        {this.state.errorMessage ? (
          <div className="error-message">{this.state.errorMessage}</div>
        ) : (
          <div className="news-carousel-container">
            <div className="news-card-container">
              {this.renderArticles()}
            </div>
            <div className="news_buttons">
              <button
                disabled={isPrevDisabled}
                type="button"
                className="prev-btn"
                onClick={this.handlePrevClick}
              >
                <GrLinkPrevious />
              </button>
              <button
                disabled={isNextDisabled}
                type="button"
                className="next-btn"
                onClick={this.handleNextClick}
              >
                <GrLinkNext />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default News;
