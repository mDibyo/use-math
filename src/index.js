import { useEffect } from 'react';
import renderMathInElement from 'katex/contrib/auto-render/auto-render';

import 'katex/dist/katex.css';

function useMath(elementRef) {
  function renderMath() {
    renderMathInElement(elementRef.current);
  }

  useEffect(renderMath);
}

export default useMath;
