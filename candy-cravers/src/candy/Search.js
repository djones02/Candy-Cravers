import React from "react";

function Search({ search, onSearch }) {
  return (
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form" style={{border:"none"}}>
              <i className="fa fa-search"></i>
              <input 
              type="text" 
              id="search" 
              className="form-control form-input" 
              placeholder="Search candy..." 
              value={search} 
              onChange={(e) => onSearch(e.target.value)}
              />
              <span className="left-pan"></span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Search;
