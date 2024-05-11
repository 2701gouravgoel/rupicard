import { useState } from "react";
import video from "./../videos/bg.mp4";
import arrow from "./../images/down_arrow.svg";
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
    <div className="section">
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

      <div className="">
        <div className="text">
          <div>
            <span>1% assured cashback on your spends.</span>
            <span className="lightText">
              The more you spend, the more you earn.
            </span>
          </div>
        </div>
        <div className="info-caption">
          <div>
            Not applicable on fuel purchase, rent &amp; wallet transfers, ATM
            withdrawals &amp; international transactions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
