# Minimal Virtual DOM

This is a minimal virtual DOM implementation using JSX in TypeScript. There is no re-rendering.

The purpose of this was for myself to get more familiar with the JSX types. I was frustrated that
every implementation of the JSX typings (namely in React, Preact) had extra things that weren't
required. I found the list of JSX names that TSC references in the TypeScript source code.

There is basically no documentation on what those types are used for, so I am trying them here to
gain a better understanding of what each of them is.

JSX types:
```
IntrinsicElements
ElementClass
ElementAttributesProperty (deprecated)
ElementChildrenAttribute
Element
IntrinsicAttributes
IntrinsicClassAttributes
LibraryManagedAttributes
```
