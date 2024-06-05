import React from "react";
import "./NotFound.css"; // 스타일 파일을 import

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 - Not Found</h1>
        {/* <p>Sorry, the page you are looking for could not be found.</p> */}
      </div>
    </div>
  );
}

export default NotFound;
