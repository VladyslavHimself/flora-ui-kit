import React from "react";
import "./button.scss";
export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
}
export declare const Button: {
    ({ children, variant, className, ...props }: IButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
    };
};
