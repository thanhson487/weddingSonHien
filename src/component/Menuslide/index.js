import React from "react";

const MenuSilde = () => {
  return (
    <header id="header" class="site-header header-style-1">
      <div class="topbar">
        <div class="container">
          <div class="row">
            <div class="col col-xs-12">
              <div class="site-logo">
                <a href="/">
                  <h1>
                    Thanh Sơn <i class="ti-heart"></i> Tống Hiền
                  </h1>
                  <span>Just Married</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navigation navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <div class="logo">
              <a href="#home">
                <span>S</span> <i class="ti-heart"></i> <span>H</span>
              </a>
            </div>
            <button type="button" class="open-btn">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" class="navbar-collapse collapse navigation-holder">
            <button class="close-navbar">
              <i class="ti-close"></i>
            </button>
            <ul class="nav navbar-nav">
              <li>
                <a href="#couple">Cặp đôi</a>
              </li>

              <li>
                <a href="#story">Chuyện tình yêu</a>
              </li>

              <li>
                <a href="#gallery">Album cưới</a>
              </li>

              <li>
                <a href="#events">Sự kiện</a>
              </li>

              <li>
                <a href="#wishes">Lời chúc</a>
              </li>

              <li>
                <a href="#donate">Mừng cưới</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MenuSilde;
