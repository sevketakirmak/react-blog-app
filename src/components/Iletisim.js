import React from "react";
import piegon from "../imgs/carrier-pigeon-large.jpg"


const Iletisim = () =>{
    return(
        <div className="container iletisim">
        <div className="row">
            <div className="col-md-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope fa-2x"></i></span>
                    <input type="text" className="form-control" placeholder="sevketakirmak3@gmail.com" aria-label="readOnly input example"
                        aria-describedby="basic-addon1" readOnly />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fab fa-twitter fa-2x"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="www.twitter.com/sevketakirmak" aria-label="readOnly input example"
                        aria-describedby="basic-addon1" readOnly />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fab fa-instagram fa-2x"></i></span>
                    <input type="text" className="form-control" placeholder="www.instagram.com/sevketakirmak" aria-label="readOnly input example"
                        aria-describedby="basic-addon1" readOnly />
                </div>
                <textarea className="form-control" id="comment" rows="3" placeholder="Söyelemk istediğin bir şey var mı?"></textarea>
                <button id="addComment" className="btn btn-primary mt-3">GÖNDER</button>
            </div>
            <div className="col-md-6">
                <img src={piegon} />
            </div>
        </div>
    </div>
    );
}

export default Iletisim;