import React from 'react';

function About() {
  return (
    <>
      <div id="about">
        <div id="aboutme">
          <div className="container-fluid text-center">
            <div className="row content">
              <div className="col-sm-2 sidenav">
                <img src={require('/img/about1.jpg').default} className="img-responsive" style={{ width: '100%' }} alt="Image" />
              </div>
              <div className="col-sm-8 text-left">
                <h1>Welcome</h1>
                <p>Website Food Fact News adalah website yang memiliki tujuan utama sebagai tempat review makanan yang 
                  telah direview oleh seseorang dan mampu diakses oleh siapapun.
                </p>
                <hr />
                <h3>Makanan</h3>
                <p>Makanan adalah substansi yang dikonsumsi oleh organisme untuk memenuhi kebutuhan energi, nutrisi, 
                  dan mempertahankan fungsi tubuh. Makanan dapat berasal dari berbagai sumber, termasuk tumbuhan, hewan, 
                  atau bahan-bahan lainnya yang dapat dikonsumsi manusia.</p>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <div id="aboutme">
          <div className="container-fluid text-center">
            <div className="row content">
              <div className="col-sm-2 sidenav">
                <img src={require('/img/about2.jpg').default} className="img-responsive" style={{ width: '100%' }} alt="Image" />
              </div>
              <div className="col-sm-8 text-left">
                <h1>Perkenalan</h1>
                <p>Website ini dibuat oleh R.Muhammad Azmi Herdi Shofiyullah dalam rangka penyelesaian tugas akhir bagi mata pelajaran pemrograman berbasis framework.</p>
                <hr />
                <h3>Tujuan</h3>
                <p>Website ini memiliki tujuan untuk membagikan opini dari seseorang tentang makanan yang pernah dimakan.
                  Siapapun dapat menambahkan opini mereka di dalam website ini tanpa perlu melalukan login dahulu.
                </p>
              </div>
            </div>
          </div>
          <br />
          <hr />
        </div>
      </div>
    </>
  );
}

export default About;
