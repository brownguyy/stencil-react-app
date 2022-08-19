import PropTypes, { bool, string } from "prop-types";
import "./button.css";
function Button({ size, backgroundColor, label, primary, ...props }) {
  const mode = primary ? "sb-button--primary" : "sb-button--secondary";
  return (
    <button
      type="button"
      className={["sb-button", `sb-button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  primary: false,
  size: "medium",
  backgroundColor: null,
  onClick: () => {},
};
