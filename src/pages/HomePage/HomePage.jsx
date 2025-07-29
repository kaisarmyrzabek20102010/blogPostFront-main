import React from "react";
import "./homepage.css";

const App = () => {
  return (
    <>
      <div className="hero-container">
        <div className="content">
          <h1>Табиғат пен мәдениеттің айрықша тартымдылығы</h1>
          <p className="subtitle">Қазақстанның көркем табиғатын зертте</p>

          <div className="keywords">
            <img
              className="icon"
              src="https://www.svgrepo.com/show/502605/date-range.svg"
              alt="Date icon"
            />
            <span>КУНІ</span>
            <img
              className="icon"
              src="https://www.svgrepo.com/show/535731/wallet.svg"
              alt="Budget icon"
            />
            <span>БЮДЖЕТ</span>
            <img
              className="icon"
              src="https://www.svgrepo.com/show/500470/avatar.svg"
              alt="People icon"
            />
            <span>АДАМДАР</span>

            <button className="taby">ТАБУ</button>
          </div>
        </div>
      </div>

      <div className="dest-container">
        <div className="talgar">
            <p className="rating">⭐ 4.1</p>
          <div className="card-info">
            <h3>Пик Талгар</h3>
            <p className="price">$89</p>
          </div>
        </div>

        <div className="kolsai">
            <p className="rating">⭐ 4.9</p>
          <div className="card-info">
            <h3>Көлсай</h3>
            <p className="price">$149</p>
          </div>
        </div>

        <div className="kanion">
            <p className="rating">⭐ 4.5</p>  
          <div className="card-info">
            <h3>Шарын шатқалы</h3>
            <p className="price">$129</p>
          </div>
        </div>
      </div>
      <button className="see-more">КӨБІРЕК КӨРУ</button>
    </>
  );
};

export default App;
