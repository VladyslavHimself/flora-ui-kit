import React, { FC } from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
