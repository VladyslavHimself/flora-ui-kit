import React, { FC } from "react";
import "./button.scss";
export interface ButtonProps {
    children: React.ReactNode;
    variant: "success" | "danger";
}
export declare const Button: FC<ButtonProps>;
