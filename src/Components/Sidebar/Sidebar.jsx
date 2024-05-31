import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import music from "../../assets/music.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
          <img src={home} alt="Home" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 1 ? "active" : ""}`} onClick={() => setCategory(1)}>
          <img src={game_icon} alt="Game Icon" />
          <p>Game Icon</p>
        </div>
        <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 3 ? "active" : ""}`} onClick={() => setCategory(3)}>
          <img src={sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 4 ? "active" : ""}`} onClick={() => setCategory(4)}>
          <img src={music} alt="Music" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category === 5 ? "active" : ""}`} onClick={() => setCategory(5)}>
          <img src={entertainment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 6 ? "active" : ""}`} onClick={() => setCategory(6)}>
          <img src={tech} alt="Tech" />
          <p>Tech</p>
        </div>
        <div className={`side-link ${category === 7 ? "active" : ""}`} onClick={() => setCategory(7)}>
          <img src={blogs} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 8 ? "active" : ""}`} onClick={() => setCategory(8)}>
          <img src={news} alt="News" />
          <p>News</p>
        </div>
        <div className={`side-link ${category === 9 ? "active" : ""}`} onClick={() => setCategory(9)}>
          <img src={jack} alt="Jack" />
          <p>Jack</p>
        </div>
        <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={simon} alt="Simon" />
          <p>Simon</p>
        </div>
        <div className={`side-link ${category === 11 ? "active" : ""}`} onClick={() => setCategory(11)}>
          <img src={tom} alt="Tom" />
          <p>Tom</p>
        </div>
        <div className={`side-link ${category === 12 ? "active" : ""}`} onClick={() => setCategory(12)}>
          <img src={megan} alt="Megan" />
          <p>Megan</p>
        </div>
        <div className={`side-link ${category === 13 ? "active" : ""}`} onClick={() => setCategory(13)}>
          <img src={cameron} alt="Cameron" />
          <p>Cameron</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className={`side-link ${category === 14 ? "active" : ""}`} onClick={() => setCategory(14)}>
          <img src={jack} alt="PewDiePie" />
          <p>PewDiePie</p>
        </div>
        <div className={`side-link ${category === 15 ? "active" : ""}`} onClick={() => setCategory(15)}>
          <img src={simon} alt="MrBeast" />
          <p>MrBeast</p>
        </div>
        <div className={`side-link ${category === 16 ? "active" : ""}`} onClick={() => setCategory(16)}>
          <img src={tom} alt="Justin Bieber" />
          <p>Justin Bieber</p>
        </div>
        <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
          <img src={megan} alt="5-min Craft" />
          <p>5-min Craft</p>
        </div>
        <div className={`side-link ${category === 18 ? "active" : ""}`} onClick={() => setCategory(18)}>
          <img src={cameron} alt="Nas Daily" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  category: PropTypes.number.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Sidebar;
