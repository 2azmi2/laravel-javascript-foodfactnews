import React from 'react';

const Home = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src={require('/img/home1.jpg').default} alt="Image" />
            <div className="carousel-caption">
              <h3>Makanan</h3>
              <p>Kebutuhan yang wajib dipenuhi oleh manusia untuk bertahan hidup.</p>
            </div>
          </div>
          <div className="item">
            <img src={require('/img/home2.jpg').default} alt="Image" />
            <div className="carousel-caption">
              <h3>Makanan</h3>
              <p>Kewajiban yang bisa menjadi hobi.</p>
            </div>
          </div>
          <div className="item">
            <img src={require('/img/home3.jpg').default} alt="Image" />
            <div className="carousel-caption">
              <h3>Makanan</h3>
              <p>Suatu hal yang dapat membuat bahagia diri sendiri.</p>
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Home;