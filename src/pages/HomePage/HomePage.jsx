import React from "react";
import "./homepage.css";

const App = () => {
  return (
    <>
      <section className="hero-container">
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
      </section>

      <section className="dest-container">
        <div className="talgar">
          <div className="rating">⭐ 4.1</div>

          <div className="card-info">
            <h3>Пик Талгар</h3>
            <p className="price">$89</p>
          </div>
        </div>

        <div className="kolsai">
          <div className="rating">⭐ 4.9</div>

          <div className="card-info">
            <h3>Көлсай</h3>
            <p className="price">$149</p>
          </div>
        </div>

        <div className="kanion">
          <div className="rating">⭐ 4.5</div>

          <div className="card-info">
            <h3>Шарын шатқал</h3>
            <p className="price">$129</p>
          </div>
        </div>
      </section>
      <div className="see-more-container">
        <button className="see-more">
          КӨБІРЕК КӨРУ
          <img src="https://www.svgrepo.com/show/510165/right-arrow.svg" />
        </button>
      </div>

      <section className="quote-container">
        <div className="photo"> </div>
        <div className="quote-text">
          <h2>ӘЛЕМГЕ ҚАРАҢЫЗ. АРМАННАН ДА КЕРЕМЕТ</h2>
          <p>Рэй Брэдберри</p>
        </div>
      </section>

      <section class="grid-container">
        <div class="item item1">
          <img src="https://www.muchbetteradventures.com/magazine/content/images/2024/04/mount-everest-at-sunset.jpg" />
        </div>
        <div class="item item2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKFv6cSAm6VDFpsWAIw9rVtpe9flBJKbF8A&s" />
        </div>
        <div class="item item3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlJ69pt-4m9Jl-475-PAjrva1Sk-02wMJFA&s" />
        </div>
        <div class="item item4">
          <img src="https://cdn.britannica.com/17/242417-050-49F99308/Himalaya-mountain-peaks-Cho-La-Pass-Everest-National-Park-Nepal.jpg" />
        </div>
      </section> 

      <footer>
        <h1>QazaqMap</h1>

        <div>
          <nav></nav>
          <nav></nav>
          <nav></nav>
        </div>

        <div></div>
      </footer>
    </>
  );
};

export default App;
