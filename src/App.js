import "./App.css";
import Section2 from "./Section2";
import TopScreen from "./TopScreen";
import { useEffect, useState } from "react";

function App() {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
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
      {showElement && <div className="fix-footer">Show me</div>}
    </div>
  );
}

export default App;
