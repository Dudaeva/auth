import React from "react";
import background from "../assets/background.png";
import logo from "../assets/logo.svg";
import visibility from "../assets/visibility.svg";

function Login() {
  return (
    <div className="container">
      <div className="left_block">
        <img src={background} alt="background" className="background"/>
        <img src={logo} alt="logo" class="logo" />
      </div>
      <div class="main">
        <h1>Вход в конструктор финансового плана <span>InvestmentBox</span></h1>
        <p className="desc">
          Пожалуйста, авторизуйте свой персональный <br /> аккаунт для доступа к
          платформе.
        </p>
        <form action="">
          <input type="text" placeholder="Введите e-mail" />
          <div style={{ position: "relative" }}>
            <input type="text" placeholder="Введите пароль" />
            <img src={visibility} alt="" class="pass" />
          </div>

          <div className="btn_group">
            <button className="btn_signIn">Войти</button>
            <button className="btn_get_pass">
              <a href="/get_password">Получить пароль</a>
            </button>
          </div>
        </form>
        <span className="forgot_pass">
          <a href="/restore">Забыли пароль?</a>
        </span>
        <p>Оплатить доступ к сервису можно по <a href="#">ссылке</a></p>
      </div>
    </div>
  );
}

export default Login;
