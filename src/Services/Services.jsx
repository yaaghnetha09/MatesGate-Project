import React from "react";
import "./Services.css";
import { Outlet, Link } from "react-router-dom";
import l1 from "./Assets/img1.jpeg";
import l2 from "./Assets/img2.jpeg";
import l3 from "./Assets/img3.jpeg";
import l4 from "./Assets/img4.jpeg";
import l5 from "./Assets/img5.jpeg";
import l6 from "./Assets/img6.jpg";
import l7 from "./Assets/img7.jpg";
import l8 from "./Assets/img8.jpg";
import l9 from "./Assets/img9.jpg";
import l10 from "./Assets/img10.jpg";
import l11 from "./Assets/img11.jpg";
// import l12 from "./Assets/img12.jpg";
// import l13 from "./Assets/img13.jpg";
import l14 from "./Assets/img14.jpg";
import l15 from "./Assets/img15.jpg";
// import l16 from "./Assets/img16.jpg";
import l17 from "./Assets/img17.jpg";
import l18 from "./Assets/img18.jpg";
import l19 from "./Assets/img19.jpg";
import l20 from "./Assets/img20.jpg";
import l21 from "./Assets/img21.jpg";
const Services = () => {
  return (
    <>
    <div>
      {/* <iframe src="HEADER/header.html" width="100%" height="70px"></iframe> */}

      <div>
        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ marginTop: "0px" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active c_item">
              <img src={l7} className="d-block w-100 c_img" alt="..." />
            </div>
            <div className="carousel-item c_item">
              <img src={l1} className="d-block w-100 c_img" alt="..." />
            </div>
            <div className="carousel-item c_item">
              <img src={l6} className="d-block w-100 c_img" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>

        <div
          className="row row-cols-1 row-cols-md-3 g-4 container-fluid"
          style={{ marginTop: "25px" }}
        >
          <div className="col c1">
            <div className="card">
              <img src={l6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Chimney Repair</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col c2">
            <div className="card">
              <a href="Page2.html">
                <img src={l2} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
              <h5 className="card-title">
                <Link to="/workerDetails" style={{ color: 'black' }}>Plumbing</Link>
              </h5>

                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={l8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Doors/windows Repair</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={l5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">AC Service</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={l1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">House Cleaning</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={l4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Painting</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={l3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Switch Board Fitting</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={l9} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Massage</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={l10} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Hair Cut</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wide-card">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">Salon For Women</h5>
            <p className="card-text">
              Here any work of Ladies Salon is Available.Please try using here
            </p>
            <p className="card-text">
              <small className="text-body-secondary"></small>
            </p>
          </div>
          <img
            src={l17}
            className="card-img-bottom wide-img WI1"
            alt="..."
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        <div className="col c1">
          <div className="card">
            <img src={l19} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Television Repair</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col c2">
          <div className="card">
            <img src={l11} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Washing Machine Repair</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={l14} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">AC Repair</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="card text-bg-dark wide-card">
        <img
          src={l15}
          className="card-img wide-img WI2"
          alt="..."
          style={{ objectFit: "cover" }}
        />

        <div className="card-img-overlay">
          <h5 className="card-title"></h5>
          <p className="card-text"></p>
          <p className="card-text">
            <small></small>
          </p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        <div className="col c1">
          <div className="card">
            <img src={l20} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Refrigerator Repair</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col c2">
          <div className="card">
            <img src={l21} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Microwave Repair</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={l18} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Water Purifier Repair</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>

      {/* <iframe src="FOOTER/footer.html" frameborder="0" width="100%" className="footer"></iframe> */}
    </div>
    <Outlet />
    </>
  );
};

export default Services;
