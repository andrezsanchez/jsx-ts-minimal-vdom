export type VNode<T> = {
  type: T;
  props: {};
  children?: Element[];
}

export type ElementFunction = (props: {}, children?: Element[]) => Element;
export const jsxClassSymbol = Symbol.for("MY_JSX_UNIQUE_SYMBOL");
export type ElementClassConstructor = {
  [jsxClassSymbol]: true;
  new (props: {}, children?: Element[]): ElementClass;
};

export function isElementClassConstructor(x: unknown): x is ElementClassConstructor {
  return typeof x === 'function' && (x as ElementClassConstructor)[jsxClassSymbol] === true;
}

// ONLY TSC-DEFINED JSX NAMES AFTER THIS POINT.

/**
 * Specify the props types of intrinsic elements (For example, <div> is an intrinsic element of HTML).
 *
 * Leaving this defined as `{}` would mean no intrinsic elements are allowed.
 *
 * Leaving a constituent object empty means that no props are allowed on that element type.
 */
export type IntrinsicElements = {
  div: {
    extra?: string;
    wow?: number;
    children?: Element | Element[];
    // children?: VNode<string>; //Element | Element[];
  };
  p: {};
};

/** Any JSX expression is an Element. */
export type Element = VNode<string> | VNode<ElementClassConstructor> | VNode<ElementFunction> | string;

/**
 * The instance type that JSX class elements need to satisfy.
 */
export type ElementClass = {
  render(): Element;
};

/**
 * The attributes that should be required on every class element.
 */
export type IntrinsicClassAttributes = {
  // [typeof jsxClassSymbol]: true;
};

/**
 * These seem to apply to both class element attributes and function element attributes.
*/
export type IntrinsicAttributes = {};

// type ElementChildrenAttribute = string;
export interface ElementChildrenAttribute {
  children: Element | Element[];
}

export type LibraryManagedAttributes = {
  wow: false;
};