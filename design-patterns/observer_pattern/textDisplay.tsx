import { useEffect, useState } from "react";
import { counter } from "./counterManager";

export function TextDisplay() {
  const [text, setText] = useState(counter.value);

  useEffect(() => {
    const update = () => setText(counter.value);
    counter.subscribe(update);
    return () => counter.unsubscribe(update);
  }, []);

  return <p>Sayım: {text}</p>;
}
