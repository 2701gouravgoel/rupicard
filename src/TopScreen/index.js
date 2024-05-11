import video from "./../videos/bg.mp4";
import hero from "./../images/nx_wave_hero.png";
import "./style.css";
import { Button } from "./button";
function TopScreen() {
  return (
    <div className="section">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="container2">
          <div className="content">
            <h1 className="h1Text">
              <span>
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </span>
            </h1>
            <p class="props">1% Cashback + 5x Rewards + Zero Forex Markup</p>
            <Button />
          </div>
          <img src={hero} className="heroImage" />
        </div>
      </div>
    </div>
  );
}

export default TopScreen;
