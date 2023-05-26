/* eslint-disable react/prop-types */

import "./styles.scss";

const Button = ({
  className,
  name,
  IconBtnMui,
  onClick,
  bwidth,
  bheight,
  fz,
  children,
  outline,
  bg,
  color,
  disabled,
  padding,
  borderColor,
  cursorValue,
  type,
}) => {
  return (
    <>
      <button
        className={`button ${className ? className : ""} ${
          disabled && "disabled"
        }`}
        onClick={onClick}
        style={{
          width: bwidth ? `${bwidth}` : "",
          height: bheight ? `${bheight}` : "",
          fontSize: fz ? fz : "",
          outline: outline ? outline : "",
          backgroundColor: bg ? bg : "",
          color: color,
          padding: padding ? padding : "",
          border: borderColor
            ? `1px solid ${borderColor}`
            : "1px solid black",
          cursor: cursorValue ? cursorValue : "pointer",
        }}
        type={type ? type : "submit"}
      >
        {IconBtnMui ? <IconBtnMui className="button__icon" /> : null}
        <p>{name}</p>
        {children}
      </button>
    </>
  );
};

export default Button;
