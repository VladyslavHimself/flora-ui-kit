import React from "react";
import "./input.scss";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  wide: boolean;
}

export const Input = ({ className, wide, ...props }: IInputProps) => {
  const inputClasses = ["input", className];

  if (wide) {
    inputClasses.push("wide");
  }

  return <input {...props} className={inputClasses.join(" ")} />;
};
