import React, { useState, useEffect, useCallback } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
//import "./Sliderr.css"; // Assume you have a CSS file for additional styles

const Sliderr = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = [
    {
      src: "https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg",
      altText: "Slide 1",
      caption: "Slide 1 caption",
      thumbnail: "https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg",
    },
    {
      src: "https://www.kindmeal.my/photos/deal/6/685-4392-m.jpg",
      altText: "Slide 2",
      caption: "Slide 2 caption",
      thumbnail: "https://www.kindmeal.my/photos/deal/6/685-4392-m.jpg",
    },
    {
      src: "https://www.kindmeal.my/photos/deal/7/734-5546-m.jpg",
      altText: "Slide 3",
      caption: "Slide 3 caption",
      thumbnail: "https://www.kindmeal.my/photos/deal/7/734-5546-m.jpg",
    },
    {
      src: "https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg",
      altText: "Slide 4",
      caption: "Slide 4 caption",
      thumbnail: "https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg",
    },
    {
      src: "https://www.kindmeal.my/photos/deal/7/713-5140-m.jpg",
      altText: "Slide 5",
      caption: "Slide 5 caption",
      thumbnail: "https://www.kindmeal.my/photos/deal/7/713-5140-m.jpg",
    },
    {
      src: "https://www.kindmeal.my/photos/deal/7/753-5830-m.jpg",
      altText: "Slide 6",
      caption: "Slide 6 caption",
      thumbnail: "https://www.kindmeal.my/photos/deal/7/753-5830-m.jpg",
    },
    {
      src: "https://www.kindmeal.my/photos/deal/6/664-4296-m.jpg",
      altText: "Slide 7",
      caption: "Slide 7 caption",
      thumbnail: "https://www.kindmeal.my/photos/deal/6/664-4296-m.jpg",
    },
  ];

  const next = useCallback(() => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }, [animating, activeIndex, items.length]);

  const previous = useCallback(() => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }, [animating, activeIndex, items.length]);

  const goToIndex = useCallback(
    (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    },
    [animating]
  );

  useEffect(() => {
    const intervalId = setInterval(next, 5000); // autoplay every 5 seconds
    return () => clearInterval(intervalId);
  }, [next]);

  return (
    <div
      className="text-center mb-1 mx-5"
      style={{ boxShadow: "0 0 .3rem grey" }}
    >
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        style={{ height: "38rem" }}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
          >
            <img
              src={item.src}
              alt={item.altText}
              style={{ width: "70rem", height: "30rem", margin: "0 auto" }}
            />
          </CarouselItem>
        ))}

        {/* <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        /> */}

        <div className="carousel-thumbnails carousel-indicators m-2">
          {items.map((item, index) => (
            <button
              key={index}
              style={{
                width: "9rem",
                height: "7rem",
                border: "none",
                marginTop: "4rem",
              }}
              className="mx-3 p-0"
              aria-label={`Slide ${index + 1}`}
            >
              <img
                src={item.thumbnail}
                style={{
                  width: "9rem",
                  height: "7rem",
                  filter: `${index === activeIndex ? "" : "grayscale(80%)"}`,
                }}
                alt={item.altText}
                onClick={() => goToIndex(index)}
                className={index === activeIndex ? "active" : ""}
              />
            </button>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default Sliderr;
