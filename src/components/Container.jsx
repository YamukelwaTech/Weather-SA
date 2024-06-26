const Container = ({ sx, children }) => {
  return (
    <div
      className={`p-3 flex-grow bg-customOrange rounded-md drop-shadow-lg ${sx}`}
      style={{ height: "450px" }}
    >
      {children}
    </div>
  );
};

export default Container;
