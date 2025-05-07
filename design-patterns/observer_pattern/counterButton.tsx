import { counter } from "./counterManager";

export function CounterButton() {
  return <button onClick={() => counter.increment()}>+1</button>;
}
