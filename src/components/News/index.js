import React from 'react';
import Link from 'next/link';

const newsArticles = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Gavel and law books",
    category: "LEGISLATION",
    date: "September 08, 2024",
    title: "New Privacy Law Set to Reshape Data Protection",
    author: "Sarah Johnson",
    authorIcon: "assets/images/resource/blog-icon.png"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Court building",
    category: "SUPREME COURT",
    date: "September 05, 2024",
    title: "Landmark Supreme Court Ruling on Digital Rights",
    author: "Michael Chang",
    authorIcon: "assets/images/resource/blog-icon.png"
  },
  
];

const NewsArticle = ({ article }) => (
  <div className="col-lg-4 col-md-6">
    <div className="single-blog-box">
      <div className="single-blog-thumb">
        <img src={article.image} alt={article.imageAlt} style={{height: '400px', objectFit:'cover'}}/>
        <div className="blog-top-button">
          <a href="#"> {article.category} </a>
        </div>
      </div>
      <div className="em-blog-content">
        <div className="meta-blog-text">
          <p> {article.date} </p>
        </div>
        <div className="em-blog-title">
          <h2>
            <Link href="" legacyBehavior>
              <a> {article.title} </a>
            </Link>
          </h2>
        </div>
        <div className="em-blog-icon">
          <div className="em-blog-thumb">
            <img src={article.authorIcon} alt="Author icon" />
          </div>
          <div className="em-blog-icon-title">
            <h6> {article.author} </h6>
          </div>
        </div>
        <div className="blog-button">
          <Link href="" legacyBehavior>
            <> Read More <i className="bi bi-plus" /> </>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const LawNewsSection = () => {
  return (
    <div className="blog-area blog-new">
      <div className="container">
        <div className="row align-items-center mb-40">
          <div className="col-lg-7 col-md-8">
            <div className="consen-section-title mobile-center">
              <h2> Stay Informed with Our </h2>
              <h2>
                Latest <span> Legal News </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-5 col-md-4">
            <div className="consen-button text-right">
              <Link href="/blog-grid">
                <> View all Articles <i className="bi bi-plus" /> </>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {newsArticles.map(article => (
            <NewsArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawNewsSection;
