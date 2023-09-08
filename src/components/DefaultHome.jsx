import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function DefaultHome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Increment the current index to move to the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Change '6' to the total number of images
    }, 5000); // Change the delay (in milliseconds) to control the slide change interval

    return () => {
      clearInterval(timer); // Clear the timer on component unmount
    };
  }, []);

  return (
    <div>
      <div className="carouselWithBorder">
        <Carousel
          id="carousel"
          showThumbs={false}
          selectedItem={currentIndex} // Set the selected item based on currentIndex
          onChange={(index) => setCurrentIndex(index)} // Update currentIndex when the user manually changes slides
        >
          <img src="/assets/image0.png" alt="Image 1" className="carImg" style={{ height: 400, width: 400, marginTop: 20 }} />
          <img src="/assets/image1.png" alt="Image 2" className="carImg" style={{ height: 400, width: 400, marginTop: 20 }} />
          <img src="public/assets/IMG_7330.PNG" alt="Image 3" className="carImg" style={{ height: 400, width: 400, marginTop: 20 }} />
          <img src="public/assets/IMG_6629.jpg" alt="Image 4" className="carImg" style={{ height: 400, width: 400, marginTop: 20 }} />
          <img src="public/assets/IMG_8700.jpg" alt="Image 5" className="carImg" style={{ height: 400, width: 400, marginTop: 20 }} />
          <img src="public/assets/IMG_1802.jpg" alt="Image 6" className="carImg" style={{ height: 400, width: 400, marginTop: 20 }} />
        </Carousel>
      </div>
    </div>
  );
}

export default DefaultHome;
