import { c, useState } from 'atomico';

export const Counter = c(
  () => {
    const [count, setCount] = useState<number>(0);
    const decriment = () => setCount((current) => current > 0 ? count - 1 : 0);
    const increment = () => setCount(count + 1);

    return (
      <host>
        <button onclick={decriment}>-</button>{count}<button onclick={increment}>+</button>
      </host>
    )
  });

customElements.define("atomico-counter", Counter);

