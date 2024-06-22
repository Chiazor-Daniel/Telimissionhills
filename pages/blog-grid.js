import React, { useEffect, useState } from 'react';
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import axios from 'axios';

const BlogGrid = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await axios.get("https://recover.finnetexh.tech/user/general-route/get-all-blog-post/");
        const blogPostsData = res.data.message;
 
        const blogPostsWithImages = await Promise.all(
          blogPostsData.map(async (post) => {
            try {
              const imageRes = await axios.get(`https://recover.finnetexh.tech/user/general-route/get-blog-image/${post.id}`, {
                responseType: 'arraybuffer'
              });
              const base64Image = Buffer.from(imageRes.data, 'binary').toString('base64');
              return { ...post, imageSrc: `data:image/png;base64,${base64Image}` };
            } catch (imageErr) {
              return { ...post, imageSrc: "https://via.placeholder.com/600x400" };
            }
          })
        );

        setBlogPosts(blogPostsWithImages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <Layout>
      <Breadcumb pageName={"Blog Grid"} blog={"Blog"} />
      <div className="blog-area style-two page">
        <div className="container">
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 single_box_">
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src={post.imageSrc} alt={post.subject} style={{ width: '100%', height: '250px' }} />
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <p>{new Date(post.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        <Link href={`/blog-details?id=${post.id}`}>
                          <a>{post.subject}</a>
                        </Link>
                      </h2>
                    </div>
                    <div className="em-blog-icon">
                      <div className="em-blog-thumb">
                        <img src="/assets/images/resource/blog-icon.png" alt="Author Icon" />
                      </div>
                      <div className="em-blog-icon-title">
                        <h6>{post.category}</h6>
                      </div>
                    </div>
                    <div className="blog-button">
                      <Link href={`/blog-details?id=${post.id}`}>
                        <a>
                          Learn More <i className="bi bi-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogGrid;
