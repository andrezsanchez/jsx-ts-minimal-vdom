function h<T extends keyof JSX.IntrinsicElements>(
  type: T,
  props: {},
  ...children: JSX.Element[]
): JSX.IntrinsicInstance<T> {
  return {
    type,
    props,
    children,
  };
}

function instantiateDOM(jsxElement: JSX.Element | string): HTMLDivElement | Text {
  if (typeof jsxElement === 'string') {
    return document.createTextNode(jsxElement);
  }
  const element = document.createElement(jsxElement.type);

  const children = (jsxElement.children ?? []).map(jsxChild => instantiateDOM(jsxChild));
  element.append(...children);
  
  return element;
}

function render(element: JSX.Element, container: HTMLElement) {
  container.appendChild(instantiateDOM(element));
}

const body = document.getElementsByTagName('body')[0];

const stuff = (
  <div>
    <div />
    <div />
    <div>
      <div></div>
      what
      <div />
    </div>
  </div>
);

render(stuff, body);
