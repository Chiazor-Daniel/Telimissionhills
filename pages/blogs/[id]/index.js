import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blogPost, setBlogPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchBlogPost = async () => {
        try {
          const res = await axios.get(`https://recover.finnetexh.tech/user/general-route/view-blog-post/${id}`);
          setBlogPost(res.data.message);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchBlogPost();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogPost) {
    return <div><PropagateLoader color="#ff3c00" /></div>;
  }

  return (
    <Layout>
      <Breadcumb pageName={"Blog Details"} blogDetails={'Blog Details'}/>
      <div className="blog-section style-two details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="blog-single-items">
                <div className="blog-thumb">
                  <img src={`https://recover.finnetexh.tech/user/general-route/get-blog-image/${blogPost.id}`} alt={blogPost.subject}  style={{width: '100%', height: '400px'}}/>
                </div>
                <div className="blog-content">
                  <div className="blog-content-text text-left">
                    <h5>{blogPost.subject}</h5>
                    <div className="blog-meta">
                      <span>
                        <a href="#">{blogPost.category}</a>
                      </span>{" "}
                      - <span>{new Date(blogPost.created_at).toLocaleDateString()}</span> -{" "}
                      <span>
                        <a href="#"> 0 Comments</a>
                      </span>
                    </div>
                    <p>{blogPost.article}</p>
                  </div>
                </div>
                <div className="comment-form pt-50">
                  <div className="comment-title mb-40">
                    <h3>Leave Comment</h3>
                    <span />
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="comment-name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="comment-box"
                          name="comment-email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="comment-phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="comment-website"
                          placeholder="Your Website"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name="comment-message"
                          className="mb-20"
                          id="comment-msg-box"
                          cols={30}
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                      </div>
                      <input
                        type="submit"
                        defaultValue="Post Comment"
                        className="submit-comment"
                      />
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
