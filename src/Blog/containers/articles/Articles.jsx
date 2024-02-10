import React, { useState, useEffect } from 'react';
import ArticleCard from '../../component/ArticleCard';
import './articles.css';

function Articles() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/blog-posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  // Utility function to extract the first image src from the HTML content
  const extractFirstImageSrc = (htmlContent) => {
    const matches = htmlContent.match(/<img.*?src=["'](.*?)["']/);
    return matches ? matches[1] : null;
  };

  // Function to open post in new tab
  const openPostInNewTab = (postUrl) => {
    window.open(postUrl, '_blank');
  };

  return (
    <div className="blog-article">
      <div className="articles">
        {posts.map(post => (
          <ArticleCard
            key={post.id}
            post={post}
            extractFirstImageSrc={extractFirstImageSrc}
            onOpenPost={() => openPostInNewTab(post.url)} // Assuming `post.url` contains the URL to the Blogger post
          />
        ))}
      </div>
    </div>
  );
}

export default Articles;
