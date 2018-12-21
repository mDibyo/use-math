# useMath

React hook for auto-rendering math content in the specified react node.

![screenshot](https://user-images.githubusercontent.com/4902438/50361018-9e82cf80-057b-11e9-98f6-0581b0d5d9dd.png)


```jsx
function MathDiv({ children }) {
  const ref = React.createRef();
  useMath(ref);

  return <div ref={ref}>{children}</div>;
}

ReactDOM.render(
  <MathDiv>{"Math here: $$x = \\frac{1}{2}$$"}</MathDiv>,
  document.getElementById('root'),
);
```

### Usage

```bash
npm install use-math
```

Then import
```js
import useMath from 'use-math';
```

## Introduction

Under the hood, `useMath` uses [KaTeX](https://github.com/KaTeX/KaTeX) to render the math content.
