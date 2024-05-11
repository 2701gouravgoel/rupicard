import { useState } from "react";
import arrow from "./../images/down_arrow.svg";
import onePercent from "./../images/one_percent_cashback.png";
import fivePercent from "./../images/five_x_rewards.png";
import forex from "./../images/forex_globe.png";
import "./style.css";
function isNumeric(input) {
  return /^\d+$/.test(input);
}
function Section2() {
  const [number, setNumber] = useState("");
  const [checked, setChecked] = useState(true);

  const submitNumber = () => {
    if (checked) {
      //send to backend
    }
  };

  const onText = (e) => {
    const number = e.currentTarget.value;
    if (!number || isNumeric(number)) setNumber(e.currentTarget.value);
  };

  return (
    <div className="section2">
      <div class="headingText">
        <p>
          Earn 1% assured cashback
          <span>on your spends. Get</span> 5X
        </p>
        <p>
          more value than cashback <span> at the Uni Store. Enjoy</span>
        </p>
        <p>
          <span class="text-[#9EA7AE] css-1ggwlzr">round the clock </span>
          Whatsapp support.{" "}
          <span class="text-[#9EA7AE] css-1ggwlzr">And it's</span>
        </p>
        <p>
          lifetime free
          <span>; no joining fee, no annual charges.</span>
        </p>
      </div>
      <div className="circle">
        <img alt="down_arrow" src={arrow} loading="lazy" className="arrow" />
      </div>

      <div className="content2">
        <div className="contentText">
          <div className="text">
            <span className="normalText">
              1% assured cashback on your spends.
            </span>
            <span className="lightText">
              The more you spend, the more you earn.
            </span>
          </div>
          <div className="info-caption">
            <div>
              Not applicable on fuel purchase, rent &amp; wallet transfers, ATM
              withdrawals &amp; international transactions.
            </div>
          </div>
        </div>
        <img src={onePercent} className="onePercent" />
      </div>

      <div className="content2 mobile-content">
        <img src={fivePercent} className="onePercent" />
        <div className="contentText">
          <div className="text">
            <span className="normalText">5x more value than your cashback</span>
            <span className="lightText">, only at the Uni Store.</span>
          </div>
        </div>
      </div>

      <div className="content2">
        <div className="contentText">
          <div className="text">
            <span className="normalText">Zero Forex Markup.</span>
            <span className="lightText">
              Go international, without any fees.
            </span>
          </div>
        </div>

        <img src={forex} className="onePercent" />
      </div>
    </div>
  );
}

export default Section2;
