import React from "react";

import "./checkbox.scss";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  id: string;
}

export const Checkbox = ({ id, children }: CheckboxProps) => {
  return (
    <label htmlFor={id} className="label">
      <input className="checkbox" id={id} type="checkbox" />
      <span className="custom-checkbox" />
      <span className="label__text">{children}</span>
    </label>
  );
};
