import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./pages/Hero";
import Contents from "./pages/Contents";

function App() {
  const heroRef = useRef(null);
  const contentsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <div ref={heroRef}>
        <Hero contentsRef={contentsRef} />
      </div>
      <div ref={contentsRef}>
        <Contents heroRef={heroRef} />
      </div>
    </div>
  );
}



export default App;
