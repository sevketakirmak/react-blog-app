import React from "react";
import "./Article.css"

const Article = ({ post }) => {

    return (
        <div className="article">
            <div className="article-content">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="about">
                <div className="cntnt">
                    <h3>{post.title}</h3>
                    <p>{post.text}</p>
                </div>
                <a href="/">Devamını Oku</a>
            </div>
        </div>
    );
}
export default Article;