import "./App.css";
import Section2 from "./Section2";
import TopScreen from "./TopScreen";
import { useEffect, useState } from "react";
import { Button } from "./TopScreen/button";

function App() {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <TopScreen />
      <Section2 />
      {showElement && (
        <div className="fix-footer">
          <Button v2 />
        </div>
      )}
    </div>
  );
}

export default App;
