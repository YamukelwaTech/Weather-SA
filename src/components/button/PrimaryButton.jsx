import icon from "../../assets/icons/icons8-search-1.svg";

const PrimaryButton = ({ onClickHandler, sx, disabled, type }) => {
  return (
    <button
      onClick={onClickHandler || null}
      disabled={disabled}
      type={type}
      className={
        sx +
        " text-black font-medium text-sm bg-customOrange active:bg-customRed disabled:opacity-50 "
      }
    >
      <img src={icon} alt="search icon" className="w-8" />
    </button>
  );
};

export default PrimaryButton;
