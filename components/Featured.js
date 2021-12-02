import Button from "./Button";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Header from "./Header";
import { useContext } from "react";
import { UserContext } from "../support/context";
import Image from "next/image";
import spinner from "../public/icons/loader.svg";

const Featured = () => {
  const [loaded, setLoaded] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const ctx = useContext(UserContext);
  const { contents } = ctx;
  const [images, setImages] = useState([]);

  useEffect(
    () => {
      if (!contents) return;
      const tmpArr = [];
      contents?.slideshow?.forEach((e) => {
        tmpArr.push(e.image.url);
      });
      setImages(tmpArr);
    },
    [contents],
    []
  );

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
      {contents && images.length != 0 ? (
        <>
          <div className="absolute w-full h-full center-item">
            <div className="z-10 px-10 relative lg:w-3/4 xl:w-5/12 text-center">
              <h1 className="text-5xl mb-1 font-medium">
                {contents?.main_title?.[0]?.text}
              </h1>
              <p className="text-gray-300 text-2xl font-light mb-6">
                {contents?.sub_title?.[0]?.text}
              </p>
              <Button
                text={`Say Hello 👋`}
                onClick={() => {
                  document.getElementById("footer").scrollIntoView();
                }}
              />
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
        </>
      ) : (
        <div className="h-[90vh] flex items-center justify-center">
          <Image src={spinner} width={70} height={70} alt="loading..." />
        </div>
      )}
    </section>
  );
};

export default Featured;
