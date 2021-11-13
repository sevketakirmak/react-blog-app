import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Iletisim from "./components/Iletisim";
import Hakkimda from "./components/Hakkimda";
import YaptigimIsler from "./components/YaptigimIsler";
import Yorumlar from "./components/Yorumlar";
import "./index.css"


const menu = [
  {
    name: "Ana Sayfa",
    src: "/"
  },
  {
    name: "Hakkımda",
    src: "/hakkimda"
  },
  {
    name: "Yaptığım İşler",
    src: "/yaptiklarim"
  },
  {
    name: "Yorumlar",
    src: "/yorumlar"
  },
  {
    name: "İletişim",
    src: "/iletisim"
  }
];

class App extends React.Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <Menu items={menu} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/yaptiklarim" element={<YaptigimIsler />} />
            <Route path="/hakkimda" element={<Hakkimda />} />
            <Route path="/yorumlar" element={<Yorumlar />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
