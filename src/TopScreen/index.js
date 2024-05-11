import { useState } from "react";
import video from "./../videos/bg.mp4";
import hero from "./../images/nx_wave_hero.png";
import "./style.css";
function isNumeric(input) {
  return /^\d+$/.test(input);
}
function TopScreen() {
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
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="container">
          <div className="content">
            <h1 className="h1Text">
              <span>
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </span>
            </h1>
            <p class="props">1% Cashback + 5x Rewards + Zero Forex Markup</p>
            <div className="form">
              <div className="phoneDiv">
                <input
                  type="phone"
                  className="input"
                  placeholder="Enter Phone Number"
                  value={number}
                  onChange={onText}
                />
                <button className="button" onClick={submitNumber}>
                  Apply Now
                </button>
              </div>
              <div class="consent flex items-center py-4 px-2 max-w-xs">
                <input type="checkbox" checked={checked} id="consent-msg" />
                <label
                  for="consent-msg"
                  class="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                >
                  You agree to be contacted by Uni Cards over Call, SMS, Email
                  or WhatsApp to guide you through your application.
                </label>
              </div>
            </div>
          </div>
          <img src={hero} className="heroImage" />
        </div>
      </div>
    </div>
  );
}

export default TopScreen;
