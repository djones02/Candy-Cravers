import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row g-5">
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div
              className="card"
              style={{
                boxShadow: "3px 5px 10px black",
              }}
              id="home-card"
            >
              <Link className="nav-link" to="/candy/all">
                <img
                  src={
                    "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmR5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=700&q=60"
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
            <div
              className="card"
              style={{ boxShadow: "3px 5px 10px black" }}
              id="home-card"
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1579619312739-8d373e647330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80"
                }
                className="card-img-top"
                alt="Best Candy"
              />
              <div className="card-body">
                <h5 className="card-title">
                  "They have every candy you could ever want, and then some!"
                  <span
                    style={{
                      fontSize: "14px",
                      marginLeft: "5px",
                      color: "#be185d",
                    }}
                  >
                    @the_candy_Connoisseur
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div
              className="card"
              style={{ boxShadow: "3px 5px 10px black" }}
              id="home-card"
            >
              <Link className="nav-link" to="/candy/easter">
                <img
                  src={
                    "https://images.unsplash.com/photo-1522336704934-6f4be128439b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
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
            <div
              className="card"
              style={{ boxShadow: "3px 5px 10px black" }}
              id="home-card"
            >
              <Link
                className="nav-link"
                id="halloween-img"
                to="/candy/halloween"
              >
                <img
                  src={
                    "https://images.unsplash.com/photo-1604227878600-00157ecb7c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  }
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
            <div
              className="card"
              style={{ boxShadow: "3px 5px 10px black" }}
              id="home-card"
            >
              <img
                src={
                  "https://assets3.thrillist.com/v1/image/3049886/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
                }
                className="card-img-top"
                alt="Best Candy"
              />
              <div className="card-body">
                <h5 className="card-title">Best Candy!</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div
              className="card"
              style={{ boxShadow: "3px 5px 10px black" }}
              id="home-card"
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1632687380457-05a1271e873b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                }
                className="card-img-top"
                alt="Best Candy"
              />
              <div className="card-body">
                <h5 className="card-title">Candy of the Day!</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div
              className="card"
              style={{ boxShadow: "3px 5px 10px black" }}
              id="home-card"
            >
              <img
                src={
                  "https://media.istockphoto.com/id/1366223663/photo/beautiful-portrait-of-an-african-girl-with-a-heart-shaped-lollipop.jpg?s=612x612&w=0&k=20&c=gSyFVEL_ZOTYvKTmZ8oimX9p9eoowWKtptXh4JXiP5c="
                }
                className="card-img-top"
                alt="Best Candy"
              />
              <div className="card-body">
                <h5 className="card-title">
                  "Best Valentine's Day gift ever!"
                  <span
                    style={{
                      fontSize: "14px",
                      marginLeft: "5px",
                      color: "#6b21a8",
                    }}
                  >
                    @fly_chick_7511
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div
              className="card"
              style={{ boxShadow: "3px 5px 10px black" }}
              id="home-card"
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1537216559801-9cfef32e9b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                }
                className="card-img-top"
                alt="Best Candy"
              />
              <div className="card-body">
                <h5 className="card-title">
                  "I take my candy everywhere!"
                  <span
                    style={{
                      fontSize: "14px",
                      marginLeft: "5px",
                      color: "#1d4ed8",
                    }}
                  >
                    @king-of-bushwick97
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-8">
            <div
              className="card"
              style={{ boxShadow: "3px 5px 10px black" }}
              id="home-card"
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1543590433-0421aace00b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1438&q=80"
                }
                className="card-img-top"
                alt="Best Candy"
              />
              <div className="card-body">
                <h5 className="card-title">
                  "I DIY all the time with my candies"{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      marginLeft: "5px",
                      color: "#4d7c0f",
                    }}
                  >
                    @mama_crafter-life24
                  </span>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
