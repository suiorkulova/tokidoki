import React from "react";
import Buttonclick from "../../Button";
import imgAuction_1 from ".././../image/Rectangle 5.png";
import imgAuction_2 from ".././../image/Rectangle 5 (1).png";
import imgAuction_3 from ".././../image/Rectangle 5 (2).png";
import "./Auction.css";

const Auction = () => {
  return (
    <div className="Auction_container">
      <h1>Сейчас на аукционе </h1>
      <div className="Auction_box_1">
        <img src={imgAuction_1} alt="" />
        <div>
          <h4>TAA Yokohama</h4>
          <span>Лот 4318</span>
          <p>2019-07-20</p>
        </div>
        <div className="line"></div>
        <div className="Auction_Nissan">
          <h3>Nissan Caravan</h3>
          <a>250G S Package</a>
          <ul>
            <li>
              Кузов: <br /> КПП: <br />
              Пробег:
            </li>
            <b className="Auction_b">
              N17 <br /> Dat
              <br /> 59000
            </b>
          </ul>
        </div>
        <div className="line_2"></div>
        <ul className="Auction_ul">
          <li>
            Обьем: <br />
            Год: <br />
            Оценка:
          </li>
          <b>
            660 <br />
            2015 <br />4
          </b>
        </ul>
        <button>Смотреть лоты</button>
      </div>
      <div className="Auction_box_1">
        <img src={imgAuction_2} alt="" />
        <div>
          <h4>TAA Yokohama</h4>
          <span>Лот 4318</span>
          <p>2019-07-20</p>
        </div>
        <div className="line"></div>
        <div className="Auction_Nissan">
          <h3>Nissan Caravan</h3>
          <a>250G S Package</a>
          <ul>
            <li>
              Кузов: <br /> КПП: <br />
              Пробег:
            </li>
            <b className="Auction_b">
              N17 <br />
              Dat <br />
              59000
            </b>
          </ul>
        </div>
        <div className="line_2"></div>
        <ul className="Auction_ul">
          <li>
            Обьем: <br />
            Год: <br /> Оценка:
          </li>
          <b>
            660 <br /> 2015 <br />4
          </b>
        </ul>
        <button>Смотреть лоты</button>
      </div>
      <div className="Auction_box_1">
        <img src={imgAuction_3} alt="" />
        <div>
          <h4>TAA Yokohama</h4>
          <span>Лот 4318</span>
          <p>2019-07-20</p>
        </div>
        <div className="line"></div>
        <div className="Auction_Nissan">
          <h3>Nissan Caravan</h3>
          <a>250G S Package</a>
          <ul>
            <li>
              Кузов: <br /> КПП: <br />
              Пробег:
            </li>
            <b className="Auction_b">
              N17 <br /> Dat <br /> 59000
            </b>
          </ul>
        </div>
        <div className="line_2"></div>
        <ul className="Auction_ul">
          <li>
            Обьем: <br />
            Год: <br /> Оценка:
          </li>
          <b>
            660 <br /> 2015 <br />4
          </b>
        </ul>
        <button>Смотреть лоты</button>
      </div>
      <div className="Auction_button">
        <Buttonclick label="Смотреть еще 2 274 лота" />
      </div>
    </div>
  );
};

export default Auction;