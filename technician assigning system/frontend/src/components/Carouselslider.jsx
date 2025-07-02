import React from 'react';

const Carouselslider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./src/assets/img3.jpg" className="d-block w-100" width={1560} height={450} alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="./src/assets/img1.jpg" className="d-block w-100" width={1560} height={450} alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="./src/assets/img4.jpg" className="d-block w-100" width={1560} height={450} alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carouselslider;
