import React, { useState } from 'react';

const Thumbnails = ({ images, current, onChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          onClick={() => onChange(index)}
          style={{
            width: '50px',
            height: '50px',
            margin: '0 5px',
            cursor: 'pointer',
            border: current === index ? '2px solid blue' : '2px solid transparent'
          }}
        />
      ))}
    </div>
  );
};

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (e) => {
    const { width, left } = e.target.getBoundingClientRect();
    const clickX = e.clientX - left;

    if (clickX < width / 3) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          onClick={handleImageClick}
          style={{ width: '500px', height: '300px', cursor: 'pointer' }}
        />
      </div>
      <Thumbnails images={images} current={currentIndex} onChange={handleThumbnailClick} />
    </div>
  );
};

export default Carousel;
