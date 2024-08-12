const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card m-2" style={{ maxWidth: '345px' }}>
        <img src={src} className="card-img-top" alt="News item" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    );
  }
  
  export default NewsItem;
  