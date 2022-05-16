import React, { FC } from "react";

import "./button.scss";

export interface ButtonProps {
  children: React.ReactNode;
  variant: "success" | "danger";
}

export const Button: FC<ButtonProps> = ({ children, variant, ...props }) => {
  return (
    <button
      style={variant === "success" ? { backgroundColor: "green" } : undefined}
      className="button"
      {...props}
    >
      {children}
    </button>
  );
};
