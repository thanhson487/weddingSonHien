import React from "react";

const CountDown = () => {
  return (
    <section class="invitation-section section-padding section-bg-img">
      <div class="container">
        <div class="row">
          <div class="col col-md-6">
            <div class="invitation-box left">
              <div class="left-vec"></div>
              <div class="right-vec"></div>
              <div class="inner">
                <h2>Save the Date</h2>
                <span>For the wedding of</span>
                <h3>Thanh Sơn & Tống Hiền</h3>
                <p>
                  Lời chúc phúc của bạn chắc chắn sẽ làm cho đám cưới của chúng
                  mình thật ý nghĩa đấy ! 💕💕
                </p>
                <a href="#wishes" class="theme-btn">
                  Gửi lời chúc
                </a>
              </div>
            </div>
          </div>
          <div class="col col-md-6">
            <div class="invitation-box calendar-box">
              <div class="left-vec"></div>
              <div class="right-vec"></div>
              <div class="inner">
                <div class="mini_calendar">
                  <table>
                    <caption class="calendar-month">
                      Th&aacute;ng 9 / 2023
                    </caption>
                    <tr>
                      <th abbr="Sunday">Sun</th>
                      <th abbr="Monday">Mon</th>
                      <th abbr="Tuesday">Tue</th>
                      <th abbr="Wednesday">Wed</th>
                      <th abbr="Thursday">Thu</th>
                      <th abbr="Friday">Fri</th>
                      <th abbr="Saturday">Sat</th>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>
                        <div id="today">23</div>
                      </td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="count-down-clock">
                <div
                  id="clock"
                  data-date="2023-09-23"
                  data-text-day="Ngày"
                  data-text-hour="Giờ"
                  data-text-minute="Phút"
                  data-text-second="Giây"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
