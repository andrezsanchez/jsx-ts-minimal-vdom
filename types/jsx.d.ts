import {
  IntrinsicAttributes,
  IntrinsicElements,
  Element,
  ElementClass,
  IntrinsicClassAttributes,
  ElementChildrenAttribute,
  LibraryManagedAttributes,
} from '../src/jsx';
declare global {
  namespace JSX {
    // TSC references the following names in JSX:
    // IntrinsicElements
    // ElementClass
    // ElementAttributesProperty (deprecated)
    // ElementChildrenAttribute
    // Element
    // IntrinsicAttributes
    // IntrinsicClassAttributes
    // LibraryManagedAttributes

    // TODO: export all of the above here
    export {
      IntrinsicElements,
      IntrinsicAttributes,
      Element,
      ElementClass,
      IntrinsicClassAttributes,
      ElementChildrenAttribute,
      LibraryManagedAttributes,
    };
  }
}
