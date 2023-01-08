import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <h2>Favorite Fonts</h2>
      </div>
      <p>
        All of the following fonts can be found{" "}
        <a href="https://fonts.google.com/">here</a>,
        <br />
        on the Google Fonts website
      </p>
    </div>
  );
}

export default Header;
