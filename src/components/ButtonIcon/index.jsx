import React from "react";
import propTypes from "prop-types";
import { Button,Icon  } from "antd";
import classNames from "classnames";
import style from "./style.sass";

export default function ButtonIcon(props) {
  const classNamesStyle = classNames.bind(style);
  const cssClasses = classNamesStyle({
    "ipay88-btn-primary": props.type === "primary",
    "ipay88-btn-secondary": props.type === "secondary"
  });

  return (
    <Button
    className={cssClasses} {...props}>
     {props.children}
  </Button>
  );
};

ButtonIcon.propTypes = {
  icon: propTypes.string.isRequired,
  type: propTypes.oneOf([
    "primary",
    "secondary"
  ])
};

ButtonIcon.defaultProps = {
  type: "primary"
}
