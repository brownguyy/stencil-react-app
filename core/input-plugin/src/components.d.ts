/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface InputComponent {
        "onChange": any;
    }
}
declare global {
    interface HTMLInputComponentElement extends Components.InputComponent, HTMLStencilElement {
    }
    var HTMLInputComponentElement: {
        prototype: HTMLInputComponentElement;
        new (): HTMLInputComponentElement;
    };
    interface HTMLElementTagNameMap {
        "input-component": HTMLInputComponentElement;
    }
}
declare namespace LocalJSX {
    interface InputComponent {
        "onChange"?: any;
    }
    interface IntrinsicElements {
        "input-component": InputComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "input-component": LocalJSX.InputComponent & JSXBase.HTMLAttributes<HTMLInputComponentElement>;
        }
    }
}