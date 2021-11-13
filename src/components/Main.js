import React from "react";
import Article from "./Article";

const posts = [
  {
    title: "Programming",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Incidunt nihil deleniti non vitae natus dolore corrupti, saepe adipisci perspiciatis unde temporibus doloremque",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Computer",
    text: "Dolor sit amet consecteturt. Lorem ipsum dolor sdipisicing elit. Lorem ipsum dolor setur adipisicing elit.  Incidunt nihil deleniti non vitae natus dolore corrupti, saepe adipisci perspiciatis unde temporibus doloremque",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "About Me",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Incidunt nihil deleniti non vitae natus dolore corrupti, saepe adipisci perspiciatis unde temporibus doloremque",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
];

const Main = () =>{
    const renderArticle = posts.map((post)=>{
        return(
          <div key={post.title} className="col-md-4">
            <Article post={post} />
          </div>
        );
      });
      return (
        <div>
          <div className="bg">
            <div className="head">
              <h3>Şevket Akırmak</h3>
              <a href="https://github.com/sevketakirmak" className="btn btn-outline-light">Github</a>
            </div>
          </div>
          <div className="container content">
            <div className="row">
              {renderArticle}
            </div>
          </div>
        </div>
      );
}

export default Main;