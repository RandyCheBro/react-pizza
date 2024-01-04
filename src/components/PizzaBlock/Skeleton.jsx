import React from "react";
import ContentLoader from "react-content-loader";

function Skeleton() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={3}
      width={280}
      height={459}
      viewBox="0 0 280 459"
      backgroundColor="#e9e9e7"
      foregroundColor="#d7d8cb"
    >
      <rect x="0" y="274" rx="8" ry="8" width="280" height="26" />
      <rect x="0" y="315" rx="10" ry="10" width="275" height="40" />
      <rect x="0" y="359" rx="10" ry="10" width="135" height="40" />
      <rect x="141" y="359" rx="10" ry="10" width="135" height="40" />
      <rect x="0" y="417" rx="6" ry="6" width="90" height="27" />
      <rect x="125" y="411" rx="30" ry="30" width="152" height="46" />
      <circle cx="138" cy="125" r="125" />
    </ContentLoader>
  );
}

export default Skeleton;
