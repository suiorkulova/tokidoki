import React from "react";
import "./CustomerCars.css";
import Buttonclick from "../../Button";
import imgCustomerCars_1 from ".././../image/Rectangle 3 (7).png";
import imgCustomerCars_2 from ".././../image/Rectangle 3 (2).png";
import imgCustomerCars_3 from ".././../image//Rectangle 3 (3).png";
import imgCustomerCars_4 from ".././../image//Rectangle 3 (4).png";
import imgCustomerCars_5 from ".././../image/Rectangle 3 (5).png";
import imgCustomerCars_6 from ".././../image/Rectangle 3 (6).png";
import imgCustomerCars_7 from ".././../image/Rectangle 3 (7).png";
import imgCustomerCars_8 from ".././../image/Rectangle 3 (1).png";

const CustomerCars = () => {
  return (
    <div className="CustomerCars">
      <h1>Автомобили клиентов</h1>
      <div className="CustomerCars_container_1">
        <div className="CustomerCars_box-1">
          <img src={imgCustomerCars_1} alt="" />
          <button>В пути</button>
          <div className="onlyDiv">
            <p>
              <span>Nissan Wingroad, 2014</span> <br />
              Обьем: 1.5 <br />
              Привод: Передний
            </p>
          </div>
        </div>
        <div className="CustomerCars_box-1">
          <img src={imgCustomerCars_2} alt="" />
          <button>В пути</button>
          <p>
            <span>Honda Stepwgn,2014</span> <br />
            Обьем: 2.0
            <br />
            Привод: Передний
          </p>
        </div>
        <div className="CustomerCars_box-1">
          <img src={imgCustomerCars_3} alt="" />
          <button> В пути</button>
          <p>
            <span>Toyota Isis, 2014</span> <br />
            Обьем: 1.8
            <br />
            Привод: Полный
          </p>
        </div>
        <div className="CustomerCars_box-1">
          <img src={imgCustomerCars_4} alt="" />
          <button> В пути</button>
          <p>
            <span>Toyota Vellfire, 2014 </span>
            <br />
            Обьем: 2.4 <br />
            Привод: Полный
          </p>
        </div>
      </div>
      <div className="CustomerCars_container_1">
        <div className="CustomerCars_box-1">
          <img src={imgCustomerCars_5} alt="" />
          <button>В пути</button>
          <p>
            <span> Nissan Wingroad, 2014</span>
            <br />
            Обьем: 1.5
            <br />
            Привод: Передний
          </p>
        </div>
        <div className="CustomerCars_box-1">
          <img src={imgCustomerCars_6} alt="" />
   <div className="CustomerCars_button">
   <button > <li>Доставлено</li></button>
   </div>
          <p>
            <span> Honda Stepwgn, 2014</span>
            <br />
            Обьем: 2.0
            <br />
            Привод: Передний
          </p>
        </div>
        <div className="CustomerCars_box-1">
          <img src={imgCustomerCars_7} alt="" />
          <button>В пути</button>
          <p>
            <span> Toyota Isis, 2014</span>
            <br />
            Обьем: 1.8
            <br />
            Привод: Полный
          </p>
        </div>
        <div className="CustomerCars_box-1">
          <img src={imgCustomerCars_8} alt="" />
          <button>В пути</button>
          <p>
            <span>Toyota Vellfire, 2014</span>
            <br />
            Обьем: 2.4
            <br />
            Привод: Полный
          </p>
        </div>
      </div>
      <Buttonclick label="Смотреть все" />
    </div>
  );
};

export default CustomerCars;