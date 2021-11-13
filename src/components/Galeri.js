import React, { useState } from "react";


const images = [
    "https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1563330226-9c4abf6d0f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1582024959432-aee9b60ff4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1610716632061-f76783ec35c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
];

const Galeri = () => {

    const [image, setImage] = useState('');

    const renderImage = images.map(img =>{
        return <img key={img} src={img} onClick={()=>setImage(img)} data-bs-toggle="modal" data-bs-target="#exampleModal" />
    }
    );
    return (
        <div>
            <div className="image-galery container mt-4">
                {renderImage}
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={image} className="lg-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galeri;