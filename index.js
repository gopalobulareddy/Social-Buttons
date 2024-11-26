const element = (
  // Write your code here.
  <div>
    <div className="bg-container">
      <div className="container">
        <h1 className="heading">Congratulations</h1>
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
            className="image-1"
          />
          <h1 className="head">Obulareddy Gopalakrishna</h1>
          <p className="para">
            KKR AND KSR INSTITUTE OF TECHNOLOGY AND SCIENCES, GUNTUR
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            className="image-2"
          />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
