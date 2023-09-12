import React, { useEffect } from "react";

const GhostButton = () => {
  const platform = navigator.platform.toLowerCase();

  useEffect(() => {
    console.log(platform);
  }, [platform]);

  return (
    <a className="ghost-button">
      <span
        style={{
          height: "15px",
          fontSize: '24px',
          marginTop:
            platform.includes("mac") || platform.includes("darwin")
              ? "5px"
              : "5px",
          marginBottom: "5px",
          display: "flex",
          alignItems:
            platform.includes("mac") || platform.includes("darwin")
              ? "flex-start"
              : "center",
        }}
      >
        more
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M1.61412 24.7349L24.6654 1.68359M24.6654 1.68359H3.43396M24.6654 1.68359V22.915"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </a>
  );
};

export default GhostButton;
