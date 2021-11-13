import React from "react";


const Card = ({card}) =>{
    return(
        <div className="card mb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 p-0">
                        <img src={card.logo} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h3>{card.name}</h3>
                        <p>{card.content}</p>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center p-md-0">
                        <h5>{card.tarih}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;