import React from "react";
import "./homepage.css";

const App = () => {
  return (
    <>
      <section className="hero-container">
        <div className="content">
          <h1 className="tabigat1">
            Табиғат пен мәдениеттің айрықша тартымдылығы
          </h1>
          <p className="tabigat">Қазақстанның көркем табиғатын зертте</p>

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
        <div className="tour-container">
          <div className="cards">
            <div className="card">
              <img
                src="https://gorny-club.kz/wp-content/uploads/2020/04/0_1_DSC01125-Talgar-min.jpg"
                alt="Pik Talgar"
              />
              <div className="rating">⭐ 4.1</div>
              <div className="card-info">
                <h3>Pik Talgar</h3>
                <p>$89</p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://qazaqgeography.kz/assets/media/kolsayskie-ozera-natsionalnyy-park/kolsay-vb.jpg"
                alt="Kolsai"
              />
              <div className="rating">⭐ 4.9</div>
              <div className="card-info">
                <h3>kolsai</h3>
                <p>$149</p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190903133241/Sharyn-Canyon-Kazakhstan.jpg"
                alt="Sharyn canyon"
              />
              <div className="rating">⭐ 4.5</div>
              <div className="card-info">
                <h3>Sharyn canyon</h3>
                <p>$129</p>
              </div>
            </div>
          </div>

          <div className="see-more">
            <button>көбірек көру →</button>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ray_Bradbury_1959.JPG/250px-Ray_Bradbury_1959.JPG"
          alt="Ray Bradbury"
          className="author-photo"
        />
        <div className="quote-texts">
          <h1 className="quote-title">Әлемге қараңыз. Арманнан да керемет</h1>
          <h5 className="quote-author">Рэй Брэдберри</h5>
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

      <section>
        <div className="kitaez">
          <img
            className="dobrikitaez"
            src="https://plus.unsplash.com/premium_photo-1661753613591-210df4f2f782?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className="domalak">
            <img
              src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg"
              alt="Arrow"
              className="arrow"
            />
            <svg viewBox="0 0 200 200" className="circle-svg">
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                fill="none"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Қазақстанның ұлттық мәдениеті мен тарихын зертте.
                </textPath>
              </text>
            </svg>
          </div>

          <p className="circle-description">
            Traveling is important in life because it will open you up to a new
            way of living and being. You will experience new connections with
            people and places and immerse in different cultures, which can help
            widen your perspective.
          </p>
        </div>
      </section>

      <footer className="contact-section">
        <h2 className="contact-title">QazaqMap</h2>

        <div className="contact-columns">
          <div className="contact-column">
            <h3>Біріңғай колл-орталық</h3>
            <p>
              <a href="tel:+77000956006">+7 700 095 60 06</a>
            </p>
            <p>Біздің колл-саяси 10:00-ден 22:00-ге дейін қызмет көрсетеді</p>
          </div>

          <div className="contact-column">
            <h3>Сатып алушыларға</h3>
            <p>Бронь жасау ережелері</p>
            <p>Онлайн төлем</p>
            <p>Сұрақтар мен жауаптар Виза</p>
          </div>

          <div className="contact-column">
            <h3>Компания туралы</h3>
            <p>Мекенжайлар мен байланыс деректері</p>
            <p>Серіктестер</p>
          </div>
        </div>

        <div className="contact-footer">
          <p>
            Біздің контактар:&nbsp;
            <a href="tel:+77057398614">+7 (705) 739 8614</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
