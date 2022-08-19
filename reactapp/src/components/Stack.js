import PropTypes from "prop-types";

function Stack({ direction, wrap, spacing = 2, children }) {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };
  return <div style={style}>{children}</div>;
}

export default Stack;

Stack.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse",
  ]),
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
};

Stack.defaultProps = {
  direction: "row",
  spacing: 2,
  wrap: false,
};
