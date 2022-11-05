declare global {
  namespace JSX {
    interface NodeElement {
      // [dataNode]: true;
    }

    type ContainerType = {
      type: 'container';
      props: {};
      children?: JSX.Element[];
    };

    interface IntrinsicInstance<S extends string> {
      type: S;
      props: {};
      children?: JSX.Element[];
    }

    type SMap = { [key: string]: IntrinsicInstance<string> };

    interface IntrinsicDescriptors extends SMap {
      container: ContainerType;
    }

    /**
     * An Element is something that any JSX element must be assignable to.
     * 
     * This includes the `type`, `props`, and `children`
     */
    type Element = IntrinsicInstance<'div'>;
    // interface Element extends NodeCtor<any> {}
    // type Element = ContainerType;
    // interface Element extends NodeElement<any> {}
    interface ElementClass extends NodeElement {}

    // interface ElementClass<P=any> {
    //   [dataNode]: true;
    //   // new (props: P): any;
    // }
    
    // type Element = DataNode;
    // type ElementClass = any;
    // interface ElementClass<P> {
    //   new (props: P): DataNode;
    // }

    // Leaving this commented means that the class constructor props type will be used.
    // interface ElementAttributesProperty {
    //   props: any;
    //   // test: number;
    // }

    /**
     * Specify the props types of intrinsic elements (For example, <div> is an intrinsic element of HTML).
     */
    type IntrinsicElements = {
      div: {},
    };
    type IntrinsicAttributes<T> = { wat: 24 };
    // interface IntrinsicClassAttributes {
      // props: {
        // test: number;
      // };
    // }

    interface ElementChildrenAttribute {
      children: Element[];
    }
  }
}

export {};
