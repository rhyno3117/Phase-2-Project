import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function DefaultHome() {
  return (
    <div>
      <h2>Image Slideshow</h2>
      <Carousel>
        <div>
          <img src="image1.jpg" alt="Image 1" />
          <p className="legend">Image 1 Description</p>
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
          <p className="legend">Image 2 Description</p>
        </div>
        {/* Add more images here */}
      </Carousel>
    </div>
  );
}

export default DefaultHome;
