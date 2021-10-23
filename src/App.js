import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
//More Details
//https://github.com/michalsnik/aos#animations

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container">
      <p>My AOS App</p>
      <div
        style={{ height: 400, marginBottom: 50 }}
        className="contaner red"
      ></div>
      <div
        style={{ height: 400, marginBottom: 50 }}
        className="contaner blue"
      ></div>
      <div
        data-aos="fade-up"
        // data-aos-offset="100"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"
        style={{ height: 400, marginBottom: 50 }}
        className="contaner indigo"
      ></div>
      <div
        data-aos="fade-left"
        style={{ height: 400, marginBottom: 50 }}
        className="contaner green"
      ></div>
      <div
        data-aos="fade-right"
        style={{ height: 400, marginBottom: 50 }}
        className="contaner green"
      ></div>
      <div
        data-aos="flip-left"
        style={{ height: 400, marginBottom: 10 }}
        className="contaner green"
      ></div>
    </div>
  );
};

export default App;
