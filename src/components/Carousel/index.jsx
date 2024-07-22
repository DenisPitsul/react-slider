import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slide from "./Slide";
import styles from "./Carousel.module.scss";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [delay, setDelay] = useState(5000);

  const changeSlide = () => {
    nextSlide();
  };

  useEffect(() => {
    let id = null;
    if (isPlaying) {
      id = setTimeout(changeSlide, delay);
    }
    return () => {
      clearInterval(id);
    };
  });

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const onDelayChange = (event) => {
    setDelay(event.target.value * 1000);
  };

  return (
    <article className={styles.container}>
      <div className={styles.inputWrapper}>
        <span className={styles.inputCaption}>Delay: </span>
        <input
          className={styles.input}
          type="number"
          min={1}
          value={delay / 1000}
          onChange={onDelayChange}
        />
        <button
          className={styles.playButton}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <Slide {...slides[currentIndex]} />
      <div className={styles.buttonContainer}>
        <button className={styles.prevBtn} onClick={prevSlide}>
          {"<"}
        </button>
        <button className={styles.nextBtn} onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </article>
  );
};
export default Carousel;
