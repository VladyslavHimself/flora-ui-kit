/// <reference types="react" />
import "./button.scss";
import "../styles/globals.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<{
    ({ children, variant, className, ...props }: import("./Button").IButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
    };
}>;
export default _default;
export declare const Default: ComponentStory<{
    ({ children, variant, className, ...props }: import("./Button").IButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
    };
}>;
