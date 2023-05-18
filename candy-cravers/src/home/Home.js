import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row g-5">
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div className="card" id="home-card">
              <Link className="nav-link" to="/candy/all">
                <img
                  src={
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShcJPcuKfIrn6apvbhXgMcI4-f-IPw8dCI-HvkbkD6Ort47OKHyJJmAqu5FnZEH5BK2uwPwLBk5WXqOka2hBhTX0UgfFh1E6TRACERrqBeuprnqTGiDLaj&usqp=CAE"
                  }
                  className="card-img-top"
                  alt="Halloween"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">All Candy</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div className="card" id="home-card">
              <Link className="nav-link" to="/candy/easter">
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6J1rc5HYZc_T2qaVGpJLfWm5FWkABd56sWCjlMUu_JUrzREz_Sl-0GmSWYVC7zUIUwMEnHnQ8ddAfZ8h5Kr41bMY1WDT-5nG3gjSQg_hlWSeq7Ta9ICGQmA&usqp=CAE"
                  }
                  className="card-img-top"
                  alt="Easter"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Easter</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div className="card" id="home-card">
              <Link className="nav-link" to="/candy/halloween">
                <img
                  src="https://media.istockphoto.com/id/1366223663/photo/beautiful-portrait-of-an-african-girl-with-a-heart-shaped-lollipop.jpg?s=612x612&w=0&k=20&c=gSyFVEL_ZOTYvKTmZ8oimX9p9eoowWKtptXh4JXiP5c="
                  className="card-img-top"
                  alt="Halloween"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Halloween</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div className="card" id="home-card">
              <img
                src={
                  "https://cdn.mos.cms.futurecdn.net/HKoTi86VCh6w8ttHS5kL5W-1200-80.jpg"
                }
                className="card-img-top"
                alt="Best Candy"
              />
              <div className="card-body">
                <h5 className="card-title">Best Candy!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
