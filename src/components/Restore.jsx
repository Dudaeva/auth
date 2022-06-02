import React from "react";
import background from "../assets/background.png";
import logo from "../assets/logo.svg";

function Restore(props) {
  return (
    <div className="container">
      <div className="left_block">
        <img src={background} alt="" className="background"/>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="main">
        <h1>Восстановление пароля</h1>
        <p className="desc">
          Оставьте свой e-mail, чтобы получить новый <br />пароль для доступа к платформе.
        </p>
        <form action="">
          <input type="text" placeholder="Введите e-mail" />
          <div className="btn_group">
            <button className="btn_get_pass_new">Получить новый пароль</button>
          </div>
        </form>
        <p>Я вспомнил пароль. <a href="/">Войти</a></p>
      </div>
    </div>
  );
}

export default Restore;
