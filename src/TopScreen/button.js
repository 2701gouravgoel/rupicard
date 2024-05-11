import { useState } from "react";
import "./style.css";

function isNumeric(input) {
  return /^\d+$/.test(input);
}

export const Button = ({ v2 = false }) => {
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
    <>
      <div className={v2 ? "form2" : "form"}>
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
        <div className="consent">
          <input type="checkbox" checked={checked} id="consent-msg" />
          <label>
            You agree to be contacted by Uni Cards over Call, SMS, Email or
            WhatsApp to guide you through your application.
          </label>
        </div>
      </div>
    </>
  );
};
