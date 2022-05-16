import React from "react";
import "./checkbox.scss";
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    id: string;
}
export declare const Checkbox: ({ id, children }: CheckboxProps) => JSX.Element;
