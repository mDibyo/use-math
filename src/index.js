import { useEffect } from 'react';
import renderMathInElement from 'katex/dist/contrib/auto-render';

import 'katex/dist/katex.css';

function useMath(elementRef) {
  function renderMath() {
    renderMathInElement(elementRef.current);
  }

  useEffect(renderMath);
}

export default useMath;
