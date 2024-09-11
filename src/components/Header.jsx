import React from "react";
import "./Header.css";

function Header() {
  return (
    console.log("Header render!"),
    (
      <div className="Header">
        <h3>📆 중간고사</h3>
        <h1>{new Date().toLocaleDateString()}</h1>
      </div>
    )
  );
}

export default React.memo(Header);
