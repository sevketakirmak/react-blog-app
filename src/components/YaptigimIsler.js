import React from "react"
import logo1 from "../imgs/logo1.jpg";
import logo2 from "../imgs/logo2.jpg"
import Card from "./Card";
import Galeri from "./Galeri";

const work = [
    {
        logo: logo1,
        name: "Hermesvision - Staj",
        content: "Üniversite yıllarımda Denizli Pamukkale Teknokent'te çalıştığım yer. 2D ve 3D oyunlar geliştirdim.",
        tarih: "Haziran 2018-Temmuz 2018"
    },
    {
        logo: logo2,
        name: "Pamukkale Üniversitesi - Staj",
        content: "Pamukkale Üniversitesi rektörlüğünde web bölümünde çalıştım ve Pamukkale üniversitesi web Sitesini taraslardım.",
        tarih: "Şubat 2019-Temmuz 2019"
    }
];


const YaptigimIsler = () =>{

    const renderCard = work.map(card=>{
        return <Card key={card.name} card={card} />
    });
    
    return(
        <div className="container experince">
            <h3>Çalıştığım Yerler:</h3>
            {renderCard}
            <Galeri />
        </div>
    );
}

export default YaptigimIsler;