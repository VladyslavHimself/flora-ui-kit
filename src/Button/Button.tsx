import React from "react";
import "./button.scss";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export const Button = ({
  children,
  variant,
  className,
  ...props
}: IButtonProps) => {
  const buttonClasses = ["button", className];
  variant && buttonClasses.push(variant);

  return (
    <button {...props} className={buttonClasses.join(" ")}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "success",
};
