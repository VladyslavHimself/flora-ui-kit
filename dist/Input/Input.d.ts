import React from "react";
import "./input.scss";
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    wide: boolean;
}
export declare const Input: ({ className, wide, ...props }: IInputProps) => JSX.Element;
