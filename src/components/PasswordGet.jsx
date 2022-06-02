import React from "react";
import background from "../assets/background.png";
import logo from "../assets/logo.svg";

function PasswordGet(props) {
  return (
    <div className="container">
      <div className="left_block">
        <img src={background} alt="" class="background" className="background"/>
        <img src={logo} alt="logo" class="logo" />
      </div>
      <div class="main">
        <h1>Получение пароля</h1>
        <p className="desc">
          Оставьте свой e-mail, чтобы получить пароль <br /> для доступа к платформе.
        </p>
        <form action="">
          <input type="text" placeholder="Введите e-mail" />
          <div className="btn_group">
            <button className="btn_get_pass2"> Получить пароль </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordGet;
