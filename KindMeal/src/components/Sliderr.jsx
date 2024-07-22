import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

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

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 13000); // autoplay every 13 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      class="container text-center mb-1"
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
              style={{ width: "70rem", height: "30rem" }}
            />
          </CarouselItem>
        ))}

        <div className="carousel-thumbnails carousel-indicators m-2">
          {items.map((item, index) => (
            <button
              style={{
                width: "7rem",
                height: "7rem",
                border: "none",
                marginTop: "4rem",
              }}
              class="mx-3 p-0 "
              disabled="true"
            >
              <img
                key={index}
                src={item.thumbnail}
                style={{
                  width: "7rem",
                  height: "7rem",
                  filter: `${index === activeIndex ? "" : "grayscale(80%)"}`,
                }}
                alt={item.altText}
                onClick={() => goToIndex(index)}
                className={index === activeIndex ? "active" : " "}
              />
            </button>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default Sliderr;
