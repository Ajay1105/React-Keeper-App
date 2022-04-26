import React from "react";

function Footer() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today = new Date();
  var date = today.toLocaleDateString("hi-IN", options);

  return (
    <footer>
      <p>Made by Aj...</p>
      <p className="time">{date}</p> 
    </footer>
  );
}

export default Footer;
