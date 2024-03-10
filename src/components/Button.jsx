/* eslint-disable react/prop-types */
const Button = ({ btnStyle, btnText, btnClick }) => {
  return (
    <button
      className={
        btnStyle ||
        `px-5 py-3 rounded-full bg-darkerBlue border-0 text-mainWhite text-xs`
      }
      onClick={btnClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
