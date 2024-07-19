import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import { Navigation, EffectCreative } from 'swiper/modules';
import './MusicGenres.css';
import { useNavigate } from 'react-router-dom';

const MusicGenres = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const vinylImage = document.querySelector('.vinyl-image');
    const prevButton = document.querySelector('.my-carousel__control--prev');
    const nextButton = document.querySelector('.my-carousel__control--next');

    let rotation = 0;
    let isAnimating = false;

    const rotateVinyl = (degrees) => {
      isAnimating = true;
      let startRotation = rotation;
      let endRotation = rotation + degrees;
      let startTime = performance.now();
      const duration = 600;

      const animate = (currentTime) => {
        let elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          rotation = startRotation + ((endRotation - startRotation) * (elapsedTime / duration));
          vinylImage.style.transform = `rotate(${rotation}deg)`;
          requestAnimationFrame(animate);
        } else {
          rotation = endRotation;
          vinylImage.style.transform = `rotate(${rotation}deg)`;
          isAnimating = false;
        }
      };

      requestAnimationFrame(animate);
    };

    prevButton.addEventListener('click', () => {
      if (!isAnimating) rotateVinyl(90);
    });

    nextButton.addEventListener('click', () => {
      if (!isAnimating) rotateVinyl(-90);
    });
  }, []);

  const handleGenreClick = (genre) => {
    navigate(`/genre/${genre}`);
  };

  return (
    <div className="min-h-screen body-green relative">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&family=Leckerli+One&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&family=Lilita+One&display=swap" rel="stylesheet"/>

      <h1 className="my-carousel__title absolute text-[3em] text-[#F1A512] text-center left-1/2 top-[-10%] transform -translate-x-1/2 z-20">Géneros</h1>

      <div className="vinyl-container fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[500px] overflow-hidden z-10">
        <img src="https://icons.veryicon.com/png/Media/Vinyl%20Record%20Icons/Vinyl%20Red%20512.png" alt="Vinyl Record" className="vinyl-image w-full" />
      </div>

      <div className="my-carousel relative z-20">
        <Swiper
          className="my-carousel__swiper"
          loop
          speed={800}
          grabCursor
          centeredSlides
          centeredSlidesBounds
          navigation={{
            nextEl: '.my-carousel__control--next',
            prevEl: '.my-carousel__control--prev',
          }}
          modules={[Navigation, EffectCreative]}
          slidesPerView={3}
          effect="creative"
          creativeEffect={{
            perspective: true,
            limitProgress: 3,
            prev: {
              translate: ['-30%', '20%', -300],
              rotate: [0, 0, -75],
              origin: 'bottom',
            },
            next: {
              translate: ['30%', '20%', -100],
              rotate: [0, 0, 75],
              origin: 'bottom',
            },
          }}
        >
          {['Rock', 'Pop', 'Hip-Hop', 'Electronic', 'Jazz', 'Classical', 'Country', 'R&B', 'Latin', 'Reggae'].map((genre, index) => (
            <SwiperSlide key={index} className={`swiper-card swiper-card--${index + 1}`} onClick={() => handleGenreClick(genre)}>
              <div>{genre}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="my-carousel__actions absolute bottom-0 left-0 w-full flex justify-center items-center z-10">
          <button className="btn my-carousel__control my-carousel__control--prev text-white bg-[#F1A512] rounded-full p-4 text-2xl font-medium transition-colors duration-800 ease-in-out">←</button>
          <button className="btn my-carousel__control my-carousel__control--next text-white bg-[#F1A512] rounded-full p-4 text-2xl font-medium transition-colors duration-800 ease-in-out">→</button>
        </div>
      </div>
    </div>
  );
};

export default MusicGenres;
