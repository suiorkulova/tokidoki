import React from "react";
import "./Article.css";
import one from "../../image/1.png";
import two from "../../image/2.png";
import three from "../../image/3.png";
import four from "../../image/4.png";
import five from "../../image/5.png";
import Ellipse from "../../image/Ellipse 1 (1).png";
import { dataCar } from "../../utillits/data";
import { dataCar2 } from "../../utillits/data";
import { byCar } from "../../utillits/data";
import { byCar2 } from "../../utillits/data";
import toyota from "../../image/Toyota_Logo_Newes.png";
import mazda from "../../image/150832_thumb.png";
import nissan from "../../image/Nissan-emblema.png";
import mitshibishi from "../../image//mitshibishi.png";
import honda from "../../image/0c397d76e288e330e73b2737e3c38b2c5f26be14.png";
import suzuki from "../../image/Suzuki-Australia-under-new-management.png";
import subaru from "../../image/subaru.png";
import isuzu from "../../image/isuzu_logo20.png";
import daihatsu from "../../image/29549013.png";

const Article = () => {
  return (
    <div className="main">
      <div className="work">
        <h1>Как мы работаем</h1>
        <div className="number">
          <div>
            <img src={one} alt="" />
            <p>
              Оставляете заявку. <br /> Наш менеджер <br /> с Вами связывается
            </p>
          </div>

          <div>
            <img src={two} alt="" />
            <p>
              Обсуждаем <br /> Ваш будущий автомобиль <br /> и заключаем договор
            </p>
          </div>

          <div>
            <img src={three} alt="" />
            <p>
              Подбираем <br /> автомобиль вместе <br /> с Вами
            </p>
          </div>

          <div>
            <img src={four} alt="" />
            <p>
              Покупаем, оплачиваем <br /> и доставляем Ваш <br /> авто
            </p>
          </div>

          <div>
            <img src={five} alt="" />
            <p>
              Вы своевременно <br /> получаете свой <br /> автомобиль
            </p>
          </div>
        </div>

        <div className="boxBtn">
          <button>Оставить заявку</button>
          <hr />
          <img src={Ellipse} alt="" />
          <img src={Ellipse} alt="" />
          <img src={Ellipse} alt="" />
          <img src={Ellipse} alt="" />
        </div>
      </div>

      <article className="article_Container">
        <div>
          <div>
            <h1>
              Заказать авто из Японии с аукциона <br />— нет ничего проще
            </h1>
            <p className="data">{dataCar}</p>
            <p className="data2">{dataCar2}</p>
          </div>

          <div className="text_box">
            <h1>Как купить машину в Японии</h1>

            <p className="data">{byCar}</p>
            <p className="data2">{byCar2}</p>
          </div>
        </div>

        <div>
          <div className="boxSubscribe">
            <h1>
              Подпишитесь <br /> на новости
            </h1>

            <p>
              Получайте интересные и полезные новости <br /> от нашей компании
              первыми
            </p>

            <input type="email" placeholder="Ваш E-mail" />

            <div>
              <button>Подписаться</button>
            </div>
          </div>

          <div>
            <div className="cars1">
              <div className="toyota">
                <img src={toyota} alt="" />
              </div>
              <div className="mazda">
                <img src={mazda} alt="" />
              </div>
              <div className="nissan">
                <img src={nissan} alt="" />
              </div>
            </div>

            <div className="cars2">
              <div>
                <img src={mitshibishi} alt="" />
              </div>
              <div className="mazda">
                <img src={honda} alt="" />
              </div>
              <div className="nissan">
                <img src={suzuki} alt="" />
              </div>
            </div>

            <div className="cars2">
              <div>
                <img className="subaru" src={subaru} alt="" />
              </div>
              <div className="isuzu">
                <img src={isuzu} alt="" />
              </div>
              <div className="daihatsu">
                <img src={daihatsu} alt="" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
