import React from 'react';

const Container = ({ sx, children }) => {
  return (
    <div
      className={`p-3 flex-grow bg-customOrange rounded-md drop-shadow-lg ${sx}`}
      style={{
        height: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Media query for smaller screens
        '@media (max-width: 768px)': {
          height: "300px", // Adjust height for smaller screens
        }
      }}
    >
      {children}
    </div>
  );
};

export default Container;
