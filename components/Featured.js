import Button from "./Button";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Header from "./Header";

const images = [
  "/imgs/slide1.png",
  "/imgs/slide2.png",
  "/imgs/slide3.png",
  "/imgs/slide4.png",
];

const Featured = () => {
  const [loaded, setLoaded] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();

  const [sliderRef, slider] = useKeenSlider({
    animationEnded(s) {
      setCurrentSlide(s.track.details.rel);
    },
    loop: true,
    initial: 0,
    created(s) {
      s.container.addEventListener("mouseover", () => {
        setPause(true);
      });
      s.container.addEventListener("mouseout", () => {
        setPause(false);
      });
    },
    dragStarted: () => {
      setPause(true);
    },
    dragEnded: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider && !document.hidden) {
        slider.current?.next();
      }
    }, 6000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  useEffect(() => {
    const new_loaded = [...loaded];
    new_loaded[currentSlide] = true;
    setLoaded(new_loaded);
  }, [currentSlide]);

  return (
    <section className=" bg-black text-white relative">
      <Header additionalClasses="absolute w-full" />
      <div className="absolute w-full h-full center-item">
        <div className="z-10 px-10 relative lg:w-3/4 xl:w-5/12 text-center">
          <h1 className="text-5xl mb-1 font-medium">We are PoweredbyPen</h1>
          <p className="text-gray-300 text-2xl font-light mb-6">
            Powered by Pen is a design studio from the Philippines that provides
            superior quality Art and Design services.
            {/* {`We pride ourselves on providing superior quality work, client satisfaction, and outstanding art and design services for our clients throughout the years of service.`} */}
          </p>
          <Button
            text={`Say Hello 👋`}
            onClick={() => {
              document.getElementById("footer").scrollIntoView();
            }}
          />
          {/* </a> */}
        </div>
      </div>
      <div
        ref={sliderRef}
        className="keen-slider h-[90vh] cursor-move opacity-50"
      >
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide lazy__slide">
            <img src={loaded[idx] ? src : ""} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
