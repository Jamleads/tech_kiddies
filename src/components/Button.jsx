/* eslint-disable react/prop-types */
const Button = ({ btnStyle, btnText, btnClick, btnType }) => {
  return (
    <button
      className={
        btnStyle ||
        `px-5 py-3 rounded-full bg-darkerBlue border-0 text-mainWhite text-xs`
      }
      onClick={btnClick}
      type={btnType}
    >
      {btnText}
    </button>
  );
};

export default Button;
