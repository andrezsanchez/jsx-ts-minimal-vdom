import { VNode, ElementFunction, ElementClass, jsxClassSymbol, ElementClassConstructor, isElementClassConstructor } from './jsx.js';

function h(
  type: string,
  prop: {},
  ...children: JSX.Element[]
): VNode<string>;

function h(
  type: ElementFunction,
  prop: {},
  ...children: JSX.Element[]
): VNode<ElementFunction>;

function h(
  type: ElementFunction,
  prop: {},
  ...children: JSX.Element[]
): VNode<ElementClass>;

function h(
  type: unknown,
  props: {},
  ...children: JSX.Element[]
): VNode<unknown> {
  return {
    type,
    props,
    children,
  };
}

function instantiateDOM(jsxElement: JSX.Element | string): HTMLElement | Text {
  // If it's a string then this is a text node.
  if (typeof jsxElement === 'string') {
    return document.createTextNode(jsxElement);
  }

  // Check for class and function components.
  if (typeof jsxElement.type === 'function') {
    // Check if it's a class component.
    if (isElementClassConstructor(jsxElement.type)) {
      const childJsxElement = new jsxElement.type(jsxElement.props, jsxElement.children);
      return instantiateDOM(childJsxElement.render());
    }
    // Otherwise this is a function component.
    const childJsxElement = jsxElement.type(jsxElement.props, jsxElement.children);
    return instantiateDOM(childJsxElement);
  }

  // The only option left is instrinsic elements.

  const element = document.createElement(jsxElement.type);

  const children = (jsxElement.children ?? []).map(jsxChild => instantiateDOM(jsxChild));
  element.append(...children);
  
  return element;
}

function render(element: JSX.Element, container: HTMLElement) {
  container.appendChild(instantiateDOM(element));
}

const body = document.getElementsByTagName('body')[0];
function Wow(props: { message: string }): JSX.Element {
  return <div>{ props.message }</div>;
}

class Yay  {
  static readonly [jsxClassSymbol] = true;
  asdf = 4;
  render(): JSX.Element {
    return 'YAYAYAY';
  }
}

const c = <Wow message="afsd"/>;

const stuff = (
  <div>
    <div><Yay /></div>
    <div />
    <div>
      <div wow={5}>
        <div>
          <div>
            <div extra="asdf">{ c }</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>
              Hmm
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div></div>
      what
      <div />
    </div>
  </div>
);

render(stuff, body);
