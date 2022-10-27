import React, {useState, useEffect, useRef} from 'react';

// 임시 data
const Card = () => {
  return (
    <div>
      <h2>card1</h2>
    </div>
  );
};

const Card1 = () => {
  return (
    <div>
      <h2>card2</h2>
    </div>
  );
};

const Card2 = () => {
  return (
    <div>
      <h2>card3</h2>
    </div>
  );
};

const Card3 = () => {
  return (
    <div>
      <h2>card4</h2>
    </div>
  );
};

const Card4 = () => {
  return (
    <div>
      <h2>card5</h2>
    </div>
  );
};

// 추천 Carousel component
function RecCarousel() {
  const pageSlider = [
    {id: 1, component: <Card />},
    {id: 2, component: <Card1 />},
    {id: 3, component: <Card2 />},
    {id: 4, component: <Card3 />},
    {id: 5, component: <Card4 />},
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const nextSlide = () => {
    if (slideIndex !== pageSlider.length) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <>
      <div>
        {/* pre 버튼 */}
        {/* 첫 carousel일 때 버튼 안보이게*/}
        {slideIndex !== 1 && <button onClick={prevSlide}>pre</button>}
        {/* 카드 */}
        {pageSlider.map((obj, index) => {
          return (
            <div key={obj.id}>
              {slideIndex === index + 1 && pageSlider[index]['component']}
            </div>
          );
        })}
        {/* next 버튼 */}
        {/* 마지막 carousel일 때 버튼 안보이게 */}
        {slideIndex !== pageSlider.length && (
          <button onClick={nextSlide}>ne</button>
        )}
      </div>
    </>
  );
}

export default RecCarousel;
