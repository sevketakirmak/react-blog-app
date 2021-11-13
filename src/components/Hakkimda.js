import React from "react";
import me from "../imgs/me.jpg"

const Hakkimda = () => {
    return (
        <div className="container about-me">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <title>hakkımda</title>
                    <h2>Hakkımda</h2>
                    <p>Merhaba, <br />Sayfama hoşgeldin. Üniversiteyi Muğla Sıtkı Koçman Üniversitesi'nde okudum ve Bilişim
                        Sistemleri mühendisliği bölümünü bitirdim. Şu anda da kendimi Front-End üzerine geliştirmekteyim.
                        Javascript'in bir kütüphanesi olan React Js üzerinde kendimi geliştirmeye devam ediyorum.<br />
                        Pamukkale Üniversitesi rektörlüğünde staj yaptım ve oradayken Pamukkale Üniversitesi'nin web
                        sayfasını
                        tasarladım. Ayrıca bir çok tasarım projesinin içinde bulundum.
                        Yaptığım projeleri github hesabımdan bulabilirsin.</p>
                    <a href="https://github.com/sevketakirmak" className="btn btn-outline-dark">Github</a>
                </div>
                <div className="col-md-6">
                    <img src={me} />
                </div>
            </div>
        </div>
    );
}

export default Hakkimda;