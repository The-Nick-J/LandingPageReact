import React from "react";

export const Jumbotron = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-4">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod
          laboriosam. Quasi, voluptatum. Quisquam, voluptatibus.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </div>
    </div>
  );
}