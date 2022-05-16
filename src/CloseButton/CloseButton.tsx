import React from "react";

import "./closeButton.scss";

export interface ICloseButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const CloseButton = ({ ...props }: ICloseButtonProps) => {
  return <button {...props} className="close"></button>;
};
