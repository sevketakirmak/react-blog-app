import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({items}) => {
    const location = useLocation();
    const [scroll, setScroll] = useState('');
    useEffect(()=>{
        if(window.scrollY > 25 ){
            setScroll("navbar-dark bg-dark");
        }
        else if(window.window.innerWidth <= 992 ){
            setScroll("navbar-dark bg-dark");
        }
        else {setScroll("");}
    }, []);
    window.addEventListener("scroll", (e) =>{
        const window = e.currentTarget;
        if(window.scrollY > 25 ){
            setScroll("navbar-dark bg-dark");
        }
        else {setScroll("");}

    });

    window.addEventListener("resize", (e)=>{
        const window = e.currentTarget;
        if(window.window.innerWidth <= 992 ){
            setScroll("navbar-dark bg-dark");
        }
        else {setScroll("");}
    });
    const renderMenu = items.map((item)=>
        {
            return(
                <li key={item.name} className='nav-item'><Link to={item.src} className='nav-link' aria-current='page'>{item.name}</Link></li>
            );
        }
    );
    return (
        <nav className={`navbar navbar-expand-lg ${scroll} ${location.pathname !== "/"? "navbar-dark bg-dark": ""}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {renderMenu}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;