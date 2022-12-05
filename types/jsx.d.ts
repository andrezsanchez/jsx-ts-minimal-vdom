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
    // TSC references only the following names in JSX:
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
