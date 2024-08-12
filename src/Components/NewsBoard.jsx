import{ useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      setError('API key is missing');
      return;
    }

    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setArticles(data.articles))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div className="alert alert-danger" role="alert">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles && articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage || 'https://via.placeholder.com/150'}
              url={news.url}
            />
          ))
        ) : (
          <div>No articles found</div>
        )}
      </div>
    </div>
  );
}

export default NewsBoard;
